import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";
import type { ButtonSize } from "./variants";

type CommonProps = {
  children: ReactNode;
  className?: string;
  /** Side padding: "default" (24 px) or "compact" (18 px, Home hero). */
  size?: ButtonSize;
};

/** No `href`: renders a real <button> (type="button" by default). */
type AsButton = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps> & {
    href?: undefined;
  };

/**
 * With `href`: renders a link styled as a button. Internal paths use
 * Next.js <Link>; external URLs and downloads use a plain <a>.
 */
type AsLink = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof CommonProps> & {
    href: string;
  };

export type ButtonProps = AsButton | AsLink;
