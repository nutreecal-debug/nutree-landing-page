import StepHeader from "../StepHeader";
import { EnvelopeIllustration } from "../Illustrations";

export default function EmailCodeScreen({
  onNext,
  onBack,
}: {
  onNext: () => void;
  onBack: () => void;
}) {
  return (
    <div className="flex flex-col items-center px-1 pt-1 text-center">
      <StepHeader label="Step 2 of 3" onBack={onBack} />

      <div className="mt-4 w-full">
        <EnvelopeIllustration />
      </div>

      <h2 className="mt-6 text-xl font-extrabold tracking-tight text-ink sm:text-2xl">
        Get your activation code
      </h2>
      <p className="mt-3 max-w-xs text-balance text-sm leading-relaxed text-muted">
        Right after payment, we&apos;ll email a unique activation code — you&apos;ll use it to
        unlock Nutree Pro inside the app.
      </p>

      <button
        onClick={onNext}
        className="mt-8 flex w-full items-center justify-center rounded-2xl bg-navy px-6 py-4 text-base font-semibold text-white shadow-card transition hover:-translate-y-0.5 hover:bg-navy-soft"
      >
        Next
      </button>
    </div>
  );
}
