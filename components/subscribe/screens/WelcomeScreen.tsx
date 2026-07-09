import { StarRingIllustration } from "../Illustrations";

export default function WelcomeScreen({ onStart }: { onStart: () => void }) {
  return (
    <div className="flex flex-col items-center px-1 pt-4 text-center">
      <StarRingIllustration />

      <h1 className="mt-6 text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
        Welcome to Nutree Pro
      </h1>
      <p className="mt-3 max-w-xs text-balance text-sm leading-relaxed text-muted sm:text-base">
        One simple purchase unlocks AI meal analysis, full macro tracking, and progress insights
        for a full year.
      </p>

      <button
        onClick={onStart}
        className="mt-8 flex w-full items-center justify-center rounded-2xl bg-navy px-6 py-4 text-base font-semibold text-white shadow-card transition hover:-translate-y-0.5 hover:bg-navy-soft"
      >
        Subscribe Now
      </button>
      <p className="mt-3 text-xs text-ink/40">Takes about 2 minutes</p>
    </div>
  );
}
