/**
 * Contact form fields and validation, shared by the browser (instant
 * feedback) and the server action (never trust the client).
 */
export const CONTACT_FIELDS = ["name", "email", "subject", "message"] as const;
export type ContactField = (typeof CONTACT_FIELDS)[number];
export type ContactValues = Record<ContactField, string>;
export type ContactErrors = Partial<Record<ContactField, string>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const LIMITS: Record<ContactField, number> = { name: 100, email: 254, subject: 150, message: 5000 };

/** Validates one field; returns a helpful message or undefined. */
export function validateField(field: ContactField, raw: string): string | undefined {
  const value = raw.trim();
  if (!value) return REQUIRED[field];
  if (value.length > LIMITS[field]) return `Please keep this under ${LIMITS[field]} characters.`;
  if (field === "email" && !EMAIL_PATTERN.test(value)) return "Enter a valid email address.";
  if (field === "message" && value.length < 10) return "Please add a little more detail (10+ characters).";
  return undefined;
}

const REQUIRED: Record<ContactField, string> = {
  name: "Please enter your full name.",
  email: "Please enter your email address.",
  subject: "Please add a subject.",
  message: "Please write a message.",
};

/** Validates all fields; an empty object means the form is valid. */
export function validateContact(values: ContactValues): ContactErrors {
  const errors: ContactErrors = {};
  for (const field of CONTACT_FIELDS) {
    const error = validateField(field, values[field]);
    if (error) errors[field] = error;
  }
  return errors;
}

/** Result returned by the server action to the form. */
export type ContactResult =
  | { ok: true }
  | { ok: false; reason: "invalid"; errors: ContactErrors }
  | { ok: false; reason: "unconfigured" | "rate-limited" | "failed" };
