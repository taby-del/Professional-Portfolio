import { BrandLink } from "@/components/navigation/BrandLink";
import { FooterNav } from "@/components/navigation/FooterNav";
import { SocialLinks } from "@/components/navigation/SocialLinks";
import { SITE } from "@/constants/site";

/**
 * Site footer, measured from the Figma frame: a faint rule inside the
 * page gutters, then brand + navigation, then copyright + social links.
 * Rows wrap naturally on narrow screens (no horizontal overflow).
 */
export function Footer() {
  return (
    <footer className="mx-auto w-full max-w-page px-gutter pb-10">
      <div className="flex flex-col gap-6 border-t border-surface pt-6">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
          <BrandLink className="gap-6" />
          <FooterNav />
        </div>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <p className="font-mono text-micro text-muted">
            © {SITE.copyrightYear} {SITE.name}. All rights reserved.
          </p>
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
}
