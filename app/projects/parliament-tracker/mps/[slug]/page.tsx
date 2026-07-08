import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getMPDetail, getMPVotingRecord, type WhipAlignment } from "@/lib/openparliament";
import { getProfile, hasProfile } from "@/lib/mpProfiles";
import { partyColor } from "@/lib/partyStyles";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const mp = await getMPDetail(slug);
  if (!mp) return {};
  return {
    title: `${mp.name} — Parliament Tracker`,
    description: `Voting record and profile for ${mp.name}, ${mp.currentParty ?? "MP"}${
      mp.currentRiding ? ` for ${mp.currentRiding.name}` : ""
    }.`,
  };
}

const alignmentStyles: Record<WhipAlignment, { label: string; className: string }> = {
  with_party: {
    label: "Voted with party",
    className: "bg-[#F3EEE4] text-[#5E5A54]",
  },
  against_party: {
    label: "Broke with party",
    className: "bg-[#C8102E] text-white",
  },
  no_clear_party_position: {
    label: "No clear party position",
    className: "bg-white text-[#5E5A54] ring-1 ring-inset ring-[#D8D0C3]",
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

  const colors = partyColor(mp.currentParty ?? "Independent");
  const withParty = votingRecord.filter((v) => v.alignment === "with_party").length;
  const againstParty = votingRecord.filter((v) => v.alignment === "against_party").length;

  return (
    <div>
      <section className="border-b border-[#D8D0C3] bg-[#FAF7F0]">
        <div className="mx-auto max-w-5xl px-5 py-14">
          <Link
            href="/projects/parliament-tracker"
            className="text-sm font-bold uppercase tracking-[0.08em] text-[#C9A94B] hover:underline"
          >
            ← Parliament Tracker
          </Link>

          <div className="mt-8 flex flex-wrap items-start gap-6">
            <div className="relative h-28 w-28 shrink-0 overflow-hidden bg-[#F3EEE4]">
              {mp.image ? (
                <Image
                  src={`https://openparliament.ca${mp.image}`}
                  alt={mp.name}
                  fill
                  className="object-cover"
                  sizes="112px"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-3xl font-bold text-[#1C3557]/30">
                  {mp.name
                    .split(" ")
                    .map((n) => n[0])
                    .slice(0, 2)
                    .join("")}
                </div>
              )}
            </div>

            <div className="min-w-0 flex-1">
              <h1 className="serif text-4xl font-bold leading-tight tracking-[-0.03em] text-[#1C3557] md:text-5xl">
                {mp.name}
              </h1>
              <p className="mt-2 text-lg text-[#5E5A54]">
                {mp.currentRiding ? `${mp.currentRiding.name}, ${mp.currentRiding.province}` : "Riding unavailable"}
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-2">
                <span
                  className="px-2.5 py-1 text-xs font-bold uppercase tracking-[0.08em]"
                  style={{ backgroundColor: colors.bg, color: colors.text }}
                >
                  {mp.currentParty ?? "Independent"}
                </span>
                {profile && (
                  <span className="px-2.5 py-1 text-xs font-bold uppercase tracking-[0.08em] text-[#8B7335] ring-1 ring-inset ring-[#C9A94B]">
                    Full profile
                  </span>
                )}
                {mp.email && (
                  <a
                    href={`mailto:${mp.email}`}
                    className="text-xs font-bold uppercase tracking-[0.08em] text-[#1C3557] hover:text-[#C9A94B]"
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
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-5 py-12">
          <div className="mb-6 border-b border-[#1C3557] pb-4">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#C9A94B]">
              Voting record
            </p>
            <h2 className="serif mt-2 text-3xl font-bold tracking-[-0.02em] text-[#1C3557]">
              Most recent recorded votes
            </h2>
          </div>

          {votingRecord.length > 0 && (
            <div className="mb-8 grid gap-4 sm:grid-cols-2">
              <div className="border-l-4 border-[#1C3557] bg-[#FAF7F0] p-4">
                <p className="serif text-2xl font-bold text-[#1C3557]">
                  {withParty} / {votingRecord.length}
                </p>
                <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#5E5A54]">
                  Votes with the party line
                </p>
              </div>
              <div className="border-l-4 border-[#C8102E] bg-[#FAF7F0] p-4">
                <p className="serif text-2xl font-bold text-[#1C3557]">{againstParty}</p>
                <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#5E5A54]">
                  Votes against the party line
                </p>
              </div>
            </div>
          )}

          {votingRecord.length === 0 ? (
            <p className="text-[#5E5A54]">No recorded votes found for this MP yet.</p>
          ) : (
            <div className="divide-y divide-[#D8D0C3]">
              {votingRecord.map((entry) => {
                const style = alignmentStyles[entry.alignment];
                return (
                  <div key={`${entry.vote.session}-${entry.vote.number}`} className="py-5">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#5E5A54]">
                        {new Date(entry.vote.date).toLocaleDateString("en-CA", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                        {" · "}Vote #{entry.vote.number} ({entry.vote.session})
                      </p>
                      <span className={`px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.08em] ${style.className}`}>
                        {style.label}
                      </span>
                    </div>
                    <p className="mt-2 leading-6 text-[#1C3557]">{entry.vote.description}</p>
                    <p className="mt-1 text-sm text-[#5E5A54]">
                      Ballot: <span className="font-bold">{entry.ballot}</span> · Result: {entry.vote.result}
                    </p>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Campaign platform / profile */}
      <section className="border-t border-[#D8D0C3] bg-[#F3EEE4]">
        <div className="mx-auto max-w-5xl px-5 py-12">
          <div className="mb-6 border-b border-[#1C3557] pb-4">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#C9A94B]">
              Campaign platform
            </p>
            <h2 className="serif mt-2 text-3xl font-bold tracking-[-0.02em] text-[#1C3557]">
              What they ran on
            </h2>
          </div>

          {profile ? (
            <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#5E5A54]">
                  Key promises
                </p>
                <ul className="mt-3 space-y-2">
                  {profile.keyPromises.map((promise, i) => (
                    <li key={i} className="flex gap-2 text-sm leading-6 text-[#1C3557]">
                      <span className="text-[#C9A94B]">—</span>
                      {promise}
                    </li>
                  ))}
                </ul>

                <p className="mt-6 text-xs font-bold uppercase tracking-[0.08em] text-[#5E5A54]">
                  Sources
                </p>
                <ul className="mt-2 space-y-1">
                  {profile.sources.map((s) => (
                    <li key={s.url}>
                      <a
                        href={s.url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm text-[#1C3557] underline decoration-[#D8D0C3] hover:text-[#C9A94B]"
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
          ) : (
            <div className="bg-white p-8 text-center shadow-sm">
              <p className="text-[#5E5A54]">
                A full, sourced campaign-platform profile for {mp.name} hasn&apos;t been
                researched yet. Their voting record above is still real, live data — this
                pilot set is expanding over time.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
