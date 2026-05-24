import Image from "next/image";
import Link from "next/link";

export default function WhyCivicsMattersArticlePage() {
  return (
    <article>
      {/* Article header */}
      <section className="border-b border-[#D8D0C3] bg-[#FAF7F0]">
        <div className="mx-auto max-w-4xl px-5 py-14 md:py-18">
          <Link
            href="/articles"
            className="text-sm font-bold uppercase tracking-[0.08em] text-[#C9A94B] hover:underline"
          >
            ← Articles
          </Link>

          <p className="mt-8 text-xs font-bold uppercase tracking-[0.18em] text-[#C9A94B]">
            Civic Education
          </p>

          <h1 className="serif mt-4 text-5xl font-bold leading-tight tracking-[-0.04em] text-[#1C3557] md:text-6xl">
            Why Civic Education Needs to Be Practical
          </h1>

          <p className="mt-5 text-xl leading-8 text-[#5E5A54]">
            Civics is often taught as a list of institutions. It should also
            teach how power, incentives, negotiation, and decisions actually
            work — and give people a chance to practise those things before
            they need them.
          </p>

          <div className="mt-8 border-t border-[#D8D0C3] pt-4 text-sm text-[#5E5A54]">
            <p>Published by Civics Studio · May 2026</p>
          </div>
        </div>
      </section>

      {/* Article body */}
      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-5 py-12">
          <div className="space-y-7 text-lg leading-8 text-[#222222]">

            <p>
              Most civic education starts with structure. Parliament has two
              chambers. Elections follow a fixed cycle. Courts operate
              independently of government. These facts matter — they describe
              how systems are built. But they leave out something equally
              important: how those systems actually behave.
            </p>

            <p>
              Real political life is not a diagram. It's a process of competing
              interests, shifting coalitions, and decisions made under pressure.
              Someone who can name every branch of government but has never
              thought through a trade-off, built an argument from evidence, or
              considered what it means for a public promise to conflict with a
              private goal — that person is only half-prepared.
            </p>

            <p>
              This is what practical civic learning is for. Not to replace the
              structural stuff, but to add the layer underneath it: the
              incentives, the reasoning, the experience of actually making
              civic choices.
            </p>

            {/* Inline image 1 */}
            <figure className="my-10 -mx-5 sm:mx-0">
              <div className="relative h-72 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1744339700180-d3a299e2cd1f?auto=format&fit=crop&w=1200&q=85"
                  alt="Canadian Parliament building at Parliament Hill"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[#1C3557]/10" />
              </div>
              <figcaption className="mt-2 text-center text-xs text-[#5E5A54]">
                Parliament Hill, Ottawa.{" "}
                <a
                  href="https://unsplash.com/photos/the-canadian-parliament-building-stands-tall-LYKUm-VRJPs"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                >
                  Photo: Dennis Zhang / Unsplash
                </a>
              </figcaption>
            </figure>

            <h2 className="serif pt-4 text-3xl font-bold tracking-[-0.02em] text-[#1C3557]">
              Civics should be active, not passive.
            </h2>

            <p>
              Democracy asks things of people. It asks them to evaluate
              competing claims, weigh costs and benefits, judge whether an
              argument is sound, and decide how — and whether — to get
              involved. These aren't instincts. They're skills. And like any
              skill, they develop through practice.
            </p>

            <p>
              A game forces a player to make a decision with incomplete
              information. A simulation asks participants to negotiate under
              real time pressure. A data project requires someone to look at
              numbers and ask what's actually being measured, and whether the
              comparison is fair. These formats don't just illustrate civic
              ideas — they make students do something with them.
            </p>

            <p>
              That's the difference between learning about negotiation and
              learning to negotiate. The first produces knowledge. The second
              produces capability.
            </p>

            {/* Inline image 2 */}
            <figure className="my-10 -mx-5 sm:mx-0">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1761301643520-49c1ee626e72?auto=format&fit=crop&w=1200&q=85"
                  alt="United Nations headquarters building with international flags"
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-[#1C3557]/10" />
              </div>
              <figcaption className="mt-2 text-center text-xs text-[#5E5A54]">
                The United Nations headquarters, New York.{" "}
                <a
                  href="https://unsplash.com/photos/united-nations-headquarters-building-with-flags-flying-j4Wc_Ezq7OE"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                >
                  Photo: Maxim Klimashin / Unsplash
                </a>
              </figcaption>
            </figure>

            <h2 className="serif pt-4 text-3xl font-bold tracking-[-0.02em] text-[#1C3557]">
              The goal is understanding, not ideology.
            </h2>

            <p>
              There's a temptation — particularly in the current climate — to
              treat civic education as an opportunity to point students toward
              the right conclusions. That's a mistake. Civic education done
              well doesn't tell people what to think. It sharpens their ability
              to think.
            </p>

            <p>
              The goal is someone who can read a policy proposal and understand
              what it actually does. Who can spot when an argument relies on a
              false premise. Who can see whose interests are served by a given
              decision, and whose aren't. Who knows that public promises and
              private goals often diverge — and has some tools for figuring out
              which is which.
            </p>

            <p>
              Civics Studio is built around that principle. The aim isn't
              to produce citizens who agree with us. It's to build tools that
              make civic and economic thinking sharper, more practical, and
              more available — for anyone who wants to use them.
            </p>

          </div>

          <div className="mt-12 border-t border-[#D8D0C3] pt-8">
            <Link
              href="/articles"
              className="text-sm font-bold uppercase tracking-[0.08em] text-[#1C3557] hover:text-[#C9A94B] transition"
            >
              Back to articles →
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
