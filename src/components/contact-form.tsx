"use client";

import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { FormEvent, useState } from "react";
import {
  CONTACT_EMAIL,
  getPath,
  PHONE_NUMBERS,
  type Locale,
} from "@/lib/content";

const inquiryTypes = {
  es: [
    ["corporate-financing", "Financiamiento corporativo"],
    ["investment-opportunities", "Oportunidades de inversión"],
    ["corporate-advisory", "Asesoría corporativa"],
    ["private-wealth", "Asesoría patrimonial"],
    ["general-enquiries", "Consultas generales"],
  ],
  en: [
    ["corporate-financing", "Corporate Financing"],
    ["investment-opportunities", "Investment Opportunities"],
    ["corporate-advisory", "Corporate Advisory"],
    ["private-wealth", "Private Wealth"],
    ["general-enquiries", "General Enquiries"],
  ],
} as const;

type FormStatus =
  | { kind: "idle" }
  | { kind: "sending" }
  | { kind: "success" }
  | { kind: "error"; message: string };

export function ContactForm({ locale }: { locale: Locale }) {
  const [status, setStatus] = useState<FormStatus>({ kind: "idle" });
  const spanish = locale === "es";

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    const formData = new FormData(form);
    setStatus({ kind: "sending" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-site-locale": locale,
        },
        body: JSON.stringify({
          fullName: formData.get("fullName"),
          company: formData.get("company"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          inquiryType: formData.get("inquiryType"),
          message: formData.get("message"),
          consent: formData.get("consent") === "on",
          website: formData.get("website"),
        }),
      });

      const result = (await response.json()) as { error?: string };
      if (!response.ok) {
        setStatus({
          kind: "error",
          message:
            result.error ??
            (spanish
              ? "No pudimos procesar su consulta. Inténtelo nuevamente o escríbanos."
              : "We could not process your enquiry. Please try again or email us."),
        });
        return;
      }

      form.reset();
      setStatus({ kind: "success" });
    } catch {
      setStatus({
        kind: "error",
        message: spanish
          ? "No fue posible enviar su consulta. Escríbanos directamente al correo institucional."
          : "Your enquiry could not be sent. Please contact us directly by email.",
      });
    }
  }

  return (
    <div className="mt-14 grid gap-12 border-t border-line pt-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
      <aside className="space-y-8">
        <div>
          <p className="eyebrow">{spanish ? "Correo institucional" : "Institutional email"}</p>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="mt-3 inline-flex items-center gap-2 font-heading text-base font-semibold text-ink hover:text-copper"
          >
            {CONTACT_EMAIL} <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </div>
        <div>
          <p className="eyebrow">{spanish ? "Teléfono" : "Telephone"}</p>
          <div className="mt-3 space-y-2">
            {PHONE_NUMBERS.map((number) => (
              <a
                key={number}
                href={`tel:${number.replaceAll(" ", "")}`}
                className="block font-heading text-base font-medium text-ink hover:text-copper"
              >
                {number}
              </a>
            ))}
          </div>
        </div>
        <div>
          <p className="eyebrow">{spanish ? "Ubicación" : "Location"}</p>
          <p className="mt-3 font-heading font-medium text-ink">
            {spanish ? "Lima, Perú" : "Lima, Peru"}
          </p>
        </div>
        <p className="max-w-sm text-sm leading-6 text-muted">
          {spanish
            ? "Para proteger su privacidad, no incluya información financiera sensible ni documentos personales."
            : "To protect your privacy, do not include sensitive financial information or personal documents."}
        </p>
      </aside>

      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="grid gap-5 sm:grid-cols-2">
          <Field
            label={spanish ? "Nombre completo" : "Full name"}
            name="fullName"
            autoComplete="name"
            required
            maxLength={120}
          />
          <Field
            label={spanish ? "Empresa / Institución (opcional)" : "Company / Institution (optional)"}
            name="company"
            autoComplete="organization"
            maxLength={160}
          />
          <Field
            label={spanish ? "Correo electrónico" : "Email address"}
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={254}
          />
          <Field
            label={spanish ? "Teléfono (opcional)" : "Telephone (optional)"}
            name="phone"
            type="tel"
            autoComplete="tel"
            maxLength={40}
          />
        </div>

        <label className="block">
          <span className="field-label">
            {spanish ? "Tipo de consulta" : "Enquiry type"}
          </span>
          <select className="field-control" name="inquiryType" required defaultValue="">
            <option value="" disabled>
              {spanish ? "Seleccione una opción" : "Select an option"}
            </option>
            {inquiryTypes[locale].map(([value, label]) => (
              <option value={value} key={value}>
                {label}
              </option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="field-label">{spanish ? "Mensaje" : "Message"}</span>
          <textarea
            className="field-control min-h-36 resize-y"
            name="message"
            required
            minLength={10}
            maxLength={5000}
          />
        </label>

        <div
          className="absolute left-[-10000px] top-auto h-px w-px overflow-hidden"
          aria-hidden="true"
        >
          <label>
            Website
            <input name="website" tabIndex={-1} autoComplete="off" />
          </label>
        </div>

        <label className="flex items-start gap-3 text-sm leading-6 text-muted">
          <input
            className="mt-1 size-4 shrink-0 accent-corporate"
            type="checkbox"
            name="consent"
            required
          />
          <span>
            {spanish ? "He leído y acepto el " : "I have read and accept the "}
            <Link
              className="font-medium text-corporate underline decoration-copper underline-offset-4"
              href={getPath(locale, "privacy")}
              target="_blank"
              rel="noreferrer"
            >
              {spanish ? "aviso de privacidad" : "Privacy Notice"}
            </Link>
            {spanish
              ? " y autorizo el uso de mis datos para responder esta consulta."
              : " and consent to the use of my details to respond to this enquiry."}
          </span>
        </label>

        <button
          className="button-primary disabled:cursor-not-allowed disabled:opacity-60"
          type="submit"
          disabled={status.kind === "sending"}
        >
          {status.kind === "sending"
            ? spanish
              ? "Enviando..."
              : "Sending..."
            : spanish
              ? "Enviar consulta"
              : "Send enquiry"}
        </button>

        <div aria-live="polite" aria-atomic="true">
          {status.kind === "success" && (
            <p className="flex items-start gap-2 text-sm leading-6 text-corporate">
              <CheckCircle2 className="mt-0.5 shrink-0" size={17} aria-hidden="true" />
              {spanish
                ? "Su consulta fue enviada. Gracias por contactarnos."
                : "Your enquiry has been sent. Thank you for contacting us."}
            </p>
          )}
          {status.kind === "error" && (
            <p className="text-sm leading-6 text-red-800">
              {status.message}{" "}
              <a className="font-medium underline" href={`mailto:${CONTACT_EMAIL}`}>
                {CONTACT_EMAIL}
              </a>
            </p>
          )}
        </div>
      </form>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  ...props
}: {
  label: string;
  name: string;
  type?: string;
  autoComplete?: string;
  required?: boolean;
  maxLength?: number;
}) {
  return (
    <label className="block">
      <span className="field-label">{label}</span>
      <input className="field-control" name={name} type={type} {...props} />
    </label>
  );
}
