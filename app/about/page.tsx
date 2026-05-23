export default function AboutPage() {
  return (
    <div>
      <section className="border-b border-slate-300 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-14">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#8b1e1e]">
            About
          </p>

          <h1 className="serif mt-4 max-w-4xl text-5xl font-bold leading-tight text-[#061a33] md:text-6xl">
            Civics Studio is a youth-led Canadian civic education project.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
            The project creates free games, data tools, and learning resources
            that make politics, economics, and public life easier for young
            people to understand.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12">
        <div className="grid gap-6 md:grid-cols-[0.75fr_1.25fr]">
          <div className="border border-slate-300 bg-white p-6 shadow-sm">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#8b1e1e]">
              Mission
            </p>
            <h2 className="serif mt-3 text-3xl font-bold text-[#061a33]">
              Make civic learning practical.
            </h2>
          </div>

          <div className="border border-slate-300 bg-white p-6 shadow-sm">
            <p className="leading-8 text-slate-700">
              Many young people are told that politics and economics matter,
              but not enough are given practical ways to understand them.
              Civics Studio turns abstract systems into activities, projects,
              and tools that students can actually use.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-4">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="border border-slate-300 bg-white p-6 shadow-sm">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#8b1e1e]">
              Current work
            </p>

            <h2 className="serif mt-3 text-3xl font-bold text-[#061a33]">
              Games and data projects.
            </h2>

            <p className="mt-4 leading-8 text-slate-700">
              Detente teaches political literacy through negotiation and
              strategy. The Fried Rice Index teaches economic literacy through
              everyday price comparison.
            </p>
          </div>

          <div className="border border-slate-300 bg-white p-6 shadow-sm">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#8b1e1e]">
              Approach
            </p>

            <h2 className="serif mt-3 text-3xl font-bold text-[#061a33]">
              Interactive, accessible, non-partisan.
            </h2>

            <p className="mt-4 leading-8 text-slate-700">
              Civics Studio focuses on practical learning: games, simulations,
              indexes, guides, and resources that make public systems easier to
              discuss and understand.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12">
        <div className="border border-slate-300 bg-[#061a33] p-8 text-white shadow-sm md:grid md:grid-cols-[0.7fr_1.3fr] md:gap-10">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-slate-300">
              Non-partisan statement
            </p>
            <h2 className="serif mt-2 text-3xl font-bold">
              No party or ideology.
            </h2>
          </div>

          <p className="mt-5 leading-8 text-slate-200 md:mt-0">
            Civics Studio does not promote any political party or ideology. The
            goal is to help young people understand public life more clearly and
            participate more thoughtfully.
          </p>
        </div>
      </section>
    </div>
  );
}