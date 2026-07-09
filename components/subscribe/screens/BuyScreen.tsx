import StepLabel from "../StepLabel";
import ProgressDots from "../ProgressDots";
import { PaymentCardIllustration } from "../Illustrations";

export default function BuyScreen({ onNext }: { onNext: () => void }) {
  return (
    <div className="flex flex-col items-center px-1 pt-2 text-center">
      <PaymentCardIllustration />

      <div className="mt-6">
        <StepLabel>Step 1 / 3</StepLabel>
      </div>

      <h2 className="mt-2 text-xl font-extrabold tracking-tight text-ink sm:text-2xl">
        Buy your subscription here
      </h2>
      <p className="mt-3 max-w-xs text-balance text-sm leading-relaxed text-muted">
        Pay once through our secure payment partner. One yearly payment — no auto-renewal, no
        surprise charges.
      </p>

      <div className="mt-5 rounded-full bg-paper-soft px-4 py-2 text-xs font-semibold text-ink/50 ring-1 ring-black/5">
        mada &middot; Apple Pay &middot; cards
      </div>

      <div className="mt-6">
        <ProgressDots current={1} />
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
