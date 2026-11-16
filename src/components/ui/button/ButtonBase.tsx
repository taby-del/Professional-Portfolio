import Link from "next/link";
import type { ButtonProps } from "./types";
import { BUTTON_BASE, BUTTON_VARIANTS, type ButtonVariant } from "./variants";

type ButtonBaseProps = ButtonProps & { variant: ButtonVariant };

/** External links opened in a new tab must not get access to this page. */
const SAFE_REL = "noopener noreferrer";

/**
 * Renders the right element for the job, all with identical styling:
 * - internal path      -> Next.js <Link> (client-side navigation)
 * - external / download -> <a>
 * - no href            -> <button>
 */
export function ButtonBase({ variant, className, ...props }: ButtonBaseProps) {
  const classes = [BUTTON_BASE, BUTTON_VARIANTS[variant], className]
    .filter(Boolean)
    .join(" ");

  if (props.href === undefined) {
    const { type = "button", ...rest } = props;
    return <button type={type} className={classes} {...rest} />;
  }

  const { href, download, target, rel, ...rest } = props;
  const isInternal = href.startsWith("/") && download === undefined;

  if (isInternal) {
    return <Link href={href} className={classes} {...rest} />;
  }

  return (
    <a
      href={href}
      download={download}
      target={target}
      rel={target === "_blank" ? SAFE_REL : rel}
      className={classes}
      {...rest}
    />
  );
}
