import Image from "next/image";
import { Trophy } from "lucide-react";
import MealsPreview from "./MealsPreview";
import type { Lang } from "@/lib/types";

const SHOT_WIDTH = 1290;

const SHOTS: Record<Lang, { src: string; height: number }> = {
  en: { src: "/home-en-top.png", height: 1660 },
  ar: { src: "/home-ar.png", height: 2500 },
};

const ALT: Record<Lang, string> = {
  en: "Nutree app home screen",
  ar: "الشاشة الرئيسية في تطبيق نيوتري",
};

export default function PhoneMockup({ lang }: { lang: Lang }) {
  const shot = SHOTS[lang];

  return (
    <div className="relative w-[250px] sm:w-[270px]">
      <div className="absolute -inset-8 -z-10 rounded-[3.5rem] bg-mint/20 blur-3xl" aria-hidden="true" />

      <div className="absolute -end-5 top-16 z-10 grid h-14 w-14 place-items-center rounded-full bg-paper shadow-soft ring-1 ring-black/5">
        <Trophy className="h-6 w-6 text-brand" strokeWidth={1.75} />
      </div>

      <div className="rotate-3">
        <div className="animate-float">
          <div className="relative overflow-hidden rounded-[2.6rem] border-[8px] border-navy bg-navy shadow-soft">
            <div className="absolute left-1/2 top-0 z-10 h-5 w-24 -translate-x-1/2 rounded-b-xl bg-navy" />
            {lang === "en" ? (
              <div className="relative flex w-full flex-col overflow-hidden rounded-[2.1rem] bg-navy">
                <Image
                  src={shot.src}
                  alt={ALT[lang]}
                  width={SHOT_WIDTH}
                  height={shot.height}
                  className="h-auto w-full shrink-0"
                  priority
                />
                <MealsPreview />
                <div className="flex justify-center pb-3 pt-2">
                  <div className="h-1 w-28 rounded-full bg-white/20" aria-hidden="true" />
                </div>
              </div>
            ) : (
              <div className="relative aspect-[1290/2796] w-full overflow-hidden rounded-[2.1rem] bg-navy">
                <Image
                  src={shot.src}
                  alt={ALT[lang]}
                  width={SHOT_WIDTH}
                  height={shot.height}
                  className="absolute inset-x-0 top-0 h-auto w-full"
                  priority
                />
                <div
                  className="absolute inset-x-0 bottom-2.5 mx-auto h-1 w-28 rounded-full bg-white/20"
                  aria-hidden="true"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
