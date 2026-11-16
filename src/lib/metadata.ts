import type { Metadata } from "next";
import { SITE_URL } from "@/lib/content";

export const baseMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Westernsouth Investment & Co. | Capital to Unlock Potential",
    template: "%s | Westernsouth Investment & Co.",
  },
  description:
    "Independent investment, private financing, financial structuring and wealth advisory firm based in Lima, Peru.",
  applicationName: "Westernsouth Investment & Co.",
  openGraph: {
    type: "website",
    siteName: "Westernsouth Investment & Co.",
    url: SITE_URL,
    title: "Westernsouth Investment & Co.",
    description:
      "Independent investment, private financing and financial advisory with a long-term perspective.",
    locale: "es_PE",
  },
  twitter: {
    card: "summary_large_image",
    title: "Westernsouth Investment & Co.",
    description:
      "Independent investment, private financing and financial advisory with a long-term perspective.",
  },
  referrer: "strict-origin-when-cross-origin",
};
