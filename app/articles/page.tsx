import Link from "next/link";

const articles = [
  {
    title: "Why Civic Education Needs to Be Practical",
    description:
      "Civics is often taught as a list of institutions. It should also teach students how power, incentives, negotiation, and public decisions actually work.",
    href: "/articles/why-civics-matters",
    category: "Civic Education",
    date: "May 2026",
  },
];

export default function ArticlesPage() {
  return (
    <div>
      <section className="border-b border-[#D8D0C3] bg-[#FAF7F0]">
        <div className="mx-auto max-w-7xl px-5 py-14 md:py-18">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#8A1538]">
            Articles
          </p>

          <h1 className="serif mt-4 max-w-5xl text-5xl font-bold leading-tight tracking-[-0.035em] text-[#111111] md:text-6xl">
            Essays and explainers on civics, economics, and public life.
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-[#5E5A54]">
            Civics Studio articles explain public systems, political ideas, and
            economic issues in a clear, student-friendly way.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-12">
          <div className="mb-8 border-b border-[#111111] pb-4">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#8A1538]">
              Latest
            </p>

            <h2 className="serif mt-2 text-3xl font-bold tracking-[-0.02em] text-[#111111]">
              Recent articles
            </h2>
          </div>

          <div className="divide-y divide-[#D8D0C3] border-y border-[#D8D0C3]">
            {articles.map((article) => (
              <Link
                key={article.href}
                href={article.href}
                className="grid gap-6 bg-[#FAF7F0] px-5 py-7 transition hover:bg-white md:grid-cols-[0.25fr_1fr_0.15fr]"
              >
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#8A1538]">
                    {article.category}
                  </p>
                  <p className="mt-2 text-sm text-[#5E5A54]">
                    {article.date}
                  </p>
                </div>

                <div>
                  <h2 className="serif text-3xl font-bold tracking-[-0.025em] text-[#111111]">
                    {article.title}
                  </h2>

                  <p className="mt-3 max-w-3xl leading-7 text-[#5E5A54]">
                    {article.description}
                  </p>
                </div>

                <p className="text-sm font-bold uppercase tracking-[0.08em] text-[#111111]">
                  Read →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}