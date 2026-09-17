import Link from "next/link";
import { getMPRoster, getSessionVoteCatalog, type CatalogVote, type MPListing } from "@/lib/openparliament";
import { partyColor } from "@/lib/partyStyles";
import ProjectList from "@/app/components/ProjectList";

// Both fetches below are a single cached openparliament request each, but make
// the page ISR anyway so no visitor ever waits on them.
export const revalidate = 3600;

const SESSION = "45-1";

/** Vote dates arrive as bare calendar strings. `new Date("2026-06-18")` parses
 *  as UTC midnight and renders a day early west of Greenwich. */
function formatVoteDate(isoDate: string): string {
  const [y, m, d] = isoDate.split("-").map(Number);
  return new Date(y, m - 1, d).toLocaleDateString("en-CA", {
    month: "short",
    day: "numeric",
  });
}

function seatsByParty(mps: MPListing[]): { party: string; seats: number }[] {
  const counts = new Map<string, number>();
  for (const mp of mps) counts.set(mp.party, (counts.get(mp.party) ?? 0) + 1);
  return [...counts.entries()]
    .map(([party, seats]) => ({ party, seats }))
    .sort((a, b) => b.seats - a.seats);
}

export default async function HomePage() {
  // The home page must never 500 because open data is briefly unreachable.
  // On failure we omit the figures. We never print a placeholder number.
  const [votes, mps] = await Promise.all([
    getSessionVoteCatalog(SESSION).catch((): CatalogVote[] => []),
    getMPRoster().catch((): MPListing[] => []),
  ]);

  const latestVotes = votes.slice(0, 5);
  const seats = seatsByParty(mps);
  const totalSeats = mps.length;

  return (
    <div>
      {/* Opening. Continuous with the espresso masthead above it, so the
          boundary is a change of ground colour rather than a rule. */}
      <section className="bg-ink-2 text-paper">
        <div className="mx-auto max-w-6xl px-6 pb-20 pt-16 md:pb-28 md:pt-20">
          {/* 58/42. Deliberately not halves, and not three columns. */}
          <div className="grid gap-14 lg:grid-cols-[1.38fr_1fr] lg:gap-20">
            <div>
              <h1 className="display">
                See how your MP actually voted. Including the times they broke
                from their own party.
              </h1>

              <p className="lede mt-8 text-muted-ink">
                Civics Studio publishes{" "}
                {votes.length > 0 ? (
                  <span className="num font-semibold text-paper">
                    all {votes.length} recorded votes
                  </span>
                ) : (
                  <span className="font-semibold text-paper">
                    every recorded vote
                  </span>
                )}{" "}
                of Canada&apos;s 45th Parliament, ballot by ballot, for{" "}
                {totalSeats > 0 ? (
                  <span className="num font-semibold text-paper">
                    all {totalSeats} sitting members
                  </span>
                ) : (
                  <span className="font-semibold text-paper">
                    every sitting member
                  </span>
                )}
                . It comes straight from Parliament&apos;s own open data and you
                can download the whole thing as a CSV. No account, no paywall.
              </p>

              <div className="mt-10 flex flex-wrap items-baseline gap-x-10 gap-y-4">
                <Link href="/projects/parliament-tracker" className="cta cta-invert">
                  Find your MP
                </Link>
                <a
                  href="/projects/parliament-tracker/dataset"
                  className="cta cta-invert"
                >
                  Download every vote (CSV)
                </a>
              </div>
            </div>

            {/* Show the actual latest ballots. A stock photo of Parliament
                would tell the reader nothing they can check. */}
            {latestVotes.length > 0 && (
              <div className="lg:pt-3">
                <h2 className="text-[0.9375rem] font-semibold">
                  Latest recorded votes, session {SESSION}
                </h2>
                <ul className="mt-5">
                  {latestVotes.map((vote) => {
                    const passed = vote.result.toLowerCase().startsWith("pass");
                    return (
                      <li
                        key={vote.number}
                        className="py-3.5 first:pt-0"
                        style={{ boxShadow: "inset 0 -1px 0 rgba(244,240,229,0.12)" }}
                      >
                        <div className="small num flex items-baseline justify-between gap-4 text-muted-ink">
                          <span>
                            #{vote.number} · {formatVoteDate(vote.date)}
                          </span>
                          <span
                            className={passed ? "text-paper" : "text-red-bright"}
                          >
                            {vote.result}
                          </span>
                        </div>
                        <p className="mt-1 line-clamp-2 text-[0.9375rem] leading-snug">
                          {vote.description}
                        </p>
                        <p className="small num mt-1 text-muted-ink">
                          {vote.yeaTotal} yea · {vote.nayTotal} nay
                        </p>
                      </li>
                    );
                  })}
                </ul>
                <a
                  href="/projects/parliament-tracker/dataset"
                  className="link small mt-4 inline-block text-paper"
                  style={{ textDecorationColor: "var(--color-red-bright)" }}
                >
                  All {votes.length} votes as CSV
                </a>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Lead project, given real estate instead of an equal card */}
      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <div className="grid gap-14 lg:grid-cols-[1.5fr_1fr] lg:gap-20">
            <div>
              <p className="small font-semibold text-red">Parliament Tracker</p>
              <h2 className="h2 mt-3">What a party label can&apos;t show you.</h2>
              <div className="copy mt-6 space-y-4">
                <p>
                  The tracker pulls each MP&apos;s ballots from
                  Parliament&apos;s open data, along with the official position
                  their party took on that vote. Comparing the two shows you
                  the moments an MP went against their own whip.
                </p>
                <p>
                  For a pilot set of MPs we&apos;ve also written sourced
                  profiles of what they campaigned on, so you can hold the
                  promise up against the record. The rest still have a full
                  live voting record, without the platform comparison for now.
                </p>
              </div>
              <div className="mt-8">
                <Link href="/projects/parliament-tracker" className="cta">
                  Open the tracker
                </Link>
              </div>
            </div>

            {/* Live seat counts, drawn as plain bars. Real figures from the
                roster, no donut chart and no abstract 3-D shape. */}
            {seats.length > 0 && (
              <div className="lg:pt-10">
                <h3 className="text-[0.9375rem] font-semibold">
                  The House right now
                </h3>
                <p className="small mt-1 text-muted">
                  {totalSeats} sitting members
                </p>
                <ul className="mt-5 space-y-3">
                  {seats.map(({ party, seats: count }) => (
                    <li key={party}>
                      <div className="small flex items-baseline justify-between gap-3">
                        <span>{party}</span>
                        <span className="num text-muted">{count}</span>
                      </div>
                      <div
                        className="mt-1.5 h-[6px]"
                        style={{ background: "rgba(35,32,28,0.1)" }}
                      >
                        <div
                          className="h-full"
                          style={{
                            width: `${(count / totalSeats) * 100}%`,
                            background: partyColor(party),
                          }}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Everything else. Deeper cream band, and the colour change is the
          only separator. */}
      <section className="bg-paper-2">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <h2 className="h2 max-w-xl">Three more projects.</h2>
          <div className="mt-12">
            <ProjectList exclude="/projects/parliament-tracker" />
          </div>
        </div>
      </section>

      {/* Position. Large type on cream, no box and no quote marks. */}
      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <div className="max-w-3xl">
            <h2 className="display-sm">Where Civics Studio stands.</h2>
            <p className="copy mt-7">
              Canada elects 343 members of Parliament. Party discipline
              routinely collapses those voices into a handful of positions. We
              support no party and no ideology. What we do care about is
              independent representation: MPs having room to represent the
              people who elected them, and those people being able to check
              the record for themselves.
            </p>
            <div className="mt-9">
              <Link href="/mission" className="cta">
                Read the full mission
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
