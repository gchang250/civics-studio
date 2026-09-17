import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { getMPRoster } from "@/lib/openparliament";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: SITE_URL, changeFrequency: "daily", priority: 1 },
    { url: `${SITE_URL}/projects/parliament-tracker`, changeFrequency: "daily", priority: 0.9 },
    { url: `${SITE_URL}/mission`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/about`, changeFrequency: "yearly", priority: 0.4 },
    { url: `${SITE_URL}/contact`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/privacy`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${SITE_URL}/terms`, changeFrequency: "yearly", priority: 0.2 },
  ];

  let mpRoutes: MetadataRoute.Sitemap = [];
  try {
    const mps = await getMPRoster();
    mpRoutes = mps.map((mp) => ({
      url: `${SITE_URL}/projects/parliament-tracker/mps/${mp.slug}`,
      changeFrequency: "weekly",
      priority: 0.5,
    }));
  } catch {
    // Sitemap generation shouldn't fail outright if the open data API is briefly unreachable.
  }

  return [...staticRoutes, ...mpRoutes];
}
