import { BrandLink } from "@/components/navigation/BrandLink";
import { LanguageIndicator } from "@/components/navigation/LanguageIndicator";
import { MobileMenu } from "@/components/navigation/MobileMenu";
import { NavLinks } from "@/components/navigation/NavLinks";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { HireMeButton } from "@/components/ui/HireMeButton";

/**
 * Site header, measured from the Figma frames: 88 px bar, 1 px border,
 * 44 px logo, centred navigation, 44 px controls 8 px apart.
 *
 * - 1280 px+ : full navigation.
 * - 768-1279 : compact navigation (menu button), Hire Me kept.
 * - < 768    : logo only, Hire Me moves into the menu.
 */
export function Header() {
  return (
    <header className="border-b border-border bg-background">
      {/* 87 px + 1 px border = the design's 88 px bar */}
      <div className="mx-auto flex h-[5.4375rem] max-w-page items-center gap-4 px-gutter">
        <BrandLink className="gap-3" nameClassName="hidden tablet:inline" />

        <nav aria-label="Main" className="hidden flex-1 justify-center laptop:flex">
          <NavLinks />
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <LanguageIndicator />
          <ThemeToggle />
          {/* Wrapper controls visibility; the button's own display stays intact */}
          <div className="hidden tablet:block">
            <HireMeButton />
          </div>
          <div className="laptop:hidden">
            <MobileMenu cta={<HireMeButton />} />
          </div>
        </div>
      </div>
    </header>
  );
}
