import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Detente",
    type: "Print-and-play game",
    description:
      "A political negotiation game that helps students practise strategy, persuasion, deduction, and civic thinking.",
    href: "/projects/detente",
    cta: "Download files",
    image:
      "https://images.unsplash.com/photo-1528819622765-d6bcf132f793?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Chess pieces on a board",
    photographer: "Felix Mittermeier",
    photoHref:
      "https://unsplash.com/photos/chess-pieces-nAjil1z3eLk",
  },
  {
    title: "The Fried Rice Index",
    type: "Data project",
    description:
      "A global affordability index comparing cities through the price of a bowl of egg fried rice.",
    href: "/projects/fried-rice-index",
    cta: "Visit index",
    image:
      "https://images.unsplash.com/photo-1756713545237-7c97075b71da?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Bangkok street food market at night",
    photographer: "GVZ 42",
    photoHref:
      "https://unsplash.com/photos/street-food-stall-at-night-with-neon-signs-H9ZhJTDNyKE",
  },
];

const briefs = [
  {
    title: "Free civic tools",
    text: "Resources designed for students, classrooms, clubs, and youth organizations.",
  },
  {
    title: "Games and simulations",
    text: "Interactive projects that make negotiation, incentives, and political decision-making easier to understand.",
  },
  {
    title: "Economic literacy",
    text: "Data projects that connect everyday prices to bigger questions about affordability and inequality.",
  },
];

export default function HomePage() {
  return (
    <div>
      {/* Hero — split layout: text left, civic photo right */}
      <section className="border-b border-[#D8D0C3] bg-[#FAF7F0]">
        <div className="mx-auto grid max-w-7xl lg:grid-cols-[1fr_1fr]">

          {/* Left — text */}
          <div className="flex flex-col justify-center px-5 py-16 md:py-20 lg:pr-12">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#C9A94B]">
              Civic education, made practical
            </p>

            <h1 className="serif mt-5 text-5xl font-bold leading-[1.02] tracking-[-0.045em] text-[#1C3557] md:text-6xl xl:text-7xl">
              Helping students understand how politics, economics, and government work.
            </h1>

            <p className="mt-7 max-w-lg text-xl leading-8 text-[#5E5A54]">
              Civics Studio creates free games, data projects, and learning
              resources that make civic systems easier to understand and use.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/projects"
                className="bg-[#1C3557] px-6 py-3 text-center text-sm font-bold uppercase tracking-[0.08em] text-white transition hover:bg-[#C9A94B] hover:text-[#1C3557]"
              >
                View projects
              </Link>

              <Link
                href="/projects/detente"
                className="border border-[#1C3557] px-6 py-3 text-center text-sm font-bold uppercase tracking-[0.08em] text-[#1C3557] transition hover:bg-[#1C3557] hover:text-white"
              >
                Download Detente
              </Link>
            </div>

            {/* Studio Brief — sits below the CTA buttons */}
            <div className="mt-10 border-l-4 border-[#C9A94B] bg-white p-5 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#C9A94B]">
                Studio brief
              </p>
              <p className="serif mt-2 text-lg font-bold leading-snug text-[#1C3557]">
                Non-partisan learning resources for civic and economic literacy.
              </p>
            </div>
          </div>

          {/* Right — photo */}
          <div className="relative hidden min-h-[520px] overflow-hidden lg:block">
            <Image
              src="https://images.unsplash.com/photo-1744339700180-d3a299e2cd1f?auto=format&fit=crop&w=1200&q=85"
              alt="Canadian Parliament building"
              fill
              className="object-cover"
              priority
            />
            {/* Subtle navy overlay for brand cohesion */}
            <div className="absolute inset-0 bg-[#1C3557]/20" />
            <a
              href="https://unsplash.com/photos/the-canadian-parliament-building-stands-tall-LYKUm-VRJPs"
              target="_blank"
              rel="noreferrer"
              className="absolute bottom-2 right-3 text-[10px] text-white/40 hover:text-white/70 transition"
            >
              Photo: Dennis Zhang / Unsplash
            </a>
          </div>
        </div>
      </section>

      {/* Projects — image cards */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-12">
          <div className="mb-8 flex items-end justify-between gap-6 border-b-2 border-[#C9A94B] pb-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#C9A94B]">
                Featured work
              </p>
              <h2 className="serif mt-2 text-4xl font-bold tracking-[-0.03em] text-[#1C3557]">
                Projects
              </h2>
            </div>

            <Link
              href="/projects"
              className="hidden text-sm font-bold uppercase tracking-[0.08em] text-[#1C3557] transition hover:text-[#C9A94B] md:block"
            >
              All projects →
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <div key={project.title} className="flex flex-col">
                <Link
                  href={project.href}
                  className="group overflow-hidden border border-[#D8D0C3] bg-[#FAF7F0] transition hover:shadow-md"
                >
                  {/* Photo */}
                  <div className="relative h-52 overflow-hidden bg-[#1C3557]">
                    <Image
                      src={project.image}
                      alt={project.imageAlt}
                      fill
                      className="object-cover opacity-90 transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1C3557]/50 to-transparent" />
                    <p className="absolute bottom-4 left-5 text-xs font-bold uppercase tracking-[0.18em] text-[#C9A94B]">
                      {project.type}
                    </p>
                  </div>

                  {/* Text */}
                  <div className="p-7">
                    <h3 className="serif text-4xl font-bold tracking-[-0.035em] text-[#1C3557]">
                      {project.title}
                    </h3>

                    <p className="mt-4 leading-7 text-[#5E5A54]">
                      {project.description}
                    </p>

                    <p className="mt-6 text-sm font-bold uppercase tracking-[0.08em] text-[#1C3557] transition group-hover:text-[#C9A94B]">
                      {project.cta} →
                    </p>
                  </div>
                </Link>
                <p className="mt-1 text-right text-[10px] text-[#5E5A54]/60">
                  <a href={project.photoHref} target="_blank" rel="noreferrer" className="hover:text-[#5E5A54] transition">
                    Photo: {project.photographer} / Unsplash
                  </a>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="border-y border-[#D8D0C3] bg-[#F3EEE4]">
        <div className="mx-auto max-w-7xl px-5 py-12">
          <div className="grid gap-6 md:grid-cols-3">
            {briefs.map((brief) => (
              <div
                key={brief.title}
                className="border-t-4 border-[#C9A94B] bg-white p-6 shadow-sm"
              >
                <h3 className="serif text-2xl font-bold text-[#1C3557]">
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

      {/* Non-partisan statement */}
      <section className="bg-[#FAF7F0]">
        <div className="mx-auto max-w-7xl px-5 py-14">
          <div className="grid gap-8 border-t-2 border-[#C9A94B] pt-8 md:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#C9A94B]">
                Statement
              </p>
              <h2 className="serif mt-2 text-3xl font-bold tracking-[-0.02em] text-[#1C3557]">
                Non-partisan by design.
              </h2>
            </div>

            <p className="max-w-3xl text-lg leading-8 text-[#5E5A54]">
              Civics Studio does not promote any political party or ideology.
              The goal is to help people understand how civic systems work —
              and participate in them more thoughtfully.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
