"use client";

import { type ReactNode, useEffect, useRef, useState } from "react";

type ScaleToFitProps = {
  /** Natural (design) size of the artwork in px. */
  width: number;
  height: number;
  children: ReactNode;
};

/**
 * Draws artwork at its design size and scales it down to the available
 * width (handoff: "Browser/device artwork can scale within its designated
 * cover"). The box keeps the artwork's aspect ratio, so nothing shifts.
 */
export function ScaleToFit({ width, height, children }: ScaleToFitProps) {
  const box = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const element = box.current;
    if (!element) return;
    const observer = new ResizeObserver(([entry]) => {
      if (entry) setScale(Math.min(1, entry.contentRect.width / width));
    });
    observer.observe(element);
    return () => observer.disconnect();
  }, [width]);

  return (
    <div
      ref={box}
      aria-hidden="true"
      className="relative w-full overflow-hidden"
      style={{ maxWidth: width, aspectRatio: `${width} / ${height}` }}
    >
      <div
        className="absolute top-0 left-0 origin-top-left"
        style={{ width, height, transform: `scale(${scale})` }}
      >
        {children}
      </div>
    </div>
  );
}
