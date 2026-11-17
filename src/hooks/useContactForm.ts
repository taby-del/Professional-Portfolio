"use client";

import { type FormEvent, useEffect, useRef, useState } from "react";
import { sendContactMessage } from "@/app/contact/actions";
import { focusFirstInvalid, readContactValues } from "@/lib/contact/form-dom";
import { type ContactErrors, type ContactField, validateContact, validateField } from "@/lib/contact/schema";

export type FormStatus = "idle" | "sending" | "sent" | "failed" | "unconfigured" | "rate-limited";

/** Contact form state machine (handoff > Contact form behavior). */
export function useContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const startedAt = useRef(0);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [emailOk, setEmailOk] = useState(false);
  const [status, setStatus] = useState<FormStatus>("idle");
  useEffect(() => { startedAt.current = Date.now(); }, []); // spam time-trap start
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return; // no duplicate sends
    const form = formRef.current;
    const errs = validateContact(readContactValues(form));
    setErrors(errs);
    if (Object.keys(errs).length > 0) return focusFirstInvalid(form, errs);

    setStatus("sending");
    const data = new FormData(event.currentTarget);
    data.set("startedAt", String(startedAt.current));
    const result = await sendContactMessage(data).catch(() => ({ ok: false, reason: "failed" }) as const);
    if (result.ok) {
      form?.reset(); // cleared deliberately, only after confirmed delivery
      setEmailOk(false);
      return setStatus("sent");
    }
    if (result.reason === "invalid") {
      setErrors(result.errors);
      setStatus("idle");
      return focusFirstInvalid(form, result.errors);
    }
    setStatus(result.reason); // entered text is kept for a retry
  }

  function onBlurField(name: ContactField, value: string) {
    const error = validateField(name, value);
    if (name === "email" && value) setEmailOk(!error);
    if (errors[name] || (name === "email" && value)) setErrors((prev) => ({ ...prev, [name]: error }));
  }

  return { formRef, errors, emailOk, status, onSubmit, onBlurField };
}
