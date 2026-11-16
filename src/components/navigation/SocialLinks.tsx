import { Fragment } from "react";
import { SOCIAL_LINKS } from "@/constants/site";

const LINK_CLASS =
  "rounded-control text-caption text-muted transition-colors duration-150 hover:text-accent-readable";

/**
 * "LinkedIn / GitHub / Email". A label becomes a link only once its real
 * URL is set in src/constants/site.ts, so there is never a dead link.
 */
export function SocialLinks() {
  return (
    <p className="text-caption text-muted">
      {SOCIAL_LINKS.map(({ label, href }, index) => (
        <Fragment key={label}>
          {index > 0 && <span aria-hidden="true"> / </span>}
          {href ? (
            <a
              href={href}
              className={LINK_CLASS}
              {...(href.startsWith("http")
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              {label}
            </a>
          ) : (
            <span>{label}</span>
          )}
        </Fragment>
      ))}
    </p>
  );
}
