import Image from "next/image";
import Link from "next/link";
import Comments from "@/app/components/Comments";
import CrossSiteLink from "@/app/components/CrossSiteLink";

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
    <div className="bg-ink">
      {/* Hero */}
      <section className="border-b border-edge bg-panel">
        <div className="mx-auto max-w-7xl px-5 py-14 md:py-18">
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-maple lowercase">
            data project
          </p>

          <h1 className="serif mt-4 max-w-5xl text-5xl font-normal italic leading-tight tracking-[-0.02em] text-cream md:text-6xl lowercase">
            The CanPol Index
          </h1>

          <p className="mt-5 max-w-3xl text-xl leading-8 text-mist">
            A cost-of-living index organized by federal riding. We track what people in each district are actually paying for housing, food, and transport, so you can see how affordability varies across the country and what your MP is accountable to.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CrossSiteLink
              href="https://canpolindex.vercel.app/"
              className="inline-block border border-edge px-6 py-3 text-center text-sm font-medium uppercase tracking-[0.08em] text-cream transition hover:bg-maple hover:text-ink hover:border-maple"
            >
              Visit the index
            </CrossSiteLink>
            <Link
              href="/contact"
              className="inline-block border border-edge px-6 py-3 text-center text-sm font-medium uppercase tracking-[0.08em] text-mist transition hover:bg-maple hover:text-ink hover:border-maple"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>

      {/* Photo banner */}
      <div className="relative h-64 overflow-hidden bg-panel-2">
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85"
          alt="Minimalist modern house facade with wood panels and warm lighting"
          fill
          className="object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-ink/50 pointer-events-none" />
        <a
          href="https://unsplash.com/photos/a-modern-house-exterior-facade-with-wood-panels"
          target="_blank"
          rel="noreferrer"
          className="absolute bottom-2 right-3 text-[10px] text-cream/40 hover:text-cream/70 transition lowercase"
        >
          photo: Qingbao Meng / unsplash
        </a>
      </div>

      {/* Purpose */}
      <section className="bg-ink">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-maple lowercase">
              purpose
            </p>
            <h2 className="serif mt-2 text-3xl font-normal italic tracking-[-0.01em] text-cream lowercase">
              where you live shapes what you pay.
            </h2>
          </div>

          <div className="max-w-3xl space-y-5 text-lg leading-8 text-mist">
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
      <section className="border-y border-edge bg-panel">
        <div className="mx-auto max-w-7xl px-5 py-12">
          <div className="mb-6 border-b border-edge pb-4">
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-maple lowercase">
              scope
            </p>
            <h2 className="serif mt-2 text-3xl font-normal italic tracking-[-0.01em] text-cream lowercase">
              what the index covers
            </h2>
          </div>

          <div className="grid gap-px bg-edge sm:grid-cols-3 border border-edge">
            {dataPoints.map((item) => (
              <div key={item.label} className="bg-ink p-6">
                <p className="serif text-4xl font-normal italic text-cream lowercase">{item.label}</p>
                <p className="mt-2 text-sm leading-6 text-mist">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Topics */}
      <section className="bg-ink">
        <div className="mx-auto max-w-7xl px-5 py-12">
          <div className="mb-6 border-b border-edge pb-4">
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-maple lowercase">
              topics
            </p>
            <h2 className="serif mt-2 text-3xl font-normal italic tracking-[-0.01em] text-cream lowercase">
              what the index covers
            </h2>
          </div>

          <div className="grid gap-px bg-edge sm:grid-cols-2 md:grid-cols-3 border border-edge">
            {topics.map((topic) => (
              <div key={topic} className="bg-panel p-5">
                <p className="font-semibold text-cream">{topic}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Connection */}
      <section className="bg-ink">
        <div className="mx-auto max-w-7xl px-5 py-12">
          <div className="grid gap-8 border-t border-edge pt-8 md:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-maple lowercase">
                connection
              </p>
              <h2 className="serif mt-2 text-3xl font-normal italic tracking-[-0.01em] text-cream lowercase">
                votes and costs, together.
              </h2>
            </div>

            <div className="space-y-5">
              <p className="max-w-3xl text-lg leading-8 text-mist">
                The Parliament Tracker shows how your MP votes. The CanPol Index shows the economic conditions in the riding they represent. Put them side by side and you get a clearer picture of whether what happens in Ottawa actually reflects what people back home are dealing with.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <CrossSiteLink
                  href="https://canpolindex.vercel.app/"
                  className="inline-block border border-edge px-5 py-3 text-center text-sm font-medium uppercase tracking-[0.08em] text-cream transition hover:bg-maple hover:text-ink hover:border-maple"
                >
                  Explore the index
                </CrossSiteLink>
                <Link
                  href="/projects/parliament-tracker"
                  className="inline-block border border-edge px-5 py-3 text-center text-sm font-medium uppercase tracking-[0.08em] text-mist transition hover:bg-maple hover:text-ink hover:border-maple"
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
