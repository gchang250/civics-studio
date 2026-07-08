export default function ContactPage() {
  return (
    <div className="bg-[#faf8f5]">
      <section className="border-b border-[#e5e0d4] bg-[#faf8f5]">
        <div className="mx-auto max-w-7xl px-5 py-16 md:py-20">
          <p className="text-xs font-semibold tracking-[0.25em] text-[#8b1e1e] lowercase">
            contact
          </p>

          <h1 className="serif mt-4 max-w-4xl text-5xl font-normal italic leading-tight tracking-[-0.02em] text-[#111f36] md:text-6xl lowercase">
            Get in touch.
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-[#5f697a]">
            For classroom use, club activities, partnerships, or questions
            about any of our projects, reach out by email.
          </p>
        </div>
      </section>

      <section className="bg-[#faf8f5]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-semibold tracking-[0.25em] text-[#8b1e1e] lowercase">
              email
            </p>
            <h2 className="serif mt-2 text-3xl font-normal italic tracking-[-0.01em] text-[#111f36] lowercase">
              General inquiries
            </h2>
          </div>

          <div className="border border-[#e5e0d4] bg-[#faf8f5] p-8 transition duration-300 hover:border-[#8b1e1e]/40">
            <a
              href="mailto:civicsstudio@gmail.com"
              className="text-xl font-semibold text-[#111f36] hover:text-[#8b1e1e] transition duration-300"
            >
              civicsstudio@gmail.com
            </a>

            <p className="mt-4 max-w-3xl text-sm leading-7 text-[#5f697a]">
              Use this address for questions about Detente, The Fried Rice
              Index, classroom or club use, or collaboration opportunities.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-[#e5e0d4] bg-[#f3efe6]">
        <div className="mx-auto max-w-7xl px-5 py-16">
          <div className="mb-8 border-b border-[#e5e0d4] pb-4">
            <p className="text-xs font-semibold tracking-[0.25em] text-[#8b1e1e] lowercase">
              inquiry areas
            </p>
            <h2 className="serif mt-2 text-3xl font-normal italic tracking-[-0.01em] text-[#111f36] lowercase">
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
              <div key={item} className="bg-[#faf8f5] p-6 border border-[#e5e0d4] transition duration-300 hover:border-[#8b1e1e]/40">
                <p className="font-semibold text-[#111f36] lowercase tracking-[0.1em] text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#faf8f5]">
        <div className="mx-auto max-w-7xl px-5 py-16">
          <div className="grid gap-8 border-t border-[#e5e0d4] pt-12 md:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-xs font-semibold tracking-[0.25em] text-[#8b1e1e] lowercase">
                note
              </p>
              <h2 className="serif mt-2 text-3xl font-normal italic tracking-[-0.01em] text-[#111f36] lowercase">
                Civics Studio is non-partisan.
              </h2>
            </div>
            <p className="max-w-3xl text-base leading-8 text-[#5f697a]">
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
