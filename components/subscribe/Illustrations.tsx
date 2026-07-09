export function StarRingIllustration() {
  return (
    <div className="relative mx-auto grid h-44 w-44 place-items-center sm:h-52 sm:w-52">
      <div className="absolute inset-0 rounded-full bg-mint/25 blur-2xl" aria-hidden="true" />
      <div
        className="absolute inset-3 animate-pulse-ring rounded-full border-[10px] border-mint/40"
        aria-hidden="true"
      />
      <div
        className="absolute inset-7 rounded-full border-[6px] border-brand/70"
        aria-hidden="true"
      />
      <svg
        viewBox="0 0 24 24"
        className="relative h-14 w-14 animate-float text-brand drop-shadow-[0_8px_16px_rgba(22,163,74,0.35)] sm:h-16 sm:w-16"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M12 0c.7 3.9 1.6 6.6 3.1 8.1 1.5 1.5 4.2 2.4 8.1 3.1-3.9.7-6.6 1.6-8.1 3.1-1.5 1.5-2.4 4.2-3.1 8.1-.7-3.9-1.6-6.6-3.1-8.1C7.4 12.8 4.7 11.9.8 11.2c3.9-.7 6.6-1.6 8.1-3.1C10.4 6.6 11.3 3.9 12 0Z" />
      </svg>
    </div>
  );
}

export function PaymentCardIllustration() {
  return (
    <div className="relative mx-auto h-40 w-full max-w-[240px] sm:h-44">
      <div
        className="absolute inset-x-4 top-2 h-32 rounded-3xl bg-gradient-to-br from-navy to-navy-soft shadow-soft sm:h-36"
        aria-hidden="true"
      >
        <div className="absolute left-6 top-7 h-5 w-8 rounded-md bg-mint/70" />
        <div className="absolute left-6 top-16 h-2 w-20 rounded-full bg-white/20" />
        <div className="absolute left-6 top-21 h-2 w-14 rounded-full bg-white/10" />
      </div>

      <div className="absolute -right-1 top-0 flex animate-float items-center gap-1 rounded-2xl bg-paper px-3 py-2 shadow-card">
        <span className="text-sm font-extrabold text-brand">129 SAR</span>
      </div>

      <div
        className="absolute -bottom-2 left-2 grid h-10 w-10 animate-pop-in place-items-center rounded-full bg-brand text-white shadow-card"
        style={{ animationDelay: "300ms" }}
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 13l4 4L19 7" />
        </svg>
      </div>
    </div>
  );
}

export function EnvelopeIllustration() {
  return (
    <div className="relative mx-auto h-36 w-full max-w-[240px] sm:h-40">
      <div
        className="absolute inset-x-6 top-3 h-28 rounded-2xl border-2 border-navy/15 bg-paper shadow-soft sm:h-32"
        aria-hidden="true"
      >
        <svg viewBox="0 0 100 60" className="absolute inset-0 h-full w-full text-navy/20" fill="none" stroke="currentColor" strokeWidth={2}>
          <path d="M2 4 L50 36 L98 4" />
        </svg>
      </div>

      <div className="absolute -bottom-1 right-0 flex animate-float items-center rounded-xl bg-navy px-3 py-2 shadow-card">
        <span className="font-mono text-sm font-bold tracking-[0.2em] text-mint">5BNUE</span>
      </div>
    </div>
  );
}
