import Image from "next/image";
import Link from "next/link";
import DownloadLink from "@/app/components/DownloadLink";
import Comments from "@/app/components/Comments";

const stats = [
  { label: "Players", value: "4–6" },
  { label: "Time", value: "~20 min" },
  { label: "Age", value: "14+" },
  { label: "Cost", value: "Free" },
];

const skills = [
  "Negotiation",
  "Diplomacy",
  "Strategic thinking",
  "Political deduction",
  "Resource management",
  "Reading incentives",
];

const downloads = [
  {
    title: "Rulebook",
    description:
      "Full rules, setup instructions, turn structure, win conditions, and strategy notes.",
    href: "/downloads/detente-rulebook.pdf",
  },
  {
    title: "Cards",
    description:
      "Country Type cards and Secret Goal cards for printing, cutting, and playing.",
    href: "/downloads/detente-cards.pdf",
  },
  {
    title: "Resource Bills",
    description:
      "Printable Oil, Gold, Grain, and Arms resource bills in multiple denominations.",
    href: "/downloads/detente-resource-bills.pdf",
  },
  {
    title: "Print Guide",
    description:
      "Quick checklist for printing, cutting, organizing, and setting up the game files.",
    href: "/downloads/detente-print-guide.pdf",
  },
];

export default function DetentePage() {
  return (
    <div className="bg-[#faf8f5]">
      {/* Hero */}
      <section className="border-b border-[#e5e0d4] bg-[#f3efe6]">
        <div className="mx-auto max-w-7xl px-5 py-14 md:py-18">
          <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr]">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#8b1e1e] lowercase">
                free print-and-play game
              </p>

              <h1 className="serif mt-4 text-5xl font-normal italic leading-tight tracking-[-0.02em] text-[#111f36] md:text-6xl lowercase">
                détente
              </h1>

              <p className="mt-5 max-w-3xl text-xl leading-8 text-[#5f697a]">
                A political negotiation game about resources, hidden goals, and
                the signals every deal sends.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <DownloadLink
                  href="/downloads/detente-rulebook.pdf"
                  file="Rulebook"
                  className="border border-[#111f36] px-6 py-3 text-center text-sm font-medium uppercase tracking-[0.08em] text-[#111f36] transition hover:bg-[#8b1e1e] hover:text-white hover:border-[#8b1e1e]"
                >
                  Download rulebook
                </DownloadLink>

                <a
                  href="#downloads"
                  className="border border-[#111f36]/30 px-6 py-3 text-center text-sm font-medium uppercase tracking-[0.08em] text-[#111f36]/70 transition hover:bg-[#8b1e1e] hover:text-white hover:border-[#8b1e1e]"
                >
                  View files
                </a>
              </div>
            </div>

            <aside className="border border-[#e5e0d4] bg-[#faf8f5] p-6">
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#8b1e1e] lowercase">
                game brief
              </p>

              <div className="mt-5 grid grid-cols-2 gap-px bg-[#e5e0d4] border border-[#e5e0d4]">
                {stats.map((stat) => (
                  <div key={stat.label} className="bg-[#faf8f5] p-4">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8b1e1e] lowercase">
                      {stat.label}
                    </p>
                    <p className="serif mt-1 text-2xl font-normal italic text-[#111f36] lowercase">
                      {stat.value}
                    </p>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Photo banner */}
      <div className="relative h-64 overflow-hidden bg-[#111f36]">
        <Image
          src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1600&q=85"
          alt="Close-up of a vintage world map lying flat on a table"
          fill
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-[#111f36]/30 pointer-events-none" />
        <a
          href="https://unsplash.com/photos/a-close-up-of-a-world-map-on-a-table-H9ZhJTDNyKE"
          target="_blank"
          rel="noreferrer"
          className="absolute bottom-2 right-3 text-[10px] text-white/40 hover:text-white/70 transition lowercase"
        >
          photo: unsplash
        </a>
      </div>

      {/* Overview */}
      <section className="bg-[#faf8f5]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#8b1e1e] lowercase">
              overview
            </p>
            <h2 className="serif mt-2 text-3xl font-normal italic tracking-[-0.01em] text-[#111f36] lowercase">
              every deal is a signal.
            </h2>
          </div>

          <div className="max-w-3xl text-lg leading-8 text-[#5f697a]">
            <p>
              Players act as world leaders competing to achieve secret political
              goals. They trade resources, read incentives, obscure their real
              motives, and decide when to accuse another player.
            </p>

            <p className="mt-5">
              Designed for classrooms and clubs, Detente gives students hands-on
              practice with negotiation, political deduction, and strategic
              reasoning — compressed into a 20-minute tabletop game.
            </p>
          </div>
        </div>
      </section>

      {/* Learning outcomes */}
      <section className="border-y border-[#e5e0d4] bg-[#f3efe6]">
        <div className="mx-auto max-w-7xl px-5 py-12">
          <div className="mb-6 border-b border-[#e5e0d4] pb-4">
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#8b1e1e] lowercase">
              learning outcomes
            </p>
            <h2 className="serif mt-2 text-3xl font-normal italic tracking-[-0.01em] text-[#111f36] lowercase">
              what students practise
            </h2>
          </div>

          <div className="grid gap-px bg-[#e5e0d4] sm:grid-cols-2 md:grid-cols-3 border border-[#e5e0d4]">
            {skills.map((skill) => (
              <div key={skill} className="bg-[#faf8f5] p-5">
                <p className="font-semibold text-[#111f36]">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Downloads */}
      <section id="downloads" className="bg-[#faf8f5]">
        <div className="mx-auto max-w-7xl px-5 py-12">
          <div className="mb-6 border-b border-[#e5e0d4] pb-4">
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#8b1e1e] lowercase">
              download files
            </p>
            <h2 className="serif mt-2 text-3xl font-normal italic tracking-[-0.01em] text-[#111f36] lowercase">
              print each file individually.
            </h2>
          </div>

          <div className="divide-y divide-[#e5e0d4] border border-[#e5e0d4]">
            {downloads.map((file) => (
              <DownloadLink
                key={file.href}
                href={file.href}
                file={file.title}
                className="grid gap-4 bg-[#f3efe6] p-5 transition hover:bg-[#faf8f5] md:grid-cols-[0.3fr_1fr_0.15fr]"
              >
                <h3 className="serif text-2xl font-normal italic text-[#111f36] lowercase">
                  {file.title}
                </h3>

                <p className="leading-7 text-[#5f697a]">{file.description}</p>

                <p className="text-sm font-semibold uppercase tracking-[0.08em] text-[#8b1e1e] lowercase">
                  pdf →
                </p>
              </DownloadLink>
            ))}
          </div>
        </div>
      </section>

      {/* Classroom use */}
      <section className="bg-[#faf8f5]">
        <div className="mx-auto max-w-7xl px-5 py-12">
          <div className="grid gap-8 border-t border-[#e5e0d4] pt-8 md:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#8b1e1e] lowercase">
                classroom use
              </p>
              <h2 className="serif mt-2 text-3xl font-normal italic tracking-[-0.01em] text-[#111f36] lowercase">
                built for clubs and classrooms.
              </h2>
            </div>

            <div>
              <p className="max-w-3xl text-lg leading-8 text-[#5f697a]">
                Detente works in classrooms, Model UN clubs, debate teams,
                student councils, and youth programs as a short, replayable
                activity about negotiation, political strategy, and collective
                decision-making.
              </p>

              <Link
                href="/contact"
                className="mt-6 inline-block border border-[#111f36] px-5 py-3 text-center text-sm font-medium uppercase tracking-[0.08em] text-[#111f36] transition hover:bg-[#8b1e1e] hover:text-white hover:border-[#8b1e1e]"
              >
                Contact Civics Studio
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Comments pageId="detente" />
    </div>
  );
}
