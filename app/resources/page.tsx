import Link from "next/link";

const resources = [
  {
    title: "Detente Rulebook",
    type: "PDF",
    description:
      "Full rules, setup instructions, turn structure, win conditions, and strategy notes.",
    href: "/downloads/detente-rulebook.pdf",
    status: "Available",
  },
  {
    title: "Detente Cards",
    type: "PDF",
    description: "Printable Country Type cards and Secret Goal cards.",
    href: "/downloads/detente-cards.pdf",
    status: "Available",
  },
  {
    title: "Detente Resource Bills",
    type: "PDF",
    description: "Printable Oil, Gold, Grain, and Arms bills for gameplay.",
    href: "/downloads/detente-resource-bills.pdf",
    status: "Available",
  },
  {
    title: "Detente Print Guide",
    type: "PDF",
    description:
      "A short checklist for printing, cutting, and organizing the game materials.",
    href: "/downloads/detente-print-guide.pdf",
    status: "Available",
  },
  {
    title: "Canadian Government Basics",
    type: "Guide",
    description:
      "A student-friendly guide to Parliament, elections, parties, federalism, and public decision-making.",
    href: "#",
    status: "Coming soon",
  },
  {
    title: "Negotiation Guide",
    type: "Guide",
    description:
      "A practical guide to bargaining, incentives, coalitions, and strategic communication.",
    href: "#",
    status: "Coming soon",
  },
];

export default function ResourcesPage() {
  return (
    <div>
      <section className="border-b border-[#D8D0C3] bg-[#FAF7F0]">
        <div className="mx-auto max-w-7xl px-5 py-14 md:py-18">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#8A1538]">
            Resources
          </p>

          <h1 className="serif mt-4 max-w-4xl text-5xl font-bold leading-tight tracking-[-0.035em] text-[#111111] md:text-6xl">
            Free civic learning resources.
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-[#5E5A54]">
            Downloadable files, classroom materials, and student-friendly guides
            for civic and economic learning.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-12">
          <div className="border border-[#D8D0C3]">
            <div className="grid grid-cols-[1fr_0.35fr_0.35fr] border-b border-[#D8D0C3] bg-[#111111] px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] text-white">
              <p>Resource</p>
              <p className="hidden sm:block">Type</p>
              <p className="text-right">Status</p>
            </div>

            <div className="divide-y divide-[#D8D0C3]">
              {resources.map((resource) => {
                const available = resource.status === "Available";

                const content = (
                  <div className="grid grid-cols-[1fr_0.35fr_0.35fr] gap-4 bg-[#FAF7F0] px-5 py-5 transition hover:bg-white">
                    <div>
                      <h2 className="serif text-xl font-bold text-[#111111]">
                        {resource.title}
                      </h2>
                      <p className="mt-1 text-sm leading-6 text-[#5E5A54]">
                        {resource.description}
                      </p>
                    </div>

                    <p className="hidden text-sm text-[#5E5A54] sm:block">
                      {resource.type}
                    </p>

                    <p
                      className={`text-right text-sm font-bold ${
                        available ? "text-[#8A1538]" : "text-[#5E5A54]"
                      }`}
                    >
                      {resource.status}
                    </p>
                  </div>
                );

                return available ? (
                  <a key={resource.title} href={resource.href}>
                    {content}
                  </a>
                ) : (
                  <div key={resource.title}>{content}</div>
                );
              })}
            </div>
          </div>

          <div className="mt-8 border-l-4 border-[#8A1538] bg-[#FAF7F0] p-6">
            <h2 className="serif text-2xl font-bold text-[#111111]">
              Looking for the full Detente page?
            </h2>
            <p className="mt-3 max-w-3xl leading-7 text-[#5E5A54]">
              The Detente project page includes the game overview, learning
              outcomes, and all individual download files.
            </p>
            <Link
              href="/projects/detente"
              className="mt-5 inline-block bg-[#111111] px-5 py-3 text-sm font-bold uppercase tracking-[0.08em] text-white transition hover:bg-[#8A1538]"
            >
              View Detente
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}