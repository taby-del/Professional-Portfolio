import type { Metadata } from "next";
import { SkillsPage } from "@/components/sections/skills/SkillsPage";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Frontend development, UI/UX design, complementary backend development and an AI-assisted, component-based workflow.",
};

export default function Skills() {
  return <SkillsPage />;
}
