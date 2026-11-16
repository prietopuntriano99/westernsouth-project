import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import {
  getPath,
  otherSectors,
  pages,
  sectors,
  ui,
  type Locale,
  type PageKey,
} from "@/lib/content";

export function ContentPage({
  locale,
  pageKey,
  children,
}: {
  locale: Locale;
  pageKey: Exclude<PageKey, "home">;
  children?: React.ReactNode;
}) {
  const page = pages[locale][pageKey];
  const isLegal =
    pageKey === "privacy" || pageKey === "terms" || pageKey === "disclaimer";

  return (
    <>
      <section className="relative overflow-hidden bg-sand">
        <div className="absolute right-0 top-0 h-full w-[36%] border-l border-line/50 max-lg:hidden" />
        <div className="section-shell relative py-20 sm:py-28 lg:py-36">
          <div className="max-w-4xl">
            <p className="eyebrow">{page.eyebrow}</p>
            <h1 className="mt-6 max-w-4xl font-heading text-[2.6rem] font-semibold leading-[1.09] tracking-[-0.045em] text-ink sm:text-5xl lg:text-[4.25rem]">
              {page.title}
            </h1>
            <p className="mt-8 max-w-3xl text-base leading-8 text-muted sm:text-lg sm:leading-9">
              {page.intro}
            </p>
          </div>
        </div>
      </section>

      {pageKey === "industries" ? (
        <IndustriesContent locale={locale} />
      ) : (
        <section className="section-shell py-16 sm:py-24 lg:py-28">
          {page.sections.length > 0 && (
            <div className="grid gap-0 lg:grid-cols-2">
              {page.sections.map((section, index) => (
                <article
                  key={section.title}
                  className={`border-t border-line px-0 py-9 sm:py-11 lg:px-9 ${
                    index % 2 === 0 ? "lg:border-r lg:pl-0" : "lg:pr-0"
                  }`}
                >
                  <p className="eyebrow">0{index + 1}</p>
                  <h2 className="mt-4 font-heading text-2xl font-semibold leading-snug text-ink sm:text-3xl">
                    {section.title}
                  </h2>
                  <p className="mt-4 max-w-xl leading-7 text-muted">
                    {section.body}
                  </p>
                  {section.bullets && (
                    <ul className="mt-6 space-y-3">
                      {section.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="flex items-start gap-3 text-sm leading-6 text-ink"
                        >
                          <Check
                            className="mt-1 shrink-0 text-copper"
                            size={15}
                            aria-hidden="true"
                          />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </article>
              ))}
            </div>
          )}

          {children}

          {pageKey === "advisory" && (
            <div className="mt-10 border-l-2 border-copper pl-5 text-sm leading-7 text-muted">
              {locale === "es"
                ? "Los servicios patrimoniales son personalizados y están sujetos a evaluación previa. Los umbrales indicados son referenciales, no garantizan la aceptación ni representan mínimos regulatorios."
                : "Wealth services are personalized and subject to prior assessment. The indicative thresholds do not guarantee acceptance and are not regulatory minimums."}
            </div>
          )}

          {!isLegal && pageKey !== "contact" && (
            <Callout locale={locale} />
          )}
        </section>
      )}
    </>
  );
}

function IndustriesContent({ locale }: { locale: Locale }) {
  return (
    <div className="section-shell py-16 sm:py-24">
      <p className="eyebrow">{ui[locale].currentInvestments}</p>
      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        {sectors[locale].map((sector, index) => (
          <article
            className="group relative min-h-[330px] overflow-hidden bg-corporate sm:min-h-[400px]"
            key={sector.title}
          >
            <Image
              src={sector.image}
              alt={sector.alt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              priority={index < 2}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#071f17]/95 via-[#071f17]/25 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-7 sm:p-9">
              <p className="eyebrow !text-copperlight">0{index + 1}</p>
              <h2 className="mt-3 font-heading text-2xl font-semibold text-white sm:text-3xl">
                {sector.title}
              </h2>
              <p className="mt-3 max-w-md text-sm leading-6 text-white/80">
                {sector.description}
              </p>
            </div>
          </article>
        ))}
      </div>
      <p className="mt-4 text-xs leading-5 text-muted">
        {locale === "es"
          ? "Imágenes ilustrativas; no representan activos ni operaciones propias."
          : "Illustrative images; they do not depict Westernsouth assets or operations."}
      </p>

      <div className="mt-16 border-t border-line pt-9 sm:mt-20">
        <p className="eyebrow">{ui[locale].sectorsOfInterest}</p>
        <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
          {otherSectors[locale].map((sector) => (
            <span key={sector} className="font-heading text-lg text-ink">
              {sector}
            </span>
          ))}
        </div>
        <p className="mt-5 max-w-2xl text-sm leading-6 text-muted">
          {locale === "es"
            ? "El interés en estos sectores no implica que existan inversiones actuales."
            : "Interest in these sectors does not imply current investments."}
        </p>
      </div>
    </div>
  );
}

function Callout({ locale }: { locale: Locale }) {
  return (
    <aside className="mt-16 flex flex-col gap-7 border-t border-line pt-10 sm:mt-20 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p className="eyebrow">{ui[locale].contact}</p>
        <h2 className="mt-3 font-heading text-2xl font-semibold text-ink sm:text-3xl">
          {locale === "es"
            ? "Exploremos lo que es posible."
            : "Let's explore what is possible."}
        </h2>
      </div>
      <Link href={getPath(locale, "contact")} className="button-primary">
        {ui[locale].contactUs}
        <ArrowRight size={16} aria-hidden="true" />
      </Link>
    </aside>
  );
}
