import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import type { Locale } from "@/lib/content";
import { DocumentShell } from "@/components/document-shell";
import { baseMetadata } from "@/lib/metadata";
import "../globals.css";

export const metadata: Metadata = baseMetadata;

export function generateStaticParams() {
  return [{ locale: "es" }, { locale: "en" }];
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale: localeParam } = await params;
  if (localeParam !== "es" && localeParam !== "en") notFound();
  const locale: Locale = localeParam;

  return (
    <DocumentShell locale={locale}>
      <a className="skip-link" href="#main-content">
        {locale === "es" ? "Saltar al contenido" : "Skip to content"}
      </a>
      <Header locale={locale} />
      {children}
      <Footer locale={locale} />
    </DocumentShell>
  );
}
