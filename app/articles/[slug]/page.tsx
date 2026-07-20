import Link from "next/link";
import { getArticle, getArticleSlugs } from "@/lib/articles";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getArticleSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const slugs = getArticleSlugs();
  if (!slugs.includes(slug)) return {};
  const article = await getArticle(slug);
  return {
    title: article.title,
    description: article.description,
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const slugs = getArticleSlugs();
  if (!slugs.includes(slug)) notFound();

  const article = await getArticle(slug);

  return (
    <article>
      {/* Article header */}
      <section className="border-b border-edge bg-panel">
        <div className="mx-auto max-w-4xl px-5 py-14 md:py-18">
          <Link
            href="/articles"
            className="text-sm font-bold uppercase tracking-[0.08em] text-maple hover:underline"
          >
            ← Articles
          </Link>

          <p className="mt-8 text-xs font-bold uppercase tracking-[0.18em] text-maple">
            {article.category}
          </p>

          <h1 className="serif mt-4 text-5xl font-bold leading-tight tracking-[-0.04em] text-cream md:text-6xl">
            {article.title}
          </h1>

          <p className="mt-5 text-xl leading-8 text-mist">
            {article.description}
          </p>

          <div className="mt-8 border-t border-edge pt-4 text-sm text-mist">
            <p>Published by Civics Studio · {article.dateFormatted}</p>
          </div>
        </div>
      </section>

      {/* Article body */}
      <section className="bg-ink">
        <div className="mx-auto max-w-3xl px-5 py-12">
          <div
            className="article-body"
            dangerouslySetInnerHTML={{ __html: article.contentHtml }}
          />

          <div className="mt-12 border-t border-edge pt-8">
            <Link
              href="/articles"
              className="text-sm font-bold uppercase tracking-[0.08em] text-cream hover:text-maple transition"
            >
              Back to articles →
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
