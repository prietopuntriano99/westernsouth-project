import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContactForm } from "@/components/contact-form";
import { HomePage } from "@/components/home-page";
import { ContentPage } from "@/components/content-page";
import {
  findPage,
  getPath,
  pages,
  ui,
  type Locale,
  type PageKey,
} from "@/lib/content";

type RouteParams = { locale: string; segments?: string[] };

export function generateStaticParams() {
  const routes: { locale: string; segments?: string[] }[] = [];
  for (const locale of ["es", "en"] as const) {
    routes.push({ locale });
    for (const [key, page] of Object.entries(pages[locale]) as [
      Exclude<PageKey, "home">,
      (typeof pages)[Locale][Exclude<PageKey, "home">],
    ][]) {
      const legal =
        key === "privacy" || key === "terms" || key === "disclaimer";
      routes.push({
        locale,
        segments: legal ? ["legal", page.slug] : [page.slug],
      });
    }
  }
  return routes;
}

function resolvePage(params: RouteParams) {
  if (params.locale !== "es" && params.locale !== "en") return null;
  const locale: Locale = params.locale;
  const key = findPage(locale, params.segments ?? []);
  return key ? { locale, key } : null;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<RouteParams>;
}): Promise<Metadata> {
  const resolved = resolvePage(await params);
  if (!resolved) return { title: "Page not found" };
  const { locale, key } = resolved;
  const title =
    key === "home"
      ? locale === "es"
        ? "Capital para transformar posibilidades."
        : "Capital to Unlock Potential."
      : pages[locale][key].title;
  const description =
    key === "home"
      ? ui[locale].overviewBody
      : pages[locale][key].intro;
  const canonical = getPath(locale, key);

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        es: getPath("es", key),
        en: getPath("en", key),
        "x-default": getPath("es", key),
      },
    },
    openGraph: {
      title,
      description,
      url: canonical,
      locale: locale === "es" ? "es_PE" : "en_US",
      alternateLocale: locale === "es" ? ["en_US"] : ["es_PE"],
      type: "website",
    },
  };
}

export default async function LocalizedPage({
  params,
}: {
  params: Promise<RouteParams>;
}) {
  const resolved = resolvePage(await params);
  if (!resolved) notFound();
  const { locale, key } = resolved;

  if (key === "home") return <HomePage locale={locale} />;
  if (key === "contact") {
    return (
      <main id="main-content">
        <ContentPage locale={locale} pageKey={key}>
          <ContactForm locale={locale} />
        </ContentPage>
      </main>
    );
  }

  return (
    <main id="main-content">
      <ContentPage locale={locale} pageKey={key} />
    </main>
  );
}
