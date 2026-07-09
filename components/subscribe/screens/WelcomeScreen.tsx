import { StarRingIllustration } from "../Illustrations";
import ProgressDots from "../ProgressDots";

export default function WelcomeScreen({ onStart }: { onStart: () => void }) {
  return (
    <div className="flex flex-col items-center px-1 pt-4 text-center">
      <StarRingIllustration />

      <h1 className="mt-6 whitespace-nowrap text-xl font-extrabold tracking-tight text-ink sm:text-3xl">
        Welcome to Nutree Pro 👋
      </h1>
      <p className="mt-3 max-w-xs text-balance text-sm leading-relaxed text-muted sm:text-base">
        Here&apos;s how you get your subscription — 3 simple steps.
      </p>

      <div className="mt-8">
        <ProgressDots current={0} />
      </div>

      <button
        onClick={onStart}
        className="mt-5 flex w-full items-center justify-center rounded-2xl bg-navy px-6 py-4 text-base font-semibold text-white shadow-card transition hover:-translate-y-0.5 hover:bg-navy-soft"
      >
        Let&apos;s start
      </button>
    </div>
  );
}
