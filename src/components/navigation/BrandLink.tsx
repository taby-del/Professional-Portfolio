import Image from "next/image";
import Link from "next/link";
import { LOGO, SITE } from "@/constants/site";

type BrandLinkProps = {
  /** Hide the name on narrow screens, where only the logo fits. */
  nameClassName?: string;
  className?: string;
};

/**
 * Logo + full name, linking to Home. Used in the header and footer.
 * The image is decorative (alt=""); the link's accessible name is the
 * visible text, or the aria-label when the name is hidden.
 */
export function BrandLink({ nameClassName = "", className = "" }: BrandLinkProps) {
  return (
    <Link
      href="/"
      aria-label={`${SITE.name}, home`}
      className={`flex shrink-0 items-center rounded-control ${className}`}
    >
      <Image
        src={LOGO.src}
        width={LOGO.width}
        height={LOGO.height}
        sizes="44px"
        alt=""
        priority
        className="size-11 rounded-control object-cover"
      />
      <span className={`text-body-sm font-semibold text-foreground ${nameClassName}`}>
        {SITE.name}
      </span>
    </Link>
  );
}
