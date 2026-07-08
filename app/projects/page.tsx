import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Parliament Tracker",
    type: "Data project",
    description:
      "Live MP roster, ridings, and real vote records pulled from Parliament's open data, flagging when an MP's ballot broke from their own party's whip.",
    href: "/projects/parliament-tracker",
    status: "Flagship",
    image:
      "https://images.unsplash.com/photo-1744339700180-d3a299e2cd1f?auto=format&fit=crop&w=800&q=80",
    imageAlt: "The Canadian Parliament building",
    photographer: "Dennis Zhang",
    photoHref:
      "https://unsplash.com/photos/the-canadian-parliament-building-stands-tall-LYKUm-VRJPs",
  },
  {
    title: "Media Bias Tracker",
    type: "AI tool",
    description:
      "Paste in any article or transcript and get a non-partisan, AI-assisted read on loaded language, framing, insinuation, and where the piece sits on the political spectrum.",
    href: "/projects/media-bias-tracker",
    status: "Flagship",
    image:
      "https://images.unsplash.com/photo-1579532536935-619928decd08?auto=format&fit=crop&w=800&q=80",
    imageAlt: "A stack of newspapers on a wooden table",
    photographer: "Annie Spratt",
    photoHref:
      "https://unsplash.com/photos/a-stack-of-newspapers-sitting-on-top-of-a-wooden-table-hWJsOnaWTqs",
  },
  {
    title: "Detente",
    type: "Print-and-play game",
    description:
      "A political negotiation game for practising strategy, persuasion, resource management, and civic thinking.",
    href: "/projects/detente",
    status: "Files available",
    image:
      "https://images.unsplash.com/photo-1528819622765-d6bcf132f793?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Chess pieces on a board",
    photographer: "Felix Mittermeier",
    photoHref: "https://unsplash.com/photos/chess-pieces-nAjil1z3eLk",
  },
  {
    title: "The Fried Rice Index",
    type: "Data project",
    description:
      "A global affordability index using the price of egg fried rice to compare cost of living across cities.",
    href: "/projects/fried-rice-index",
    status: "Live project",
    image:
      "https://images.unsplash.com/photo-1756713545237-7c97075b71da?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Bangkok street food market at night",
    photographer: "GVZ 42",
    photoHref:
      "https://unsplash.com/photos/street-food-stall-at-night-with-neon-signs-H9ZhJTDNyKE",
  },
  {
    title: "CYFFL",
    fullName: "Canadian Youth Foundation for French Literacy",
    type: "French literacy program",
    description:
      "A youth-led initiative creating free online French learning resources and local academic support for students.",
    href: "/projects/cyffl",
    status: "Live project",
    image:
      "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Open book in a library",
    photographer: "Aaron Burden",
    photoHref: "https://unsplash.com/photos/1zR3WNSTnvY",
  },
];

export default function ProjectsPage() {
  return (
    <div>
      <section className="border-b border-[#D8D0C3] bg-[#FAF7F0]">
        <div className="mx-auto max-w-7xl px-5 py-14 md:py-18">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#C9A94B]">
            Projects
          </p>

          <h1 className="serif mt-4 max-w-4xl text-5xl font-bold leading-tight tracking-[-0.035em] text-[#1C3557] md:text-6xl">
            Games, data, and civic tools.
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-[#5E5A54]">
            Civics Studio builds practical projects that make politics,
            economics, negotiation, affordability, French learning, and civic
            participation easier to understand.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-12">
          <div className="grid gap-6 md:grid-cols-3">
            {projects.map((project) => (
              <div key={project.title} className="flex flex-col">
                <Link
                  href={project.href}
                  className="group flex h-full flex-col overflow-hidden border border-[#D8D0C3] bg-[#FAF7F0] transition hover:shadow-md"
                >
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

                  <div className="flex flex-1 flex-col p-7">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h2 className="serif text-4xl font-bold tracking-[-0.035em] text-[#1C3557]">
                          {project.title}
                        </h2>

                        {"fullName" in project && (
                          <p className="mt-2 text-sm font-semibold leading-5 text-[#5E5A54]">
                            {project.fullName}
                          </p>
                        )}
                      </div>

                      <p className="mt-2 shrink-0 text-right text-xs font-bold uppercase tracking-[0.08em] text-[#5E5A54]">
                        {project.status}
                      </p>
                    </div>

                    <p className="mt-4 max-w-xl leading-7 text-[#5E5A54]">
                      {project.description}
                    </p>

                    <p className="mt-auto pt-7 text-sm font-bold uppercase tracking-[0.08em] text-[#1C3557] group-hover:text-[#C9A94B]">
                      View project →
                    </p>
                  </div>
                </Link>

                <p className="mt-1 text-right text-[10px] text-[#5E5A54]/60">
                  <a
                    href={project.photoHref}
                    target="_blank"
                    rel="noreferrer"
                    className="transition hover:text-[#5E5A54]"
                  >
                    Photo: {project.photographer} / Unsplash
                  </a>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}