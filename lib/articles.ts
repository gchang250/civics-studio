import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const articlesDir = path.join(process.cwd(), "content/articles");

export interface ArticleMeta {
  slug: string;
  title: string;
  description: string;
  /** Sortable ISO date string, e.g. "2026-05-01" */
  date: string;
  /** Formatted for display, e.g. "May 2026" */
  dateFormatted: string;
  category: string;
}

export interface Article extends ArticleMeta {
  contentHtml: string;
}

function formatDate(iso: string | Date): string {
  // gray-matter parses YAML dates as JS Date objects; handle both forms.
  const d = iso instanceof Date ? iso : new Date(iso + "T00:00:00");
  return d.toLocaleDateString("en-CA", { month: "long", year: "numeric" });
}

function toIsoString(raw: string | Date): string {
  if (raw instanceof Date) {
    return raw.toISOString().slice(0, 10);
  }
  return raw;
}

export function getArticleSlugs(): string[] {
  if (!fs.existsSync(articlesDir)) return [];
  return fs
    .readdirSync(articlesDir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

export function getAllArticles(): ArticleMeta[] {
  return getArticleSlugs()
    .map((slug) => {
      const raw = fs.readFileSync(path.join(articlesDir, `${slug}.md`), "utf8");
      const { data } = matter(raw);
      const isoDate = toIsoString(data.date as string | Date);
      return {
        slug,
        title: data.title as string,
        description: data.description as string,
        date: isoDate,
        dateFormatted: formatDate(data.date as string | Date),
        category: data.category as string,
      };
    })
    .sort((a, b) => b.date.localeCompare(a.date)); // newest first
}

export async function getArticle(slug: string): Promise<Article> {
  const raw = fs.readFileSync(path.join(articlesDir, `${slug}.md`), "utf8");
  const { data, content } = matter(raw);

  const processed = await remark()
    .use(html, { allowDangerousHtml: true })
    .process(content);

  const isoDate = toIsoString(data.date as string | Date);
  return {
    slug,
    title: data.title as string,
    description: data.description as string,
    date: isoDate,
    dateFormatted: formatDate(data.date as string | Date),
    category: data.category as string,
    contentHtml: processed.toString(),
  };
}
