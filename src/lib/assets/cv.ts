import "server-only";
import { existsSync } from "node:fs";
import { join } from "node:path";
import { CV } from "@/constants/assets";

/**
 * True when the CV PDF has been added to public/documents. Checked on the
 * server at build time, so the site never ships a broken download link
 * (handoff: "Do not publish a broken download").
 */
export function isCvAvailable(): boolean {
  return existsSync(join(process.cwd(), "public", CV.href));
}
