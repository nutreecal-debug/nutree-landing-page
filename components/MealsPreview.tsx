import type { Lang } from "@/lib/types";

const CONTENT: Record<
  Lang,
  { mealsLabel: string; viewAll: string; category: string; time: string; mealName: string }
> = {
  en: {
    mealsLabel: "Meals (1)",
    viewAll: "View All",
    category: "Lunch",
    time: "3:57 PM",
    mealName: "Classic Cheeseburger",
  },
  ar: {
    mealsLabel: "الوجبات (1)",
    viewAll: "عرض الكل",
    category: "غداء",
    time: "٣:٥٧ م",
    mealName: "تشيز برجر كلاسيكي",
  },
};

export default function MealsPreview({ lang }: { lang: Lang }) {
  const t = CONTENT[lang];

  return (
    <div dir={lang === "ar" ? "rtl" : "ltr"} className="flex flex-col gap-2 px-3 pt-2.5 sm:gap-3 sm:px-5 sm:pt-4">
      <div className="flex items-center justify-between">
        <span className="text-sm font-extrabold text-white sm:text-xl">{t.mealsLabel}</span>
        <span className="text-[11px] font-semibold text-mint sm:text-sm">{t.viewAll}</span>
      </div>

      <div className="rounded-xl bg-navy-soft p-2 sm:rounded-2xl sm:p-3.5">
        <div className="flex items-center justify-between">
          <span className="text-[9px] font-semibold text-white/50 sm:text-xs">{t.category}</span>
          <span className="text-[9px] text-white/50 sm:text-xs">{t.time}</span>
        </div>

        <div className="mt-1.5 flex items-center gap-2 sm:mt-2.5 sm:gap-3">
          <div className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-white/5 text-sm sm:h-12 sm:w-12 sm:rounded-xl sm:text-2xl">
            🍔
          </div>
          <div className="min-w-0 flex-1 text-[11px] font-bold leading-snug text-white sm:text-sm">
            {t.mealName}
          </div>
        </div>

        <div className="mt-1.5 flex flex-wrap gap-1 sm:mt-3 sm:gap-1.5">
          <span className="rounded-md bg-orange-500/15 px-1.5 py-0.5 text-[8px] font-semibold text-orange-300 sm:rounded-lg sm:px-2 sm:py-1 sm:text-[11px]">
            🔥 621
          </span>
          <span className="rounded-md bg-rose-500/15 px-1.5 py-0.5 text-[8px] font-semibold text-rose-300 sm:rounded-lg sm:px-2 sm:py-1 sm:text-[11px]">
            🥩 35g
          </span>
          <span className="rounded-md bg-amber-500/15 px-1.5 py-0.5 text-[8px] font-semibold text-amber-300 sm:rounded-lg sm:px-2 sm:py-1 sm:text-[11px]">
            🌽 34g
          </span>
          <span className="rounded-md bg-emerald-500/15 px-1.5 py-0.5 text-[8px] font-semibold text-emerald-300 sm:rounded-lg sm:px-2 sm:py-1 sm:text-[11px]">
            🥑 37g
          </span>
        </div>
      </div>
    </div>
  );
}
