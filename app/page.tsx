import Link from "next/link";
import Hero from "@/app/components/Hero";
import StickyProjects from "@/app/components/StickyProjects";
import Marquee from "@/app/components/Marquee";
import AnimatedSection from "@/app/components/AnimatedSection";

const stats = [
  { value: "500+", label: "Users", desc: "Across all Civics Studio projects" },
  { value: "5", label: "Active Projects", desc: "Trackers, games, data, and literacy programs" },
];

export default function HomePage() {
  return (
    <div>
      <Hero />
      <Marquee />
      <StickyProjects />

      {/* ── Mission ───────────────────────────────────────── */}
      <section className="border-y border-[#D8D0C3] bg-[#1C3557]">
        <div className="mx-auto max-w-3xl px-6 py-24 text-center">
          <AnimatedSection>
            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#C9A94B]">
              Mission
            </p>
            <blockquote className="serif mt-8 text-[clamp(1.4rem,3vw,2rem)] font-bold leading-snug text-white">
              "Canada elects 343 members of Parliament. Party structures often
              reduce those voices to five parties, and voting patterns to two
              factions. Independent representation isn't a radical idea. It's
              the premise of Parliament."
            </blockquote>
            <div className="mt-10">
              <Link
                href="/mission"
                className="border border-white/25 px-7 py-3 text-[11px] font-bold uppercase tracking-[0.2em] text-white/70 transition hover:border-white hover:text-white"
              >
                Read Full Mission Statement
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── By the Numbers ────────────────────────────────── */}
      <section className="bg-[#FAF7F0]">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <AnimatedSection className="mb-10 border-b border-[#D8D0C3] pb-5">
            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#8B7335]">
              By the Numbers
            </p>
          </AnimatedSection>

          <div className="grid gap-px bg-[#D8D0C3] sm:grid-cols-2">
            {stats.map((s, i) => (
              <AnimatedSection key={s.label} delay={i * 0.08} className="h-full">
                <div className="flex h-full flex-col justify-center bg-[#FAF7F0] p-10 text-center">
                  <p className="serif text-[clamp(2rem,4vw,3rem)] font-bold text-[#1C3557]">
                    {s.value}
                  </p>
                  <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.3em] text-[#8B7335]">
                    {s.label}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-[#5A6070]">{s.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Non-Partisan Statement ────────────────────────── */}
      <section className="border-t border-[#D8D0C3] bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <AnimatedSection className="grid gap-12 md:grid-cols-2 md:items-start">
            <div className="border-t-2 border-[#1C3557] pt-8">
              <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#8B7335]">
                Statement
              </p>
              <h2 className="serif mt-5 text-[clamp(1.8rem,3.5vw,2.6rem)] font-bold leading-tight text-[#1C3557]">
                Non-partisan means<br />pro-independent.
              </h2>
            </div>
            <div className="border-t border-[#D8D0C3] pt-8">
              <p className="text-base leading-8 text-[#5A6070]">
                Civics Studio actively works to strengthen independent civic
                thinking. When MPs vote along party lines rather than as their
                constituents need, something is lost. We build tools that help
                Canadians understand how their political system works and where
                it could do better.
              </p>
              <Link
                href="/projects"
                className="mt-8 inline-block bg-[#1C3557] px-7 py-3.5 text-[11px] font-bold uppercase tracking-[0.15em] text-white transition hover:bg-[#0f2347]"
              >
                View All Projects →
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
