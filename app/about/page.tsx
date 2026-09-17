import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/app/components/PageHeader";
import Section from "@/app/components/Section";

export const metadata: Metadata = {
  title: "About",
  description:
    "Civics Studio is a youth-led civic education project building free data projects, games, and learning resources.",
};

export default function AboutPage() {
  return (
    <div>
      <PageHeader
        title="A youth-led civic education project."
        lede="We build free data projects and games that make politics and government easier to check for yourself."
      >
        <a href="mailto:civicsstudio@gmail.com" className="cta cta-invert">
          civicsstudio@gmail.com
        </a>
      </PageHeader>

      <Section title="What we do">
        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr] lg:gap-20">
          <div className="copy space-y-4">
            <p>
              Canada&apos;s House of Commons has 343 elected members. Party
              discipline routinely collapses those voices into a handful of
              effective positions. Civics Studio was built to turn that
              collapse into something you can look up and verify.
            </p>
            <p>
              The Parliament Tracker publishes every recorded vote of the
              current session, MP by MP, from Parliament&apos;s open data. The
              Media Bias Detector reads an article for framing and loaded
              language. The CanPol Index maps cost of living by riding. CYFFL
              runs free French tutoring for students.
            </p>
            <p>
              The approach is consistently practical. These are projects you
              can open, use, and pull the underlying data out of.
            </p>
          </div>

          <div className="lg:pt-1">
            <h3 className="h3">Everything is free</h3>
            <p className="copy mt-2 text-[1rem]">
              No account and no paywall on any project. The Parliament
              Tracker&apos;s full vote dataset downloads as a CSV, with
              attribution to openparliament.ca.
            </p>
            <div className="mt-6">
              <Link href="/projects" className="cta">
                All projects
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <Section title="Where we stand" tone="paper-2">
        <p className="copy">
          Civics Studio takes money from no political party and supports none
          of them. What we do care about is independent representation: MPs
          having room to represent the people who elected them, and those
          people being able to check the record themselves. No party owns that
          position. It&apos;s a civic one.
        </p>
        <div className="mt-8">
          <Link href="/mission" className="cta">
            Read the full mission
          </Link>
        </div>
      </Section>
    </div>
  );
}
