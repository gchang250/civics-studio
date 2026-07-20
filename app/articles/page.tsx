import Image from "next/image";
import Link from "next/link";
import { getAllArticles } from "@/lib/articles";

export default function ArticlesPage() {
  const articles = getAllArticles();

  return (
    <div>
      {/* Hero with photo */}
      <section className="border-b border-edge bg-panel">
        <div className="mx-auto grid max-w-7xl lg:grid-cols-[1fr_1fr]">

          {/* Left — text */}
          <div className="flex flex-col justify-center px-5 py-14 md:py-18 lg:pr-12">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-maple">
              Articles
            </p>

            <h1 className="serif mt-4 text-5xl font-bold leading-tight tracking-[-0.035em] text-cream md:text-6xl">
              Essays and explainers on civics, economics, and how government works.
            </h1>

            <p className="mt-5 max-w-xl text-lg leading-8 text-mist">
              Civics Studio articles break down political ideas, public systems,
              and economic issues in plain, accessible language.
            </p>
          </div>

          {/* Right — photo */}
          <div className="relative hidden min-h-[380px] overflow-hidden lg:block">
            <Image
              src="https://images.unsplash.com/photo-1586339393656-abf06d114da4?auto=format&fit=crop&w=900&q=80"
              alt="Vintage typewriter with newspaper"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-panel-2/25" />
            <a
              href="https://unsplash.com/photos/an-old-fashioned-typewriter-with-a-newspaper-on-top-of-it-Pive7hEv-1E"
              target="_blank"
              rel="noreferrer"
              className="absolute bottom-2 right-3 text-[10px] text-cream/40 hover:text-cream/70 transition"
            >
              Photo: Markus Winkler / Unsplash
            </a>
          </div>
        </div>
      </section>

      {/* Article list */}
      <section className="bg-ink">
        <div className="mx-auto max-w-7xl px-5 py-12">
          <div className="mb-8 border-b border-edge pb-4">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-maple">
              Latest
            </p>

            <h2 className="serif mt-2 text-3xl font-bold tracking-[-0.02em] text-cream">
              Recent articles
            </h2>
          </div>

          {articles.length === 0 ? (
            <p className="text-mist">No articles yet.</p>
          ) : (
            <div className="divide-y divide-edge border-y border-edge">
              {articles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/articles/${article.slug}`}
                  className="grid gap-6 bg-panel px-5 py-7 transition hover:bg-panel-2 md:grid-cols-[0.25fr_1fr_0.15fr]"
                >
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-maple">
                      {article.category}
                    </p>
                    <p className="mt-2 text-sm text-mist">
                      {article.dateFormatted}
                    </p>
                  </div>

                  <div>
                    <h2 className="serif text-3xl font-bold tracking-[-0.025em] text-cream">
                      {article.title}
                    </h2>

                    <p className="mt-3 max-w-3xl leading-7 text-mist">
                      {article.description}
                    </p>
                  </div>

                  <p className="text-sm font-bold uppercase tracking-[0.08em] text-cream">
                    Read →
                  </p>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
