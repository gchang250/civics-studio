export default function MissionPage() {
  return (
    <div>
      <section className="border-b border-slate-300 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-14">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#8b1e1e]">
            Mission
          </p>

          <h1 className="serif mt-4 max-w-4xl text-5xl font-bold leading-tight text-[#061a33] md:text-6xl">
            Helping young people understand the systems that shape public life.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
            Civics Studio exists to make civic and economic learning more
            practical, accessible, and engaging for students.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Make civics practical",
              text: "Students should not only memorize institutions. They should practise negotiation, decision-making, and civic reasoning.",
            },
            {
              title: "Use games and data",
              text: "Games make incentives visible. Data projects make economic conditions easier to compare and discuss.",
            },
            {
              title: "Stay non-partisan",
              text: "Civics Studio does not promote any party or ideology. The goal is understanding, not persuasion.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="border border-slate-300 bg-white p-6 shadow-sm"
            >
              <h2 className="serif text-2xl font-bold text-[#061a33]">
                {item.title}
              </h2>
              <p className="mt-4 leading-7 text-slate-700">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-4">
        <div className="border border-slate-300 bg-white p-8 shadow-sm">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#8b1e1e]">
            Why it matters
          </p>

          <h2 className="serif mt-3 text-3xl font-bold text-[#061a33]">
            Civic disengagement grows when public life feels distant.
          </h2>

          <p className="mt-5 max-w-4xl leading-8 text-slate-700">
            Many students know that politics and economics affect their lives,
            but they are often introduced to these subjects through abstract
            definitions instead of practical experiences. Civics Studio uses
            projects that students can play, download, compare, and discuss.
          </p>
        </div>
      </section>
    </div>
  );
}