/**
 * Thin client for api.openparliament.ca, Canada's open parliamentary data
 * project. No auth required. All responses are cached via Next's fetch
 * revalidation since historical votes never change and the MP roster only
 * changes on byelections/reshuffles.
 */

const API_BASE = "https://api.openparliament.ca";
const USER_AGENT = "CivicsStudio ParliamentTracker (civicsstudio@gmail.com)";

const ONE_DAY = 60 * 60 * 24;
const ONE_MONTH = ONE_DAY * 30;

interface Pagination {
  offset: number;
  limit: number;
  next_url: string | null;
  previous_url: string | null;
}

interface PaginatedResponse<T> {
  objects: T[];
  pagination: Pagination;
}

// Global concurrency limiter for openparliament requests.
//
// A cold MP-profile render fans out ~18 requests at once (12 recent-vote
// details + the ballots list + ~6 cited-vote details). openparliament (behind
// Cloudflare) rate-limits *concurrency* aggressively: firing 12 requests at
// once returns mostly 429s, and even 2 in parallel get connection-reset, while
// fully serial requests succeed 100% of the time. Because getVoteDetail/
// getMPBallots swallow a failed fetch into `null`, each dropped request silently
// removed a real vote from the server-rendered HTML — which is exactly why a
// plain refresh (warm data cache, no live burst) appeared to "fix" it.
//
// So we serialize: one live request in flight at a time. Cache hits resolve
// instantly and release immediately, so warm renders pay no penalty; only the
// first cold render pays the (one-time, then cached) serial cost.
const MAX_CONCURRENT = 1;
let activeRequests = 0;
const pending: Array<() => void> = [];

function acquireSlot(): Promise<void> {
  if (activeRequests < MAX_CONCURRENT) {
    activeRequests++;
    return Promise.resolve();
  }
  // Blocked: wait for a release() to hand us its slot (activeRequests unchanged).
  return new Promise<void>((resolve) => pending.push(resolve));
}

function releaseSlot(): void {
  const next = pending.shift();
  if (next) {
    next(); // pass the slot straight to the next waiter; count stays the same
  } else {
    activeRequests--;
  }
}

async function fetchJSON<T>(path: string, revalidateSeconds: number): Promise<T> {
  const url = `${API_BASE}${path}${path.includes("?") ? "&" : "?"}format=json`;

  // Retry transient failures (429/5xx and network blips) with jittered backoff;
  // never retry a genuine 4xx like a 404 (the resource simply isn't there).
  const MAX_ATTEMPTS = 4;
  let lastError: unknown;
  for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
    let retryable = false;
    await acquireSlot();
    try {
      const res = await fetch(url, {
        headers: { "User-Agent": USER_AGENT },
        next: { revalidate: revalidateSeconds },
      });
      if (res.ok) {
        return (await res.json()) as T;
      }
      retryable = res.status === 429 || res.status >= 500;
      lastError = new Error(`openparliament request failed (${res.status}): ${url}`);
    } catch (err) {
      // Network/DNS/timeout errors are transient — worth another attempt.
      retryable = true;
      lastError = err;
    } finally {
      releaseSlot();
    }
    if (!retryable || attempt === MAX_ATTEMPTS) throw lastError;
    // Jittered backoff (~500/1000/1500ms + up to 300ms). A 429 here means the
    // (shared, on Vercel) egress IP is genuinely throttled, so give it room.
    await new Promise((resolve) =>
      setTimeout(resolve, attempt * 500 + Math.random() * 300)
    );
  }
  throw lastError ?? new Error(`openparliament request failed: ${url}`);
}

function slugFromUrl(url: string): string {
  const parts = url.split("/").filter(Boolean);
  return parts[parts.length - 1];
}

const IMAGE_OVERRIDES: Record<string, string> = {
  "doly-begum": "https://upload.wikimedia.org/wikipedia/commons/e/ec/Doly_Begum_MS_2023.jpg",
};

export function getMPImageUrl(image: string | null): string {
  if (!image) return "";
  if (image.startsWith("http://") || image.startsWith("https://")) {
    return image;
  }
  return `https://openparliament.ca${image}`;
}

// ─── MP roster ────────────────────────────────────────────────────

export interface MPListing {
  slug: string;
  name: string;
  party: string;
  province: string;
  riding: string;
  image: string | null;
}

interface RawPoliticianListing {
  name: string;
  url: string;
  current_party?: { short_name: { en: string } } | null;
  current_riding?: { name: { en: string }; province: string } | null;
  image?: string | null;
}

export async function getMPRoster(): Promise<MPListing[]> {
  const data = await fetchJSON<PaginatedResponse<RawPoliticianListing>>(
    "/politicians/?limit=400",
    ONE_DAY
  );
  return data.objects.map((p) => {
    const slug = slugFromUrl(p.url);
    return {
      slug,
      name: p.name,
      party: p.current_party?.short_name.en ?? "Independent",
      province: p.current_riding?.province ?? "",
      riding: p.current_riding?.name.en ?? "",
      image: IMAGE_OVERRIDES[slug] || p.image || null,
    };
  });
}

// ─── MP detail ────────────────────────────────────────────────────

