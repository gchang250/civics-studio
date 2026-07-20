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
    <div className="bg-ink">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-edge bg-ink-2">
        <div className="glow-maple pointer-events-none absolute -top-[20%] left-[8%] h-[70vh] w-[70vh]" />
        <div className="relative mx-auto max-w-7xl px-5 py-14 md:py-18">
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-maple lowercase">
            Data project
          </p>

          <h1 className="serif mt-4 max-w-4xl text-5xl font-normal italic leading-tight tracking-[-0.02em] text-cream md:text-6xl lowercase">
            Parliament Tracker
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-mist">
            Canada elects 343 members of Parliament, but party discipline and
            whip pressure often collapse those voices into a handful of
            positions. This tracker pulls MPs, ridings, and real vote records
            directly from Parliament&apos;s own open data so you can see how
            each MP actually votes, and how often that lines up with their
            own party&apos;s official position.
          </p>

          <div className="mt-8 grid max-w-2xl gap-4 sm:grid-cols-3">
            <div className="card-hover border border-edge bg-panel p-4">
              <p className="serif text-2xl font-normal italic text-cream lowercase">
                {mps.length} of {TOTAL_SEATS}
              </p>
              <p className="text-[10px] font-semibold uppercase tracking-[0.08em] text-maple lowercase">
                Seats tracked live
              </p>
            </div>
            <div className="card-hover border border-edge bg-panel p-4">
              <p className="serif text-2xl font-normal italic text-cream lowercase">
                {profiledSlugs.length}
              </p>
              <p className="text-[10px] font-semibold uppercase tracking-[0.08em] text-maple lowercase">
                Full researched profiles
              </p>
            </div>
            <div className="card-hover border border-edge bg-panel p-4">
              <p className="serif text-2xl font-normal italic text-cream lowercase">Live</p>
              <p className="text-[10px] font-semibold uppercase tracking-[0.08em] text-maple lowercase">
                Voting records, all MPs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why this exists */}
      <section className="border-b border-edge bg-ink">
        <div className="mx-auto max-w-5xl px-5 pt-16 text-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-maple lowercase">
            Why this exists
          </p>
          <h2 className="serif mt-4 text-[clamp(1.8rem,4vw,2.8rem)] font-normal italic leading-tight text-cream lowercase">
            A party label shouldn&apos;t outvote the promise an MP got elected on.
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-mist">
            Every one of Canada&apos;s 343 MPs was elected by a specific riding,
            on specific promises. The moment they&apos;re sworn in, party
            structures push hard to compress that individual mandate into one
            of five boxes. Toe the line and you keep your committee seat, your
            shot at cabinet, your place on the next ballot. Break from it and
            you can lose all three. None of that pressure has anything to do
            with what&apos;s actually best for the people who elected you.
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-6 px-5 py-16 md:grid-cols-3">
          <div className="card-hover border border-edge bg-panel p-6">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-maple lowercase">
              The pressure
            </p>
            <h3 className="serif mt-3 text-xl font-normal italic text-cream lowercase">
              Whip pressure
            </h3>
            <p className="mt-3 text-sm leading-6 text-mist">
              <span className="font-semibold text-cream">A party whip is an MP</span>{" "}
              whose job is to enforce how the rest of caucus votes. They track attendance, count votes before they happen, and enforce discipline with real consequences: lose your committee seat, your shot at cabinet, or your nomination next election.
            </p>
          </div>
          <div className="card-hover border border-edge bg-panel p-6">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-maple lowercase">
              The influence
            </p>
            <h3 className="serif mt-3 text-xl font-normal italic text-cream lowercase">
              Lobbying &amp; outside pressure
            </h3>
            <p className="mt-3 text-sm leading-6 text-mist">
              Donors, lobbyists, and party leadership can all pull a vote
              toward what serves them, not constituents, and a party label
              alone can never show you when that&apos;s happened.
            </p>
          </div>
          <div className="card-hover border border-edge bg-panel p-6">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-maple lowercase">
              The check
            </p>
            <h3 className="serif mt-3 text-xl font-normal italic text-cream lowercase">
              What we track instead
            </h3>
            <p className="mt-3 text-sm leading-6 text-mist">
              Not just whether an MP voted with their party, but whether they
              voted the way they told their own constituents they would. When
              those two answers diverge, that&apos;s the moment worth your
              attention.
            </p>
          </div>
        </div>
      </section>

      {/* How to read it */}
      <section className="relative overflow-hidden border-b border-edge bg-ink-2">
        <div className="glow-maple pointer-events-none absolute right-[6%] top-[-30%] h-[60vh] w-[60vh] opacity-70" />
        <div className="relative mx-auto max-w-7xl px-5 py-14">
          <div className="grid gap-8 md:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-maple lowercase">
                How it works
              </p>
              <h2 className="serif mt-2 text-2xl font-normal italic text-cream lowercase">
                Real data, honest gaps.
              </h2>
            </div>
            <div className="space-y-3 text-base leading-7 text-mist">
              <p>
                Every MP&apos;s riding, party, and recent votes come straight
                from Parliament&apos;s open data, including each party&apos;s
                official position on a given vote, which lets us flag when an
                individual MP&apos;s ballot broke from their own whip.
              </p>
              <p>
                Researching what all 343 MPs actually campaigned on is a large,
                ongoing task. Rather than guess, we&apos;ve written full,
                sourced campaign-platform profiles for a pilot set of MPs
                (marked <span className="text-maple">&quot;Full profile&quot;</span> below) and are expanding that
                set over time. Every other MP still gets a real, live voting
                record, just without the platform comparison yet.
              </p>
              <p className="text-sm text-mist-dim">
                Note: only {mps.length} of {TOTAL_SEATS} seats have a sitting
                MP right now. North Vancouver–Capilano and
                Saint-Hyacinthe–Bagot–Acton are both vacant pending
                byelections, per Elections Canada.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Directory */}
      <section className="bg-ink">
        <div className="mx-auto max-w-7xl px-5 py-12">
          <MPDirectory mps={mps} profiledSlugs={profiledSlugs} />
        </div>
      </section>

      <section className="bg-ink">
        <div className="mx-auto max-w-7xl px-5 py-12">
          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-edge pt-8">
            <p className="max-w-2xl text-lg leading-8 text-mist">
              Curious how party structures shape Parliament? Read the full
              mission behind this project.
            </p>
            <Link
              href="/mission"
              className="inline-block bg-maple px-6 py-3 text-center text-sm font-bold uppercase tracking-[0.08em] text-ink transition hover:shadow-[0_0_30px_-4px_rgba(249,85,61,0.6)]"
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
