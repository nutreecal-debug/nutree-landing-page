import StepLabel from "../StepLabel";
import ProgressDots from "../ProgressDots";
import { PaymentCardIllustration } from "../Illustrations";
import type { SubscribeContent } from "@/lib/subscribeContent";

export default function BuyScreen({
  content,
  onNext,
}: {
  content: SubscribeContent;
  onNext: () => void;
}) {
  return (
    <div className="flex flex-col items-center px-1 pt-2 text-center">
      <PaymentCardIllustration price={content.buy.price} />

      <div className="mt-6">
        <StepLabel>{content.buy.stepLabel}</StepLabel>
      </div>

      <h2 className="mt-2 text-xl font-extrabold tracking-tight text-ink sm:text-2xl">
        {content.buy.title}
      </h2>
      <p className="mt-3 max-w-xs text-balance text-sm leading-relaxed text-muted">
        {content.buy.subtitle}
      </p>

      <div className="mt-5 max-w-xs rounded-2xl bg-paper-soft px-4 py-2 text-xs font-semibold text-ink/50 ring-1 ring-black/5">
        {content.buy.pill}
      </div>

      <div className="mt-6">
        <ProgressDots current={1} />
      </div>

      <button
        onClick={onNext}
        className="mt-5 flex w-full items-center justify-center rounded-2xl bg-navy px-6 py-4 text-base font-semibold text-white shadow-card transition hover:-translate-y-0.5 hover:bg-navy-soft"
      >
        {content.buy.button}
      </button>
    </div>
  );
}
