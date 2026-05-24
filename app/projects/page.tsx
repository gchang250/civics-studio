import Link from "next/link";

const projects = [
  {
    title: "Detente",
    type: "Print-and-play game",
    description:
      "A political negotiation game for practising strategy, persuasion, resource management, and civic thinking.",
    href: "/projects/detente",
    status: "Files available",
  },
  {
    title: "The Fried Rice Index",
    type: "Data project",
    description:
      "A global affordability index using the price of egg fried rice to compare cost of living across cities.",
    href: "/projects/fried-rice-index",
    status: "Live project",
  },
];

export default function ProjectsPage() {
  return (
    <div>
      <section className="border-b border-[#D8D0C3] bg-[#FAF7F0]">
        <div className="mx-auto max-w-7xl px-5 py-14 md:py-18">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#8A1538]">
            Projects
          </p>

          <h1 className="serif mt-4 max-w-4xl text-5xl font-bold leading-tight tracking-[-0.035em] text-[#111111] md:text-6xl">
            Games, data, and civic tools.
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-[#5E5A54]">
            Civics Studio builds practical projects that help young people
            understand politics, economics, negotiation, affordability, and
            public life.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-12">
          <div className="grid gap-0 border border-[#D8D0C3] md:grid-cols-2">
            {projects.map((project, index) => (
              <Link
                key={project.title}
                href={project.href}
                className={`group bg-[#FAF7F0] p-7 transition hover:bg-white ${
                  index === 0
                    ? "border-b border-[#D8D0C3] md:border-b-0 md:border-r"
                    : ""
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#8A1538]">
                    {project.type}
                  </p>

                  <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#5E5A54]">
                    {project.status}
                  </p>
                </div>

                <h2 className="serif mt-5 text-4xl font-bold tracking-[-0.035em] text-[#111111]">
                  {project.title}
                </h2>

                <p className="mt-4 max-w-xl leading-7 text-[#5E5A54]">
                  {project.description}
                </p>

                <p className="mt-7 text-sm font-bold uppercase tracking-[0.08em] text-[#111111] group-hover:text-[#8A1538]">
                  View project →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}