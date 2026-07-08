import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mission",
  description:
    "Civics Studio promotes independent, non-partisan civic thinking in Canada, building tools that help citizens understand how Parliament works and why independent representation matters.",
};

export default function MissionPage() {
  return (
    <div>
      {/* Hero */}
      <section className="border-b border-[#D8D0C3] bg-[#FAF7F0]">
        <div className="mx-auto grid max-w-7xl lg:grid-cols-[1fr_1fr]">

          <div className="flex flex-col justify-center px-5 py-14 md:py-18 lg:pr-12">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#C9A94B]">
              Mission
            </p>
            <h1 className="serif mt-4 text-5xl font-bold leading-tight tracking-[-0.035em] text-[#1C3557] md:text-6xl">
              Non-partisan doesn't mean neutral. It means we're for independent representation.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-[#5E5A54]">
              Civics Studio exists to promote independent, non-partisan civic
              thinking in Canada, because informed citizens are the foundation
              of a functioning Parliament.
            </p>
          </div>

          <div className="relative hidden min-h-[420px] overflow-hidden lg:block">
            <Image
              src="https://images.unsplash.com/photo-1651514645933-c26e0eb4ace3?auto=format&fit=crop&w=900&q=80"
              alt="Group of people in conversation"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-[#1C3557]/20" />
            <a
              href="https://unsplash.com/photos/a-group-of-people-talking-bxiOjnbjRM0"
              target="_blank"
              rel="noreferrer"
              className="absolute bottom-2 right-3 text-[10px] text-white/40 hover:text-white/70 transition"
            >
              Photo: Small Group Network / Unsplash
            </a>
          </div>
        </div>
      </section>

      {/* Context */}
      <section className="border-b border-[#D8D0C3] bg-[#1C3557]">
        <div className="mx-auto max-w-7xl px-5 py-14">
          <div className="grid gap-8 md:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#C9A94B]">
                Context
              </p>
              <h2 className="serif mt-2 text-3xl font-bold tracking-[-0.02em] text-white">
                How party structures shape Parliament.
              </h2>
            </div>
            <div className="space-y-5 text-lg leading-8 text-white/60">
              <p>
                Canada has 343 seats in the House of Commons. Each represents
                a constituency with distinct needs, priorities, and people.
                In practice, party structures and coalition dynamics mean that
                voting in Parliament often follows party lines rather than
                individual judgment, effectively concentrating 343 voices
                into a smaller number of positions.
              </p>
              <p>
                MPs operate within party structures that create pressure to
                vote along caucus lines. The result is that Parliament,
                while representing diverse constituencies, often produces
                votes that reflect party positions rather than the full range
                of constituent views. External pressures from lobbying and
                foreign influence compound this by engaging parties as
                single units rather than collections of individual
                representatives.
              </p>
              <p>
                Canada's multi-party system offers more diversity of thought
                than a two-party one. Civics Studio believes that
                understanding these dynamics, and thinking about how
                independent representation can work within them, is a
                worthwhile part of civic education.
              </p>
              <p>
                Our{" "}
                <Link href="/projects/parliament-tracker" className="text-[#C9A94B] underline hover:text-white">
                  Parliament Tracker
                </Link>{" "}
                puts this into practice: real vote data for all 343 MPs,
                including when an individual ballot breaks from the party&apos;s
                own stated position.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 py-12 md:grid-cols-3">
          {[
            {
              title: "Independent over partisan",
              text: "Canada's 343 elected members represent diverse constituencies. Civics Studio builds tools that help citizens understand how Parliament works, including how party structures shape the votes and decisions made on their behalf.",
            },
            {
              title: "Literacy as accountability",
              text: "When Canadians understand how Parliament actually works, including coalition dynamics, voting records, and how party discipline operates, they can engage more meaningfully with their representatives.",
            },
            {
              title: "Non-partisan by conviction",
              text: "Civics Studio doesn't support any party or ideology. Our interest is in civic literacy, understanding how political systems work, and why independent representation matters in a parliamentary democracy.",
            },
          ].map((item) => (
            <div key={item.title} className="border-t-4 border-[#C9A94B] bg-[#FAF7F0] p-6">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#C9A94B]">
                Principle
              </p>
              <h2 className="serif mt-3 text-2xl font-bold tracking-[-0.02em] text-[#1C3557]">
                {item.title}
              </h2>
              <p className="mt-4 leading-7 text-[#5E5A54]">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What we build */}
      <section className="border-y border-[#D8D0C3] bg-[#F3EEE4]">
        <div className="mx-auto max-w-7xl px-5 py-12">
          <div className="grid gap-8 md:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#C9A94B]">
                What we build
              </p>
              <h2 className="serif mt-2 text-3xl font-bold tracking-[-0.02em] text-[#1C3557]">
                Tools that make the stakes real.
              </h2>
            </div>
            <p className="max-w-3xl text-lg leading-8 text-[#5E5A54]">
              Civics Studio builds games, data projects, and learning resources
              that make the mechanics of political systems tangible and
              discussable. Understanding how negotiation, incentives, and
              institutional structures actually work is the foundation of being
              able to engage with them thoughtfully. Our projects are free,
              Canadian, and designed for students and educators across the
              country.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
