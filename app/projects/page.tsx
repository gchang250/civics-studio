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
      <section className="border-b border-slate-300 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-14">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#8b1e1e]">
            Projects
          </p>

          <h1 className="serif mt-4 text-5xl font-bold text-[#061a33] md:text-6xl">
            Games, data, and civic tools.
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700">
            Civics Studio builds practical projects that help young people
            understand politics, economics, negotiation, affordability, and
            public life.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12">
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <Link
              key={project.title}
              href={project.href}
              className="border border-slate-300 bg-white shadow-sm transition hover:border-[#061a33] hover:shadow-md"
            >
              <div className="flex items-center justify-between gap-4 border-b border-slate-300 bg-[#061a33] px-6 py-4 text-white">
                <p className="text-sm font-bold uppercase tracking-[0.14em]">
                  {project.type}
                </p>
                <p className="text-xs font-semibold text-slate-200">
                  {project.status}
                </p>
              </div>

              <div className="p-6 md:p-8">
                <h2 className="serif text-3xl font-bold text-[#061a33]">
                  {project.title}
                </h2>

                <p className="mt-4 leading-7 text-slate-700">
                  {project.description}
                </p>

                <p className="mt-6 text-sm font-bold text-[#8b1e1e]">
                  View project →
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}