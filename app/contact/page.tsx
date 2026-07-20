export default function ContactPage() {
  return (
    <div className="bg-ink">
      <section className="border-b border-edge bg-ink">
        <div className="mx-auto max-w-7xl px-5 py-16 md:py-20">
          <p className="text-xs font-semibold tracking-[0.25em] text-maple lowercase">
            contact
          </p>

          <h1 className="serif mt-4 max-w-4xl text-5xl font-normal italic leading-tight tracking-[-0.02em] text-cream md:text-6xl lowercase">
            Get in touch.
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-mist">
            For classroom use, club activities, partnerships, or questions
            about any of our projects, reach out by email.
          </p>
        </div>
      </section>

      <section className="bg-ink">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-semibold tracking-[0.25em] text-maple lowercase">
              email
            </p>
            <h2 className="serif mt-2 text-3xl font-normal italic tracking-[-0.01em] text-cream lowercase">
              General inquiries
            </h2>
          </div>

          <div className="border border-edge bg-ink p-8 transition duration-300 hover:border-maple/40">
            <a
              href="mailto:civicsstudio@gmail.com"
              className="text-xl font-semibold text-cream hover:text-maple transition duration-300"
            >
              civicsstudio@gmail.com
            </a>

            <p className="mt-4 max-w-3xl text-sm leading-7 text-mist">
              Use this address for questions about the Parliament Tracker, The
              CanPol Index, classroom or club use, or collaboration opportunities.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-edge bg-panel">
        <div className="mx-auto max-w-7xl px-5 py-16">
          <div className="mb-8 border-b border-edge pb-4">
            <p className="text-xs font-semibold tracking-[0.25em] text-maple lowercase">
              inquiry areas
            </p>
            <h2 className="serif mt-2 text-3xl font-normal italic tracking-[-0.01em] text-cream lowercase">
              What to contact us about
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            {[
              "Classroom use",
              "Club activities",
              "Project feedback",
              "Partnerships",
            ].map((item) => (
              <div key={item} className="bg-ink p-6 border border-edge transition duration-300 hover:border-maple/40">
                <p className="font-semibold text-cream lowercase tracking-[0.1em] text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink">
        <div className="mx-auto max-w-7xl px-5 py-16">
          <div className="grid gap-8 border-t border-edge pt-12 md:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-xs font-semibold tracking-[0.25em] text-maple lowercase">
                note
              </p>
              <h2 className="serif mt-2 text-3xl font-normal italic tracking-[-0.01em] text-cream lowercase">
                Civics Studio is non-partisan.
              </h2>
            </div>
            <p className="max-w-3xl text-base leading-8 text-mist">
              Civics Studio welcomes educational use, student feedback, and
              collaboration, but does not endorse political parties, candidates,
              or partisan campaigns.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
