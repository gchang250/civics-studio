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
    <div className="bg-[#faf8f5]">
      {/* Hero */}
      <section className="border-b border-[#e5e0d4] bg-[#faf8f5]">
        <div className="mx-auto grid max-w-7xl lg:grid-cols-[1fr_1fr] relative">
          {/* Divider line */}
          <div className="absolute inset-y-0 left-1/2 w-px bg-[#e5e0d4]/60 pointer-events-none hidden lg:block" />

          <div className="flex flex-col justify-center px-5 py-16 md:py-20 lg:pr-12">
            <p className="text-xs font-semibold tracking-[0.25em] text-[#8b1e1e] lowercase">
              mission
            </p>
            <h1 className="serif mt-4 text-5xl font-normal italic leading-tight tracking-[-0.02em] text-[#111f36] md:text-6xl lowercase">
              Non-partisan doesn&apos;t mean neutral. It means we&apos;re for independent representation.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-[#5f697a]">
              Civics Studio exists to promote independent, non-partisan civic
              thinking in Canada, because informed citizens are the foundation
              of a functioning Parliament.
            </p>
          </div>

          <div className="relative hidden min-h-[420px] overflow-hidden lg:block">
            <Image
              src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=900&q=80"
              alt="Minimalist abstract concrete architecture interior with curves"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-[#8b1e1e]/5" />
            <a
              href="https://unsplash.com/photos/minimalist-concrete-architecture-details-n9AaeihA9HI"
              target="_blank"
              rel="noreferrer"
              className="absolute bottom-2 right-3 text-[10px] text-white/40 hover:text-white/70 transition lowercase"
            >
              photo: Jean-Philippe Delberghe / unsplash
            </a>
          </div>
        </div>
      </section>

      {/* Context */}
      <section className="border-b border-[#e5e0d4] bg-[#f3efe6]">
        <div className="mx-auto max-w-7xl px-5 py-16">
          <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-xs font-semibold tracking-[0.25em] text-[#8b1e1e] lowercase">
                context
              </p>
              <h2 className="serif mt-2 text-3xl font-normal italic tracking-[-0.01em] text-[#111f36] lowercase">
                How party structures shape Parliament.
              </h2>
            </div>
            <div className="space-y-5 text-base leading-8 text-[#5f697a]">
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
                Canada&apos;s multi-party system offers more diversity of thought
                than a two-party one. Civics Studio believes that
                understanding these dynamics, and thinking about how
                independent representation can work within them, is a
                worthwhile part of civic education.
              </p>
              <p>
                Our{" "}
                <Link href="/projects/parliament-tracker" className="text-[#8b1e1e] underline hover:text-[#111f36]">
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
      <section className="bg-[#faf8f5]">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 md:grid-cols-3">
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
            <div key={item.title} className="border border-[#e5e0d4] bg-[#faf8f5] p-8 transition duration-300 hover:border-[#8b1e1e]/40">
              <p className="text-xs font-semibold tracking-[0.25em] text-[#8b1e1e] lowercase">
                principle
              </p>
              <h2 className="serif mt-3 text-2xl font-normal italic tracking-[-0.01em] text-[#111f36] lowercase">
                {item.title}
              </h2>
              <p className="mt-4 text-sm leading-6 text-[#5f697a]">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What we build */}
      <section className="border-t border-[#e5e0d4] bg-[#faf8f5]">
        <div className="mx-auto max-w-7xl px-5 py-16">
          <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-xs font-semibold tracking-[0.25em] text-[#8b1e1e] lowercase">
                what we build
              </p>
              <h2 className="serif mt-2 text-3xl font-normal italic tracking-[-0.01em] text-[#111f36] lowercase">
                Tools that make the stakes real.
              </h2>
            </div>
            <p className="max-w-3xl text-base leading-8 text-[#5f697a]">
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
