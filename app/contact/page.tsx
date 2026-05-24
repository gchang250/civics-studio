export default function ContactPage() {
  return (
    <div>
      <section className="border-b border-[#D8D0C3] bg-[#FAF7F0]">
        <div className="mx-auto max-w-7xl px-5 py-14 md:py-18">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#C9A94B]">
            Contact
          </p>

          <h1 className="serif mt-4 max-w-4xl text-5xl font-bold leading-tight tracking-[-0.035em] text-[#1C3557] md:text-6xl">
            Get in touch.
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-[#5E5A54]">
            For classroom use, club activities, partnerships, or questions
            about any of our projects, reach out by email.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#C9A94B]">
              Email
            </p>
            <h2 className="serif mt-2 text-3xl font-bold tracking-[-0.02em] text-[#1C3557]">
              General inquiries
            </h2>
          </div>

          <div className="border-l-4 border-[#C9A94B] bg-[#FAF7F0] p-6">
            <a
              href="mailto:civicsstudio@gmail.com"
              className="text-xl font-bold text-[#1C3557] hover:text-[#C9A94B] transition"
            >
              civicsstudio@gmail.com
            </a>

            <p className="mt-4 max-w-3xl leading-8 text-[#5E5A54]">
              Use this address for questions about Detente, The Fried Rice
              Index, classroom or club use, or collaboration opportunities.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-[#D8D0C3] bg-[#F3EEE4]">
        <div className="mx-auto max-w-7xl px-5 py-12">
          <div className="mb-6 border-b border-[#1C3557] pb-4">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#C9A94B]">
              Inquiry areas
            </p>
            <h2 className="serif mt-2 text-3xl font-bold tracking-[-0.02em] text-[#1C3557]">
              What to contact us about
            </h2>
          </div>

          <div className="grid gap-px bg-[#D8D0C3] sm:grid-cols-2 md:grid-cols-4">
            {[
              "Classroom use",
              "Club activities",
              "Project feedback",
              "Partnerships",
            ].map((item) => (
              <div key={item} className="bg-white p-5">
                <p className="font-bold text-[#1C3557]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#FAF7F0]">
        <div className="mx-auto max-w-7xl px-5 py-12">
          <div className="grid gap-8 border-t border-[#1C3557] pt-8 md:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#C9A94B]">
                Note
              </p>
              <h2 className="serif mt-2 text-3xl font-bold tracking-[-0.02em] text-[#1C3557]">
                Civics Studio is non-partisan.
              </h2>
            </div>

            <p className="max-w-3xl text-lg leading-8 text-[#5E5A54]">
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
