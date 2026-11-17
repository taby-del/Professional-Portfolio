"use client";

import { PrimaryButton } from "@/components/ui/button/PrimaryButton";
import { useContactForm } from "@/hooks/useContactForm";
import { ContactField } from "./ContactField";
import { FormStatus } from "./FormStatus";

/**
 * "Start a conversation." form card. Validates first, then sends through
 * the server action; disabled with "Sending…" while pending; keeps the
 * text on failure. The hidden "company" field is a spam honeypot.
 */
export function ContactForm() {
  const { formRef, errors, emailOk, status, onSubmit, onBlurField } = useContactForm();
  const sending = status === "sending";

  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate aria-labelledby="contact-form-title" className="relative overflow-hidden rounded-panel border border-border bg-surface p-6 tablet:p-8">
      <h2 id="contact-form-title" className="text-subheading font-semibold text-foreground">Start a conversation.</h2>
      <p className="mt-5 text-body-sm text-muted">Tell me what you have in mind.</p>

      <fieldset disabled={sending} className="mt-5.5 flex flex-col gap-6">
        <legend className="sr-only">Your message</legend>
        <ContactField name="name" label="Full Name" placeholder="Your full name" autoComplete="name" error={errors.name} onBlur={onBlurField} />
        <ContactField name="email" type="email" label="Email Address" placeholder="you@example.com" autoComplete="email" error={errors.email} success={emailOk && !errors.email ? "Email format accepted. Not a delivery confirmation." : undefined} onBlur={onBlurField} />
        <ContactField name="subject" label="Subject" placeholder="What would you like to discuss?" error={errors.subject} onBlur={onBlurField} />
        <ContactField name="message" multiline label="Message" placeholder="Tell me about your project or opportunity…" error={errors.message} onBlur={onBlurField} />
        <div aria-hidden="true" className="absolute -left-[9999px] size-px overflow-hidden">
          <label>Company<input name="company" tabIndex={-1} autoComplete="off" /></label>
        </div>
      </fieldset>

      <PrimaryButton type="submit" disabled={sending} className="mt-6">
        {sending ? "Sending…" : "Send Message"}
      </PrimaryButton>
      <FormStatus status={status} />
    </form>
  );
}
