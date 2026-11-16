import type { Metadata } from "next";
import { DocumentShell } from "@/components/document-shell";
import { baseMetadata } from "@/lib/metadata";
import "../globals.css";

export const metadata: Metadata = baseMetadata;

export default function RootRouteLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <DocumentShell locale="es">{children}</DocumentShell>;
}
