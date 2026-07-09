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
      "https://images.unsplash.com/photo-1744339700180-d3a299e2cd1f?auto=format&fit=crop&w=800&q=80",
    imageAlt: "A beautiful, minimalist view of the Canadian Parliament building and Peace Tower",
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
      "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Minimalist newspaper lying flat on a clean table surface",
    photographer: "Roman Kraft",
    photoHref:
      "https://unsplash.com/photos/a-folded-newspaper-lying-on-a-surface-H9ZhJTDNyKE",
  },
  {
    title: "Detente",
    type: "Print-and-play game",
    description:
      "A political negotiation game for practising strategy, persuasion, resource management, and civic thinking.",
    href: "/projects/detente",
    status: "Files available",
    image:
      "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Close-up of minimalist wooden chess pieces standing on a board",
    photographer: "Randy Fath",
    photoHref: "https://unsplash.com/photos/chess-pieces-on-board-nAjil1z3eLk",
  },
  {
    title: "The CanPol Index",
    type: "Data project",
    description:
      "A cost-of-living index mapped across Canada's 338 federal electoral districts. Housing, food, and transport costs — broken down by riding.",
    href: "/projects/fried-rice-index",
    status: "Live project",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Aerial view of a Canadian city with residential neighbourhoods stretching to the horizon",
    photographer: "Unsplash",
    photoHref:
      "https://unsplash.com/photos/aerial-view-of-city-buildings-during-daytime",
  },
  {
    title: "CYFFL",
    fullName: "Canadian Youth Foundation for French Literacy",
    type: "French literacy program",
    description:
      "A youth-led initiative bridging the gap for bilingual education and preserving French identity for youth, responding directly to a national deficit of 10,000 qualified French teachers.",
    href: "/projects/cyffl",
    status: "Live project",
    image:
      "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Close-up of a person reading an elegant classic open book under soft window light",
    photographer: "Carolyn V",
    photoHref: "https://unsplash.com/photos/person-reading-book-bxiOjnbjRM0",
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