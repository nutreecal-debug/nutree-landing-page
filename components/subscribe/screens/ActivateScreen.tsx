import StepLabel from "../StepLabel";
import PhoneStepMockup from "../PhoneStepMockup";
import ProgressDots from "../ProgressDots";

const CONTENT = {
  1: {
    variant: "unlock" as const,
    title: "Open Settings and tap “Unlock premium”",
    subtitle: "You’ll find the upgrade button at the top of the Settings screen.",
    button: "Next",
  },
  2: {
    variant: "discount" as const,
    title: "Tap “Have a discount code?”",
    subtitle: "It’s near the bottom of the subscription page.",
    button: "Next",
  },
  3: {
    variant: "code" as const,
    title: "Paste your code and tap “Activate”",
    subtitle: "Your Pro subscription unlocks instantly.",
    button: "Continue to payment",
  },
};

export default function ActivateScreen({
  sub,
  onNext,
}: {
  sub: 1 | 2 | 3;
  onNext: () => void;
}) {
  const { variant, title, subtitle, button } = CONTENT[sub];

  return (
    <div className="flex flex-col items-center px-1 pt-3 text-center">
      <PhoneStepMockup step={sub} variant={variant} />

      <p className="mt-6 text-xs font-semibold text-ink/40">Activate your code in the Nutree app</p>
      <div className="mt-2">
        <StepLabel>{`Step 3 • ${sub}/3`}</StepLabel>
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
