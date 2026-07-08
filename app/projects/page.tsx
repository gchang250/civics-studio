import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Parliament Tracker",
    type: "Data project",
    description:
      "Live MP roster, ridings, and real vote records pulled straight from Parliament's open data, flagging when an MP's ballot broke from their own party's whip.",
    href: "/projects/parliament-tracker",
    status: "Live project",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Minimalist modern concrete architecture facade",
    photographer: "Jean-Philippe Delberghe",
    photoHref:
      "https://unsplash.com/photos/minimalist-architecture-with-clean-lines-and-concrete-wall-793K7V0Z8v8",
  },
  {
    title: "Media Bias Detector",
    type: "AI tool",
    description:
      "Paste in any article or transcript and get a non-partisan, AI-assisted read on loaded language, framing, insinuation, and where the piece sits on the political spectrum.",
    href: "/projects/media-bias-tracker",
    status: "Live project",
    image:
      "https://images.unsplash.com/photo-1566378246598-5b11a0d486cc?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Minimalist black and white newspaper page with fine typography",
    photographer: "Christin Hume",
    photoHref:
      "https://unsplash.com/photos/a-stack-of-newspaper-pages-laying-flat-H9ZhJTDNyKE",
  },
  {
    title: "Detente",
    type: "Print-and-play game",
    description:
      "A political negotiation game for practising strategy, persuasion, resource management, and civic thinking.",
    href: "/projects/detente",
    status: "Files available",
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Abstract rendering of soft minimalist architectural waves in cream and terracotta",
    photographer: "Google DeepMind",
    photoHref: "https://unsplash.com/photos/abstract-soft-3d-render-curves-nAjil1z3eLk",
  },
  {
    title: "The Fried Rice Index",
    type: "Data project",
    description:
      "A global affordability index using the price of egg fried rice to compare cost of living across cities.",
    href: "/projects/fried-rice-index",
    status: "Live project",
    image:
      "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Minimalist ceramic plate and linen fabric napkin on a concrete surface",
    photographer: "Evgeni Tcherkasski",
    photoHref:
      "https://unsplash.com/photos/minimal-white-ceramic-plate-on-beige-linen-cloth-H9ZhJTDNyKE",
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
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Sleek minimalist white book with blank cover resting in soft sunlight",
    photographer: "Hope House Press",
    photoHref: "https://unsplash.com/photos/white-hardbound-book-on-beige-surface-bxiOjnbjRM0",
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