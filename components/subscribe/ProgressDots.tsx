export const TOTAL_STEPS = 6;

export default function ProgressDots({ current }: { current: number }) {
  return (
    <div
      className="flex items-center justify-center gap-2"
      role="progressbar"
      aria-valuenow={current + 1}
      aria-valuemin={1}
      aria-valuemax={TOTAL_STEPS}
    >
      {Array.from({ length: TOTAL_STEPS }).map((_, i) => (
        <span
          key={i}
          className={`h-1.5 rounded-full transition-all duration-300 ${
            i === current ? "w-6 bg-brand" : "w-1.5 bg-ink/15"
          }`}
        />
      ))}
    </div>
  );
}
