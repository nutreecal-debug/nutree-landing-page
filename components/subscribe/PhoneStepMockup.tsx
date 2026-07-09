function AnnotationRing({ className }: { className: string }) {
  return <span className={`absolute animate-pulse-ring rounded-full ring-2 ring-red-400/80 ${className}`} aria-hidden="true" />;
}

function DarkRow() {
  return (
    <div className="flex items-center justify-between rounded-lg px-3 py-2.5 opacity-40">
      <span className="h-2 w-20 rounded-full bg-white/25" aria-hidden="true" />
    </div>
  );
}

function UnlockScreen() {
  return (
    <div className="flex h-full flex-col gap-2 bg-navy-soft px-3 pt-9">
      <p className="mb-1 text-[10px] font-bold uppercase tracking-wide text-white/30">Settings</p>
      <DarkRow />
      <div className="relative flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-500/25 to-brand/25 px-3 py-2.5 ring-1 ring-white/10">
        <AnnotationRing className="-inset-1.5 rounded-2xl" />
        <span className="text-[10px] font-bold text-white">⭐ Unlock premium</span>
      </div>
      <DarkRow />
      <DarkRow />
      <DarkRow />
    </div>
  );
}

function DiscountScreen() {
  return (
    <div className="flex h-full flex-col items-center bg-navy-soft px-3 pt-9">
      <div className="w-full rounded-xl bg-white/5 px-3 py-4 opacity-50">
        <span className="mx-auto block h-2 w-24 rounded-full bg-white/20" />
        <span className="mx-auto mt-2 block h-6 w-full rounded-lg bg-white/10" />
      </div>
      <div className="relative mt-auto mb-6">
        <AnnotationRing className="-inset-2 rounded-full" />
        <span className="text-[10px] font-semibold text-mint underline underline-offset-2">
          🎁 Have a discount code?
        </span>
      </div>
    </div>
  );
}

function CodeScreen() {
  return (
    <div className="flex h-full flex-col justify-end bg-navy-soft">
      <div className="w-full rounded-t-2xl bg-navy px-3 pb-4 pt-3 shadow-[0_-8px_24px_rgba(0,0,0,0.3)]">
        <p className="mb-2.5 flex items-center justify-center gap-1 text-[10px] font-bold text-white/70">
          🎁 Enter your code
        </p>
        <div className="animate-pop-in rounded-lg bg-white/10 px-3 py-2 text-center font-mono text-xs font-bold tracking-[0.25em] text-mint ring-1 ring-white/10">
          5BNUE
        </div>
        <div className="mt-2.5 rounded-lg bg-brand py-2 text-center text-[11px] font-bold text-white">
          Activate
        </div>
        <p className="mt-2 text-center text-[9px] text-white/30">Cancel</p>
      </div>
    </div>
  );
}

const SCREENS = { unlock: UnlockScreen, discount: DiscountScreen, code: CodeScreen };

export default function PhoneStepMockup({ step, variant }: { step: 1 | 2 | 3; variant: keyof typeof SCREENS }) {
  const ScreenContent = SCREENS[variant];

  return (
    <div className="relative mx-auto w-[150px] sm:w-[170px]">
      <div className="absolute -inset-4 -z-10 rounded-[3rem] bg-mint/20 blur-2xl" aria-hidden="true" />

      <div
        className="absolute left-1/2 -top-4 z-20 grid h-8 w-8 -translate-x-1/2 place-items-center rounded-full bg-brand text-sm font-extrabold text-white shadow-card ring-4 ring-paper"
        aria-hidden="true"
      >
        {step}
      </div>

      <div className="overflow-hidden rounded-[1.6rem] border-[5px] border-navy bg-navy shadow-soft">
        <div className="absolute left-1/2 top-0 z-10 h-3 w-14 -translate-x-1/2 rounded-b-lg bg-navy" />
        <div className="h-[280px] w-full overflow-hidden rounded-[1.2rem] bg-navy-soft sm:h-[320px]">
          <ScreenContent />
        </div>
      </div>
    </div>
  );
}
