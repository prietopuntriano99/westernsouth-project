import { DM_Sans, Instrument_Serif, Manrope } from "next/font/google";
import type { Locale } from "@/lib/content";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

export function DocumentShell({
  locale,
  children,
}: {
  locale: Locale;
  children: React.ReactNode;
}) {
  return (
    <html lang={locale}>
      <body
        className={`${manrope.variable} ${dmSans.variable} ${instrumentSerif.variable} font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
