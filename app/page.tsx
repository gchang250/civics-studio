import Link from "next/link";

const projects = [
  {
    title: "Detente",
    type: "Print-and-play game",
    description:
      "A political negotiation game that helps students practise strategy, persuasion, deduction, and civic thinking.",
    href: "/projects/detente",
    cta: "Download files",
  },
  {
    title: "The Fried Rice Index",
    type: "Data project",
    description:
      "A global affordability index comparing cities through the price of a bowl of egg fried rice.",
    href: "/projects/fried-rice-index",
    cta: "Visit index",
  },
];

const briefs = [
  {
    title: "Free civic tools",
    text: "Resources designed for students, classrooms, clubs, and youth organizations.",
  },
  {
    title: "Games and simulations",
    text: "Interactive projects that make negotiation, incentives, and public decision-making easier to understand.",
  },
  {
    title: "Economic literacy",
    text: "Data projects that connect ordinary prices to broader questions about affordability and public life.",
  },
];

export default function HomePage() {
  return (
    <div>
      <section className="border-b border-[#D8D0C3] bg-[#FAF7F0]">
        <div className="mx-auto max-w-7xl px-5 py-16 md:py-20">
          <div className="grid gap-12 lg:grid-cols-[1.4fr_0.6fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#8A1538]">
                Civic education, made practical
              </p>

              <h1 className="serif mt-5 max-w-5xl text-5xl font-bold leading-[1.02] tracking-[-0.045em] text-[#111111] md:text-7xl">
                Helping young people understand politics, economics, and public
                life.
              </h1>

              <p className="mt-7 max-w-3xl text-xl leading-8 text-[#5E5A54]">
                Civics Studio creates free games, data projects, and learning
                resources that turn abstract civic systems into practical tools.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/projects"
                  className="bg-[#111111] px-6 py-3 text-center text-sm font-bold uppercase tracking-[0.08em] text-white transition hover:bg-[#8A1538]"
                >
                  View projects
                </Link>

                <Link
                  href="/projects/detente"
                  className="border border-[#111111] px-6 py-3 text-center text-sm font-bold uppercase tracking-[0.08em] text-[#111111] transition hover:bg-[#111111] hover:text-white"
                >
                  Download Detente
                </Link>
              </div>
            </div>

            <aside className="border-l-4 border-[#8A1538] bg-white p-6 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#8A1538]">
                Studio brief
              </p>
              <h2 className="serif mt-3 text-2xl font-bold leading-tight text-[#111111]">
                Non-partisan learning resources for youth civic and economic
                literacy.
              </h2>
              <p className="mt-4 text-sm leading-6 text-[#5E5A54]">
                Built for students, teachers, clubs, and youth groups looking
                for practical ways to explore public life.
              </p>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-12">
          <div className="mb-8 flex items-end justify-between gap-6 border-b border-[#111111] pb-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#8A1538]">
                Featured work
              </p>
              <h2 className="serif mt-2 text-4xl font-bold tracking-[-0.03em] text-[#111111]">
                Projects
              </h2>
            </div>

            <Link
              href="/projects"
              className="hidden text-sm font-bold uppercase tracking-[0.08em] text-[#111111] hover:text-[#8A1538] md:block"
            >
              All projects →
            </Link>
          </div>

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
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#8A1538]">
                  {project.type}
                </p>

                <h3 className="serif mt-4 text-4xl font-bold tracking-[-0.035em] text-[#111111]">
                  {project.title}
                </h3>

                <p className="mt-4 max-w-xl leading-7 text-[#5E5A54]">
                  {project.description}
                </p>

                <p className="mt-7 text-sm font-bold uppercase tracking-[0.08em] text-[#111111] group-hover:text-[#8A1538]">
                  {project.cta} →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[#D8D0C3] bg-[#F3EEE4]">
        <div className="mx-auto max-w-7xl px-5 py-12">
          <div className="grid gap-6 md:grid-cols-3">
            {briefs.map((brief) => (
              <div key={brief.title} className="bg-white p-6 shadow-sm">
                <h3 className="serif text-2xl font-bold text-[#111111]">
                  {brief.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#5E5A54]">
                  {brief.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#FAF7F0]">
        <div className="mx-auto max-w-7xl px-5 py-14">
          <div className="grid gap-8 border-t border-[#111111] pt-8 md:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#8A1538]">
                Statement
              </p>
              <h2 className="serif mt-2 text-3xl font-bold tracking-[-0.02em] text-[#111111]">
                Non-partisan by design.
              </h2>
            </div>

            <p className="max-w-3xl text-lg leading-8 text-[#5E5A54]">
              Civics Studio does not promote any political party or ideology.
              The goal is to help young people understand public life more
              clearly and participate more thoughtfully.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}