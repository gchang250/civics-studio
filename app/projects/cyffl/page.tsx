import Link from "next/link";
import Comments from "@/app/components/Comments";

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
      "Online lessons and practice materials to help students build stronger foundations in French.",
  },
  {
    title: "Student registration",
    description:
      "Students can register for CYFFL support, resources, and updates through the student registration form.",
  },
  {
    title: "Local academic support",
    description:
      "In-person tutoring covering school help, homework, test prep, and building confidence in French.",
  },
];

export default function CYFFLPage() {
  return (
    <div className="bg-[#faf8f5]">
      <section className="border-b border-[#e5e0d4] bg-[#f3efe6]">
        <div className="mx-auto max-w-7xl px-5 py-14 md:py-18">
          <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr]">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#8b1e1e] lowercase">
                french literacy program
              </p>

              <h1 className="serif mt-4 max-w-5xl text-5xl font-normal italic leading-tight tracking-[-0.02em] text-[#111f36] md:text-6xl lowercase">
                Canadian Youth Foundation for French Literacy
              </h1>

              <p className="mt-5 max-w-3xl text-xl leading-8 text-[#5f697a]">
                Canada is short nearly 10,000 qualified French teachers. Kids who want to learn French or stay in French Immersion are running out of options. CYFFL is a youth-run program filling that gap with free online resources and local tutoring support.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://canyffl.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="border border-[#111f36] px-6 py-3 text-center text-sm font-medium uppercase tracking-[0.08em] text-[#111f36] transition hover:bg-[#8b1e1e] hover:text-white hover:border-[#8b1e1e]"
                >
                  Visit the CYFFL website
                </a>

                <a
                  href="mailto:canadianyouthffl@gmail.com"
                  className="border border-[#111f36]/30 px-6 py-3 text-center text-sm font-medium uppercase tracking-[0.08em] text-[#111f36]/70 transition hover:bg-[#8b1e1e] hover:text-white hover:border-[#8b1e1e]"
                >
                  Contact CYFFL
                </a>
              </div>
            </div>

            <aside className="border border-[#e5e0d4] bg-[#faf8f5] p-6">
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#8b1e1e] lowercase">
                program brief
              </p>

              <h2 className="serif mt-3 text-2xl font-normal italic leading-tight tracking-[-0.01em] text-[#111f36] lowercase">
                free french support for students.
              </h2>

              <p className="mt-4 text-sm leading-6 text-[#5f697a]">
                CYFFL helps students work on their French outside of school through study guides, grammar resources, and tutoring from other students who have been through the same curriculum.
              </p>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-[#faf8f5]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#8b1e1e] lowercase">
              overview
            </p>

            <h2 className="serif mt-2 text-3xl font-normal italic tracking-[-0.01em] text-[#111f36] lowercase">
              why this matters right now.
            </h2>
          </div>

          <div className="max-w-3xl text-lg leading-8 text-[#5f697a]">
            <p>
              Canada has two official languages. That&apos;s not just a constitutional fact, it&apos;s supposed to mean something practically. But French Immersion waitlists are growing, FSL classes are being cut, and the teacher shortage is getting worse each year. Students who want to engage with French genuinely have fewer and fewer places to do it.
            </p>

            <p className="mt-5">
              CYFFL started because students noticed this and decided to do something about it. The program is run by youth, for youth. It&apos;s not a replacement for proper school instruction, but it&apos;s a real resource for students who want to keep learning and don&apos;t have anywhere else to turn.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-[#e5e0d4] bg-[#f3efe6]">
        <div className="mx-auto max-w-7xl px-5 py-12">
          <div className="mb-6 border-b border-[#e5e0d4] pb-4">
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#8b1e1e] lowercase">
              focus areas
            </p>

            <h2 className="serif mt-2 text-3xl font-normal italic tracking-[-0.01em] text-[#111f36] lowercase">
              what CYFFL supports
            </h2>
          </div>

          <div className="grid gap-px bg-[#e5e0d4] sm:grid-cols-2 md:grid-cols-3 border border-[#e5e0d4]">
            {focusAreas.map((area) => (
              <div key={area} className="bg-[#faf8f5] p-5">
                <p className="font-semibold text-[#111f36]">{area}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#faf8f5]">
        <div className="mx-auto max-w-7xl px-5 py-12">
          <div className="mb-6 border-b border-[#e5e0d4] pb-4">
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#8b1e1e] lowercase">
              programs
            </p>

            <h2 className="serif mt-2 text-3xl font-normal italic tracking-[-0.01em] text-[#111f36] lowercase">
              resources, registration, and support
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {offerings.map((item) => (
              <div
                key={item.title}
                className="border border-[#e5e0d4] bg-[#f3efe6] p-6"
              >
                <h3 className="serif text-2xl font-normal italic text-[#111f36] lowercase">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-[#5f697a]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#faf8f5]">
        <div className="mx-auto max-w-7xl px-5 py-12">
          <div className="grid gap-8 border-t border-[#e5e0d4] pt-8 md:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#8b1e1e] lowercase">
                connection
              </p>

              <h2 className="serif mt-2 text-3xl font-normal italic tracking-[-0.01em] text-[#111f36] lowercase">
                language access is a civic issue.
              </h2>
            </div>

            <div>
              <p className="max-w-3xl text-lg leading-8 text-[#5f697a]">
                If Canada is going to take bilingualism seriously, French has to be accessible to students who want to learn it, not just on paper. CYFFL is part of how Civics Studio thinks about public life: access to education, to language, to participation, shouldn&apos;t depend on which school you got into or which province you live in.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://canyffl.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block border border-[#111f36] px-5 py-3 text-center text-sm font-medium uppercase tracking-[0.08em] text-[#111f36] transition hover:bg-[#8b1e1e] hover:text-white hover:border-[#8b1e1e]"
                >
                  Visit the CYFFL website
                </a>

                <Link
                  href="/contact"
                  className="inline-block border border-[#111f36]/30 px-5 py-3 text-center text-sm font-medium uppercase tracking-[0.08em] text-[#111f36]/70 transition hover:bg-[#8b1e1e] hover:text-white hover:border-[#8b1e1e]"
                >
                  Contact Civics Studio
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Comments pageId="cyffl" />
    </div>
  );
}