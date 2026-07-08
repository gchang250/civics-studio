import Image from "next/image";
import Comments from "@/app/components/Comments";

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
    <div className="bg-[#faf8f5]">
      {/* Hero */}
      <section className="border-b border-[#e5e0d4] bg-[#f3efe6]">
        <div className="mx-auto max-w-7xl px-5 py-14 md:py-18">
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#8b1e1e] lowercase">
            data project
          </p>

          <h1 className="serif mt-4 max-w-5xl text-5xl font-normal italic leading-tight tracking-[-0.02em] text-[#111f36] md:text-6xl lowercase">
            The Fried Rice Index
          </h1>

          <p className="mt-5 max-w-3xl text-xl leading-8 text-[#5f697a]">
            A global affordability index based on the price of a bowl of egg
            fried rice.
          </p>

          <div className="mt-8">
            <a
              href="https://efr-index.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="inline-block border border-[#111f36] px-6 py-3 text-center text-sm font-medium uppercase tracking-[0.08em] text-[#111f36] transition hover:bg-[#8b1e1e] hover:text-white hover:border-[#8b1e1e]"
            >
              Visit index
            </a>
          </div>
        </div>
      </section>

      {/* Photo banner */}
      <div className="relative h-64 overflow-hidden bg-[#111f36]">
        <Image
          src="https://images.unsplash.com/photo-1744400363852-d2eb4908b9a8?auto=format&fit=crop&w=1600&q=85"
          alt="Narrow street through a Japanese food market"
          fill
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-[#111f36]/30 pointer-events-none" />
        <a
          href="https://unsplash.com/photos/a-narrow-street-in-a-japanese-food-market-XpVUxVgC6XY"
          target="_blank"
          rel="noreferrer"
          className="absolute bottom-2 right-3 text-[10px] text-white/40 hover:text-white/70 transition lowercase"
        >
          photo: mos design / unsplash
        </a>
      </div>

      {/* Purpose */}
      <section className="bg-[#faf8f5]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#8b1e1e] lowercase">
              purpose
            </p>
            <h2 className="serif mt-2 text-3xl font-normal italic tracking-[-0.01em] text-[#111f36] lowercase">
              prices make economics visible.
            </h2>
          </div>

          <p className="max-w-3xl text-lg leading-8 text-[#5f697a]">
            The Fried Rice Index tracks the price of a bowl of egg fried rice
            across cities around the world. Instead of starting with abstract
            statistics, it uses a familiar everyday food to make cost of
            living tangible and easy to compare.
          </p>
        </div>
      </section>

      {/* Topics */}
      <section className="border-y border-[#e5e0d4] bg-[#f3efe6]">
        <div className="mx-auto max-w-7xl px-5 py-12">
          <div className="mb-6 border-b border-[#e5e0d4] pb-4">
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#8b1e1e] lowercase">
              topics
            </p>
            <h2 className="serif mt-2 text-3xl font-normal italic tracking-[-0.01em] text-[#111f36] lowercase">
              what the project helps illuminate
            </h2>
          </div>

          <div className="grid gap-px bg-[#e5e0d4] sm:grid-cols-2 md:grid-cols-3 border border-[#e5e0d4]">
            {topics.map((topic) => (
              <div key={topic} className="bg-[#faf8f5] p-5">
                <p className="font-semibold text-[#111f36]">{topic}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Connection */}
      <section className="bg-[#faf8f5]">
        <div className="mx-auto max-w-7xl px-5 py-12">
          <div className="grid gap-8 border-t border-[#e5e0d4] pt-8 md:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#8b1e1e] lowercase">
                connection
              </p>
              <h2 className="serif mt-2 text-3xl font-normal italic tracking-[-0.01em] text-[#111f36] lowercase">
                data is civic education.
              </h2>
            </div>

            <p className="max-w-3xl text-lg leading-8 text-[#5f697a]">
              Detente teaches political literacy through play. The Fried Rice
              Index teaches economic literacy through data. Both projects help
              people understand the systems — political and economic — that
              shape everyday life.
            </p>
          </div>
        </div>
      </section>

      <Comments pageId="fried-rice-index" />
    </div>
  );
}
