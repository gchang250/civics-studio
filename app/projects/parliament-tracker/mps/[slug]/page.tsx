import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getMPDetail, getMPVotingRecord, getVoteDetail, type WhipAlignment } from "@/lib/openparliament";
import { getProfile, hasProfile, ALIGNMENT_LABELS, alignmentPct } from "@/lib/mpProfiles";
import { partyColor } from "@/lib/partyStyles";
import Comments from "@/app/components/Comments";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const mp = await getMPDetail(slug);
  if (!mp) return {};
  return {
    title: `${mp.name} | Parliament Tracker`,
    description: `Voting record and profile for ${mp.name}, ${mp.currentParty ?? "MP"}${
      mp.currentRiding ? ` for ${mp.currentRiding.name}` : ""
    }.`,
  };
}

const alignmentStyles: Record<WhipAlignment, { label: string; className: string }> = {
  with_party: {
    label: "Voted with party",
    className: "bg-[#f3efe6] text-[#5f697a]",
  },
  against_party: {
    label: "Broke with party",
    className: "bg-[#8b1e1e] text-white",
  },
  no_clear_party_position: {
    label: "No clear party position",
    className: "bg-[#faf8f5] text-[#5f697a] ring-1 ring-inset ring-[#e5e0d4]",
  },
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

  const colors = partyColor(mp.currentParty ?? "Independent");
  const withParty = votingRecord.filter((v) => v.alignment === "with_party").length;
  const againstParty = votingRecord.filter((v) => v.alignment === "against_party").length;

  return (
    <div className="bg-[#faf8f5]">
      <section className="border-b border-[#e5e0d4] bg-[#f3efe6]">
        <div className="mx-auto max-w-5xl px-5 py-14">
          <Link
            href="/projects/parliament-tracker"
            className="text-xs font-semibold uppercase tracking-[0.08em] text-[#8b1e1e] hover:underline lowercase"
          >
            ← Parliament Tracker
          </Link>

          <div className="mt-8 flex flex-wrap items-start gap-6">
            <div className="relative h-28 w-28 shrink-0 overflow-hidden bg-[#faf8f5] border border-[#e5e0d4]">
              {mp.image ? (
                <Image
                  src={`https://openparliament.ca${mp.image}`}
                  alt={mp.name}
                  fill
                  className="object-cover"
                  sizes="112px"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-3xl font-bold text-[#111f36]/30">
                  {mp.name
                    .split(" ")
                    .map((n) => n[0])
                    .slice(0, 2)
                    .join("")}
                </div>
              )}
            </div>

            <div className="min-w-0 flex-1">
              <h1 className="serif text-4xl font-normal italic leading-tight tracking-[-0.02em] text-[#111f36] md:text-5xl lowercase">
                {mp.name}
              </h1>
              <p className="mt-2 text-lg text-[#5f697a]">
                {mp.currentRiding ? `${mp.currentRiding.name}, ${mp.currentRiding.province}` : "Riding unavailable"}
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-2">
                <span
                  className="px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.08em]"
                  style={{ backgroundColor: colors.bg, color: colors.text }}
                >
                  {mp.currentParty ?? "Independent"}
                </span>
                {profile && (
                  <span className="px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-[#8b1e1e] ring-1 ring-inset ring-[#8b1e1e]/30">
                    Full profile
                  </span>
                )}
                {mp.email && (
                  <a
                    href={`mailto:${mp.email}`}
                    className="text-xs font-semibold uppercase tracking-[0.08em] text-[#111f36] hover:text-[#8b1e1e] lowercase"
                  >
                    {mp.email}
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Voting record */}
      <section className="bg-[#faf8f5]">
        <div className="mx-auto max-w-5xl px-5 py-12">
          <div className="mb-6 border-b border-[#e5e0d4] pb-4">
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#8b1e1e] lowercase">
              Voting record
            </p>
            <h2 className="serif mt-2 text-3xl font-normal italic tracking-[-0.01em] text-[#111f36] lowercase">
              Most recent recorded votes
            </h2>
          </div>

          {votingRecord.length > 0 && (
            <div className="mb-8 grid gap-4 sm:grid-cols-2">
              <div className="border border-[#e5e0d4] bg-[#f3efe6] p-4">
                <p className="serif text-2xl font-normal italic text-[#111f36] lowercase">
                  {withParty} / {votingRecord.length}
                </p>
                <p className="text-[10px] font-semibold uppercase tracking-[0.08em] text-[#8b1e1e] lowercase">
                  Votes with the party line
                </p>
              </div>
              <div className="border border-[#e5e0d4] bg-[#f3efe6] p-4">
                <p className="serif text-2xl font-normal italic text-[#111f36] lowercase">{againstParty}</p>
                <p className="text-[10px] font-semibold uppercase tracking-[0.08em] text-[#8b1e1e] lowercase">
                  Votes against the party line
                </p>
              </div>
            </div>
          )}

          {votingRecord.length === 0 ? (
            <p className="text-[#5f697a] lowercase">No recorded votes found for this MP yet.</p>
          ) : (
            <div className="divide-y divide-[#e5e0d4]">
              {votingRecord.map((entry) => {
                const style = alignmentStyles[entry.alignment];
                const partyPosition = entry.vote.partyVotes.find(
                  (pv) => pv.party === mp.currentParty
                );
                const dissentPct = partyPosition
                  ? Math.round(partyPosition.disagreement * 100)
                  : 0;
                return (
                  <div key={`${entry.vote.session}-${entry.vote.number}`} className="py-5">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#5f697a] lowercase">
                        {new Date(entry.vote.date).toLocaleDateString("en-CA", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                        {" · "}Vote #{entry.vote.number} ({entry.vote.session})
                      </p>
                      <span className={`px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.08em] ${style.className}`}>
                        {style.label}
                      </span>
                    </div>
                    <p className="mt-2 leading-6 text-[#111f36]">{entry.vote.description}</p>
                    <p className="mt-1 text-sm text-[#5f697a]">
                      Ballot: <span className="font-semibold">{entry.ballot}</span> · Result: {entry.vote.result}
                    </p>
                    {dissentPct > 0 && (
                      <p className="mt-1 text-xs italic text-[#5f697a]">
                        {entry.alignment === "against_party"
                          ? `${dissentPct}% of the ${mp.currentParty} caucus also broke ranks on this vote. This wasn't a lone dissent.`
                          : `${dissentPct}% of the ${mp.currentParty} caucus voted differently on this one, even though this MP stuck with the party line.`}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Campaign platform / profile */}
      <section className="border-t border-[#e5e0d4] bg-[#f3efe6]">
        <div className="mx-auto max-w-5xl px-5 py-12">
          <div className="mb-6 border-b border-[#e5e0d4] pb-4">
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#8b1e1e] lowercase">
              Campaign platform
            </p>
            <h2 className="serif mt-2 text-3xl font-normal italic tracking-[-0.01em] text-[#111f36] lowercase">
              What they ran on
            </h2>
          </div>

          {profile ? (
            <>
              <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr]">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.08em] text-[#8b1e1e] lowercase">
                    Key promises
                  </p>
                  <ul className="mt-3 space-y-2">
                    {profile.keyPromises.map((promise, i) => (
                      <li key={i} className="flex gap-2 text-sm leading-6 text-[#111f36]">
                        <span className="text-[#8b1e1e]">•</span>
                        {promise}
                      </li>
                    ))}
                  </ul>

                  <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.08em] text-[#8b1e1e] lowercase">
                    Sources
                  </p>
                  <ul className="mt-2 space-y-1">
                    {profile.sources.map((s) => (
                      <li key={s.url}>
                        <a
                          href={s.url}
                          target="_blank"
                          rel="noreferrer"
                          className="text-sm text-[#111f36] underline decoration-[#e5e0d4] hover:text-[#8b1e1e]"
                        >
                          {s.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div
                  className="article-body text-[#111f36]"
                  dangerouslySetInnerHTML={{ __html: profile.contentHtml }}
                />
              </div>

              {profile.platformAlignment.length > 0 && (
                <div className="mt-10 border-t border-[#e5e0d4] pt-8">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.08em] text-[#8b1e1e] lowercase">
                    How their votes measure up
                  </p>
                  <div className="mt-5 space-y-6">
                    {profile.platformAlignment.map((entry, i) => {
                      const vote = alignmentVotes[i];
                      const pct = alignmentPct(entry.rating);
                      return (
                        <div key={i} className="border border-[#e5e0d4] bg-[#faf8f5] p-5">
                          <p className="text-sm font-semibold text-[#111f36]">{entry.promise}</p>

                          <div className="relative mt-4 h-2 w-full max-w-md rounded-full bg-gradient-to-r from-[#8b1e1e] via-[#e5e0d4] to-emerald-600">
                            <div
                              className="absolute top-1/2 h-5 w-5 -translate-y-1/2 -translate-x-1/2 rounded-full border-4 border-white bg-[#111f36] shadow-sm"
                              style={{ left: `${pct}%` }}
                            />
                          </div>
                          <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.08em] text-[#8b1e1e] lowercase">
                            {ALIGNMENT_LABELS[entry.rating]}
                          </p>

                          <p className="mt-3 text-sm leading-6 text-[#5f697a]">{entry.explanation}</p>

                          {vote && (
                            <p className="mt-3 text-xs text-[#5f697a]">
                              Vote #{vote.number} ({vote.session}),{" "}
                              {new Date(vote.date).toLocaleDateString("en-CA", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              })}
                              {": "}
                              {vote.description} · Result: {vote.result}
                            </p>
                          )}
                        </div>
                      );
                    })}
                  </div>
                  <p className="mt-4 text-xs italic text-[#5f697a] lowercase">
                    Civics Studio&apos;s editorial judgment, based on the MP&apos;s own stated
                    platform and their actual recorded vote, not the MP&apos;s or party&apos;s
                    characterization.
                  </p>
                </div>
              )}
            </>
          ) : (
            <div className="border border-[#e5e0d4] bg-[#faf8f5] p-8 text-center">
              <p className="text-[#5f697a]">
                A full, sourced campaign-platform profile for {mp.name} hasn&apos;t been
                researched yet. Their voting record above is still real, live data. This
                pilot set is expanding over time.
              </p>
            </div>
          )}
        </div>
      </section>
      <Comments pageId="mp-profile" />
    </div>
  );
}
