export default function ContactPage() {
  return (
    <div>
      <section className="border-b border-slate-300 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-14">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#8b1e1e]">
            Contact
          </p>

          <h1 className="serif mt-4 text-5xl font-bold text-[#061a33] md:text-6xl">
            Contact Civics Studio.
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700">
            For school use, club use, partnerships, feedback, or questions
            about Civics Studio projects, contact us by email.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12">
        <div className="grid gap-6 md:grid-cols-[0.75fr_1.25fr]">
          <div className="border border-slate-300 bg-white p-6 shadow-sm">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#8b1e1e]">
              Email
            </p>

            <h2 className="serif mt-3 text-3xl font-bold text-[#061a33]">
              General inquiries
            </h2>
          </div>

          <div className="border border-slate-300 bg-white p-6 shadow-sm">
            <a
              href="mailto:civicsstudio@gmail.com"
              className="text-xl font-bold text-[#061a33] hover:underline"
            >
              civicsstudio@gmail.com
            </a>

            <p className="mt-4 leading-8 text-slate-700">
              Use this address for questions about Detente, The Fried Rice
              Index, classroom use, youth organizations, or collaboration.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-4">
        <div className="border border-slate-300 bg-white shadow-sm">
          <div className="border-b border-slate-300 px-6 py-5">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#8b1e1e]">
              Inquiry areas
            </p>
            <h2 className="serif mt-2 text-3xl font-bold text-[#061a33]">
              What to contact us about
            </h2>
          </div>

          <div className="grid gap-px bg-slate-300 sm:grid-cols-2 md:grid-cols-4">
            {[
              "Classroom use",
              "Club activities",
              "Project feedback",
              "Partnerships",
            ].map((item) => (
              <div key={item} className="bg-white p-5">
                <p className="font-bold text-slate-900">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12">
        <div className="border border-slate-300 bg-[#061a33] p-8 text-white shadow-sm md:grid md:grid-cols-[0.7fr_1.3fr] md:gap-10">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-slate-300">
              Note
            </p>
            <h2 className="serif mt-2 text-3xl font-bold">
              Civics Studio is non-partisan.
            </h2>
          </div>

          <p className="mt-5 leading-8 text-slate-200 md:mt-0">
            Civics Studio welcomes educational use, student feedback, and
            collaboration, but does not endorse political parties, candidates,
            or partisan campaigns.
          </p>
        </div>
      </section>
    </div>
  );
}