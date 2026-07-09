import { ChevronLeft } from "lucide-react";

export default function StepHeader({
  label,
  sublabel,
  onBack,
}: {
  label?: string;
  sublabel?: string;
  onBack?: () => void;
}) {
  return (
    <div className="mb-1 flex h-7 items-center gap-2">
      {onBack && (
        <button
          onClick={onBack}
          aria-label="Back"
          className="grid h-7 w-7 shrink-0 place-items-center rounded-full text-ink/40 transition hover:bg-ink/5 hover:text-ink"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
      )}
      {label && (
        <span className="text-xs font-bold uppercase tracking-wide text-muted">
          {label}
          {sublabel && <span className="ml-1.5 normal-case text-ink/30">· {sublabel}</span>}
        </span>
      )}
    </div>
  );
}
