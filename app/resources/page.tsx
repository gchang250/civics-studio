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
    description:
      "Printable Country Type cards and Secret Goal cards.",
    href: "/downloads/detente-cards.pdf",
    status: "Available",
  },
  {
    title: "Detente Resource Bills",
    type: "PDF",
    description:
      "Printable Oil, Gold, Grain, and Arms bills for gameplay.",
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
      <section className="border-b border-slate-300 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-14">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#8b1e1e]">
            Resources
          </p>

          <h1 className="serif mt-4 text-5xl font-bold text-[#061a33] md:text-6xl">
            Free civic learning resources.
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700">
            Downloadable files, classroom materials, and student-friendly guides
            for civic and economic learning.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12">
        <div className="overflow-hidden border border-slate-300 bg-white shadow-sm">
          <div className="grid grid-cols-[1fr_0.35fr_0.35fr] border-b border-slate-300 bg-[#061a33] px-5 py-3 text-sm font-bold uppercase tracking-[0.12em] text-white">
            <p>Resource</p>
            <p className="hidden sm:block">Type</p>
            <p className="text-right">Status</p>
          </div>

          <div className="divide-y divide-slate-300">
            {resources.map((resource) => {
              const available = resource.status === "Available";

              const content = (
                <div className="grid grid-cols-[1fr_0.35fr_0.35fr] gap-4 px-5 py-5 transition hover:bg-slate-50">
                  <div>
                    <h2 className="font-bold text-[#061a33]">
                      {resource.title}
                    </h2>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      {resource.description}
                    </p>
                  </div>

                  <p className="hidden text-sm text-slate-600 sm:block">
                    {resource.type}
                  </p>

                  <p
                    className={`text-right text-sm font-bold ${
                      available ? "text-[#8b1e1e]" : "text-slate-500"
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
      </section>

      <section className="mx-auto max-w-7xl px-5 py-4">
        <div className="border border-slate-300 bg-white p-6 shadow-sm">
          <h2 className="serif text-2xl font-bold text-[#061a33]">
            Looking for the full Detente page?
          </h2>
          <p className="mt-3 leading-7 text-slate-700">
            The Detente project page includes the game overview, learning
            outcomes, and all individual download files.
          </p>
          <Link
            href="/projects/detente"
            className="mt-5 inline-block bg-[#061a33] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#0b2d57]"
          >
            View Detente
          </Link>
        </div>
      </section>
    </div>
  );
}