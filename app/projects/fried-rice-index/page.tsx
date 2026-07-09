import Image from "next/image";
import Link from "next/link";
import Comments from "@/app/components/Comments";

const topics = [
  "Cost of living",
  "Electoral districts",
  "Housing affordability",
  "Inflation by riding",
  "Economic inequality",
  "Civic data literacy",
];

const dataPoints = [
  {
    label: "338",
    description: "Federal electoral districts tracked across Canada",
  },
  {
    label: "Live",
    description: "Data sourced from Statistics Canada and Elections Canada",
  },
  {
    label: "Free",
    description: "No account or paywall. Just open it.",
  },
];

export default function CanPolIndexPage() {
  return (
    <div className="bg-[#faf8f5]">
      {/* Hero */}
      <section className="border-b border-[#e5e0d4] bg-[#f3efe6]">
        <div className="mx-auto max-w-7xl px-5 py-14 md:py-18">
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#8b1e1e] lowercase">
            data project
          </p>

          <h1 className="serif mt-4 max-w-5xl text-5xl font-normal italic leading-tight tracking-[-0.02em] text-[#111f36] md:text-6xl lowercase">
            The CanPol Index
          </h1>

          <p className="mt-5 max-w-3xl text-xl leading-8 text-[#5f697a]">
            A cost-of-living index organized by federal riding. We track what people in each district are actually paying for housing, food, and transport, so you can see how affordability varies across the country and what your MP is accountable to.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="https://canpolindex.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="inline-block border border-[#111f36] px-6 py-3 text-center text-sm font-medium uppercase tracking-[0.08em] text-[#111f36] transition hover:bg-[#8b1e1e] hover:text-white hover:border-[#8b1e1e]"
            >
              Visit the index
            </a>
            <Link
              href="/contact"
              className="inline-block border border-[#111f36]/30 px-6 py-3 text-center text-sm font-medium uppercase tracking-[0.08em] text-[#111f36]/70 transition hover:bg-[#8b1e1e] hover:text-white hover:border-[#8b1e1e]"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>

      {/* Photo banner */}
      <div className="relative h-64 overflow-hidden bg-[#111f36]">
        <Image
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1600&q=85"
          alt="Aerial view of a Canadian city skyline and residential neighbourhoods"
          fill
          className="object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-[#111f36]/30 pointer-events-none" />
        <a
          href="https://unsplash.com/photos/aerial-view-of-city-buildings-during-daytime"
          target="_blank"
          rel="noreferrer"
          className="absolute bottom-2 right-3 text-[10px] text-white/40 hover:text-white/70 transition lowercase"
        >
          photo: unsplash
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
              where you live shapes what you pay.
            </h2>
          </div>

          <div className="max-w-3xl space-y-5 text-lg leading-8 text-[#5f697a]">
            <p>
              Cost of living in Canada is not one number. A family in Nunavut, a renter in Vancouver Centre, and a homeowner in rural New Brunswick are all living under the same federal government but dealing with completely different financial realities.
            </p>
            <p>
              The CanPol Index maps those differences by electoral district. Instead of national averages that flatten everything out, it gives you a riding-by-riding picture of what people are actually paying, and what the MP representing that riding is supposed to be fighting for.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-[#e5e0d4] bg-[#f3efe6]">
        <div className="mx-auto max-w-7xl px-5 py-12">
          <div className="mb-6 border-b border-[#e5e0d4] pb-4">
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#8b1e1e] lowercase">
              scope
            </p>
            <h2 className="serif mt-2 text-3xl font-normal italic tracking-[-0.01em] text-[#111f36] lowercase">
              what the index covers
            </h2>
          </div>

          <div className="grid gap-px bg-[#e5e0d4] sm:grid-cols-3 border border-[#e5e0d4]">
            {dataPoints.map((item) => (
              <div key={item.label} className="bg-[#faf8f5] p-6">
                <p className="serif text-4xl font-normal italic text-[#111f36] lowercase">{item.label}</p>
                <p className="mt-2 text-sm leading-6 text-[#5f697a]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Topics */}
      <section className="bg-[#faf8f5]">
        <div className="mx-auto max-w-7xl px-5 py-12">
          <div className="mb-6 border-b border-[#e5e0d4] pb-4">
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#8b1e1e] lowercase">
              topics
            </p>
            <h2 className="serif mt-2 text-3xl font-normal italic tracking-[-0.01em] text-[#111f36] lowercase">
              what the index covers
            </h2>
          </div>

          <div className="grid gap-px bg-[#e5e0d4] sm:grid-cols-2 md:grid-cols-3 border border-[#e5e0d4]">
            {topics.map((topic) => (
              <div key={topic} className="bg-[#f3efe6] p-5">
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
                votes and costs, together.
              </h2>
            </div>

            <div className="space-y-5">
              <p className="max-w-3xl text-lg leading-8 text-[#5f697a]">
                The Parliament Tracker shows how your MP votes. The CanPol Index shows the economic conditions in the riding they represent. Put them side by side and you get a clearer picture of whether what happens in Ottawa actually reflects what people back home are dealing with.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://canpolindex.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block border border-[#111f36] px-5 py-3 text-center text-sm font-medium uppercase tracking-[0.08em] text-[#111f36] transition hover:bg-[#8b1e1e] hover:text-white hover:border-[#8b1e1e]"
                >
                  Explore the index
                </a>
                <Link
                  href="/projects/parliament-tracker"
                  className="inline-block border border-[#111f36]/30 px-5 py-3 text-center text-sm font-medium uppercase tracking-[0.08em] text-[#111f36]/70 transition hover:bg-[#8b1e1e] hover:text-white hover:border-[#8b1e1e]"
                >
                  Parliament Tracker
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Comments pageId="canpol-index" />
    </div>
  );
}
