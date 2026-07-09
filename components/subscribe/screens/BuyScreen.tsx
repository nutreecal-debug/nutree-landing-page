import StepHeader from "../StepHeader";
import { PaymentCardIllustration } from "../Illustrations";

const METHODS = ["Visa", "Mastercard", "mada"];

export default function BuyScreen({ onNext, onBack }: { onNext: () => void; onBack: () => void }) {
  return (
    <div className="flex flex-col items-center px-1 pt-1 text-center">
      <StepHeader label="Step 1 of 3" onBack={onBack} />

      <div className="mt-4 w-full">
        <PaymentCardIllustration />
      </div>

      <h2 className="mt-6 text-xl font-extrabold tracking-tight text-ink sm:text-2xl">
        Buy your subscription
      </h2>
      <p className="mt-3 max-w-xs text-balance text-sm leading-relaxed text-muted">
        Pay once for a full year of Nutree Pro through our secure checkout.
      </p>

      <div className="mt-5 flex items-center gap-2 rounded-full bg-paper-soft px-4 py-2 ring-1 ring-black/5">
        {METHODS.map((method, i) => (
          <span key={method} className="flex items-center text-xs font-semibold text-ink/50">
            {i > 0 && <span className="mr-2 h-1 w-1 rounded-full bg-ink/20" aria-hidden="true" />}
            {method}
          </span>
        ))}
      </div>

      <button
        onClick={onNext}
        className="mt-8 flex w-full items-center justify-center rounded-2xl bg-navy px-6 py-4 text-base font-semibold text-white shadow-card transition hover:-translate-y-0.5 hover:bg-navy-soft"
      >
        Next
      </button>
    </div>
  );
}
