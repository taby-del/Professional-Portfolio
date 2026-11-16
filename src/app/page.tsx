import { ThemeToggle } from "@/components/theme/ThemeToggle";

// Temporary placeholder until Step 4 (Home) is built from the approved
// design. It shows the foundation working: fonts, tokens and theme switch.
export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-4 px-gutter">
      <p className="font-mono text-body-sm text-accent-readable">
        Step 1 · Design foundation
      </p>
      <h1 className="text-heading font-semibold">Portfolio in development.</h1>
      <p className="text-body text-muted">
        Taby Takoundjou Jeff Obrile · Frontend Developer | UI/UX Designer
      </p>
      <ThemeToggle />
    </main>
  );
}
