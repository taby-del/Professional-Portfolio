import type { Metadata } from "next";
import { ContactPage } from "@/components/sections/contact/ContactPage";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch about technology projects, professional opportunities and collaborations in development and design.",
};

export default function Contact() {
  return <ContactPage />;
}
