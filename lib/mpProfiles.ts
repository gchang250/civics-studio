import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const profilesDir = path.join(process.cwd(), "content/mp-profiles");

export interface Source {
  title: string;
  url: string;
}

export interface MPProfileMeta {
  slug: string;
  name: string;
  party: string;
  riding: string;
  keyPromises: string[];
  sources: Source[];
}

export interface MPProfile extends MPProfileMeta {
  contentHtml: string;
}

export function getProfileSlugs(): string[] {
  if (!fs.existsSync(profilesDir)) return [];
  return fs
    .readdirSync(profilesDir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

export function hasProfile(slug: string): boolean {
  return getProfileSlugs().includes(slug);
}

export async function getProfile(slug: string): Promise<MPProfile | null> {
  const filePath = path.join(profilesDir, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);

  const processed = await remark()
    .use(html, { allowDangerousHtml: true })
    .process(content);

  return {
    slug,
    name: data.name as string,
    party: data.party as string,
    riding: data.riding as string,
    keyPromises: (data.keyPromises as string[]) ?? [],
    sources: (data.sources as Source[]) ?? [],
    contentHtml: processed.toString(),
  };
}
