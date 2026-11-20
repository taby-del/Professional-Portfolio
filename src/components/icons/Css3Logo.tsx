/**
 * Classic CSS3 shield in its official blues, as shown in the design.
 * (Simple Icons replaced it with the newer CSS logo, so it is drawn here.)
 * Decorative: the tile label names the skill.
 */
export function Css3Logo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 512 512" aria-hidden="true" className={className}>
      <path fill="#1572B6" d="M71.357 460.819 30.272 0h451.456l-41.129 460.746L255.724 512z" />
      <path fill="#33A9DC" d="m255.999 472.904 148.06-41.047 35.186-394.215H255.999z" />
      <path fill="#FFF" d="M255.999 208.811h74.12l5.119-57.358h-79.239V95.441h140.453l-1.344 15.026-13.767 154.354H255.999z" />
      <path fill="#EBEBEB" d="m256.335 354.269-.247.071-62.381-16.846-3.988-44.672h-56.225l7.847 87.945 114.731 31.85.263-.074z" />
      <path fill="#FFF" d="m325.37 262.425-6.746 75.002-62.465 16.86v58.276l114.818-31.824.842-9.462 9.742-108.852z" />
      <path fill="#EBEBEB" d="M256.164 95.441v56.012H120.876l-1.122-12.589-2.552-28.396-1.338-15.027zm-.165 113.374v56.015h-61.59l-1.122-12.59-2.555-28.397-1.34-15.028z" />
    </svg>
  );
}
