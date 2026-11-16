import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

type CommonProps = {
  children: ReactNode;
  className?: string;
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
