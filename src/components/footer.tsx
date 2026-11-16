import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  CONTACT_EMAIL,
  getPath,
  navigation,
  PHONE_NUMBERS,
  ui,
  type Locale,
} from "@/lib/content";
import { Brand } from "@/components/brand";

export function Footer({ locale }: { locale: Locale }) {
  return (
    <footer className="bg-corporate text-white">
      <div className="mx-auto max-w-[1440px] px-5 pb-8 pt-16 sm:px-8 lg:px-14 lg:pt-20">
        <div className="grid gap-12 border-b border-white/15 pb-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Brand locale={locale} inverse />
            <p className="mt-7 max-w-sm text-sm leading-7 text-white/65">
              {ui[locale].footerNote}
            </p>
          </div>

          <div>
            <p className="eyebrow !text-copperlight">
              {locale === "es" ? "Explorar" : "Explore"}
            </p>
            <ul className="mt-5 space-y-3">
              {navigation[locale].map((item) => (
                <li key={item.key}>
                  <Link
                    className="text-sm text-white/75 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-copperlight"
                    href={getPath(locale, item.key)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow !text-copperlight">{ui[locale].contact}</p>
            <a
              className="mt-5 inline-flex items-center gap-2 text-sm text-white/85 hover:text-white"
              href={`mailto:${CONTACT_EMAIL}`}
            >
              {CONTACT_EMAIL} <ArrowUpRight size={14} aria-hidden="true" />
            </a>
            <div className="mt-3 space-y-2">
              {PHONE_NUMBERS.map((number) => (
                <a
                  key={number}
                  className="block text-sm text-white/75 hover:text-white"
                  href={`tel:${number.replaceAll(" ", "")}`}
                >
                  {number}
                </a>
              ))}
            </div>
            <p className="mt-4 text-sm text-white/60">{ui[locale].location}</p>
          </div>
        </div>

        <div className="flex flex-col gap-5 pt-7 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Westernsouth Investment &amp; Co.</p>
          <nav
            className="flex flex-wrap gap-x-5 gap-y-3"
            aria-label={ui[locale].legal}
          >
            {(["privacy", "terms", "disclaimer"] as const).map((key) => (
              <Link
                key={key}
                href={getPath(locale, key)}
                className="hover:text-white"
              >
                {ui[locale][key]}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
