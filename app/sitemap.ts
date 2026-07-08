import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { getArticleSlugs } from "@/lib/articles";
import { getMPRoster } from "@/lib/openparliament";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: SITE_URL, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/mission`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/projects`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/projects/parliament-tracker`, changeFrequency: "daily", priority: 0.9 },
    { url: `${SITE_URL}/projects/media-bias-tracker`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/projects/detente`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/projects/fried-rice-index`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/projects/cyffl`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/articles`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${SITE_URL}/about`, changeFrequency: "yearly", priority: 0.4 },
    { url: `${SITE_URL}/contact`, changeFrequency: "yearly", priority: 0.3 },
  ];

  const articleRoutes: MetadataRoute.Sitemap = getArticleSlugs().map((slug) => ({
    url: `${SITE_URL}/articles/${slug}`,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  let mpRoutes: MetadataRoute.Sitemap = [];
  try {
    const mps = await getMPRoster();
    mpRoutes = mps.map((mp) => ({
      url: `${SITE_URL}/projects/parliament-tracker/mps/${mp.slug}`,
      changeFrequency: "weekly",
      priority: 0.3,
    }));
  } catch {
    // Sitemap generation shouldn't fail outright if the open data API is briefly unreachable.
  }

  return [...staticRoutes, ...articleRoutes, ...mpRoutes];
}
