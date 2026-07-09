function Row({ label, muted = false }: { label: string; muted?: boolean }) {
  return (
    <div className={`flex items-center justify-between rounded-xl px-3 py-2.5 ${muted ? "opacity-40" : ""}`}>
      <span className="h-2.5 w-24 rounded-full bg-ink/20" aria-hidden="true" />
      <span className="text-[10px] text-ink/20">{label}</span>
    </div>
  );
}

function UnlockScreen() {
  return (
    <div className="flex h-full flex-col gap-1.5 px-3 pt-8">
      <p className="mb-2 text-xs font-bold text-ink/70">Settings</p>
      <Row label="" muted />
      <Row label="" muted />
      <div className="relative mt-1 flex items-center justify-between rounded-xl bg-brand/10 px-3 py-3 ring-2 ring-brand">
        <div className="absolute -inset-1 -z-10 animate-pulse-ring rounded-2xl bg-brand/20" aria-hidden="true" />
        <span className="flex items-center gap-1.5 text-xs font-bold text-brand-dark">⭐ Unlock premium</span>
        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 text-brand-dark" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round">
          <path d="M9 6l6 6-6 6" />
        </svg>
      </div>
      <Row label="" muted />
      <Row label="" muted />
    </div>
  );
}

function DiscountScreen() {
  return (
    <div className="flex h-full flex-col items-center gap-3 px-4 pt-8 text-center">
      <div className="w-full rounded-xl bg-ink/5 px-3 py-4 opacity-40">
        <span className="mx-auto block h-2.5 w-28 rounded-full bg-ink/20" />
        <span className="mx-auto mt-2 block h-6 w-20 rounded-full bg-ink/15" />
      </div>
      <div className="relative mt-1 max-w-[80%] animate-pop-in rounded-2xl bg-brand px-4 py-2.5 text-[11px] font-bold leading-snug text-white shadow-card">
        Have a discount code?
      </div>
    </div>
  );
}

function CodeScreen() {
  const chars = ["5", "B", "N", "U", "E"];
  return (
    <div className="flex h-full flex-col items-center justify-end gap-3 px-3 pb-6">
      <div className="w-full rounded-t-2xl bg-paper-soft px-2 pb-4 pt-3 shadow-[0_-8px_24px_rgba(17,24,39,0.08)]">
        <p className="mb-3 text-center text-xs font-bold text-ink/70">Enter your code</p>
        <div className="flex justify-center gap-1">
          {chars.map((c, i) => (
            <span
              key={i}
              className="grid h-6 w-[18px] animate-pop-in place-items-center rounded-md bg-navy font-mono text-[10px] font-bold text-mint"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              {c}
            </span>
          ))}
        </div>
        <div className="mt-3 rounded-lg bg-brand py-2 text-center text-[11px] font-bold text-white">Activate</div>
      </div>
    </div>
  );
}

const SCREENS = { unlock: UnlockScreen, discount: DiscountScreen, code: CodeScreen };

export default function PhoneStepMockup({ variant }: { variant: keyof typeof SCREENS }) {
  const ScreenContent = SCREENS[variant];

  return (
    <div className="relative mx-auto w-[150px] sm:w-[170px]">
      <div className="absolute -inset-4 -z-10 rounded-[3rem] bg-mint/20 blur-2xl" aria-hidden="true" />
      <div className="overflow-hidden rounded-[1.6rem] border-[5px] border-navy bg-navy shadow-soft">
        <div className="absolute left-1/2 top-0 z-10 h-3 w-14 -translate-x-1/2 rounded-b-lg bg-navy" />
        <div className="h-[280px] w-full overflow-hidden rounded-[1.2rem] bg-paper sm:h-[320px]">
          <ScreenContent />
        </div>
      </div>
    </div>
  );
}
