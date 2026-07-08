import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Parliament Tracker",
    type: "Data project",
    description:
      "Live MP roster, ridings, and real vote records pulled from Parliament's open data, flagging when an MP's ballot broke from their own party's whip.",
    href: "/projects/parliament-tracker",
    status: "Live project",
    image:
      "https://images.unsplash.com/photo-1744339700180-d3a299e2cd1f?auto=format&fit=crop&w=800&q=80",
    imageAlt: "The Canadian Parliament building",
    photographer: "Dennis Zhang",
    photoHref:
      "https://unsplash.com/photos/the-canadian-parliament-building-stands-tall-LYKUm-VRJPs",
  },
  {
    title: "Media Bias Detector",
    type: "AI tool",
    description:
      "Paste in any article or transcript and get a non-partisan, AI-assisted read on loaded language, framing, insinuation, and where the piece sits on the political spectrum.",
    href: "/projects/media-bias-tracker",
    status: "Live project",
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
    <div className="bg-[#faf8f5]">
      <section className="border-b border-[#e5e0d4] bg-[#faf8f5]">
        <div className="mx-auto max-w-7xl px-5 py-16 md:py-20">
          <p className="text-xs font-semibold tracking-[0.25em] text-[#8b1e1e] lowercase">
            projects
          </p>

          <h1 className="serif mt-4 max-w-4xl text-5xl font-normal italic leading-tight tracking-[-0.02em] text-[#111f36] md:text-6xl lowercase">
            games, data, and civic tools.
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-[#5f697a]">
            Civics Studio builds practical projects that make politics,
            economics, negotiation, affordability, French learning, and civic
            participation easier to understand.
          </p>
        </div>
      </section>

      <section className="bg-[#faf8f5]">
        <div className="mx-auto max-w-7xl px-5 py-16">
          <div className="grid gap-8 md:grid-cols-3">
            {projects.map((project) => (
              <div key={project.title} className="flex flex-col">
                <Link
                  href={project.href}
                  className="group flex h-full flex-col overflow-hidden border border-[#e5e0d4] bg-[#faf8f5] p-3 transition duration-300 hover:border-[#8b1e1e]/40"
                >
                  <div className="relative h-56 overflow-hidden bg-[#f3efe6]">
                    <Image
                      src={project.image}
                      alt={project.imageAlt}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-103"
                    />

                    <div className="absolute inset-0 bg-[#8b1e1e]/5" />

                    <p className="absolute bottom-3 left-3 text-[10px] font-semibold tracking-[0.2em] bg-[#faf8f5]/90 px-3 py-1.5 text-[#8b1e1e] lowercase">
                      {project.type}
                    </p>
                  </div>

                  <div className="flex flex-1 flex-col p-4">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h2 className="serif text-3xl font-normal italic tracking-[-0.01em] text-[#111f36] lowercase">
                          {project.title}
                        </h2>

                        {"fullName" in project && (
                          <p className="mt-1.5 text-xs font-semibold leading-5 text-[#5f697a] lowercase">
                            {project.fullName}
                          </p>
                        )}
                      </div>

                      <p className="mt-2 shrink-0 text-right text-[10px] font-bold tracking-[0.15em] text-[#5f697a]/60 lowercase">
                        {project.status}
                      </p>
                    </div>

                    <p className="mt-4 text-sm leading-6 text-[#5f697a]">
                      {project.description}
                    </p>

                    <p className="mt-auto pt-6 text-[11px] font-bold tracking-[0.15em] text-[#111f36] transition duration-300 group-hover:text-[#8b1e1e] lowercase">
                      view project →
                    </p>
                  </div>
                </Link>

                <p className="mt-2 text-right text-[9px] text-[#5f697a]/50 lowercase">
                  <a
                    href={project.photoHref}
                    target="_blank"
                    rel="noreferrer"
                    className="transition hover:text-[#8b1e1e]"
                  >
                    photo: {project.photographer} / unsplash
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