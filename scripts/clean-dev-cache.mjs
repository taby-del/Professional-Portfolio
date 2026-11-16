/**
 * Deletes the Next.js development cache (.next/dev). Turbopack keeps a
 * persistent cache between runs; if a failed compile leaves it stale
 * (e.g. styles missing in `npm run dev` but correct in `npm run build`),
 * `npm run dev:clean` clears it and starts a fresh dev server.
 */
import { existsSync, rmSync } from "node:fs";

const DEV_CACHE = ".next/dev";

if (existsSync(DEV_CACHE)) {
  rmSync(DEV_CACHE, { recursive: true, force: true });
  console.log(`✓ Cleared ${DEV_CACHE}`);
} else {
  console.log(`✓ No ${DEV_CACHE} cache to clear`);
}
