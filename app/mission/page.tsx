export default function MissionPage() {
  return (
    <div>
      <section className="border-b border-[#D8D0C3] bg-[#FAF7F0]">
        <div className="mx-auto max-w-7xl px-5 py-14 md:py-18">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#8A1538]">
            Mission
          </p>

          <h1 className="serif mt-4 max-w-5xl text-5xl font-bold leading-tight tracking-[-0.035em] text-[#111111] md:text-6xl">
            Helping young people understand the systems that shape public life.
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-[#5E5A54]">
            Civics Studio exists to make civic and economic learning more
            practical, accessible, and engaging for students.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 py-12 md:grid-cols-3">
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
            <div key={item.title} className="bg-[#FAF7F0] p-6 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#8A1538]">
                Principle
              </p>
              <h2 className="serif mt-3 text-2xl font-bold tracking-[-0.02em] text-[#111111]">
                {item.title}
              </h2>
              <p className="mt-4 leading-7 text-[#5E5A54]">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-[#D8D0C3] bg-[#F3EEE4]">
        <div className="mx-auto max-w-7xl px-5 py-12">
          <div className="grid gap-8 md:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#8A1538]">
                Why it matters
              </p>
              <h2 className="serif mt-2 text-3xl font-bold tracking-[-0.02em] text-[#111111]">
                Civic disengagement grows when public life feels distant.
              </h2>
            </div>

            <p className="max-w-3xl text-lg leading-8 text-[#5E5A54]">
              Many students know that politics and economics affect their lives,
              but they are often introduced to these subjects through abstract
              definitions instead of practical experiences. Civics Studio uses
              projects that students can play, download, compare, and discuss.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}