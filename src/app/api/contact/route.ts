import { NextResponse } from "next/server";
import { CONTACT_EMAIL } from "@/lib/content";

export const runtime = "nodejs";

const allowedInquiryTypes = new Set([
  "corporate-financing",
  "investment-opportunities",
  "corporate-advisory",
  "private-wealth",
  "general-enquiries",
]);
const submissions = new Map<string, number[]>();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_SUBMISSIONS = 5;
const MAX_BODY_BYTES = 16_000;

function messageFor(request: Request, spanish: string, english: string) {
  return request.headers.get("x-site-locale") === "en" ? english : spanish;
}

type ContactSubmission = {
  fullName: string;
  company?: string;
  email: string;
  phone?: string;
  inquiryType: string;
  message: string;
  consent: boolean;
  website?: string;
};

function isString(value: unknown): value is string {
  return typeof value === "string";
}

function isValidSubmission(value: unknown): value is ContactSubmission {
  if (!value || typeof value !== "object") return false;
  const data = value as Record<string, unknown>;
  return (
    isString(data.fullName) &&
    data.fullName.trim().length > 0 &&
    data.fullName.length <= 120 &&
    (data.company === undefined ||
      (isString(data.company) && data.company.length <= 160)) &&
    isString(data.email) &&
    data.email.length <= 254 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email) &&
    (data.phone === undefined || (isString(data.phone) && data.phone.length <= 40)) &&
    isString(data.inquiryType) &&
    allowedInquiryTypes.has(data.inquiryType) &&
    isString(data.message) &&
    data.message.trim().length >= 10 &&
    data.message.length <= 5000 &&
    data.consent === true &&
    (data.website === undefined || isString(data.website))
  );
}

function isRateLimited(request: Request): boolean {
  const forwarded = request.headers.get("x-forwarded-for");
  const vercelForwarded = request.headers.get("x-vercel-forwarded-for");
  const ip = (vercelForwarded ?? forwarded)?.split(",")[0]?.trim() ?? "unknown";
  const now = Date.now();
  const recent = (submissions.get(ip) ?? []).filter(
    (timestamp) => now - timestamp < WINDOW_MS,
  );
  if (recent.length >= MAX_SUBMISSIONS) {
    submissions.set(ip, recent);
    return true;
  }
  recent.push(now);
  submissions.set(ip, recent);
  return false;
}

export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  if (origin) {
    let originHost: string;
    try {
      originHost = new URL(origin).host;
    } catch {
      return NextResponse.json(
        {
          error: messageFor(
            request,
            "El origen de la solicitud no es válido.",
            "The request origin is invalid.",
          ),
        },
        { status: 403 },
      );
    }
    if (originHost !== request.headers.get("host")) {
      return NextResponse.json(
        {
          error: messageFor(
            request,
            "El origen de la solicitud no está permitido.",
            "The request origin is not allowed.",
          ),
        },
        { status: 403 },
      );
    }
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  if (!apiKey || !from) {
    return NextResponse.json(
      {
        error: messageFor(
          request,
          "El envío del formulario no está configurado. Escríbanos directamente a contact@westernsouthinvestco.com.",
          "Form delivery is not configured. Please email contact@westernsouthinvestco.com directly.",
        ),
      },
      { status: 503 },
    );
  }

  if (isRateLimited(request)) {
    return NextResponse.json(
      {
        error: messageFor(
          request,
          "Demasiados intentos. Espere unos minutos antes de volver a enviar.",
          "Too many attempts. Please wait a few minutes before submitting again.",
        ),
      },
      { status: 429 },
    );
  }

  const contentLength = Number(request.headers.get("content-length") ?? 0);
  if (contentLength > MAX_BODY_BYTES) {
    return NextResponse.json(
      {
        error: messageFor(
          request,
          "La solicitud supera el tamaño permitido.",
          "The request exceeds the permitted size.",
        ),
      },
      { status: 413 },
    );
  }

  let rawBody: string;
  try {
    rawBody = await request.text();
  } catch {
    return NextResponse.json(
      {
        error: messageFor(
          request,
          "La solicitud no tiene un formato válido.",
          "The request format is invalid.",
        ),
      },
      { status: 400 },
    );
  }
  if (new TextEncoder().encode(rawBody).byteLength > MAX_BODY_BYTES) {
    return NextResponse.json(
      {
        error: messageFor(
          request,
          "La solicitud supera el tamaño permitido.",
          "The request exceeds the permitted size.",
        ),
      },
      { status: 413 },
    );
  }

  let payload: unknown;
  try {
    payload = JSON.parse(rawBody);
  } catch {
    return NextResponse.json(
      {
        error: messageFor(
          request,
          "La solicitud no tiene un formato válido.",
          "The request format is invalid.",
        ),
      },
      { status: 400 },
    );
  }

  if (!isValidSubmission(payload)) {
    return NextResponse.json(
      {
        error: messageFor(
          request,
          "Revise los campos obligatorios e inténtelo nuevamente.",
          "Please review the required fields and try again.",
        ),
      },
      { status: 400 },
    );
  }
  if (payload.website?.trim()) {
    return NextResponse.json(
      {
        error: messageFor(
          request,
          "No fue posible procesar esta solicitud.",
          "This request could not be processed.",
        ),
      },
      { status: 400 },
    );
  }

  const body = [
    "New institutional enquiry received through the Westernsouth website.",
    "",
    `Name: ${payload.fullName.trim()}`,
    `Company / Institution: ${payload.company?.trim() || "Not provided"}`,
    `Email: ${payload.email.trim()}`,
    `Telephone: ${payload.phone?.trim() || "Not provided"}`,
    `Enquiry type: ${payload.inquiryType}`,
    "",
    "Message:",
    payload.message.trim(),
  ].join("\n");

  let response: Response;
  try {
    response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [CONTACT_EMAIL],
        reply_to: payload.email.trim(),
        subject: `[Website enquiry] ${payload.inquiryType}`,
        text: body,
      }),
    });
  } catch (error) {
    console.error("Contact email provider request failed", error);
    return NextResponse.json(
      {
        error: messageFor(
          request,
          "No fue posible enviar su consulta en este momento. Escríbanos directamente a contact@westernsouthinvestco.com.",
          "Your enquiry could not be sent. Please email contact@westernsouthinvestco.com directly.",
        ),
      },
      { status: 502 },
    );
  }

  if (!response.ok) {
    console.error("Contact email provider rejected the request", {
      status: response.status,
    });
    return NextResponse.json(
      {
        error: messageFor(
          request,
          "No fue posible enviar su consulta en este momento. Escríbanos directamente a contact@westernsouthinvestco.com.",
          "Your enquiry could not be sent. Please email contact@westernsouthinvestco.com directly.",
        ),
      },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true }, { status: 200 });
}
