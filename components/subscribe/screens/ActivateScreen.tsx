import StepLabel from "../StepLabel";
import PhoneStepMockup from "../PhoneStepMockup";
import ProgressDots from "../ProgressDots";
import type { SubscribeContent } from "@/lib/subscribeContent";

export default function ActivateScreen({
  content,
  sub,
  onNext,
}: {
  content: SubscribeContent;
  sub: 1 | 2 | 3;
  onNext: () => void;
}) {
  const { smallLabel, stepLabel, title, subtitle, button } = content.activate[sub - 1];
  const variant = sub === 1 ? "unlock" : sub === 2 ? "discount" : "code";

  return (
    <div className="flex flex-col items-center px-1 pt-3 text-center">
      <PhoneStepMockup step={sub} variant={variant} />

      <p className="mt-6 text-xs font-semibold text-ink/40">{smallLabel}</p>
      <div className="mt-2">
        <StepLabel>{stepLabel}</StepLabel>
      </div>

      <h2 className="mt-2 text-xl font-extrabold tracking-tight text-ink sm:text-2xl">{title}</h2>
      <p className="mt-3 max-w-xs text-balance text-sm leading-relaxed text-muted">{subtitle}</p>

      <div className="mt-6">
        <ProgressDots current={2 + sub} />
      </div>

      <button
        onClick={onNext}
        className="mt-5 flex w-full items-center justify-center rounded-2xl bg-navy px-6 py-4 text-base font-semibold text-white shadow-card transition hover:-translate-y-0.5 hover:bg-navy-soft"
      >
        {button}
      </button>
    </div>
  );
}
