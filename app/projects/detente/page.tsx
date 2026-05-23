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
    <div className="bg-[#f7f1e6]">
      <section className="mx-auto max-w-7xl px-5 py-12">
        <div className="border-b-2 border-slate-950 pb-10">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#8b1e1e] sans">
            Free print-and-play game
          </p>

          <h1 className="mt-5 text-7xl font-black uppercase leading-[0.88] tracking-[-0.06em] text-[#071d3a] md:text-9xl">
            Detente
          </h1>

          <p className="mt-6 max-w-4xl text-2xl leading-9 text-slate-800">
            A political negotiation game about resources, hidden goals, and
            public signals.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5">
        <div className="grid gap-8 border-b-2 border-slate-950 pb-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="text-lg leading-9 text-slate-800">
            <p>
              Detente is a fast-paced card and resource game where players act
              as world leaders competing to achieve secret political goals.
              Every trade reveals information. Every deal creates suspicion.
              Every player has to negotiate, observe, mislead, and decide when
              to trust others.
            </p>

            <p className="mt-6">
              The game is designed to help students practise negotiation,
              strategic thinking, political deduction, and civic literacy
              through a format that is active instead of theoretical.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sans">
              <a
                href="/downloads/detente-rulebook.pdf"
                className="border-2 border-slate-950 bg-[#071d3a] px-6 py-3 text-center text-sm font-bold uppercase tracking-[0.14em] text-white transition hover:bg-slate-950"
              >
                Download Rulebook
              </a>

              <a
                href="#downloads"
                className="border-2 border-slate-950 bg-transparent px-6 py-3 text-center text-sm font-bold uppercase tracking-[0.14em] text-slate-950 transition hover:bg-slate-950 hover:text-white"
              >
                View Individual Files
              </a>
            </div>
          </div>

          <aside className="border-2 border-slate-950 bg-[#fffaf0]">
            <h2 className="border-b-2 border-slate-950 px-6 py-4 text-sm font-bold uppercase tracking-[0.2em] text-[#071d3a] sans">
              Game Brief
            </h2>

            <div className="grid grid-cols-2">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`p-6 ${
                    index === 0 || index === 2 ? "border-r border-slate-950" : ""
                  } ${index < 2 ? "border-b border-slate-950" : ""}`}
                >
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-600 sans">
                    {stat.label}
                  </p>
                  <p className="mt-2 text-3xl font-black text-slate-950">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="border-t-2 border-slate-950 bg-[#071d3a] p-6 text-white">
              <h3 className="text-xl font-black uppercase">Core idea</h3>
              <p className="mt-3 text-sm leading-7 text-slate-200 sans">
                In politics, every action is a signal. Detente turns
                negotiation, trade, suspicion, and strategy into a replayable
                tabletop experience.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12">
        <div className="border-b-2 border-slate-950 pb-4">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#8b1e1e] sans">
            Learning outcomes
          </p>
          <h2 className="mt-2 text-5xl font-black uppercase tracking-[-0.05em] text-[#071d3a]">
            What students practise
          </h2>
        </div>

        <div className="grid border-b-2 border-slate-950 sm:grid-cols-2 md:grid-cols-3">
          {skills.map((skill) => (
            <div
              key={skill}
              className="border-r border-b border-slate-950 bg-[#fffaf0] p-6 text-lg font-bold last:border-r-0"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12">
        <div className="grid gap-8 border-b-2 border-slate-950 pb-12 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#8b1e1e] sans">
              Rules summary
            </p>
            <h2 className="mt-3 text-4xl font-black uppercase leading-none tracking-[-0.04em] text-slate-950">
              How the game works
            </h2>
          </div>

          <div className="text-lg leading-9 text-slate-800">
            <p>
              Each player receives a Country Type card, starting resources, and
              a secret Goal card. On their turn, players negotiate trades or
              accuse another player of pursuing a specific goal.
            </p>

            <p className="mt-6">
              The first player to complete their secret goal wins. A player can
              also eliminate another player by correctly identifying their goal.
              Every trade gives other players information, so winning requires
              both strategy and misdirection.
            </p>
          </div>
        </div>
      </section>

      <section id="downloads" className="mx-auto max-w-7xl px-5 py-12">
        <div className="border-b-2 border-slate-950 pb-4">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#8b1e1e] sans">
            Download files
          </p>

          <h2 className="mt-2 text-5xl font-black uppercase tracking-[-0.05em] text-[#071d3a]">
            Print each file individually
          </h2>
        </div>

        <div className="divide-y-2 divide-slate-950 border-b-2 border-slate-950 bg-[#fffaf0]">
          {downloads.map((file) => (
            <a
              key={file.href}
              href={file.href}
              className="grid gap-4 p-6 transition hover:bg-white md:grid-cols-[0.35fr_1fr_0.15fr]"
            >
              <h3 className="text-2xl font-black uppercase tracking-[-0.03em] text-slate-950">
                {file.title}
              </h3>

              <p className="text-base leading-7 text-slate-700 sans">
                {file.description}
              </p>

              <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#8b1e1e] sans">
                PDF →
              </p>
            </a>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12">
        <div className="grid gap-8 border-2 border-slate-950 bg-[#071d3a] p-8 text-white md:grid-cols-[0.8fr_1.2fr] md:p-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-slate-300 sans">
              For classrooms and clubs
            </p>

            <h2 className="mt-3 text-4xl font-black uppercase leading-none tracking-[-0.04em]">
              Use Detente as a civic simulation.
            </h2>
          </div>

          <div>
            <p className="text-lg leading-9 text-slate-200">
              Detente can be used in classrooms, Model UN clubs, debate clubs,
              student councils, and youth programs as a short activity about
              negotiation, political strategy, public decision-making, and
              resource competition.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-block border-2 border-white px-6 py-3 text-sm font-bold uppercase tracking-[0.14em] text-white transition hover:bg-white hover:text-[#071d3a] sans"
            >
              Contact Civics Studio
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}