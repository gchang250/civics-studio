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
                As Canada faces a critical deficit of nearly 10,000 qualified French teachers, French instruction in schools is in jeopardy, putting our national bilingual identity at risk. CYFFL is a youth-led initiative bridging this gap by providing free online French learning resources and local academic support to preserve French culture and language literacy for the next generation.
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
                preserving french literacy.
              </h2>

              <p className="mt-4 text-sm leading-6 text-[#5f697a]">
                CYFFL helps students strengthen their French skills outside of class through accessible resources, practical grammar guides, and structured student-to-student tutoring.
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
              bridging a critical bilingual deficit.
            </h2>
          </div>

          <div className="max-w-3xl text-lg leading-8 text-[#5f697a]">
            <p>
              Canada is a bilingual nation with two official languages, yet French culture is fading for youth due to a severe and chronic national educator shortage. With a projected deficit of nearly 10,000 qualified French as a Second Language (FSL) and French Immersion teachers, schools are struggling to provide standard instruction.
            </p>

            <p className="mt-5">
              The Canadian Youth Foundation for French Literacy is a direct response to this crisis, acting as a crucial bridge for students to build foundations and reclaim bilingual literacy. By pairing free, plain-language online study guides with direct academic support, we make French learning less intimidating, helping preserve a vital pillar of Canadian heritage.
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
                language learning is public learning.
              </h2>
            </div>

            <div>
              <p className="max-w-3xl text-lg leading-8 text-[#5f697a]">
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