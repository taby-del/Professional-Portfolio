import "server-only";
import { EMAIL } from "@/constants/site";
import type { ContactValues } from "./schema";

/**
 * Emails the owner about a new contact submission, through the Resend
 * API (resend.com) with a plain fetch: no SDK, key stays on the server.
 * Environment (see .env.example):
 * - RESEND_API_KEY     required for notifications
 * - CONTACT_TO_EMAIL   inbox to notify (default: site email)
 * - CONTACT_FROM_EMAIL verified sender (default: Resend's test sender)
 * Replying to the email answers the visitor (reply_to).
 */
export async function sendContactEmail(values: ContactValues): Promise<"sent" | "unconfigured" | "failed"> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return "unconfigured";
  const v = { name: values.name.trim(), email: values.email.trim(), subject: values.subject.trim(), message: values.message.trim() };

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM_EMAIL || "Portfolio <onboarding@resend.dev>",
        to: [process.env.CONTACT_TO_EMAIL || EMAIL],
        reply_to: v.email,
        subject: `New collaboration request from ${v.name}`,
        text: [
          `${v.name} submitted the contact form on your portfolio.`,
          "",
          `Name:    ${v.name}`,
          `Email:   ${v.email}`,
          `Subject: ${v.subject}`,
          `Received: ${new Date().toUTCString()}`,
          "",
          "Message:",
          v.message,
          "",
          "Reply to this email to answer them directly.",
        ].join("\n"),
      }),
      signal: AbortSignal.timeout(10_000),
    });
    return response.ok ? "sent" : "failed";
  } catch {
    return "failed";
  }
}
