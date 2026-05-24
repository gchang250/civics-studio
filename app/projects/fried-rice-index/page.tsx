import Image from "next/image";

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
      {/* Hero */}
      <section className="border-b border-[#D8D0C3] bg-[#FAF7F0]">
        <div className="mx-auto max-w-7xl px-5 py-14 md:py-18">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#C9A94B]">
            Data project
          </p>

          <h1 className="serif mt-4 max-w-5xl text-5xl font-bold leading-tight tracking-[-0.04em] text-[#1C3557] md:text-6xl">
            The Fried Rice Index
          </h1>

          <p className="mt-5 max-w-3xl text-xl leading-8 text-[#5E5A54]">
            A global affordability index based on the price of a bowl of egg
            fried rice.
          </p>

          <div className="mt-8">
            <a
              href="https://efr-index.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-[#1C3557] px-6 py-3 text-sm font-bold uppercase tracking-[0.08em] text-white transition hover:bg-[#C9A94B] hover:text-[#1C3557]"
            >
              Visit index
            </a>
          </div>
        </div>
      </section>

      {/* Photo banner */}
      <div className="relative h-64 overflow-hidden bg-[#1C3557]">
        <Image
          src="https://images.unsplash.com/photo-1744400363852-d2eb4908b9a8?auto=format&fit=crop&w=1600&q=85"
          alt="Narrow street through a Japanese food market"
          fill
          className="object-cover opacity-85"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1C3557]/40" />
        <a
          href="https://unsplash.com/photos/a-narrow-street-in-a-japanese-food-market-XpVUxVgC6XY"
          target="_blank"
          rel="noreferrer"
          className="absolute bottom-2 right-3 text-[10px] text-white/40 hover:text-white/70 transition"
        >
          Photo: mos design / Unsplash
        </a>
      </div>

      {/* Purpose */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#C9A94B]">
              Purpose
            </p>
            <h2 className="serif mt-2 text-3xl font-bold tracking-[-0.02em] text-[#1C3557]">
              Prices make economics visible.
            </h2>
          </div>

          <p className="max-w-3xl text-lg leading-8 text-[#5E5A54]">
            The Fried Rice Index tracks the price of a bowl of egg fried rice
            across cities around the world. Instead of starting with abstract
            statistics, it uses a familiar everyday food to make cost of
            living tangible and easy to compare.
          </p>
        </div>
      </section>

      {/* Topics */}
      <section className="border-y border-[#D8D0C3] bg-[#F3EEE4]">
        <div className="mx-auto max-w-7xl px-5 py-12">
          <div className="mb-6 border-b border-[#1C3557] pb-4">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#C9A94B]">
              Topics
            </p>
            <h2 className="serif mt-2 text-3xl font-bold tracking-[-0.02em] text-[#1C3557]">
              What the project helps illuminate
            </h2>
          </div>

          <div className="grid gap-px bg-[#D8D0C3] sm:grid-cols-2 md:grid-cols-3">
            {topics.map((topic) => (
              <div key={topic} className="bg-white p-5">
                <p className="font-bold text-[#1C3557]">{topic}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Connection */}
      <section className="bg-[#FAF7F0]">
        <div className="mx-auto max-w-7xl px-5 py-12">
          <div className="grid gap-8 border-t border-[#1C3557] pt-8 md:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#C9A94B]">
                Connection
              </p>
              <h2 className="serif mt-2 text-3xl font-bold tracking-[-0.02em] text-[#1C3557]">
                Data is civic education.
              </h2>
            </div>

            <p className="max-w-3xl text-lg leading-8 text-[#5E5A54]">
              Detente teaches political literacy through play. The Fried Rice
              Index teaches economic literacy through data. Both projects help
              people understand the systems — political and economic — that
              shape everyday life.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
