import type { Metadata, Viewport } from "next";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { SkipLink } from "@/components/layout/SkipLink";
import { NoScriptReveal } from "@/components/motion/NoScriptReveal";
import { MotionProvider } from "@/components/providers/MotionProvider";
import { ThemeScript } from "@/components/theme/ThemeScript";
import { BRAND_COLORS } from "@/constants/theme";
import { SITE } from "@/constants/site";
import { fontVariables } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: SITE.title, template: `%s · ${SITE.name}` },
  description: SITE.description,
};

/** Browser UI colour (mobile address bar) matches the default light theme. */
export const viewport: Viewport = {
  themeColor: BRAND_COLORS.backgroundLight,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    // suppressHydrationWarning: ThemeScript may set data-theme before
    // React hydrates; React must keep that attribute (Next.js guide).
    <html lang="en" className={`${fontVariables} h-full antialiased`} suppressHydrationWarning>
      <head>
        <ThemeScript />
        <NoScriptReveal />
      </head>
      <body className="flex min-h-full flex-col">
        <MotionProvider>
          <SkipLink />
          <Header />
          <main id="main" tabIndex={-1} className="flex flex-1 flex-col outline-none">
            {children}
          </main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
