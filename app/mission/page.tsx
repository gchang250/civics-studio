import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/app/components/PageHeader";
import Section from "@/app/components/Section";

export const metadata: Metadata = {
  title: "Mission",
  description:
    "Why Civics Studio publishes how every MP votes, and how those votes compare to what they campaigned on.",
};

const principles = [
  {
    title: "Independent representation",
    text: "The 343 elected members of the House represent 343 distinct constituencies, and should give a voice to everybody in Canada.",
  },
  {
    title: "Political literacy",
    text: "Most people already know pressure in politics exists. What's harder to find is the specific vote where it affected an MP, which is what this project is made for.",
  },
  {
    title: "Non-partisan",
    text: "We support no particular party and take money from none of them. Our only interest is that the truth stays public and accurate.",
  },
];

export default function MissionPage() {
  return (
    <div>
      <PageHeader
        title="Our case for independent representation"
        lede="We make Parliament's own record easy to look up, so anyone can check what their MP actually did."
      />

      <Section title="How party structures shape Parliament">
        {/* 62/38: the argument gets the width, the consequence sits beside it. */}
        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr] lg:gap-20">
          <div className="copy space-y-4">
            <p>
              Canada has 343 seats in the House of Commons, and each one
              represents a constituency with its own priorities. In practice,
              party structures and coalition dynamics mean voting follows party
              lines, which funnels 343 voices into a far smaller number of
              positions.
            </p>
            <p>
              That pressure is a threat to democracy. A party whip counts votes
              before they happen and holds members to the result, with
              consequences an MP can feel: losing a committee seat or a
              nomination next election. Ultimately this leads to a loss of
              diversity.
            </p>
          </div>

          <div className="lg:pt-1">
            <p className="copy text-[1rem]">
              So we publish every recorded vote of the current session, for
              every sitting MP, including the ones where a ballot broke from
              the party&apos;s own stated position.
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
    </div>
  );
}
