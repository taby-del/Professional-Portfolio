import { CV } from "@/constants/assets";
import { isCvAvailable } from "@/lib/assets/cv";
import { PrimaryButton } from "./button/PrimaryButton";
import type { ButtonSize } from "./button/variants";

type DownloadCvButtonProps = {
  className?: string;
  size?: ButtonSize;
};

/**
 * The single "Download CV" action used everywhere (header, mobile menu,
 * Home, About). Downloads the PDF directly, same-origin, with its real
 * file name. Until the PDF exists it renders disabled, never broken.
 *
 * Server Component: client components (e.g. the mobile menu) receive it
 * as a rendered child rather than importing it.
 */
export function DownloadCvButton({ className, size }: DownloadCvButtonProps) {
  if (!isCvAvailable()) {
    return (
      <PrimaryButton disabled title="CV coming soon" size={size} className={className}>
        Download CV
      </PrimaryButton>
    );
  }

  return (
    <PrimaryButton href={CV.href} download={CV.fileName} size={size} className={className}>
      Download CV
    </PrimaryButton>
  );
}
