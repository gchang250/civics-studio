import type { Metadata } from "next";
import Link from "next/link";
import { getMPRoster } from "@/lib/openparliament";
import { getProfileSlugs } from "@/lib/mpProfiles";
import MPDirectory from "./MPDirectory";
import Comments from "@/app/components/Comments";

const TOTAL_SEATS = 343;

export const metadata: Metadata = {
  title: "Parliament Tracker",
  description:
    "Track how Canada's 343 MPs actually vote, using Parliament's own open data, including whether their ballots line up with their party's official position.",
};

export default async function ParliamentTrackerPage() {
  const [mps, profiledSlugs] = await Promise.all([
    getMPRoster(),
    Promise.resolve(getProfileSlugs()),
  ]);

  return (
    <div>
      {/* Hero */}
      <section className="border-b border-[#D8D0C3] bg-[#FAF7F0]">
        <div className="mx-auto max-w-7xl px-5 py-14 md:py-18">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#C9A94B]">
            Data project · Flagship
          </p>

          <h1 className="serif mt-4 max-w-4xl text-5xl font-bold leading-tight tracking-[-0.035em] text-[#1C3557] md:text-6xl">
            Parliament Tracker
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-[#5E5A54]">
            Canada elects 343 members of Parliament, but party discipline and
            whip pressure often collapse those voices into a handful of
            positions. This tracker pulls MPs, ridings, and real vote records
            directly from Parliament&apos;s own open data so you can see how
            each MP actually votes — and how often that lines up with their
            own party&apos;s official position.
          </p>

          <div className="mt-8 grid max-w-2xl gap-4 sm:grid-cols-3">
            <div className="border-l-4 border-[#C9A94B] bg-white p-4 shadow-sm">
              <p className="serif text-2xl font-bold text-[#1C3557]">
                {mps.length} of {TOTAL_SEATS}
              </p>
              <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#5E5A54]">
                Seats tracked live
              </p>
            </div>
            <div className="border-l-4 border-[#C9A94B] bg-white p-4 shadow-sm">
              <p className="serif text-2xl font-bold text-[#1C3557]">
                {profiledSlugs.length}
              </p>
              <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#5E5A54]">
                Full researched profiles
              </p>
            </div>
            <div className="border-l-4 border-[#C9A94B] bg-white p-4 shadow-sm">
              <p className="serif text-2xl font-bold text-[#1C3557]">Live</p>
              <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#5E5A54]">
                Voting records, all MPs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How to read it */}
      <section className="border-b border-[#D8D0C3] bg-[#1C3557]">
        <div className="mx-auto max-w-7xl px-5 py-10">
          <div className="grid gap-8 md:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#C9A94B]">
                How it works
              </p>
              <h2 className="serif mt-2 text-2xl font-bold tracking-[-0.02em] text-white">
                Real data, honest gaps.
              </h2>
            </div>
            <div className="space-y-3 text-base leading-7 text-white/60">
              <p>
                Every MP&apos;s riding, party, and recent votes come straight
                from Parliament&apos;s open data — including each party&apos;s
                official position on a given vote, which lets us flag when an
                individual MP&apos;s ballot broke from their own whip.
              </p>
              <p>
                Researching what all 343 MPs actually campaigned on is a large,
                ongoing task. Rather than guess, we&apos;ve written full,
                sourced campaign-platform profiles for a pilot set of MPs
                (marked &quot;Full profile&quot; below) and are expanding that
                set over time. Every other MP still gets a real, live voting
                record — just without the platform comparison yet.
              </p>
              <p className="text-sm text-white/40">
                Note: only {mps.length} of {TOTAL_SEATS} seats have a sitting
                MP right now — North Vancouver–Capilano and
                Saint-Hyacinthe–Bagot–Acton are both vacant pending
                byelections, per Elections Canada.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Directory */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-12">
          <MPDirectory mps={mps} profiledSlugs={profiledSlugs} />
        </div>
      </section>

      <section className="bg-[#FAF7F0]">
        <div className="mx-auto max-w-7xl px-5 py-12">
          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[#1C3557] pt-8">
            <p className="max-w-2xl text-lg leading-8 text-[#5E5A54]">
              Curious how party structures shape Parliament? Read the full
              mission behind this project.
            </p>
            <Link
              href="/mission"
              className="inline-block border border-[#1C3557] px-6 py-3 text-center text-sm font-bold uppercase tracking-[0.08em] text-[#1C3557] transition hover:bg-[#1C3557] hover:text-white"
            >
              Read the mission
            </Link>
          </div>
        </div>
      </section>

      <Comments pageId="parliament-tracker" />
    </div>
  );
}
