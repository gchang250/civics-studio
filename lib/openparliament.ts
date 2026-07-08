/**
 * Thin client for api.openparliament.ca — Canada's open parliamentary data
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

async function fetchJSON<T>(path: string, revalidateSeconds: number): Promise<T> {
  const url = `${API_BASE}${path}${path.includes("?") ? "&" : "?"}format=json`;
  const res = await fetch(url, {
    headers: { "User-Agent": USER_AGENT },
    next: { revalidate: revalidateSeconds },
  });
  if (!res.ok) {
    throw new Error(`openparliament request failed (${res.status}): ${url}`);
  }
  return res.json() as Promise<T>;
}

function slugFromUrl(url: string): string {
  const parts = url.split("/").filter(Boolean);
  return parts[parts.length - 1];
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
  return data.objects.map((p) => ({
    slug: slugFromUrl(p.url),
    name: p.name,
    party: p.current_party?.short_name.en ?? "Independent",
    province: p.current_riding?.province ?? "",
    riding: p.current_riding?.name.en ?? "",
    image: p.image ?? null,
  }));
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
      image: data.image ?? null,
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
