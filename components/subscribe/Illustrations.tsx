function AccentDot({ className, color }: { className: string; color: "blue" | "green" }) {
  return (
    <span
      className={`absolute rounded-full ${color === "blue" ? "bg-blue-400" : "bg-brand"} ${className}`}
      aria-hidden="true"
    />
  );
}

export function StarRingIllustration() {
  return (
    <div className="relative mx-auto grid h-40 w-40 place-items-center sm:h-44 sm:w-44">
      <AccentDot className="left-2 top-6 h-2.5 w-2.5" color="blue" />
      <AccentDot className="right-3 top-10 h-2 w-2" color="green" />
      <AccentDot className="bottom-8 left-4 h-1.5 w-1.5" color="green" />
      <AccentDot className="bottom-10 right-2 h-2.5 w-2.5" color="blue" />

      <svg viewBox="0 0 160 160" className="absolute inset-0 h-full w-full">
        <defs>
          <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#60A5FA" />
            <stop offset="100%" stopColor="#16A34A" />
          </linearGradient>
        </defs>
        <circle
          cx="80"
          cy="80"
          r="64"
          fill="none"
          stroke="url(#ringGrad)"
          strokeWidth="9"
          strokeLinecap="round"
          strokeDasharray="322 402"
          transform="rotate(-90 80 80)"
        />
      </svg>

      <div className="absolute inset-9 rounded-full bg-mint/20" aria-hidden="true" />

      <svg
        viewBox="0 0 24 24"
        className="relative h-11 w-11 animate-float drop-shadow-[0_8px_16px_rgba(22,163,74,0.3)] sm:h-12 sm:w-12"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="starGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#60A5FA" />
            <stop offset="100%" stopColor="#16A34A" />
          </linearGradient>
        </defs>
        <path
          fill="url(#starGrad)"
          d="M12 0c.7 3.9 1.6 6.6 3.1 8.1 1.5 1.5 4.2 2.4 8.1 3.1-3.9.7-6.6 1.6-8.1 3.1-1.5 1.5-2.4 4.2-3.1 8.1-.7-3.9-1.6-6.6-3.1-8.1C7.4 12.8 4.7 11.9.8 11.2c3.9-.7 6.6-1.6 8.1-3.1C10.4 6.6 11.3 3.9 12 0Z"
        />
      </svg>
    </div>
  );
}

function CardIcon() {
  return (
    <svg viewBox="0 0 64 44" className="h-11 w-16 animate-float" style={{ animationDelay: "150ms" }} aria-hidden="true">
      <rect x="0" y="0" width="64" height="44" rx="9" fill="#3B82F6" />
      <rect x="0" y="10" width="64" height="8" fill="#2563EB" />
      <rect x="8" y="30" width="26" height="5" rx="2.5" fill="white" fillOpacity="0.85" />
    </svg>
  );
}

export function PaymentCardIllustration() {
  return (
    <div className="relative mx-auto w-full max-w-[220px]">
      <div className="rounded-2xl bg-paper-soft p-4 pb-6 shadow-soft ring-1 ring-black/5">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="h-2 w-2 rounded-full bg-ink/10" />
          <span className="h-2 w-2 rounded-full bg-ink/10" />
          <span className="h-2 w-2 rounded-full bg-ink/10" />
        </div>
        <div className="mt-3 flex flex-col items-center gap-3">
          <span className="rounded-lg bg-brand/15 px-4 py-1.5 text-lg font-extrabold text-brand-dark">
            129 SAR
          </span>
          <CardIcon />
        </div>
      </div>

      <div
        className="absolute -right-2.5 -top-2.5 grid h-9 w-9 animate-pop-in place-items-center rounded-full bg-brand text-white shadow-card ring-4 ring-paper-soft"
        style={{ animationDelay: "300ms" }}
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 13l4 4L19 7" />
        </svg>
      </div>
    </div>
  );
}

export function EnvelopeIllustration() {
  return (
    <div className="relative mx-auto h-32 w-full max-w-[220px] sm:h-36">
      <AccentDot className="left-3 top-2 h-2 w-2" color="blue" />
      <AccentDot className="right-3 top-4 h-1.5 w-1.5" color="green" />

      <div className="absolute inset-x-6 top-8 h-24 rounded-2xl border-2 border-ink/10 bg-paper shadow-soft sm:h-28">
        <svg viewBox="0 0 100 60" className="absolute inset-0 h-full w-full text-ink/15" fill="none" stroke="currentColor" strokeWidth={2}>
          <path d="M2 4 L50 36 L98 4" />
        </svg>
      </div>

      <div className="absolute left-1/2 top-0 flex -translate-x-1/2 animate-float items-center rounded-xl bg-brand px-3 py-2 shadow-card">
        <span className="font-mono text-sm font-bold tracking-[0.2em] text-white">5BNUE</span>
      </div>
    </div>
  );
}
