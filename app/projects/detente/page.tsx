import Image from "next/image";
import Link from "next/link";
import DownloadLink from "@/app/components/DownloadLink";

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
    <div>
      {/* Hero */}
      <section className="border-b border-[#D8D0C3] bg-[#FAF7F0]">
        <div className="mx-auto max-w-7xl px-5 py-14 md:py-18">
          <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#C9A94B]">
                Free print-and-play game
              </p>

              <h1 className="serif mt-4 text-6xl font-bold leading-tight tracking-[-0.045em] text-[#1C3557] md:text-7xl">
                Detente
              </h1>

              <p className="mt-5 max-w-3xl text-xl leading-8 text-[#5E5A54]">
                A political negotiation game about resources, hidden goals, and
                the signals every deal sends.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <DownloadLink
                  href="/downloads/detente-rulebook.pdf"
                  file="Rulebook"
                  className="bg-[#1C3557] px-6 py-3 text-center text-sm font-bold uppercase tracking-[0.08em] text-white transition hover:bg-[#C9A94B] hover:text-[#1C3557]"
                >
                  Download rulebook
                </DownloadLink>

                <a
                  href="#downloads"
                  className="border border-[#1C3557] px-6 py-3 text-center text-sm font-bold uppercase tracking-[0.08em] text-[#1C3557] transition hover:bg-[#1C3557] hover:text-white"
                >
                  View files
                </a>
              </div>
            </div>

            <aside className="border-l-4 border-[#C9A94B] bg-white p-6 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#C9A94B]">
                Game brief
              </p>

              <div className="mt-5 grid grid-cols-2 gap-px bg-[#D8D0C3]">
                {stats.map((stat) => (
                  <div key={stat.label} className="bg-white p-4">
                    <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#5E5A54]">
                      {stat.label}
                    </p>
                    <p className="serif mt-1 text-2xl font-bold text-[#1C3557]">
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
      <div className="relative h-64 overflow-hidden bg-[#1C3557]">
        <Image
          src="https://images.unsplash.com/photo-1689859438394-2b59a858e31c?auto=format&fit=crop&w=1600&q=85"
          alt="Row of international flags in front of a building"
          fill
          className="object-cover opacity-75"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1C3557]/60 to-transparent" />
        <a
          href="https://unsplash.com/photos/a-long-row-of-flags-in-front-of-a-building-PoZzH23r1oo"
          target="_blank"
          rel="noreferrer"
          className="absolute bottom-2 right-3 text-[10px] text-white/40 hover:text-white/70 transition"
        >
          Photo: Meizhi Lang / Unsplash
        </a>
      </div>

      {/* Overview */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#C9A94B]">
              Overview
            </p>
            <h2 className="serif mt-2 text-3xl font-bold tracking-[-0.02em] text-[#1C3557]">
              Every deal is a signal.
            </h2>
          </div>

          <div className="max-w-3xl text-lg leading-8 text-[#5E5A54]">
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
      <section className="border-y border-[#D8D0C3] bg-[#F3EEE4]">
        <div className="mx-auto max-w-7xl px-5 py-12">
          <div className="mb-6 border-b border-[#1C3557] pb-4">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#C9A94B]">
              Learning outcomes
            </p>
            <h2 className="serif mt-2 text-3xl font-bold tracking-[-0.02em] text-[#1C3557]">
              What students practise
            </h2>
          </div>

          <div className="grid gap-px bg-[#D8D0C3] sm:grid-cols-2 md:grid-cols-3">
            {skills.map((skill) => (
              <div key={skill} className="bg-white p-5">
                <p className="font-bold text-[#1C3557]">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Downloads */}
      <section id="downloads" className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-12">
          <div className="mb-6 border-b border-[#1C3557] pb-4">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#C9A94B]">
              Download files
            </p>
            <h2 className="serif mt-2 text-3xl font-bold tracking-[-0.02em] text-[#1C3557]">
              Print each file individually.
            </h2>
          </div>

          <div className="divide-y divide-[#D8D0C3] border border-[#D8D0C3]">
            {downloads.map((file) => (
              <DownloadLink
                key={file.href}
                href={file.href}
                file={file.title}
                className="grid gap-4 bg-[#FAF7F0] p-5 transition hover:bg-white md:grid-cols-[0.3fr_1fr_0.15fr]"
              >
                <h3 className="serif text-2xl font-bold text-[#1C3557]">
                  {file.title}
                </h3>

                <p className="leading-7 text-[#5E5A54]">{file.description}</p>

                <p className="text-sm font-bold uppercase tracking-[0.08em] text-[#C9A94B]">
                  PDF →
                </p>
              </DownloadLink>
            ))}
          </div>
        </div>
      </section>

      {/* Classroom use */}
      <section className="bg-[#FAF7F0]">
        <div className="mx-auto max-w-7xl px-5 py-12">
          <div className="grid gap-8 border-t border-[#1C3557] pt-8 md:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#C9A94B]">
                Classroom use
              </p>
              <h2 className="serif mt-2 text-3xl font-bold tracking-[-0.02em] text-[#1C3557]">
                Built for clubs and classrooms.
              </h2>
            </div>

            <div>
              <p className="max-w-3xl text-lg leading-8 text-[#5E5A54]">
                Detente works in classrooms, Model UN clubs, debate teams,
                student councils, and youth programs as a short, replayable
                activity about negotiation, political strategy, and collective
                decision-making.
              </p>

              <Link
                href="/contact"
                className="mt-6 inline-block bg-[#1C3557] px-5 py-3 text-sm font-bold uppercase tracking-[0.08em] text-white transition hover:bg-[#C9A94B] hover:text-[#1C3557]"
              >
                Contact Civics Studio
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
