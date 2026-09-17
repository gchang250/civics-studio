import type { Metadata } from "next";
import Link from "next/link";
import { getMPRoster, getSessionVoteCatalog, type CatalogVote } from "@/lib/openparliament";
import { getProfileSlugs } from "@/lib/mpProfiles";
import MPDirectory from "./MPDirectory";
import Comments from "@/app/components/Comments";
import DownloadLink from "@/app/components/DownloadLink";
import PageHeader from "@/app/components/PageHeader";
import Section from "@/app/components/Section";

const TOTAL_SEATS = 343;
const SESSION = "45-1";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Parliament Tracker",
  description:
    "Every recorded vote of Canada's 45th Parliament, MP by MP, from Parliament's own open data, including when a member voted against their own party.",
};

export default async function ParliamentTrackerPage() {
  const [mps, votes, profiledSlugs] = await Promise.all([
    getMPRoster(),
    getSessionVoteCatalog(SESSION).catch((): CatalogVote[] => []),
    Promise.resolve(getProfileSlugs()),
  ]);

  const vacant = TOTAL_SEATS - mps.length;

  return (
    <div>
      <PageHeader
        title="Parliament Tracker"
        lede="Every recorded vote of the current session, ballot by ballot, for every sitting member, pulled straight from Parliament's own open data. Where a party took an official position, we flag the MPs whose ballot broke from it."
      >
        <DownloadLink
          href="/projects/parliament-tracker/dataset"
          file="parliament-votes-45-1.csv"
          className="cta cta-invert"
        >
          Download every vote (CSV)
        </DownloadLink>
      </PageHeader>

      {/* Live figures as a plain summary row. No bordered stat cards. */}
      <section className="bg-paper-2">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <dl className="grid gap-x-10 gap-y-7 sm:grid-cols-3">
            <div>
              <dt className="small text-muted">Sitting members tracked</dt>
              <dd className="num mt-1 text-3xl font-semibold" style={{ fontFamily: "var(--font-display), Georgia, serif" }}>
                {mps.length}
                <span className="text-muted"> / {TOTAL_SEATS}</span>
              </dd>
            </div>
            {votes.length > 0 && (
              <div>
                <dt className="small text-muted">
                  Recorded votes, session {SESSION}
                </dt>
                <dd className="num mt-1 text-3xl font-semibold" style={{ fontFamily: "var(--font-display), Georgia, serif" }}>
                  {votes.length}
                </dd>
              </div>
            )}
            <div>
              <dt className="small text-muted">
                Sourced campaign-platform profiles
              </dt>
              <dd className="num mt-1 text-3xl font-semibold" style={{ fontFamily: "var(--font-display), Georgia, serif" }}>
                {profiledSlugs.length}
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <Section title="What a party label can't show you.">
        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr] lg:gap-20">
          <div className="copy space-y-4">
            <p>
              Every one of Canada&apos;s 343 MPs was elected by a specific
              riding, on specific promises. The moment they&apos;re sworn in,
              party structures push to compress that mandate into one of five
              positions. Toe the line and you keep your committee seat and
              your place on the next ballot. Break from it and you can lose
              both.
            </p>
            <p>
              A party whip is an MP whose job is to enforce how the rest of
              caucus votes, counting the numbers before a vote happens and
              holding people to the result. Donors and party leadership add
              their own pull. None of that shows up in a party label.
            </p>
            <p>
              So the tracker records two things. First, whether an MP voted
              with their party. Second, for the MPs we&apos;ve researched,
              whether they voted the way they told their own constituents they
              would. When those answers diverge, that&apos;s the moment worth
              your attention.
            </p>
          </div>

          <div className="lg:pt-1">
            <h3 className="h3">Where the data comes from</h3>
            <p className="copy mt-2 text-[1rem]">
              Everything here comes from{" "}
              <a
                href="https://openparliament.ca"
                target="_blank"
                rel="noreferrer"
                className="link"
              >
                openparliament.ca
              </a>
              , which republishes the House of Commons&apos; own open data. We
              add no estimates and no modelling.
            </p>

            <h3 className="h3 mt-7">Honest gaps</h3>
            <p className="copy mt-2 text-[1rem]">
              Researching what all 343 MPs campaigned on is a large, ongoing
              task, so platform profiles exist for{" "}
              <span className="num">{profiledSlugs.length}</span> MPs so far
              (marked <span className="font-semibold">Full profile</span>{" "}
              below). Every other MP still gets a real, live voting record,
              without the platform comparison for now.
            </p>
            {vacant > 0 && (
              <p className="small mt-4 text-muted">
                <span className="num">{mps.length}</span> of {TOTAL_SEATS}{" "}
                seats currently have a sitting member;{" "}
                <span className="num">{vacant}</span> are vacant pending
                byelections, per Elections Canada.
              </p>
            )}
          </div>
        </div>
      </Section>

      <Section title="Download the full dataset" tone="paper-2">
        <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr] lg:gap-20">
          <p className="copy">
            Every recorded vote of session {SESSION} as a single CSV,{" "}
            rebuilt hourly from Parliament&apos;s open data: session, vote number,
            date, bill, description, result, and the yea / nay / paired
            tallies. Free to use for any purpose with attribution to
            openparliament.ca.
          </p>
          <div className="lg:pt-1">
            <DownloadLink
              href="/projects/parliament-tracker/dataset"
              file="parliament-votes-45-1.csv"
              className="cta"
            >
              {votes.length > 0
                ? `Download ${votes.length} votes (CSV)`
                : "Download CSV"}
            </DownloadLink>
          </div>
        </div>
      </Section>

      <Section title="Look up a member">
        <MPDirectory mps={mps} profiledSlugs={profiledSlugs} />
      </Section>

      <Section tone="paper-2">
        <div className="max-w-2xl">
          <h2 className="h2">
            Curious why we built this?
          </h2>
          <p className="copy mt-5">
            The tracker exists so anyone can check the record without taking
            our word for it. The mission page explains the reasoning in full.
          </p>
          <div className="mt-8">
            <Link href="/mission" className="cta">
              Read the mission
            </Link>
          </div>
        </div>
      </Section>

      <Comments pageId="parliament-tracker" />
    </div>
  );
}
