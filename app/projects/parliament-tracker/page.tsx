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
  title: "Members of Parliament",
  description:
    "Look up any of Canada's sitting MPs and read their recorded votes, straight from Parliament's own open data.",
};

export default async function MembersPage() {
  const [mps, votes, profiledSlugs] = await Promise.all([
    getMPRoster(),
    getSessionVoteCatalog(SESSION).catch((): CatalogVote[] => []),
    Promise.resolve(getProfileSlugs()),
  ]);

  const vacant = TOTAL_SEATS - mps.length;

  // Count only profiles belonging to a currently sitting member. Nine profiles
  // cover members of the 44th Parliament, and the directory below cannot link
  // to them, so including them in this figure would overstate the coverage a
  // reader can actually browse.
  const profiledSet = new Set(profiledSlugs);
  const profiledSitting = mps.filter((m) => profiledSet.has(m.slug)).length;

  return (
    <div>
      <PageHeader
        title="Members of Parliament"
        lede="Every recorded vote of the current session, ballot by ballot, for every sitting member. Where a party took an official position, we flag the members whose ballot broke from it."
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
              <dd
                className="num mt-1 text-3xl font-semibold"
                style={{ fontFamily: "var(--font-display), Georgia, serif" }}
              >
                {mps.length}
                <span className="text-muted"> / {TOTAL_SEATS}</span>
              </dd>
            </div>
            {votes.length > 0 && (
              <div>
                <dt className="small text-muted">
                  Recorded votes, session {SESSION}
                </dt>
                <dd
                  className="num mt-1 text-3xl font-semibold"
                  style={{ fontFamily: "var(--font-display), Georgia, serif" }}
                >
                  {votes.length}
                </dd>
              </div>
            )}
            <div>
              <dt className="small text-muted">
                Members with a sourced profile
              </dt>
              <dd
                className="num mt-1 text-3xl font-semibold"
                style={{ fontFamily: "var(--font-display), Georgia, serif" }}
              >
                {profiledSitting}
                <span className="text-muted"> / {mps.length}</span>
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <Section title="Where the data comes from">
        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr] lg:gap-20">
          <div className="copy space-y-4">
            <p>
              Ridings, ballots, and each party&apos;s official position on a
              vote all come from{" "}
              <a
                href="https://openparliament.ca"
                target="_blank"
                rel="noreferrer"
                className="link"
              >
                openparliament.ca
              </a>
              , which republishes the House of Commons&apos; own open data. We
              add no estimates and no modelling. The site reads that data
              directly, so new votes appear here on their own.
            </p>
            <p>
              Researching what all 343 members campaigned on is a large,
              ongoing task, so sourced platform profiles exist for{" "}
              <span className="num">{profiledSitting}</span> sitting members so
              far, marked <span className="font-semibold">Full profile</span>{" "}
              below. Every other member still has a real voting record, without
              the platform comparison for now.
            </p>
          </div>

          <div className="lg:pt-1">
            <h3 className="h3">The full dataset</h3>
            <p className="copy mt-2 text-[1rem]">
              Every recorded vote of session {SESSION} as one CSV, rebuilt
              hourly: session, vote number, date, bill, description, result,
              and the yea / nay / paired tallies. Free to use for any purpose
              with attribution to openparliament.ca.
            </p>
            <div className="mt-6">
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
            {vacant > 0 && (
              <p className="small mt-6 text-muted">
                <span className="num">{mps.length}</span> of {TOTAL_SEATS}{" "}
                seats currently have a sitting member;{" "}
                <span className="num">{vacant}</span> are vacant pending
                byelections, per Elections Canada.
              </p>
            )}
          </div>
        </div>
      </Section>

      <Section title="Look up a member" tone="paper-2">
        <MPDirectory mps={mps} profiledSlugs={profiledSlugs} />
      </Section>

      <Section>
        <div className="max-w-2xl">
          <h2 className="h2">Why we publish this</h2>
          <p className="copy mt-5">
            A vote you can look up settles an argument that a party label never
            will. The mission page explains the reasoning in full.
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