export interface PartyMembership {
  startDate: string;
  endDate: string | null;
  party: string;
  riding: string;
  province: string;
}

export interface MPDetail {
  slug: string;
  name: string;
  givenName: string;
  familyName: string;
  email: string | null;
  image: string | null;
  currentParty: string | null;
  currentRiding: { name: string; province: string } | null;
  memberships: PartyMembership[];
}

interface RawPoliticianDetail {
  name: string;
  given_name: string;
  family_name: string;
  email?: string | null;
  image?: string | null;
  memberships: Array<{
    start_date: string;
    end_date: string | null;
    party?: { short_name: { en: string } } | null;
    riding?: { name: { en: string }; province: string } | null;
  }>;
}

export async function getMPDetail(slug: string): Promise<MPDetail | null> {
  try {
    const data = await fetchJSON<RawPoliticianDetail>(`/politicians/${slug}/`, ONE_DAY);
    const current =
      data.memberships.find((m) => m.end_date === null) ?? data.memberships[0];

    return {
      slug,
      name: data.name,
      givenName: data.given_name,
      familyName: data.family_name,
      email: data.email ?? null,
      image: IMAGE_OVERRIDES[slug] || data.image || null,
      currentParty: current?.party?.short_name.en ?? null,
      currentRiding: current?.riding
        ? { name: current.riding.name.en, province: current.riding.province }
        : null,
      memberships: data.memberships.map((m) => ({
        startDate: m.start_date,
        endDate: m.end_date,
        party: m.party?.short_name.en ?? "",
        riding: m.riding?.name.en ?? "",
        province: m.riding?.province ?? "",
      })),
    };
  } catch {
    return null;
  }
}

// ─── Votes + whip alignment ───────────────────────────────────────

export interface PartyVote {
  party: string;
  vote: string;
  /** Fraction (0-1) of that party's caucus that dissented from this position. */
  disagreement: number;
}

export interface VoteDetail {
  session: string;
  number: number;
  date: string;
  description: string;
  result: string;
  yeaTotal: number;
  nayTotal: number;
  pairedTotal: number;
  billUrl: string | null;
  partyVotes: PartyVote[];
}

interface RawVoteDetail {
  session: string;
  number: number;
  date: string;
  description: { en: string };
  result: string;
  yea_total: number;
  nay_total: number;
  paired_total: number;
  bill_url: string | null;
  party_votes: Array<{
    vote: string;
    disagreement: number;
    party: { short_name: { en: string } };
  }>;
}

export async function getVoteDetail(
  session: string,
  number: number
): Promise<VoteDetail | null> {
  try {
    const data = await fetchJSON<RawVoteDetail>(`/votes/${session}/${number}/`, ONE_MONTH);
    return {
      session: data.session,
      number: data.number,
      date: data.date,
      description: data.description.en,
      result: data.result,
      yeaTotal: data.yea_total,
      nayTotal: data.nay_total,
      pairedTotal: data.paired_total,
      billUrl: data.bill_url ?? null,
      partyVotes: data.party_votes.map((pv) => ({
        party: pv.party.short_name.en,
        vote: pv.vote,
        disagreement: pv.disagreement,
      })),
    };
  } catch {
    return null;
  }
}

interface RawBallot {
  vote_url: string;
  ballot: string;
}

interface Ballot {
  session: string;
  number: number;
  ballot: string;
}

async function getMPBallots(slug: string, limit: number): Promise<Ballot[]> {
  const data = await fetchJSON<PaginatedResponse<RawBallot>>(
    `/votes/ballots/?politician=${slug}&limit=${limit}`,
    ONE_DAY
  );
  return data.objects.map((b) => {
    const parts = b.vote_url.split("/").filter(Boolean); // ["votes", "45-1", "173"]
    return { session: parts[1], number: Number(parts[2]), ballot: b.ballot };
  });
}

export type WhipAlignment = "with_party" | "against_party" | "no_clear_party_position";

export function getWhipAlignment(
  mpBallot: string,
  vote: VoteDetail,
  mpParty: string
): WhipAlignment {
  const partyPosition = vote.partyVotes.find((pv) => pv.party === mpParty);
  if (!partyPosition) return "no_clear_party_position";
  if (mpBallot !== "Yes" && mpBallot !== "No") return "no_clear_party_position";
  return mpBallot === partyPosition.vote ? "with_party" : "against_party";
}

export interface VotingRecordEntry {
  vote: VoteDetail;
  ballot: string;
  alignment: WhipAlignment;
}

/** Most recent votes cast by an MP, each flagged for whether they broke with their party's stated position. */
export async function getMPVotingRecord(
  slug: string,
  party: string,
  limit = 12
): Promise<VotingRecordEntry[]> {
  const ballots = await getMPBallots(slug, limit);
  const votes = await Promise.all(
    ballots.map((b) => getVoteDetail(b.session, b.number))
  );

  const entries: VotingRecordEntry[] = [];
  ballots.forEach((b, i) => {
    const vote = votes[i];
    if (!vote) return;
    entries.push({ vote, ballot: b.ballot, alignment: getWhipAlignment(b.ballot, vote, party) });
  });

  return entries.sort((a, b) => b.vote.date.localeCompare(a.vote.date));
}
