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
      <section className="border-b border-slate-300 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-14">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#8b1e1e]">
            Data project
          </p>

          <h1 className="serif mt-4 text-5xl font-bold text-[#061a33] md:text-6xl">
            The Fried Rice Index
          </h1>

          <p className="mt-5 max-w-3xl text-xl leading-8 text-slate-700">
            A global affordability index based on the price of egg fried rice.
          </p>

          <div className="mt-8">
            <a
              href="https://efr-index.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-[#061a33] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#0b2d57]"
            >
              Visit the Fried Rice Index
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12">
        <div className="grid gap-6 md:grid-cols-[0.75fr_1.25fr]">
          <div className="border border-slate-300 bg-white p-6 shadow-sm">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#8b1e1e]">
              Purpose
            </p>
            <h2 className="serif mt-3 text-3xl font-bold text-[#061a33]">
              Making economic comparison easier to understand.
            </h2>
          </div>

          <div className="border border-slate-300 bg-white p-6 shadow-sm">
            <p className="leading-8 text-slate-700">
              The Fried Rice Index tracks the price of a bowl of egg fried rice
              across cities around the world. Instead of starting with abstract
              statistics, it uses a familiar everyday food item to make cost of
              living more accessible.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-4">
        <div className="border border-slate-300 bg-white shadow-sm">
          <div className="border-b border-slate-300 px-6 py-5">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#8b1e1e]">
              Topics
            </p>
            <h2 className="serif mt-2 text-3xl font-bold text-[#061a33]">
              What the project helps students understand
            </h2>
          </div>

          <div className="grid gap-px bg-slate-300 sm:grid-cols-2 md:grid-cols-3">
            {topics.map((topic) => (
              <div key={topic} className="bg-white p-5">
                <p className="font-bold text-slate-900">{topic}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12">
        <div className="border border-slate-300 bg-[#061a33] p-8 text-white shadow-sm md:grid md:grid-cols-[0.7fr_1.3fr] md:gap-10">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-slate-300">
              Connection
            </p>
            <h2 className="serif mt-2 text-3xl font-bold">
              Data is civic education.
            </h2>
          </div>

          <p className="mt-5 leading-8 text-slate-200 md:mt-0">
            Detente teaches political literacy through play. The Fried Rice
            Index teaches economic literacy through data. Both projects help
            young people understand the systems that shape public life.
          </p>
        </div>
      </section>
    </div>
  );
}