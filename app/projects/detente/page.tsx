import Link from "next/link";

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
      <section className="border-b border-[#D8D0C3] bg-[#FAF7F0]">
        <div className="mx-auto max-w-7xl px-5 py-14 md:py-18">
          <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#8A1538]">
                Free print-and-play game
              </p>

              <h1 className="serif mt-4 text-6xl font-bold leading-tight tracking-[-0.045em] text-[#111111] md:text-7xl">
                Detente
              </h1>

              <p className="mt-5 max-w-3xl text-xl leading-8 text-[#5E5A54]">
                A political negotiation game about resources, hidden goals, and
                public signals.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="/downloads/detente-rulebook.pdf"
                  className="bg-[#111111] px-6 py-3 text-center text-sm font-bold uppercase tracking-[0.08em] text-white transition hover:bg-[#8A1538]"
                >
                  Download rulebook
                </a>

                <a
                  href="#downloads"
                  className="border border-[#111111] px-6 py-3 text-center text-sm font-bold uppercase tracking-[0.08em] text-[#111111] transition hover:bg-[#111111] hover:text-white"
                >
                  View files
                </a>
              </div>
            </div>

            <aside className="border-l-4 border-[#8A1538] bg-white p-6 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#8A1538]">
                Game brief
              </p>

              <div className="mt-5 grid grid-cols-2 gap-px bg-[#D8D0C3]">
                {stats.map((stat) => (
                  <div key={stat.label} className="bg-white p-4">
                    <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#5E5A54]">
                      {stat.label}
                    </p>
                    <p className="serif mt-1 text-2xl font-bold text-[#111111]">
                      {stat.value}
                    </p>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#8A1538]">
              Overview
            </p>
            <h2 className="serif mt-2 text-3xl font-bold tracking-[-0.02em] text-[#111111]">
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
              The game is designed to help students practise negotiation,
              political deduction, strategy, and civic reasoning through a
              short tabletop simulation.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-[#D8D0C3] bg-[#F3EEE4]">
        <div className="mx-auto max-w-7xl px-5 py-12">
          <div className="mb-6 border-b border-[#111111] pb-4">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#8A1538]">
              Learning outcomes
            </p>
            <h2 className="serif mt-2 text-3xl font-bold tracking-[-0.02em] text-[#111111]">
              What students practise
            </h2>
          </div>

          <div className="grid gap-px bg-[#D8D0C3] sm:grid-cols-2 md:grid-cols-3">
            {skills.map((skill) => (
              <div key={skill} className="bg-white p-5">
                <p className="font-bold text-[#111111]">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="downloads" className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-12">
          <div className="mb-6 border-b border-[#111111] pb-4">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#8A1538]">
              Download files
            </p>
            <h2 className="serif mt-2 text-3xl font-bold tracking-[-0.02em] text-[#111111]">
              Print each file individually.
            </h2>
          </div>

          <div className="divide-y divide-[#D8D0C3] border border-[#D8D0C3]">
            {downloads.map((file) => (
              <a
                key={file.href}
                href={file.href}
                className="grid gap-4 bg-[#FAF7F0] p-5 transition hover:bg-white md:grid-cols-[0.3fr_1fr_0.15fr]"
              >
                <h3 className="serif text-2xl font-bold text-[#111111]">
                  {file.title}
                </h3>

                <p className="leading-7 text-[#5E5A54]">{file.description}</p>

                <p className="text-sm font-bold uppercase tracking-[0.08em] text-[#8A1538]">
                  PDF →
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#FAF7F0]">
        <div className="mx-auto max-w-7xl px-5 py-12">
          <div className="grid gap-8 border-t border-[#111111] pt-8 md:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#8A1538]">
                Classroom use
              </p>
              <h2 className="serif mt-2 text-3xl font-bold tracking-[-0.02em] text-[#111111]">
                Built for clubs and classrooms.
              </h2>
            </div>

            <div>
              <p className="max-w-3xl text-lg leading-8 text-[#5E5A54]">
                Detente can be used in classrooms, Model UN clubs, debate
                clubs, student councils, and youth programs as a short activity
                about negotiation, political strategy, and public
                decision-making.
              </p>

              <Link
                href="/contact"
                className="mt-6 inline-block bg-[#111111] px-5 py-3 text-sm font-bold uppercase tracking-[0.08em] text-white transition hover:bg-[#8A1538]"
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