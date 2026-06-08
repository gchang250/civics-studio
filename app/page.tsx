import Link from "next/link";
import Hero from "@/app/components/Hero";
import StickyProjects from "@/app/components/StickyProjects";
import AnimatedSection from "@/app/components/AnimatedSection";

const stats = [
  {
    value: "3",
    label: "Active projects",
    sub: "Games, data, and literacy programs",
  },
  {
    value: "Free",
    label: "Always",
    sub: "Every resource costs nothing to access",
  },
  {
    value: "Non-partisan",
    label: "By design",
    sub: "No party, no ideology, no agenda",
  },
];

export default function HomePage() {
  return (
    <div>
      {/* ── Hero ──────────────────────────────────────────── */}
      <Hero />

      {/* ── Section bridge ───────────────────────────────── */}
      <div className="border-b border-white/10 bg-[#0A1628] px-8 py-5">
        <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#C9A94B]">
          Our work
        </p>
      </div>

      {/* ── Sticky scroll project showcase ───────────────── */}
      <StickyProjects />

      {/* ── Stats ─────────────────────────────────────────── */}
      <section className="bg-[#1C3557]">
        <div className="mx-auto max-w-7xl px-5 py-24">
          <AnimatedSection className="mb-14">
            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#C9A94B]">
              By the numbers
            </p>
          </AnimatedSection>

          <div className="grid gap-px bg-white/10 sm:grid-cols-3">
            {stats.map((s, i) => (
              <AnimatedSection key={s.label} delay={i * 0.1}>
                <div className="bg-[#1C3557] p-10 text-center">
                  <p className="serif text-[clamp(2.5rem,5vw,3.5rem)] font-bold leading-none text-[#C9A94B]">
                    {s.value}
                  </p>
                  <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.2em] text-white/40">
                    {s.label}
                  </p>
                  <p className="mt-4 text-sm leading-6 text-white/50">{s.sub}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Mission quote ─────────────────────────────────── */}
      <section className="bg-[#FAF7F0]">
        <div className="mx-auto max-w-4xl px-5 py-28 text-center">
          <AnimatedSection>
            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#C9A94B]">
              Mission
            </p>
            <blockquote className="serif mt-8 text-[clamp(1.6rem,3.5vw,2.6rem)] font-bold leading-snug tracking-[-0.03em] text-[#1C3557]">
              "Civic education shouldn't stop at memorizing institutions. It
              should teach how power, negotiation, and decisions actually work."
            </blockquote>
            <Link
              href="/mission"
              className="mt-10 inline-block text-sm font-bold uppercase tracking-[0.1em] text-[#C9A94B] hover:underline"
            >
              Read our mission →
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Non-partisan statement ────────────────────────── */}
      <section className="bg-[#0A1628]">
        <div className="mx-auto max-w-7xl px-5 py-24">
          <AnimatedSection className="grid gap-12 md:grid-cols-[1fr_1.8fr] md:items-center">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#C9A94B]">
                Statement
              </p>
              <h2 className="serif mt-4 text-[clamp(2rem,4vw,3rem)] font-bold leading-tight tracking-[-0.04em] text-white">
                Non-partisan by design.
              </h2>
            </div>

            <div className="border-l border-white/10 pl-10">
              <p className="text-lg leading-9 text-white/55">
                Civics Studio does not promote any political party or ideology.
                The goal is to help people understand how civic systems work —
                and participate in them more thoughtfully.
              </p>
              <Link
                href="/projects"
                className="mt-8 inline-block bg-[#C9A94B] px-7 py-3.5 text-sm font-bold uppercase tracking-[0.1em] text-[#0A1628] transition hover:bg-white"
              >
                View all projects →
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
