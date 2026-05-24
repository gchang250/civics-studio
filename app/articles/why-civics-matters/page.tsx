import Link from "next/link";

export default function WhyCivicsMattersArticlePage() {
  return (
    <article>
      <section className="border-b border-[#D8D0C3] bg-[#FAF7F0]">
        <div className="mx-auto max-w-4xl px-5 py-14 md:py-18">
          <Link
            href="/articles"
            className="text-sm font-bold uppercase tracking-[0.08em] text-[#8A1538] hover:underline"
          >
            ← Articles
          </Link>

          <p className="mt-8 text-xs font-bold uppercase tracking-[0.18em] text-[#8A1538]">
            Civic Education
          </p>

          <h1 className="serif mt-4 text-5xl font-bold leading-tight tracking-[-0.04em] text-[#111111] md:text-6xl">
            Why Civic Education Needs to Be Practical
          </h1>

          <p className="mt-5 text-xl leading-8 text-[#5E5A54]">
            Civics is often taught as a list of institutions. It should also
            teach students how power, incentives, negotiation, and public
            decisions actually work.
          </p>

          <div className="mt-8 border-t border-[#D8D0C3] pt-4 text-sm text-[#5E5A54]">
            <p>Published by Civics Studio · May 2026</p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-5 py-12">
          <div className="space-y-7 text-lg leading-8 text-[#222222]">
            <p>
              Civic education is usually introduced through institutions:
              Parliament, elections, courts, parties, constitutions, and levels
              of government. These topics matter, but they are not enough by
              themselves.
            </p>

            <p>
              Students also need to understand how public decisions are made in
              practice. They need to see how incentives shape behaviour, how
              coalitions form, how negotiation works, how resources create
              leverage, and how public promises can differ from private goals.
            </p>

            <p>
              This is why practical civic learning matters. A student who only
              memorizes the structure of government may know what an institution
              is called. A student who practises negotiation, argument,
              compromise, and decision-making is more likely to understand how
              public life actually operates.
            </p>

            <h2 className="serif pt-4 text-3xl font-bold tracking-[-0.02em] text-[#111111]">
              Civics should be active, not passive.
            </h2>

            <p>
              Public life is not only a set of facts. It is a set of choices.
              Citizens evaluate claims, compare interests, judge trade-offs, and
              decide how to participate. Students should practise those skills
              before they are expected to use them.
            </p>

            <p>
              Games, simulations, debates, data projects, and case studies can
              make civic systems easier to understand because they show the
              pressures behind decisions. They make abstract concepts visible.
            </p>

            <h2 className="serif pt-4 text-3xl font-bold tracking-[-0.02em] text-[#111111]">
              The goal is understanding, not ideology.
            </h2>

            <p>
              Civic education should not tell students what political party to
              support or what ideology to adopt. It should help them understand
              how public systems work, how arguments are built, and how
              decisions affect communities.
            </p>

            <p>
              Civics Studio is built around that principle. The goal is to make
              civic and economic learning practical, accessible, and
              non-partisan.
            </p>
          </div>

          <div className="mt-12 border-t border-[#D8D0C3] pt-8">
            <Link
              href="/articles"
              className="text-sm font-bold uppercase tracking-[0.08em] text-[#111111] hover:text-[#8A1538]"
            >
              Back to articles →
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}