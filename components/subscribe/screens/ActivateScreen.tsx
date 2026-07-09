import StepHeader from "../StepHeader";
import PhoneStepMockup from "../PhoneStepMockup";

const CONTENT = {
  1: {
    variant: "unlock" as const,
    title: "Open Settings in the app",
    subtitle: "In Nutree, go to Settings and tap “Unlock premium.”",
    button: "Next",
  },
  2: {
    variant: "discount" as const,
    title: "Tap “Have a discount code?”",
    subtitle:
      "On the unlock screen, choose “Have a discount code?” to enter your code instead of paying in the app.",
    button: "Next",
  },
  3: {
    variant: "code" as const,
    title: "Enter your activation code",
    subtitle: "Type the code from your email to unlock Nutree Pro instantly.",
    button: "Continue to payment",
  },
};

export default function ActivateScreen({
  sub,
  onNext,
  onBack,
}: {
  sub: 1 | 2 | 3;
  onNext: () => void;
  onBack: () => void;
}) {
  const { variant, title, subtitle, button } = CONTENT[sub];

  return (
    <div className="flex flex-col items-center px-1 pt-1 text-center">
      <StepHeader label="Step 3 of 3" sublabel={`${sub} of 3`} onBack={onBack} />

      <div className="mt-4">
        <PhoneStepMockup variant={variant} />
      </div>

      <h2 className="mt-6 text-xl font-extrabold tracking-tight text-ink sm:text-2xl">{title}</h2>
      <p className="mt-3 max-w-xs text-balance text-sm leading-relaxed text-muted">{subtitle}</p>

      <button
        onClick={onNext}
        className="mt-8 flex w-full items-center justify-center rounded-2xl bg-navy px-6 py-4 text-base font-semibold text-white shadow-card transition hover:-translate-y-0.5 hover:bg-navy-soft"
      >
        {button}
      </button>
    </div>
  );
}
