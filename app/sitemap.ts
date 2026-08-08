import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";
import { SERVICES_DATA } from "@/lib/services-data";
import { LOCATIONS_DATA } from "@/lib/locations-data";
import { BLOG_POSTS } from "@/lib/blog-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/about`, changeFrequency: "yearly", priority: 0.7 },
    { url: `${SITE_URL}/contact`, changeFrequency: "yearly", priority: 0.7 },
    { url: `${SITE_URL}/reviews`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${SITE_URL}/gallery`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${SITE_URL}/services`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/locations`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/blog`, changeFrequency: "weekly", priority: 0.6 },
  ];

  const servicePages: MetadataRoute.Sitemap = SERVICES_DATA.map((s) => ({
    url: `${SITE_URL}/services/${s.slug}`,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  const locationPages: MetadataRoute.Sitemap = LOCATIONS_DATA.map((c) => ({
    url: `${SITE_URL}/locations/${c.slug}`,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  const blogPages: MetadataRoute.Sitemap = BLOG_POSTS.map((p) => ({
    url: `${SITE_URL}/blog/${p.slug}`,
    lastModified: p.dateModified,
    changeFrequency: "yearly",
    priority: 0.5,
  }));

  return [...staticPages, ...servicePages, ...locationPages, ...blogPages];
}
