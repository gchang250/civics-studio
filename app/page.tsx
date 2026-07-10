import Link from "next/link";
import Hero from "@/app/components/Hero";
import StickyProjects from "@/app/components/StickyProjects";
import Marquee from "@/app/components/Marquee";
import AnimatedSection from "@/app/components/AnimatedSection";

const stats = [
  { value: "500+", label: "Users", desc: "Across all Civics Studio projects" },
  { value: "3", label: "Active Projects", desc: "Trackers, data, and literacy programs" },
];

export default function HomePage() {
  return (
    <div>
      <Hero />
      <Marquee />
      <StickyProjects />

      {/* ── Mission ───────────────────────────────────────── */}
      <section className="border-y border-[#e5e0d4] bg-[#f3efe6]">
        <div className="mx-auto max-w-3xl px-6 py-24 text-center">
          <AnimatedSection>
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#8b1e1e] lowercase">
              mission
            </p>
            <blockquote className="serif mt-8 text-[clamp(1.4rem,3vw,1.8rem)] font-normal italic leading-relaxed text-[#111f36] lowercase">
              &ldquo;Canada elects 343 members of Parliament. Party structures often
              reduce those voices to five parties, and voting patterns to two
              factions. Independent representation isn&apos;t a radical idea. It&apos;s
              the premise of Parliament.&rdquo;
            </blockquote>
            <div className="mt-10">
              <Link
                href="/mission"
                className="border border-[#111f36] px-7 py-3 text-[11px] font-medium uppercase tracking-[0.2em] text-[#111f36] transition hover:bg-[#8b1e1e] hover:text-white hover:border-[#8b1e1e]"
              >
                Read Full Mission Statement
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── By the Numbers ────────────────────────────────── */}
      <section className="bg-[#faf8f5]">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <AnimatedSection className="mb-10 border-b border-[#e5e0d4] pb-5">
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#8b1e1e] lowercase">
              by the numbers
            </p>
          </AnimatedSection>

          <div className="grid gap-px bg-[#e5e0d4] sm:grid-cols-2 border border-[#e5e0d4]">
            {stats.map((s, i) => (
              <AnimatedSection key={s.label} delay={i * 0.08} className="h-full">
                <div className="flex h-full flex-col justify-center bg-[#faf8f5] p-10 text-center">
                  <p className="serif text-[clamp(2.5rem,5vw,3.5rem)] font-normal italic text-[#111f36] lowercase">
                    {s.value}
                  </p>
                  <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#8b1e1e] lowercase">
                    {s.label}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-[#5f697a]">{s.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Non-Partisan Statement ────────────────────────── */}
      <section className="border-t border-[#e5e0d4] bg-[#faf8f5]">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <AnimatedSection className="grid gap-12 md:grid-cols-2 md:items-start">
            <div className="border-t border-[#e5e0d4] pt-8">
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#8b1e1e] lowercase">
                statement
              </p>
              <h2 className="serif mt-5 text-[clamp(1.8rem,3.5vw,2.6rem)] font-normal italic leading-[1.15] text-[#111f36] lowercase">
                non-partisan means<br />pro-independent.
              </h2>
            </div>
            <div className="border-t border-[#e5e0d4] md:border-t-0 pt-8">
              <p className="text-base leading-8 text-[#5f697a]">
                Civics Studio actively works to strengthen independent civic
                thinking. When MPs vote along party lines rather than as their
                constituents need, something is lost. We build tools that help
                Canadians understand how their political system works and where
                it could do better.
              </p>
              <div className="mt-8">
                <Link
                  href="/projects"
                  className="border border-[#111f36] px-7 py-3.5 text-[11px] font-medium uppercase tracking-[0.15em] text-[#111f36] transition hover:bg-[#8b1e1e] hover:text-white hover:border-[#8b1e1e]"
                >
                  View All Projects
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
