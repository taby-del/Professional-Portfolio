import type { Metadata } from "next";
import { ExperiencePage } from "@/components/sections/experience/ExperiencePage";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Technical Developer at Yiino Corporation / Yiino Corp Cameroon since September 2025: frontend, UI/UX and product collaboration.",
};

export default function Experience() {
  return <ExperiencePage />;
}
