import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[65vh] flex-col items-center justify-center px-6 text-center">
      <p className="eyebrow">404</p>
      <h1 className="mt-5 max-w-2xl font-heading text-4xl font-semibold text-ink md:text-6xl">
        Página no encontrada
      </h1>
      <p className="mt-5 max-w-lg text-muted">
        No pudimos encontrar la página solicitada.
      </p>
      <Link href="/es" className="button-primary mt-8">
        Volver al inicio
      </Link>
    </main>
  );
}
