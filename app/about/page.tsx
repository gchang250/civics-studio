import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="bg-ink">
      {/* Hero — split layout */}
      <section className="border-b border-edge bg-ink">
        <div className="mx-auto grid max-w-7xl lg:grid-cols-[1fr_1fr] relative">
          {/* Divider line */}
          <div className="absolute inset-y-0 left-1/2 w-px bg-edge/60 pointer-events-none hidden lg:block" />

          {/* Left — text */}
          <div className="flex flex-col justify-center px-5 py-16 md:py-20 lg:pr-12">
            <p className="text-xs font-semibold tracking-[0.25em] text-maple lowercase">
              about
            </p>

            <h1 className="serif mt-4 text-5xl font-normal italic leading-tight tracking-[-0.02em] text-cream md:text-6xl lowercase">
              Civics Studio is a youth-led Canadian civic education project.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-mist">
              The project creates free games, data tools, and learning resources
              that make politics, economics, and government more accessible and
              easier to understand.
            </p>
          </div>

          {/* Right — photo */}
          <div className="relative hidden min-h-[420px] overflow-hidden lg:block">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80"
              alt="A minimalist team workspace showing colleagues discussing layouts around a wooden table"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-ink/20" />
            <a
              href="https://unsplash.com/photos/black-office-chair-near-brown-wooden-table-gM3Y8yihnIM"
              target="_blank"
              rel="noreferrer"
              className="absolute bottom-2 right-3 text-[10px] text-cream/40 hover:text-cream/70 transition lowercase"
            >
              photo: Campaign Creators / unsplash
            </a>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-ink">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-semibold tracking-[0.25em] text-maple lowercase">
              mission
            </p>
            <h2 className="serif mt-2 text-3xl font-normal italic tracking-[-0.01em] text-cream lowercase">
              Promoting independent representation in Canada.
            </h2>
          </div>

          <p className="max-w-3xl text-base leading-8 text-mist">
            Canada&apos;s House of Commons has 343 elected members. Party discipline
            and whipping routinely collapse those voices into two effective
            factions. Civics Studio was built to help Canadians understand how
            their political system works and why independent representation
            matters.
          </p>
        </div>
      </section>

      {/* Current work */}
      <section className="border-y border-edge bg-panel">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 md:grid-cols-2">
          <div className="bg-ink p-8 border border-edge transition duration-300 hover:border-maple/40">
            <p className="text-xs font-semibold tracking-[0.25em] text-maple lowercase">
              current work
            </p>
            <h2 className="serif mt-3 text-3xl font-normal italic tracking-[-0.01em] text-cream lowercase">
              Games and data projects.
            </h2>
            <p className="mt-4 text-sm leading-7 text-mist">
              Parliament Tracker and Media Bias Detector use
              Parliament&apos;s own open data and AI-assisted analysis to make
              whip pressure and media framing visible. The Fried
              Rice Index teaches economic literacy through everyday price
              comparison.
            </p>
          </div>

          <div className="bg-ink p-8 border border-edge transition duration-300 hover:border-maple/40">
            <p className="text-xs font-semibold tracking-[0.25em] text-maple lowercase">
              approach
            </p>
            <h2 className="serif mt-3 text-3xl font-normal italic tracking-[-0.01em] text-cream lowercase">
              Interactive, accessible, non-partisan.
            </h2>
            <p className="mt-4 text-sm leading-7 text-mist">
              Civics Studio focuses on practical formats: games, simulations,
              indexes, guides, and resources that make civic and economic
              systems easier to discuss and understand.
            </p>
          </div>
        </div>
      </section>

      {/* Non-partisan */}
      <section className="bg-ink">
        <div className="mx-auto max-w-7xl px-5 py-16">
          <div className="grid gap-8 border-t border-edge pt-12 md:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-xs font-semibold tracking-[0.25em] text-maple lowercase">
                non-partisan statement
              </p>
              <h2 className="serif mt-2 text-3xl font-normal italic tracking-[-0.01em] text-cream lowercase">
                Non-partisan means pro-independent, not above politics.
              </h2>
            </div>

            <p className="max-w-3xl text-base leading-8 text-mist">
              Civics Studio doesn&apos;t support any political party or ideology.
              But we do hold a clear interest in independent representation:
              the idea that MPs should have the space to represent their
              constituents, and that citizens should understand enough about
              how Parliament works to engage meaningfully with it. No party
              owns that position. It&apos;s a civic one.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
