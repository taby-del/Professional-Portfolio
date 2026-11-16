import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/layout/PagePlaceholder";

export const metadata: Metadata = { title: "Projects" };

export default function ProjectsPage() {
  return <PagePlaceholder title="Projects" step={7} />;
}
