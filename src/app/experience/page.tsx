import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/layout/PagePlaceholder";

export const metadata: Metadata = { title: "Experience" };

export default function ExperiencePage() {
  return <PagePlaceholder title="Experience" step={8} />;
}
