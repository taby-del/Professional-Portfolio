import { EMAIL } from "@/constants/site";
import type { FormStatus as Status } from "@/hooks/useContactForm";

const MESSAGES: Record<Exclude<Status, "unconfigured">, { text: string; tone: string }> = {
  idle: { text: "Please complete all fields. No account required.", tone: "text-muted" },
  sending: { text: "Sending…", tone: "text-muted" },
  sent: { text: "Message sent. Thank you, I'll get back to you soon.", tone: "text-success" },
  failed: { text: "Your message couldn't be sent. Your text is still here, please try again.", tone: "text-error" },
  "rate-limited": { text: "Too many messages in a short time. Please try again in a few minutes.", tone: "text-error" },
};

/**
 * Delivery status, announced to screen readers (aria-live). "Message
 * sent" appears only after the server confirms delivery (handoff).
 */
export function FormStatus({ status }: { status: Status }) {
  return (
    <p role="status" aria-live="polite" className="mt-7.5 text-label">
      {status === "unconfigured" ? (
        <span className="text-error">
          Online sending isn&apos;t set up yet. Please email me directly at{" "}
          <a href={`mailto:${EMAIL}`} className="font-semibold text-accent-readable underline underline-offset-2">
            {EMAIL}
          </a>
          .
        </span>
      ) : (
        <span className={MESSAGES[status].tone}>{MESSAGES[status].text}</span>
      )}
    </p>
  );
}
