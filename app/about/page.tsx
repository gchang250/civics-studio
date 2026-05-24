export default function AboutPage() {
  return (
    <div>
      <section className="border-b border-[#D8D0C3] bg-[#FAF7F0]">
        <div className="mx-auto max-w-7xl px-5 py-14 md:py-18">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#8A1538]">
            About
          </p>

          <h1 className="serif mt-4 max-w-5xl text-5xl font-bold leading-tight tracking-[-0.035em] text-[#111111] md:text-6xl">
            Civics Studio is a youth-led Canadian civic education project.
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-[#5E5A54]">
            The project creates free games, data tools, and learning resources
            that make politics, economics, and public life easier for young
            people to understand.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#8A1538]">
              Mission
            </p>
            <h2 className="serif mt-2 text-3xl font-bold tracking-[-0.02em] text-[#111111]">
              Make civic learning practical.
            </h2>
          </div>

          <p className="max-w-3xl text-lg leading-8 text-[#5E5A54]">
            Many young people are told that politics and economics matter, but
            not enough are given practical ways to understand them. Civics
            Studio turns abstract systems into activities, projects, and tools
            that students can actually use.
          </p>
        </div>
      </section>

      <section className="border-y border-[#D8D0C3] bg-[#F3EEE4]">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 py-12 md:grid-cols-2">
          <div className="bg-white p-6 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#8A1538]">
              Current work
            </p>
            <h2 className="serif mt-3 text-3xl font-bold tracking-[-0.02em] text-[#111111]">
              Games and data projects.
            </h2>
            <p className="mt-4 leading-8 text-[#5E5A54]">
              Detente teaches political literacy through negotiation and
              strategy. The Fried Rice Index teaches economic literacy through
              everyday price comparison.
            </p>
          </div>

          <div className="bg-white p-6 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#8A1538]">
              Approach
            </p>
            <h2 className="serif mt-3 text-3xl font-bold tracking-[-0.02em] text-[#111111]">
              Interactive, accessible, non-partisan.
            </h2>
            <p className="mt-4 leading-8 text-[#5E5A54]">
              Civics Studio focuses on practical learning: games, simulations,
              indexes, guides, and resources that make public systems easier to
              discuss and understand.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#FAF7F0]">
        <div className="mx-auto max-w-7xl px-5 py-12">
          <div className="grid gap-8 border-t border-[#111111] pt-8 md:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#8A1538]">
                Non-partisan statement
              </p>
              <h2 className="serif mt-2 text-3xl font-bold tracking-[-0.02em] text-[#111111]">
                No party or ideology.
              </h2>
            </div>

            <p className="max-w-3xl text-lg leading-8 text-[#5E5A54]">
              Civics Studio does not promote any political party or ideology.
              The goal is to help young people understand public life more
              clearly and participate more thoughtfully.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}