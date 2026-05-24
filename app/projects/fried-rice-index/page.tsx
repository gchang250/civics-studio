const topics = [
  "Cost of living",
  "Food prices",
  "Urban affordability",
  "Inflation",
  "Global comparison",
  "Economic literacy",
];

export default function FriedRiceIndexPage() {
  return (
    <div>
      <section className="border-b border-[#D8D0C3] bg-[#FAF7F0]">
        <div className="mx-auto max-w-7xl px-5 py-14 md:py-18">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#8A1538]">
            Data project
          </p>

          <h1 className="serif mt-4 max-w-5xl text-5xl font-bold leading-tight tracking-[-0.04em] text-[#111111] md:text-6xl">
            The Fried Rice Index
          </h1>

          <p className="mt-5 max-w-3xl text-xl leading-8 text-[#5E5A54]">
            A global affordability index based on the price of egg fried rice.
          </p>

          <div className="mt-8">
            <a
              href="https://efr-index.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-[#111111] px-6 py-3 text-sm font-bold uppercase tracking-[0.08em] text-white transition hover:bg-[#8A1538]"
            >
              Visit index
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#8A1538]">
              Purpose
            </p>
            <h2 className="serif mt-2 text-3xl font-bold tracking-[-0.02em] text-[#111111]">
              Prices make economics visible.
            </h2>
          </div>

          <p className="max-w-3xl text-lg leading-8 text-[#5E5A54]">
            The Fried Rice Index tracks the price of a bowl of egg fried rice
            across cities around the world. Instead of starting with abstract
            statistics, it uses a familiar everyday food item to make cost of
            living easier to compare.
          </p>
        </div>
      </section>

      <section className="border-y border-[#D8D0C3] bg-[#F3EEE4]">
        <div className="mx-auto max-w-7xl px-5 py-12">
          <div className="mb-6 border-b border-[#111111] pb-4">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#8A1538]">
              Topics
            </p>
            <h2 className="serif mt-2 text-3xl font-bold tracking-[-0.02em] text-[#111111]">
              What the project helps students understand
            </h2>
          </div>

          <div className="grid gap-px bg-[#D8D0C3] sm:grid-cols-2 md:grid-cols-3">
            {topics.map((topic) => (
              <div key={topic} className="bg-white p-5">
                <p className="font-bold text-[#111111]">{topic}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#FAF7F0]">
        <div className="mx-auto max-w-7xl px-5 py-12">
          <div className="grid gap-8 border-t border-[#111111] pt-8 md:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#8A1538]">
                Connection
              </p>
              <h2 className="serif mt-2 text-3xl font-bold tracking-[-0.02em] text-[#111111]">
                Data is civic education.
              </h2>
            </div>

            <p className="max-w-3xl text-lg leading-8 text-[#5E5A54]">
              Detente teaches political literacy through play. The Fried Rice
              Index teaches economic literacy through data. Both projects help
              young people understand the systems that shape public life.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}