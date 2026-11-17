import "server-only";
import type { ContactValues } from "./schema";

/**
 * Saves a contact message in Supabase (table: contact_messages, see
 * supabase/schema.sql) through its REST API with a plain fetch.
 * Environment (see .env.example):
 * - SUPABASE_URL         https://<project>.supabase.co
 * - SUPABASE_SECRET_KEY  secret / service_role key; server-only, never
 *                        sent to the browser. It bypasses Row Level
 *                        Security, which blocks all public access.
 */
export async function storeContactMessage(
  values: ContactValues,
  notified: boolean,
): Promise<"stored" | "unconfigured" | "failed"> {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SECRET_KEY;
  if (!url || !key) return "unconfigured";

  // Legacy service_role keys are JWTs and also go in Authorization;
  // the newer sb_secret_ keys are sent in the apikey header only.
  const headers: Record<string, string> = {
    apikey: key,
    "Content-Type": "application/json",
    Prefer: "return=minimal",
  };
  if (key.startsWith("eyJ")) headers.Authorization = `Bearer ${key}`;

  try {
    // Only the origin is used, so a pasted ".../rest/v1/" URL still works.
    const endpoint = `${new URL(url).origin}/rest/v1/contact_messages`;
    const response = await fetch(endpoint, {
      method: "POST",
      headers,
      body: JSON.stringify({
        name: values.name.trim(),
        email: values.email.trim(),
        subject: values.subject.trim(),
        message: values.message.trim(),
        notified,
      }),
      signal: AbortSignal.timeout(10_000),
    });
    return response.ok ? "stored" : "failed";
  } catch {
    return "failed";
  }
}
