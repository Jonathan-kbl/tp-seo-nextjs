import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://tp-seo-nextjs-six.vercel.app/",
      lastModified: new Date(),
      priority: 1,
    },
  ];
}