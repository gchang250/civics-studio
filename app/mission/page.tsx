import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/app/components/PageHeader";
import Section from "@/app/components/Section";

export const metadata: Metadata = {
  title: "Mission",
  description:
    "Civics Studio promotes independent, non-partisan civic thinking, building projects that let anyone check how Parliament actually votes.",
};

const principles = [
  {
    title: "Independent over partisan",
    text: "The 343 elected members of the House represent 343 distinct constituencies. Our projects show how party structures shape the votes made on their behalf.",
  },
  {
    title: "Literacy as accountability",
    text: "Most people already know whip pressure exists. What's harder to find is the specific vote where your own MP bent to it, which is what the tracker is for.",
  },
  {
    title: "Non-partisan by conviction",
    text: "We support no party and take money from none of them. Our only interest is that the record stays public and accurate.",
  },
];

export default function MissionPage() {
  return (
    <div>
      <PageHeader
        title="Our case for independent representation."
        lede="Civics Studio exists to make Parliament's own record easy to look up, so anyone can check what their MP actually did."
      />

      <Section title="How party structures shape Parliament">
        {/* 62/38: the argument gets the width, the consequence sits beside it. */}
        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr] lg:gap-20">
          <div className="copy space-y-4">
            <p>
              Canada has 343 seats in the House of Commons, and each one
              represents a constituency with its own priorities. In practice,
              party structures and coalition dynamics mean voting follows party
              lines, which concentrates 343 voices into a far smaller number of
              positions.
            </p>
            <p>
              That pressure is very concrete. A party whip counts votes before
              they happen and holds members to the result, with consequences an
              MP can feel: a committee seat, or a nomination next election.
              Lobbying compounds it by treating each party as a single unit
              whose leadership can be approached on behalf of a whole caucus.
            </p>
            <p>
              A multi-party system carries more diversity of thought than a
              two-party one. Understanding how it works, and how independent
              representation can function inside it, belongs in civic
              education.
            </p>
          </div>

          <div className="lg:pt-1">
            <p className="copy text-[1rem]">
              Our{" "}
              <Link href="/projects/parliament-tracker" className="link">
                Parliament Tracker
              </Link>{" "}
              puts this into practice: every recorded vote of the current
              session, for every sitting MP, including the ones where a ballot
              broke from the party&apos;s own stated position.
            </p>
            <div className="mt-6">
              <Link href="/projects/parliament-tracker" className="cta">
                Check a vote yourself
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <Section title="Principles" tone="paper-2">
        <dl>
          {principles.map((item) => (
            <div
              key={item.title}
              className="grid gap-x-10 gap-y-2 py-6 md:grid-cols-[15rem_1fr]"
            >
              <dt className="h3">{item.title}</dt>
              <dd className="copy text-[1rem]">{item.text}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section title="What we build">
        <p className="copy">
          Games and data projects that make the mechanics of political systems
          tangible. Understanding how incentives and institutional structures
          actually work is what makes it possible to engage with them.
          Everything we publish is free and built for students and
          educators.
        </p>
        <div className="mt-8">
          <Link href="/projects" className="cta">
            See the projects
          </Link>
        </div>
      </Section>
    </div>
  );
}
