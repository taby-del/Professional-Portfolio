import "server-only";
import { EMAIL } from "@/constants/site";
import type { ContactValues } from "./schema";

/**
 * Sends a contact message through the Resend email API (resend.com) with
 * a plain fetch: no SDK, and the key never leaves the server.
 * Environment (see .env.example):
 * - RESEND_API_KEY     required; without it the form reports "not set up"
 * - CONTACT_TO_EMAIL   inbox that receives messages (default: site email)
 * - CONTACT_FROM_EMAIL verified sender (default: Resend's test sender)
 */
export async function sendContactEmail(values: ContactValues): Promise<"sent" | "unconfigured" | "failed"> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return "unconfigured";

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM_EMAIL ?? "Portfolio <onboarding@resend.dev>",
        to: [process.env.CONTACT_TO_EMAIL ?? EMAIL],
        reply_to: values.email.trim(),
        subject: `Portfolio: ${values.subject.trim()}`,
        text: `From: ${values.name.trim()} <${values.email.trim()}>\n\n${values.message.trim()}`,
      }),
      signal: AbortSignal.timeout(10_000),
    });
    return response.ok ? "sent" : "failed";
  } catch {
    return "failed";
  }
}
