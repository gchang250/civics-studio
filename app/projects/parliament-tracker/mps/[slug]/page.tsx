import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getMPDetail, getMPVotingRecord, getVoteDetail, getMPImageUrl, type WhipAlignment } from "@/lib/openparliament";
import { getProfile, hasProfile, ALIGNMENT_LABELS, alignmentPct } from "@/lib/mpProfiles";
import { partyColor } from "@/lib/partyStyles";
import Comments from "@/app/components/Comments";
import Section from "@/app/components/Section";

interface Props {
  params: Promise<{ slug: string }>;
}

// Render this route as ISR rather than on demand.
//
// A cold profile render fans out ~19 openparliament requests, and they run
// strictly one at a time (see MAX_CONCURRENT in lib/openparliament.ts, where the
// serialization is what stops throttled requests from silently dropping votes
// off the page). Serially that is ~6s, which every visitor paid whenever the
// data cache was cold, because the route was server-rendered per request.
//
// With a route-level revalidate the page is cached and served instantly, and
// once it goes stale Next serves the stale copy while regenerating in the
// background, so nobody waits on the 6s path except the very first request
// for an MP who has never been rendered. Deliberately no generateStaticParams:
// prerendering all 339 MPs at build time would serialize the same fan-out
// across the whole roster. Must be a literal, since `60 * 60` is not statically
// analyzable and would be ignored.
export const revalidate = 3600;

// Empty on purpose. Do NOT prerender the roster here.
//
// `next build` generates pages across 7 parallel workers, and each worker is a
// separate process with its own copy of the MAX_CONCURRENT limiter in
// lib/openparliament.ts. Prerendering therefore puts ~7 concurrent requests on
// openparliament, which is precisely what that limiter exists to prevent:
// building the 89 profiled MPs failed with `openparliament request failed
// (429)` even after the retry/backoff budget was exhausted.
//
// Returning no params still opts the route into the static/ISR path rather
// than plain on-demand rendering. With the default `dynamicParams: true` each
// MP is generated on first request and then cached and revalidated like any
// other ISR page, so exactly one visitor per MP per revalidate window pays the
// cold-render cost, and never with a concurrent request in flight.
export function generateStaticParams(): { slug: string }[] {
  return [];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const mp = await getMPDetail(slug);
  if (!mp) return {};
  return {
    title: mp.name,
    description: `Voting record and profile for ${mp.name}, ${mp.currentParty ?? "MP"}${
      mp.currentRiding ? ` for ${mp.currentRiding.name}` : ""
    }.`,
  };
}

/**
 * openparliament returns vote dates as bare calendar dates ("2026-06-18").
 * `new Date("2026-06-18")` parses that as UTC midnight, so rendering it in any
 * timezone west of Greenwich shows the previous day. Every vote on the tracker
 * was dated one day early. Format the parts directly instead of round-tripping
 * through a timestamp.
 */
