import type { Metadata } from "next";
import { SITE } from "@/constants/site";
import "./globals.css";

// Typography uses the system font stack defined in globals.css until the
// Figma design's typeface is added (via next/font/local or next/font/google).

export const metadata: Metadata = {
  title: SITE.title,
  description: SITE.description,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
