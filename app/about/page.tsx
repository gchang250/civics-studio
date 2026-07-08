import Image from "next/image";

export default function AboutPage() {
  return (
    <div>
      {/* Hero — split layout */}
      <section className="border-b border-[#D8D0C3] bg-[#FAF7F0]">
        <div className="mx-auto grid max-w-7xl lg:grid-cols-[1fr_1fr]">

          {/* Left — text */}
          <div className="flex flex-col justify-center px-5 py-14 md:py-18 lg:pr-12">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#C9A94B]">
              About
            </p>

            <h1 className="serif mt-4 text-5xl font-bold leading-tight tracking-[-0.035em] text-[#1C3557] md:text-6xl">
              Civics Studio is a youth-led Canadian civic education project.
            </h1>

            <p className="mt-5 max-w-xl text-lg leading-8 text-[#5E5A54]">
              The project creates free games, data tools, and learning resources
              that make politics, economics, and government more accessible and
              easier to understand.
            </p>
          </div>

          {/* Right — photo */}
          <div className="relative hidden min-h-[420px] overflow-hidden lg:block">
            <Image
              src="https://images.unsplash.com/photo-1761322572550-967ea8c0bfd9?auto=format&fit=crop&w=900&q=80"
              alt="Open notebook with pen and pencils on desk"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-[#1C3557]/15" />
            <a
              href="https://unsplash.com/photos/open-notebook-with-pen-and-pencils-on-desk-n9AaeihA9HI"
              target="_blank"
              rel="noreferrer"
              className="absolute bottom-2 right-3 text-[10px] text-white/40 hover:text-white/70 transition"
            >
              Photo: Clay Banks / Unsplash
            </a>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#C9A94B]">
              Mission
            </p>
            <h2 className="serif mt-2 text-3xl font-bold tracking-[-0.02em] text-[#1C3557]">
              Promoting independent representation in Canada.
            </h2>
          </div>

          <p className="max-w-3xl text-lg leading-8 text-[#5E5A54]">
            Canada&apos;s House of Commons has 343 elected members. Party discipline
            and whipping routinely collapse those voices into two effective
            factions. Civics Studio was built to help Canadians understand how
            their political system works and why independent representation
            matters.
          </p>
        </div>
      </section>

      {/* Current work */}
      <section className="border-y border-[#D8D0C3] bg-[#F3EEE4]">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 py-12 md:grid-cols-2">
          <div className="bg-white p-6 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#C9A94B]">
              Current work
            </p>
            <h2 className="serif mt-3 text-3xl font-bold tracking-[-0.02em] text-[#1C3557]">
              Games and data projects.
            </h2>
            <p className="mt-4 leading-8 text-[#5E5A54]">
              Parliament Tracker and Media Bias Detector use
              Parliament&apos;s own open data and AI-assisted analysis to make
              whip pressure and media framing visible. Detente teaches
              political literacy through negotiation and strategy. The Fried
              Rice Index teaches economic literacy through everyday price
              comparison.
            </p>
          </div>

          <div className="bg-white p-6 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#C9A94B]">
              Approach
            </p>
            <h2 className="serif mt-3 text-3xl font-bold tracking-[-0.02em] text-[#1C3557]">
              Interactive, accessible, non-partisan.
            </h2>
            <p className="mt-4 leading-8 text-[#5E5A54]">
              Civics Studio focuses on practical formats: games, simulations,
              indexes, guides, and resources that make civic and economic
              systems easier to discuss and understand.
            </p>
          </div>
        </div>
      </section>

      {/* Non-partisan */}
      <section className="bg-[#FAF7F0]">
        <div className="mx-auto max-w-7xl px-5 py-12">
          <div className="grid gap-8 border-t border-[#1C3557] pt-8 md:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#C9A94B]">
                Non-partisan statement
              </p>
              <h2 className="serif mt-2 text-3xl font-bold tracking-[-0.02em] text-[#1C3557]">
                Non-partisan means pro-independent, not above politics.
              </h2>
            </div>

            <p className="max-w-3xl text-lg leading-8 text-[#5E5A54]">
              Civics Studio doesn&apos;t support any political party or ideology.
              But we do hold a clear interest in independent representation:
              the idea that MPs should have the space to represent their
              constituents, and that citizens should understand enough about
              how Parliament works to engage meaningfully with it. No party
              owns that position. It&apos;s a civic one.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
