import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { PrimaryButton } from "@/components/ui/button/PrimaryButton";
import { SecondaryButton } from "@/components/ui/button/SecondaryButton";
import { DownloadCvButton } from "@/components/ui/DownloadCvButton";

// Temporary placeholder until Step 4 (Home) is built from the approved
// design. It previews the foundation and the button states.
export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-6 px-gutter py-section">
      <p className="font-mono text-body-sm text-accent-readable">
        Step 2 · Buttons
      </p>
      <h1 className="text-heading font-semibold">Portfolio in development.</h1>

      <div className="flex flex-wrap justify-center gap-4 rounded-panel bg-surface p-6">
        <PrimaryButton>Download CV</PrimaryButton>
        <SecondaryButton href="/">View Project</SecondaryButton>
        <PrimaryButton disabled>Download CV</PrimaryButton>
        <SecondaryButton disabled>View Project</SecondaryButton>
      </div>

      <div className="flex items-center gap-4">
        <DownloadCvButton />
        <ThemeToggle />
      </div>
    </main>
  );
}
