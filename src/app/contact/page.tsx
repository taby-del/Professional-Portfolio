import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/layout/PagePlaceholder";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return <PagePlaceholder title="Contact" step={9} />;
}
