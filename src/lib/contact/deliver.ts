import "server-only";
import type { ContactValues } from "./schema";
import { sendContactEmail } from "./send-email";
import { storeContactMessage } from "./store-message";

/**
 * Delivers a validated contact message:
 * 1. emails the owner a notification (Resend),
 * 2. saves it in Supabase, recording whether the email went out.
 *
 * "sent" when at least one durable channel succeeded, so a message is
 * never silently lost: if the email fails it is still in the database
 * (notified = false); if the database fails the owner still has the
 * email. "unconfigured" only when neither service is set up.
 */
export async function deliverContactMessage(values: ContactValues): Promise<"sent" | "unconfigured" | "failed"> {
  const email = await sendContactEmail(values);
  const stored = await storeContactMessage(values, email === "sent");

  if (email === "sent" || stored === "stored") return "sent";
  if (email === "unconfigured" && stored === "unconfigured") return "unconfigured";
  return "failed";
}
