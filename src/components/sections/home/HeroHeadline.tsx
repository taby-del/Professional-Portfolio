"use client";

import { m } from "motion/react";
import { Fragment } from "react";
import { blurReveal, staggerGroup } from "@/lib/motion/variants";

/**
 * The Home headline (72 px at 1440, 40 px on phones). Each word comes
 * into focus in turn: blur to sharp while rising. Words are separate
 * spans with real spaces between them, so lines wrap exactly like plain
 * text; screen readers read the full sentence from the aria-label.
 */
export function HeroHeadline({ text }: { text: string }) {
  const words = text.split(" ");

  return (
    <m.h1
      aria-label={text}
      variants={staggerGroup(0.06)}
      className="mt-4 text-hero font-semibold text-foreground"
    >
      {words.map((word, index) => (
        <Fragment key={`${word}-${index}`}>
          <m.span aria-hidden="true" variants={blurReveal} className="inline-block">
            {word}
          </m.span>
          {index < words.length - 1 && " "}
        </Fragment>
      ))}
    </m.h1>
  );
}
