import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/layout/PagePlaceholder";

export const metadata: Metadata = { title: "Skills" };

export default function SkillsPage() {
  return <PagePlaceholder title="Skills" step={6} />;
}
