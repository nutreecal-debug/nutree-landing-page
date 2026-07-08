export default function MealsPreview() {
  return (
    <div className="flex flex-col gap-3 px-5 pt-4">
      <div className="flex items-center justify-between">
        <span className="text-xl font-extrabold text-white">Meals (1)</span>
        <span className="text-sm font-semibold text-mint">View All</span>
      </div>

      <div className="rounded-2xl bg-navy-soft p-3.5">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold text-white/50">Snack</span>
          <span className="text-xs text-white/50">3:57 PM</span>
        </div>

        <div className="mt-2.5 flex items-center gap-3">
          <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-white/5 text-2xl">
            🍔
          </div>
          <div className="min-w-0 flex-1 text-sm font-bold leading-snug text-white">
            Classic Cheeseburger
          </div>
        </div>

        <div className="mt-3 flex flex-wrap gap-1.5">
          <span className="rounded-lg bg-orange-500/15 px-2 py-1 text-[11px] font-semibold text-orange-300">
            🔥 621
          </span>
          <span className="rounded-lg bg-rose-500/15 px-2 py-1 text-[11px] font-semibold text-rose-300">
            🥩 35g
          </span>
          <span className="rounded-lg bg-amber-500/15 px-2 py-1 text-[11px] font-semibold text-amber-300">
            🌽 34g
          </span>
          <span className="rounded-lg bg-emerald-500/15 px-2 py-1 text-[11px] font-semibold text-emerald-300">
            🥑 37g
          </span>
        </div>
      </div>
    </div>
  );
}
