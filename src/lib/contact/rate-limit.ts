import "server-only";

/**
 * Lightweight per-visitor rate limit (handoff: "lightweight spam
 * protection"): at most MAX_SENDS messages per WINDOW_MS per address.
 * In-memory, so it resets on redeploy and is per server instance;
 * enough for a personal portfolio without a database.
 */
const WINDOW_MS = 10 * 60 * 1000;
const MAX_SENDS = 3;
const sends = new Map<string, number[]>();

export function isRateLimited(visitor: string, now = Date.now()): boolean {
  const recent = (sends.get(visitor) ?? []).filter((time) => now - time < WINDOW_MS);
  if (recent.length >= MAX_SENDS) {
    sends.set(visitor, recent);
    return true;
  }
  recent.push(now);
  sends.set(visitor, recent);
  return false;
}
