import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  MoveUpRight,
} from "lucide-react";
import {
  getPath,
  investmentCapabilities,
  otherSectors,
  sectors,
  ui,
  type Locale,
} from "@/lib/content";

export function HomePage({ locale }: { locale: Locale }) {
  const copy = ui[locale];

  return (
    <main id="main-content">
      <section className="relative min-h-[690px] overflow-hidden bg-corporate text-white lg:min-h-[760px]">
        <Image
          src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=2200&q=88"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#08251b]/95 via-[#0b3024]/75 to-[#0b3024]/30" />
        <div className="absolute inset-y-0 right-[14%] hidden w-px bg-white/15 lg:block" />
        <div className="section-shell relative flex min-h-[690px] flex-col justify-center py-24 lg:min-h-[760px]">
          <div className="max-w-4xl">
            <p className="eyebrow !text-copperlight">{copy.heroLabel}</p>
            <h1 className="mt-7 max-w-4xl font-heading text-[3.1rem] font-semibold leading-[1.02] tracking-[-0.055em] text-white sm:text-6xl lg:text-[5.5rem]">
              {locale === "es"
                ? "Capital para transformar posibilidades."
                : "Capital to Unlock Potential."}
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-white/75 sm:text-lg sm:leading-9">
              {locale === "es"
                ? "Somos una firma de inversión y estructuración financiera que conecta capital, conocimiento y oportunidades mediante soluciones flexibles de financiamiento, inversión y asesoría patrimonial."
                : "We are an investment and financial structuring firm connecting capital, expertise and opportunity through flexible financing, investment and wealth advisory solutions."}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link href={getPath(locale, "solutions")} className="button-light">
                {copy.explore}
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <Link
                href={getPath(locale, "firm")}
                className="inline-flex min-h-12 items-center gap-2 px-4 font-heading text-sm font-medium text-white transition-colors hover:text-copperlight focus-visible:outline focus-visible:outline-2 focus-visible:outline-copperlight"
              >
                {copy.about}
                <ArrowUpRight size={15} aria-hidden="true" />
              </Link>
            </div>
          </div>
          <div className="mt-16 flex flex-col gap-5 border-t border-white/20 pt-6 sm:flex-row sm:items-end sm:justify-between lg:absolute lg:bottom-11 lg:left-14 lg:right-14 lg:mt-0">
            <div>
              <p className="font-heading text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
                US$200M <span className="text-copperlight">—</span>
              </p>
              <p className="mt-1 text-[0.68rem] font-medium uppercase tracking-[0.16em] text-copperlight">
                {copy.aumLabel}
              </p>
            </div>
            <a
              href="#overview"
              className="hidden items-center gap-2 text-xs uppercase tracking-[0.14em] text-white/65 hover:text-white sm:inline-flex"
            >
              {locale === "es" ? "Descubrir Westernsouth" : "Discover Westernsouth"}
              <ArrowDown size={14} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <section id="overview" className="section-shell grid gap-10 py-20 sm:py-28 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:py-36">
        <div>
          <p className="eyebrow">01 / {locale === "es" ? "Firma" : "Firm"}</p>
          <p className="mt-7 font-editorial text-3xl italic leading-snug text-copper sm:text-4xl">
            {locale === "es"
              ? "Una firma independiente, una visión de largo plazo."
              : "An independent firm, a long-term perspective."}
          </p>
        </div>
        <div className="max-w-3xl">
          <h2 className="section-heading">{copy.overview}</h2>
          <p className="mt-6 text-base leading-8 text-muted">{copy.overviewBody}</p>
          <Link className="text-link mt-7" href={getPath(locale, "firm")}>
            {copy.learnMore} <ArrowRight size={15} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="bg-sand py-20 sm:py-28 lg:py-32">
        <div className="section-shell">
          <div className="max-w-2xl">
            <p className="eyebrow">02 / {locale === "es" ? "Capacidades" : "Capabilities"}</p>
            <h2 className="section-heading mt-5">{copy.capabilities}</h2>
            <p className="mt-5 leading-7 text-muted">{copy.capabilitiesIntro}</p>
          </div>
          <div className="mt-12 grid border-l border-t border-line sm:grid-cols-2 lg:grid-cols-4">
            {investmentCapabilities[locale].map((capability, index) => (
              <Link
                href={getPath(locale, "solutions")}
                key={capability.title}
                className="group border-b border-r border-line p-6 transition-colors hover:bg-white sm:p-7 lg:min-h-[265px]"
              >
                <p className="eyebrow">0{index + 1}</p>
                <h3 className="mt-6 max-w-[240px] font-heading text-lg font-semibold leading-snug text-ink">
                  {capability.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted">
                  {capability.description}
                </p>
                <MoveUpRight
                  className="mt-6 text-copper transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  size={17}
                  aria-hidden="true"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell grid gap-12 py-20 sm:py-28 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24 lg:py-36">
        <div>
          <p className="eyebrow">03 / {locale === "es" ? "Filosofía" : "Philosophy"}</p>
          <h2 className="section-heading mt-5">{copy.philosophy}</h2>
          <p className="mt-6 leading-7 text-muted">{copy.philosophyIntro}</p>
          <Link className="text-link mt-7" href={getPath(locale, "firm")}>
            {copy.learnMore} <ArrowRight size={15} aria-hidden="true" />
          </Link>
        </div>
        <ul className="divide-y divide-line border-y border-line">
          {copy.values.map((value, index) => (
            <li
              key={value}
              className="flex items-center gap-5 py-5 font-heading text-base font-medium text-ink sm:py-6 sm:text-lg"
            >
              <span className="w-8 text-xs font-medium tracking-[0.15em] text-copper">
                0{index + 1}
              </span>
              {value}
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-corporate py-20 text-white sm:py-28 lg:py-32">
        <div className="section-shell">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="eyebrow !text-copperlight">04 / {copy.industries}</p>
              <h2 className="mt-5 font-heading text-3xl font-semibold leading-tight tracking-[-0.035em] sm:text-4xl">
                {copy.industries}
              </h2>
              <p className="mt-5 max-w-xl leading-7 text-white/65">
                {copy.industriesIntro}
              </p>
            </div>
            <Link
              href={getPath(locale, "industries")}
              className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-copperlight"
            >
              {copy.readMore} <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {sectors[locale].map((sector) => (
              <Link
                key={sector.title}
                href={getPath(locale, "industries")}
                className="group relative min-h-[260px] overflow-hidden bg-midgreen"
              >
                <Image
                  src={sector.image}
                  alt={sector.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover opacity-65 transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#061d16]/95 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="font-heading text-xl font-semibold text-white">
                    {sector.title}
                  </h3>
                  <p className="mt-2 text-sm leading-5 text-white/70">
                    {sector.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs uppercase tracking-[0.13em] text-white/55">
            <span>{copy.sectorsOfInterest}</span>
            {otherSectors[locale].map((sector) => (
              <span key={sector} className="text-white/75">
                {sector}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell grid gap-12 py-20 sm:py-28 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-24 lg:py-36">
        <div className="relative min-h-[360px] overflow-hidden bg-sand sm:min-h-[480px]">
          <Image
            src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1400&q=85"
            alt={
              locale === "es"
                ? "Arquitectura contemporánea de líneas sobrias"
                : "Contemporary architecture with restrained lines"
            }
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        <div>
          <p className="eyebrow">05 / Advisory &amp; Private Wealth</p>
          <h2 className="section-heading mt-5">{copy.advisory}</h2>
          <p className="mt-6 leading-7 text-muted">{copy.advisoryIntro}</p>
          <div className="mt-8 grid gap-5 border-t border-line pt-6 sm:grid-cols-2">
            <div>
              <p className="font-heading text-lg font-semibold text-ink">
                {copy.corporate}
              </p>
              <p className="mt-2 text-sm leading-6 text-muted">
                {locale === "es"
                  ? "Asesoría financiera, valorización y estructuración corporativa."
                  : "Financial advisory, valuation and corporate structuring."}
              </p>
            </div>
            <div>
              <p className="font-heading text-lg font-semibold text-ink">
                {copy.privateWealth}
              </p>
              <p className="mt-2 text-sm leading-6 text-muted">
                {locale === "es"
                  ? "Portafolios, sucesión y planificación patrimonial."
                  : "Portfolio, succession and wealth planning."}
              </p>
            </div>
          </div>
          <Link className="text-link mt-7" href={getPath(locale, "advisory")}>
            {copy.learnMore} <ArrowRight size={15} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="border-y border-line bg-sand">
        <div className="section-shell grid gap-8 py-16 sm:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="eyebrow">06 / {copy.regionalVision}</p>
            <h2 className="section-heading mt-5">{copy.regionalVision}</h2>
          </div>
          <div>
            <p className="max-w-2xl leading-7 text-muted">
              {copy.regionalVisionBody}
            </p>
            <ul className="mt-6 flex flex-wrap gap-x-7 gap-y-3 text-sm text-ink">
              {(locale === "es"
                ? ["Lima", "Perú", "América Latina"]
                : ["Lima", "Peru", "Latin America"]
              ).map((item) => (
                <li className="inline-flex items-center gap-2" key={item}>
                  <Check size={14} className="text-copper" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-ivory py-20 sm:py-28 lg:py-32">
        <div className="section-shell flex flex-col gap-9 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow">07 / {copy.contact}</p>
            <h2 className="section-heading mt-5">{copy.institutionalAccess}</h2>
            <p className="mt-5 leading-7 text-muted">{copy.advisoryIntro}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href={getPath(locale, "contact")} className="button-primary">
              {copy.contactUs} <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <Link
              href={`mailto:contact@westernsouthinvestco.com`}
              className="button-outline"
            >
              {locale === "es" ? "Escribir por correo" : "Email our team"}
              <ArrowUpRight size={15} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
