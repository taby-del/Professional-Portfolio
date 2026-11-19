import { PrimaryButton } from "./button/PrimaryButton";
import type { ButtonSize } from "./button/variants";

type HireMeButtonProps = {
  className?: string;
  size?: ButtonSize;
};

/**
 * The single "Hire Me" call to action used everywhere (header, mobile
 * menu, Home, About). It replaces "Download CV" (owner request,
 * 2026-11-19) and is always enabled: it opens the Contact page, where a
 * visitor can send a collaboration request.
 */
export function HireMeButton({ className, size }: HireMeButtonProps) {
  return (
    <PrimaryButton href="/contact" size={size} className={className}>
      Hire Me
    </PrimaryButton>
  );
}
