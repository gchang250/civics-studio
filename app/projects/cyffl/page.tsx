import Link from "next/link";

const focusAreas = [
  "French literacy",
  "French foundations",
  "Student support",
  "Online learning",
  "Academic confidence",
  "Youth-led education",
];

const offerings = [
  {
    title: "Free French learning resources",
    description:
      "Online lessons and practice materials designed to help students build stronger foundations in French.",
  },
  {
    title: "Student registration",
    description:
      "Students can register for CYFFL support, resources, and updates through the student registration form.",
  },
  {
    title: "Local academic support",
    description:
      "In-person tutoring is focused on school help, homework support, test preparation, and academic confidence.",
  },
];

export default function CYFFLPage() {
  return (
    <div>
      <section className="border-b border-[#D8D0C3] bg-[#FAF7F0]">
        <div className="mx-auto max-w-7xl px-5 py-14 md:py-18">
          <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#C9A94B]">
                French literacy program
              </p>

              <h1 className="serif mt-4 max-w-5xl text-5xl font-bold leading-tight tracking-[-0.04em] text-[#1C3557] md:text-6xl">
                Canadian Youth Foundation for French Literacy
              </h1>

              <p className="mt-5 max-w-3xl text-xl leading-8 text-[#5E5A54]">
                CYFFL is a youth-led initiative creating free online French
                learning resources and local academic support for students.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                href="https://canyffl.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="bg-[#1C3557] px-6 py-3 text-center text-sm font-bold uppercase tracking-[0.08em] text-white transition hover:bg-[#C9A94B] hover:text-[#1C3557]"
                >
                Visit the CYFFL website
                </a>

                <a
                  href="mailto:canadianyouthffl@gmail.com"
                  className="border border-[#1C3557] px-6 py-3 text-center text-sm font-bold uppercase tracking-[0.08em] text-[#1C3557] transition hover:bg-[#1C3557] hover:text-white"
                >
                  Contact CYFFL
                </a>
              </div>
            </div>

            <aside className="border-l-4 border-[#C9A94B] bg-white p-6 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#C9A94B]">
                Program brief
              </p>

              <h2 className="serif mt-3 text-2xl font-bold leading-tight tracking-[-0.02em] text-[#1C3557]">
                Free French learning support for young students.
              </h2>

              <p className="mt-4 text-sm leading-6 text-[#5E5A54]">
                CYFFL helps students strengthen their French skills through
                accessible resources, practical explanations, and academic
                support.
              </p>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#C9A94B]">
              Overview
            </p>

            <h2 className="serif mt-2 text-3xl font-bold tracking-[-0.02em] text-[#1C3557]">
              French learning should be accessible.
            </h2>
          </div>

          <div className="max-w-3xl text-lg leading-8 text-[#5E5A54]">
            <p>
              The Canadian Youth Foundation for French Literacy supports
              students who want to improve their French skills outside the
              classroom. The project focuses on clear explanations, practical
              practice, and student-friendly learning materials.
            </p>

            <p className="mt-5">
              CYFFL begins with free online French learning resources and also
              connects students with local academic support. The goal is to make
              French learning less intimidating and more accessible.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-[#D8D0C3] bg-[#F3EEE4]">
        <div className="mx-auto max-w-7xl px-5 py-12">
          <div className="mb-6 border-b border-[#1C3557] pb-4">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#C9A94B]">
              Focus areas
            </p>

            <h2 className="serif mt-2 text-3xl font-bold tracking-[-0.02em] text-[#1C3557]">
              What CYFFL supports
            </h2>
          </div>

          <div className="grid gap-px bg-[#D8D0C3] sm:grid-cols-2 md:grid-cols-3">
            {focusAreas.map((area) => (
              <div key={area} className="bg-white p-5">
                <p className="font-bold text-[#1C3557]">{area}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-12">
          <div className="mb-6 border-b border-[#1C3557] pb-4">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#C9A94B]">
              Programs
            </p>

            <h2 className="serif mt-2 text-3xl font-bold tracking-[-0.02em] text-[#1C3557]">
              Resources, registration, and support
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {offerings.map((item) => (
              <div
                key={item.title}
                className="border border-[#D8D0C3] bg-[#FAF7F0] p-6 shadow-sm"
              >
                <h3 className="serif text-2xl font-bold tracking-[-0.02em] text-[#1C3557]">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-[#5E5A54]">
                  {item.description}
                </p>
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
                Connection
              </p>

              <h2 className="serif mt-2 text-3xl font-bold tracking-[-0.02em] text-[#1C3557]">
                Language learning is public learning.
              </h2>
            </div>

            <div>
              <p className="max-w-3xl text-lg leading-8 text-[#5E5A54]">
                Civics Studio focuses on education, communication, and access to
                public life. CYFFL fits that mission by helping students build
                French literacy, academic confidence, and stronger communication
                skills.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                href="https://canyffl.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="inline-block bg-[#1C3557] px-5 py-3 text-center text-sm font-bold uppercase tracking-[0.08em] text-white transition hover:bg-[#C9A94B] hover:text-[#1C3557]"
                >
                Visit the CYFFL website
                </a>

                <Link
                  href="/contact"
                  className="inline-block border border-[#1C3557] px-5 py-3 text-center text-sm font-bold uppercase tracking-[0.08em] text-[#1C3557] transition hover:bg-[#1C3557] hover:text-white"
                >
                  Contact Civics Studio
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}