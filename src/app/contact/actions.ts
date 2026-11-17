"use server";

import { headers } from "next/headers";
import { isRateLimited } from "@/lib/contact/rate-limit";
import { CONTACT_FIELDS, type ContactResult, type ContactValues, validateContact } from "@/lib/contact/schema";
import { sendContactEmail } from "@/lib/contact/send-email";

/** Bots fill hidden fields and submit instantly; people do neither. */
const MIN_FILL_MS = 3000;

/**
 * Server action behind the contact form. Order: spam checks, server-side
 * validation, rate limit, then delivery. A success result is returned
 * only after the email service confirms (handoff > Contact form).
 */
export async function sendContactMessage(formData: FormData): Promise<ContactResult> {
  const honeypot = formData.get("company");
  const startedAt = Number(formData.get("startedAt"));
  const tooFast = Number.isFinite(startedAt) && startedAt > 0 && Date.now() - startedAt < MIN_FILL_MS;
  // Honeypot filled: a bot. Accept silently so it learns nothing.
  if (typeof honeypot === "string" && honeypot !== "") return { ok: true };
  // Too fast might still be a person (autofill): never fake success,
  // ask for a retry instead (a retry a moment later passes).
  if (tooFast) return { ok: false, reason: "failed" };

  const values = Object.fromEntries(
    CONTACT_FIELDS.map((field) => [field, String(formData.get(field) ?? "")]),
  ) as ContactValues;
  const errors = validateContact(values);
  if (Object.keys(errors).length > 0) return { ok: false, reason: "invalid", errors };

  const visitor = (await headers()).get("x-forwarded-for")?.split(",")[0]?.trim() ?? "local";
  if (isRateLimited(visitor)) return { ok: false, reason: "rate-limited" };

  const outcome = await sendContactEmail(values);
  if (outcome === "sent") return { ok: true };
  return { ok: false, reason: outcome };
}
