import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://devfrank.vercel.com/en",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://devfrank.vercel.com/en/gallery",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://devfrank.vercel.com/fr",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://devfrank.vercel.com/fr/gallery",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },

  ];
}
