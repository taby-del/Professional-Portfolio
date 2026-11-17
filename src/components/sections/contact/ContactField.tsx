import type { ContactField as FieldName } from "@/lib/contact/schema";

type ContactFieldProps = {
  name: FieldName;
  label: string;
  placeholder: string;
  type?: "text" | "email";
  autoComplete?: string;
  multiline?: boolean;
  error?: string;
  success?: string;
  onBlur: (name: FieldName, value: string) => void;
};

const BASE =
  "w-full rounded-card border bg-background px-4 text-body-sm text-foreground placeholder:text-muted outline-none transition-[border-color,box-shadow] duration-150 focus:border-primary focus:ring-1 focus:ring-primary disabled:bg-surface disabled:text-muted";

/**
 * One labelled field with the interaction-sheet states: default, focus,
 * error (aria-invalid + described message), success and disabled.
 */
export function ContactField({ name, label, placeholder, type = "text", autoComplete, multiline, error, success, onBlur }: ContactFieldProps) {
  const messageId = `${name}-message`;
  const tone = error ? "border-error" : success ? "border-success" : "border-field-border";
  const shared = {
    id: name, name, placeholder, required: true,
    "aria-invalid": error ? true : undefined,
    "aria-describedby": error || success ? messageId : undefined,
    onBlur: (event: { target: { value: string } }) => onBlur(name, event.target.value),
  };

  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name} className="text-body-sm font-semibold text-foreground">{label}</label>
      {multiline ? (
        <textarea {...shared} rows={5} className={`${BASE} ${tone} h-40 resize-y py-4`} />
      ) : (
        <input {...shared} type={type} autoComplete={autoComplete} className={`${BASE} ${tone} h-14`} />
      )}
      {(error || success) && (
        <p id={messageId} className={`mt-1 text-label ${error ? "text-error" : "text-success"}`}>{error ?? success}</p>
      )}
    </div>
  );
}
