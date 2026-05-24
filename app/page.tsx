import Link from "next/link";

const projects = [
  {
    title: "Detente",
    type: "Print-and-play game",
    description:
      "A political negotiation game that helps students practise strategy, persuasion, deduction, and civic thinking.",
    href: "/projects/detente",
    cta: "Download game files",
  },
  {
    title: "The Fried Rice Index",
    type: "Data project",
    description:
      "A global affordability index comparing cities through the price of a bowl of egg fried rice.",
    href: "/projects/fried-rice-index",
    cta: "Visit project",
  },
];

const focusAreas = [
  "Civic literacy",
  "Economic literacy",
  "Negotiation",
  "Public decision-making",
];

export default function HomePage() {
  return (
    <div>
      <section className="border-b border-slate-300 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 md:py-20">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#8b1e1e]">
              Civics Studio
            </p>

            <h1 className="serif mt-4 text-5xl font-bold leading-tight tracking-tight text-[#061a33] md:text-7xl">
              Practical civic education for young people.
            </h1>

            <p className="mt-6 max-w-3xl text-xl leading-8 text-slate-700">
              Civics Studio creates free games, data projects, and learning
              resources that help students understand politics, economics, and
              public life.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/projects"
                className="bg-[#061a33] px-6 py-3 text-center text-sm font-bold text-white transition hover:bg-[#0b2d57]"
              >
                View Projects
              </Link>
              <Link
                href="/projects/detente"
                className="border border-[#061a33] px-6 py-3 text-center text-sm font-bold text-[#061a33] transition hover:bg-[#061a33] hover:text-white"
              >
                Download Detente
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-300 bg-[#f4f6f8]">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 py-8 md:grid-cols-4">
          {focusAreas.map((area) => (
            <div
              key={area}
              className="border-l-4 border-[#8b1e1e] bg-white p-5 shadow-sm"
            >
              <p className="text-sm font-bold text-[#061a33]">{area}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14">
        <div className="mb-6 flex items-end justify-between gap-6 border-b border-slate-300 pb-4">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#8b1e1e]">
              Featured projects
            </p>
            <h2 className="serif mt-2 text-3xl font-bold text-[#061a33] md:text-4xl">
              Current work
            </h2>
          </div>

          <Link
            href="/projects"
            className="hidden text-sm font-bold text-[#061a33] hover:underline md:block"
          >
            All projects →
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <Link
              key={project.title}
              href={project.href}
              className="group border border-slate-300 bg-white shadow-sm transition hover:border-[#061a33] hover:shadow-md"
            >
              <div className="border-b border-slate-300 bg-[#061a33] px-6 py-4 text-white">
                <p className="text-sm font-bold uppercase tracking-[0.14em]">
                  {project.type}
                </p>
              </div>

              <div className="p-6 md:p-8">
                <h3 className="serif text-3xl font-bold text-[#061a33]">
                  {project.title}
                </h3>
                <p className="mt-4 leading-7 text-slate-700">
                  {project.description}
                </p>
                <p className="mt-6 text-sm font-bold text-[#8b1e1e]">
                  {project.cta} →
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-6">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="border border-slate-300 bg-white p-6 shadow-sm">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#8b1e1e]">
              Free
            </p>
            <h3 className="serif mt-2 text-2xl font-bold text-[#061a33]">
              Open access resources
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-700">
              Civics Studio projects are designed to be freely used by students,
              clubs, classrooms, and youth groups.
            </p>
          </div>

          <div className="border border-slate-300 bg-white p-6 shadow-sm">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#8b1e1e]">
              Practical
            </p>
            <h3 className="serif mt-2 text-2xl font-bold text-[#061a33]">
              Built around use
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-700">
              The focus is on games, simulations, indexes, and guides that students
              can actually apply.
            </p>
          </div>

          <div className="border border-slate-300 bg-white p-6 shadow-sm">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#8b1e1e]">
              Non-partisan
            </p>
            <h3 className="serif mt-2 text-2xl font-bold text-[#061a33]">
              Understanding first
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-700">
              Civics Studio does not endorse parties, candidates, or political
              campaigns.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-14">
          <div className="border border-slate-300 bg-[#f8fafc] p-8 md:grid md:grid-cols-[0.7fr_1.3fr] md:gap-10 md:p-10">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#8b1e1e]">
                Statement
              </p>
              <h2 className="serif mt-2 text-3xl font-bold text-[#061a33]">
                Non-partisan by design.
              </h2>
            </div>

            <p className="mt-5 leading-8 text-slate-700 md:mt-0">
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