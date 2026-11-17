import { CONTACT_FIELDS, type ContactErrors, type ContactField, type ContactValues } from "./schema";

const fieldOf = (form: HTMLFormElement | null, name: ContactField) =>
  form?.elements.namedItem(name) as HTMLInputElement | HTMLTextAreaElement | null;

/** Reads the four contact fields from the form. */
export function readContactValues(form: HTMLFormElement | null): ContactValues {
  return Object.fromEntries(
    CONTACT_FIELDS.map((name) => [name, fieldOf(form, name)?.value ?? ""]),
  ) as ContactValues;
}

/** Moves keyboard focus to the first invalid field (handoff). */
export function focusFirstInvalid(form: HTMLFormElement | null, errors: ContactErrors): void {
  const first = CONTACT_FIELDS.find((name) => errors[name]);
  if (first) fieldOf(form, first)?.focus();
}