function formatVoteDate(isoDate: string): string {
  const [year, month, day] = isoDate.split("-").map(Number);
  return new Date(year, month - 1, day).toLocaleDateString("en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/**
 * Alignment is carried by the words plus a single accent, not by three
 * differently coloured pills. Only "broke with party" gets the accent, since
 * that is the case actually worth a reader's attention.
 */
const ALIGNMENT_TEXT: Record<WhipAlignment, { label: string; accent: boolean }> = {
  with_party: { label: "Voted with party", accent: false },
  against_party: { label: "Broke with party", accent: true },
  no_clear_party_position: { label: "No clear party position", accent: false },
};

export default async function MPProfilePage({ params }: Props) {
  const { slug } = await params;
  const mp = await getMPDetail(slug);
  if (!mp) notFound();

  const [votingRecord, profile] = await Promise.all([
    getMPVotingRecord(slug, mp.currentParty ?? "", 12),
    hasProfile(slug) ? getProfile(slug) : Promise.resolve(null),
  ]);

  const alignmentVotes = profile
    ? await Promise.all(
        profile.platformAlignment.map((entry) =>
          getVoteDetail(entry.voteSession, entry.voteNumber)
        )
      )
    : [];

  const dot = partyColor(mp.currentParty ?? "Independent");
  const isIndependent = mp.currentParty === "Independent" || !mp.currentParty;
  const withParty = votingRecord.filter((v) => v.alignment === "with_party").length;
  const againstParty = votingRecord.filter((v) => v.alignment === "against_party").length;

  return (
    <div>
      <header className="bg-ink-2 text-paper">
        <div className="mx-auto max-w-6xl px-6 pb-14 pt-10">
          <Link href="/projects/parliament-tracker" className="cta cta-invert">
            All members
          </Link>

          <div className="mt-9 flex flex-wrap items-center gap-6">
            <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-full bg-ink">
              {mp.image ? (
                <Image
                  src={getMPImageUrl(mp.image)}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="96px"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-2xl text-muted-ink">
                  {mp.name
                    .split(" ")
                    .map((n) => n[0])
                    .slice(0, 2)
                    .join("")}
                </div>
              )}
            </div>

            <div className="min-w-0 flex-1">
              <h1 className="display-sm">{mp.name}</h1>
              <p className="lede mt-3 text-muted-ink">
                {mp.currentRiding
                  ? `${mp.currentRiding.name}, ${mp.currentRiding.province}`
                  : "Riding unavailable"}
              </p>
              <p className="small mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-muted-ink">
                <span className="flex items-center gap-2">
                  <span
                    className="h-2 w-2 rounded-full"
                    style={{ backgroundColor: dot }}
                    aria-hidden
                  />
                  {mp.currentParty ?? "Independent"}
                </span>
                {profile && <span>Full profile</span>}
                {mp.email && (
                  <a
                    href={`mailto:${mp.email}`}
                    className="link text-paper"
                    style={{ textDecorationColor: "var(--color-red-bright)" }}
                  >
                    {mp.email}
                  </a>
                )}
              </p>
            </div>
          </div>
        </div>
      </header>

      <Section title="Most recent recorded votes">
        {votingRecord.length > 0 && (
          <dl className="mb-10 grid gap-8 sm:grid-cols-2">
            <div>
              <dt className="small text-muted">Votes with the party line</dt>
              <dd
                className="num mt-1 text-3xl font-semibold"
                style={{ fontFamily: "var(--font-display), Georgia, serif" }}
              >
                {isIndependent ? "n/a" : `${withParty} of ${votingRecord.length}`}
              </dd>
            </div>
            <div>
              <dt className="small text-muted">Votes against the party line</dt>
              <dd
                className="num mt-1 text-3xl font-semibold"
                style={{ fontFamily: "var(--font-display), Georgia, serif" }}
              >
                {isIndependent ? "n/a" : againstParty}
              </dd>
            </div>
          </dl>
        )}

        {votingRecord.length === 0 ? (
          <p className="copy">No recorded votes found for this MP yet.</p>
        ) : (
          <ul>
            {votingRecord.map((entry) => {
              const alignment = ALIGNMENT_TEXT[entry.alignment];
              const partyPosition = entry.vote.partyVotes.find(
                (pv) => pv.party === mp.currentParty
              );
              const dissentPct = partyPosition
                ? Math.round(partyPosition.disagreement * 100)
                : 0;
              return (
                <li
                  key={`${entry.vote.session}-${entry.vote.number}`}
                  className="py-5"
                  style={{ boxShadow: "inset 0 -1px 0 rgba(35,32,28,0.12)" }}
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <p className="small num text-muted">
                      {formatVoteDate(entry.vote.date)} · Vote #
                      {entry.vote.number} ({entry.vote.session})
                    </p>
                    <p
                      className={`small ${
                        !isIndependent && alignment.accent
                          ? "font-semibold text-red"
                          : "text-muted"
                      }`}
                    >
                      {isIndependent ? "n/a" : alignment.label}
                    </p>
                  </div>
                  <p className="mt-2 text-[1.0625rem] leading-relaxed">
                    {entry.vote.description}
                  </p>
                  <p className="small mt-1.5 text-muted">
                    Ballot:{" "}
                    <span className="font-semibold text-ink">{entry.ballot}</span>{" "}
                    · Result: {entry.vote.result}
                  </p>
                  {!isIndependent && dissentPct > 0 && (
                    <p className="small num mt-1.5 text-muted">
                      {entry.alignment === "against_party"
                        ? `${dissentPct}% of the ${mp.currentParty} caucus also broke ranks on this vote. This wasn't a lone dissent.`
                        : `${dissentPct}% of the ${mp.currentParty} caucus voted differently on this one, even though this MP stuck with the party line.`}
                    </p>
                  )}
                </li>
              );
            })}
          </ul>
        )}
      </Section>

      <Section title="What they ran on" tone="paper-2">
        {profile ? (
          <>
            {/* 42/58. The promise list is a sidebar to the written profile. */}
            <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
              <div>
                <h3 className="h3">Key promises</h3>
                <ul className="mt-3 space-y-2">
                  {profile.keyPromises.map((promise, i) => (
                    <li key={i} className="copy flex gap-2.5 text-[1rem]">
                      <span className="text-red" aria-hidden>
                        •
                      </span>
                      <span>{promise}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="h3 mt-8">Sources</h3>
                <ul className="mt-3 space-y-1.5">
                  {profile.sources.map((s) => (
                    <li key={s.url}>
                      <a
                        href={s.url}
                        target="_blank"
                        rel="noreferrer"
                        className="link text-[1rem]"
                      >
                        {s.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className="article-body"
                dangerouslySetInnerHTML={{ __html: profile.contentHtml }}
              />
            </div>

            {profile.platformAlignment.length > 0 && (
              <div className="mt-14">
                <h3 className="h2">How their votes measure up</h3>
                <ul className="mt-7">
                  {profile.platformAlignment.map((entry, i) => {
                    const vote = alignmentVotes[i];
                    const pct = alignmentPct(entry.rating);
                    return (
                      <li
                        key={i}
                        className="py-6"
                        style={{ boxShadow: "inset 0 -1px 0 rgba(35,32,28,0.12)" }}
                      >
                        <p className="text-[1.0625rem] font-medium">
                          {entry.promise}
                        </p>

                        {/* Contradicted → fulfilled. One flat track, one
                            marker; the reading is spelled out underneath, so
                            position is never the only cue. */}
                        <div className="mt-4 max-w-md">
                          <div
                            className="relative h-[3px] w-full"
                            style={{ background: "rgba(35,32,28,0.15)" }}
                          >
                            {/* The marker is 14px wide, so travel its centre
                                from 7px to (100% - 7px), since a raw `${pct}%`
                                would hang half of it past each end. */}
                            <div
                              className="absolute top-1/2 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red"
                              style={{ left: `calc(7px + (100% - 14px) * ${pct / 100})` }}
                            />
                          </div>
                          <div className="small mt-2.5 flex justify-between text-muted">
                            <span>Contradicted</span>
                            <span>Fulfilled</span>
                          </div>
                        </div>

                        <p className="mt-4 text-[1rem] font-semibold text-red">
                          {ALIGNMENT_LABELS[entry.rating]}
                        </p>
                        <p className="copy mt-1.5 text-[1rem]">
                          {entry.explanation}
                        </p>

                        {vote && (
                          <p className="small num mt-3 text-muted">
                            Vote #{vote.number} ({vote.session}),{" "}
                            {formatVoteDate(vote.date)}: {vote.description} ·
                            Result: {vote.result}
                          </p>
                        )}
                      </li>
                    );
                  })}
                </ul>
                <p className="small mt-5 text-muted">
                  Civics Studio&apos;s editorial judgment, based on the
                  MP&apos;s own stated platform and their actual recorded
                  vote. We don&apos;t use the MP&apos;s or the party&apos;s own
                  characterization of it.
                </p>
              </div>
            )}
          </>
        ) : (
          <p className="copy">
            A full, sourced campaign-platform profile for {mp.name} hasn&apos;t
            been researched yet. Their voting record above is still real, live
            data. This pilot set is expanding over time.
          </p>
        )}
      </Section>

      <Comments pageId="mp-profile" />
    </div>
  );
}
