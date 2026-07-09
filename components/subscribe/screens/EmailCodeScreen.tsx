import StepLabel from "../StepLabel";
import ProgressDots from "../ProgressDots";
import { EnvelopeIllustration } from "../Illustrations";

export default function EmailCodeScreen({ onNext }: { onNext: () => void }) {
  return (
    <div className="flex flex-col items-center px-1 pt-2 text-center">
      <EnvelopeIllustration />

      <div className="mt-6">
        <StepLabel>Step 2 / 3</StepLabel>
      </div>

      <h2 className="mt-2 text-xl font-extrabold tracking-tight text-ink sm:text-2xl">
        Get your code by email
      </h2>
      <p className="mt-3 max-w-xs text-balance text-sm leading-relaxed text-muted">
        Right after payment, we instantly email you a one-time activation code.
      </p>

      <div className="mt-5 rounded-full bg-paper-soft px-4 py-2 text-xs font-semibold text-ink/50 ring-1 ring-black/5">
        Check your inbox — and the spam folder
      </div>

      <div className="mt-6">
        <ProgressDots current={2} />
      </div>

      <button
        onClick={onNext}
        className="mt-5 flex w-full items-center justify-center rounded-2xl bg-navy px-6 py-4 text-base font-semibold text-white shadow-card transition hover:-translate-y-0.5 hover:bg-navy-soft"
      >
        Next
      </button>
    </div>
  );
}
