import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://boomathon.netlify.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteUrl}/`,
      lastModified: new Date(),
      priority: 1.0,
      changeFrequency: "monthly",
    },
    {
      url: `${siteUrl}/privacy`,
      lastModified: new Date("2026-02-17"),
      priority: 0.3,
      changeFrequency: "yearly",
    },
    {
      url: `${siteUrl}/terms`,
      lastModified: new Date("2026-02-17"),
      priority: 0.3,
      changeFrequency: "yearly",
    },
  ];
}
