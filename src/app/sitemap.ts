import type { MetadataRoute } from "next";
import { getPath, type PageKey } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const keys: PageKey[] = [
    "home",
    "firm",
    "solutions",
    "advisory",
    "industries",
    "contact",
  ];

  return (["es", "en"] as const).flatMap((locale) =>
    keys.map((key) => ({
      url: `https://westernsouthinvestco.com${getPath(locale, key)}`,
      alternates: {
        languages: {
          es: `https://westernsouthinvestco.com${getPath("es", key)}`,
          en: `https://westernsouthinvestco.com${getPath("en", key)}`,
        },
      },
      changeFrequency: key === "home" ? "monthly" : "yearly",
      priority: key === "home" ? 1 : 0.7,
    })),
  );
}
