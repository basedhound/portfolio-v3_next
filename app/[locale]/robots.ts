import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/en/", "/fr/", "/en/gallery", "/fr/gallery"],
      disallow: [],
    },
    sitemap: [
      "http://localhost:3000/en/sitemap.xml",
      "http://localhost:3000/fr/sitemap.xml",
    ],
  };
}
