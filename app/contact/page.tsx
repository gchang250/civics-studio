export default function ContactPage() {
  return (
    <div>
      <section className="border-b border-[#D8D0C3] bg-[#FAF7F0]">
        <div className="mx-auto max-w-7xl px-5 py-14 md:py-18">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#8A1538]">
            Contact
          </p>

          <h1 className="serif mt-4 max-w-4xl text-5xl font-bold leading-tight tracking-[-0.035em] text-[#111111] md:text-6xl">
            Contact Civics Studio.
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-[#5E5A54]">
            For school use, club use, partnerships, feedback, or questions
            about Civics Studio projects, contact us by email.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#8A1538]">
              Email
            </p>
            <h2 className="serif mt-2 text-3xl font-bold tracking-[-0.02em] text-[#111111]">
              General inquiries
            </h2>
          </div>

          <div className="border-l-4 border-[#8A1538] bg-[#FAF7F0] p-6">
            <a
              href="mailto:civicsstudio@gmail.com"
              className="text-xl font-bold text-[#111111] hover:text-[#8A1538]"
            >
              civicsstudio@gmail.com
            </a>

            <p className="mt-4 max-w-3xl leading-8 text-[#5E5A54]">
              Use this address for questions about Detente, The Fried Rice
              Index, classroom use, youth organizations, or collaboration.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-[#D8D0C3] bg-[#F3EEE4]">
        <div className="mx-auto max-w-7xl px-5 py-12">
          <div className="mb-6 border-b border-[#111111] pb-4">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#8A1538]">
              Inquiry areas
            </p>
            <h2 className="serif mt-2 text-3xl font-bold tracking-[-0.02em] text-[#111111]">
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
                <p className="font-bold text-[#111111]">{item}</p>
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
                Note
              </p>
              <h2 className="serif mt-2 text-3xl font-bold tracking-[-0.02em] text-[#111111]">
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