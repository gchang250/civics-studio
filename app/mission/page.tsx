import Image from "next/image";

export default function MissionPage() {
  return (
    <div>
      {/* Hero — split layout */}
      <section className="border-b border-[#D8D0C3] bg-[#FAF7F0]">
        <div className="mx-auto grid max-w-7xl lg:grid-cols-[1fr_1fr]">

          {/* Left — text */}
          <div className="flex flex-col justify-center px-5 py-14 md:py-18 lg:pr-12">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#C9A94B]">
              Mission
            </p>

            <h1 className="serif mt-4 text-5xl font-bold leading-tight tracking-[-0.035em] text-[#1C3557] md:text-6xl">
              Turning civic complexity into something you can actually use.
            </h1>

            <p className="mt-5 max-w-xl text-lg leading-8 text-[#5E5A54]">
              Civics Studio exists to make civic and economic learning more
              practical and engaging — for students in classrooms, clubs, and
              extracurricular programs.
            </p>
          </div>

          {/* Right — photo */}
          <div className="relative hidden min-h-[420px] overflow-hidden lg:block">
            <Image
              src="https://images.unsplash.com/photo-1651514645933-c26e0eb4ace3?auto=format&fit=crop&w=900&q=80"
              alt="Group of people in conversation"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-[#1C3557]/20" />
            <a
              href="https://unsplash.com/photos/a-group-of-people-talking-bxiOjnbjRM0"
              target="_blank"
              rel="noreferrer"
              className="absolute bottom-2 right-3 text-[10px] text-white/40 hover:text-white/70 transition"
            >
              Photo: Small Group Network / Unsplash
            </a>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 py-12 md:grid-cols-3">
          {[
            {
              title: "Make civics practical",
              text: "Students shouldn't only memorize institutions. They should practise negotiation, decision-making, and civic reasoning.",
            },
            {
              title: "Use games and data",
              text: "Games make incentives visible. Data projects make economic conditions tangible and easier to compare.",
            },
            {
              title: "Stay non-partisan",
              text: "Civics Studio does not promote any party or ideology. The goal is understanding, not persuasion.",
            },
          ].map((item) => (
            <div key={item.title} className="border-t-4 border-[#C9A94B] bg-[#FAF7F0] p-6 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#C9A94B]">
                Principle
              </p>
              <h2 className="serif mt-3 text-2xl font-bold tracking-[-0.02em] text-[#1C3557]">
                {item.title}
              </h2>
              <p className="mt-4 leading-7 text-[#5E5A54]">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why it matters */}
      <section className="border-y border-[#D8D0C3] bg-[#F3EEE4]">
        <div className="mx-auto max-w-7xl px-5 py-12">
          <div className="grid gap-8 md:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#C9A94B]">
                Why it matters
              </p>
              <h2 className="serif mt-2 text-3xl font-bold tracking-[-0.02em] text-[#1C3557]">
                Civic disengagement grows when the system feels distant.
              </h2>
            </div>

            <p className="max-w-3xl text-lg leading-8 text-[#5E5A54]">
              Most students know that politics and economics affect their lives,
              but are introduced to these subjects through abstract definitions
              rather than practical experience. Civics Studio uses projects
              students can play, download, compare, and discuss.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
