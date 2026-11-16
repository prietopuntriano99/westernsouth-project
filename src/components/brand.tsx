import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/content";

export function Brand({
  locale,
  inverse = false,
  priority = false,
}: {
  locale: Locale;
  inverse?: boolean;
  priority?: boolean;
}) {
  return (
    <Link
      href={`/${locale}`}
      aria-label={
        locale === "es"
          ? "Westernsouth Investment & Co. — inicio"
          : "Westernsouth Investment & Co. — home"
      }
      className={`inline-flex items-center ${inverse ? "bg-ivory p-2.5" : ""}`}
    >
      <Image
        src="/brand/01_Logo_Oficial_Transparente.png"
        alt="Westernsouth Investment & Co."
        width={3112}
        height={516}
        priority={priority}
        className="h-auto w-[200px] object-contain sm:w-[230px]"
      />
    </Link>
  );
}
