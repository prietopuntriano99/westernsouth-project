"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import {
  getAlternatePath,
  getPath,
  findPage,
  navigation,
  ui,
  type Locale,
} from "@/lib/content";
import { Brand } from "@/components/brand";

export function Header({ locale }: { locale: Locale }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const routeParts = pathname.split("/").filter(Boolean).slice(1);
  const currentPage = findPage(locale, routeParts) ?? "home";

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="relative z-30 border-b border-line/70 bg-ivory">
      <div className="mx-auto flex min-h-[82px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-14">
        <Brand locale={locale} priority />

        <nav
          className="hidden items-center gap-7 xl:flex"
          aria-label={locale === "es" ? "Navegación principal" : "Main navigation"}
        >
          {navigation[locale].map((item) => {
            const active = pathname === getPath(locale, item.key);
            return (
              <Link
                key={item.key}
                href={getPath(locale, item.key)}
                aria-current={active ? "page" : undefined}
                className="nav-link"
              >
                {item.label}
              </Link>
            );
          })}
          <Link className="button-outline !px-5 !py-3" href={getPath(locale, "contact")}>
            {ui[locale].contactUs}
          </Link>
          <LanguageSwitch
            locale={locale}
            href={getAlternatePath(locale, currentPage)}
          />
        </nav>

        <div className="flex items-center gap-4 xl:hidden">
          <LanguageSwitch
            locale={locale}
            href={getAlternatePath(locale, currentPage)}
          />
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center text-corporate focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-copper"
            aria-label={
              locale === "es"
                ? menuOpen
                  ? "Cerrar menú"
                  : "Abrir menú"
                : menuOpen
                  ? "Close menu"
                  : "Open menu"
            }
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          id="mobile-navigation"
          className="absolute inset-x-0 top-full border-t border-line bg-ivory px-5 pb-7 pt-3 shadow-sm xl:hidden"
          aria-label={locale === "es" ? "Navegación principal" : "Main navigation"}
        >
          {navigation[locale].map((item) => (
            <Link
              key={item.key}
              href={getPath(locale, item.key)}
              className="block border-b border-line/70 py-4 font-heading text-sm text-corporate"
              onClick={closeMenu}
            >
              {item.label}
            </Link>
          ))}
          <Link
            className="button-primary mt-6 w-full"
            href={getPath(locale, "contact")}
            onClick={closeMenu}
          >
            {ui[locale].contactUs}
          </Link>
        </nav>
      )}
    </header>
  );
}

function LanguageSwitch({
  locale,
  href,
}: {
  locale: Locale;
  href: string;
}) {
  return (
    <Link
      href={href}
      hrefLang={locale === "es" ? "en" : "es"}
      aria-label={locale === "es" ? "Switch to English" : "Cambiar a español"}
      className="inline-flex items-center gap-1 font-heading text-xs font-semibold tracking-[0.14em] text-corporate"
    >
      <span className={locale === "es" ? "text-copper" : "text-muted"}>ES</span>
      <span className="text-line" aria-hidden="true">
        /
      </span>
      <span className={locale === "en" ? "text-copper" : "text-muted"}>EN</span>
    </Link>
  );
}
