import Image from "next/image";
import { Trophy } from "lucide-react";
import MealsPreview from "./MealsPreview";
import type { Lang } from "@/lib/types";

const SHOT_WIDTH = 1290;

const SHOTS: Record<Lang, { src: string; height: number }> = {
  en: { src: "/home-en-top.png", height: 1660 },
  ar: { src: "/home-ar-top.png", height: 1660 },
};

const ALT: Record<Lang, string> = {
  en: "Nutree app home screen",
  ar: "الشاشة الرئيسية في تطبيق نيوتري",
};

export default function PhoneMockup({ lang, tilt = true }: { lang: Lang; tilt?: boolean }) {
  const shot = SHOTS[lang];

  return (
    <div className="relative w-[165px] sm:w-[270px]">
      <div className="absolute -inset-4 -z-10 rounded-[3.5rem] bg-mint/20 blur-3xl sm:-inset-8" aria-hidden="true" />

      <div className="absolute -end-4 top-10 z-10 grid h-9 w-9 animate-float-sm place-items-center rounded-full bg-paper shadow-soft ring-1 ring-black/5 sm:-end-5 sm:top-16 sm:h-14 sm:w-14">
        <Trophy className="h-3.5 w-3.5 text-brand sm:h-6 sm:w-6" strokeWidth={1.75} />
      </div>

      <div className={tilt ? "rotate-3" : ""}>
        <div className="animate-float">
          <div className="relative overflow-hidden rounded-[1.8rem] border-[5px] border-navy bg-navy shadow-soft sm:rounded-[2.6rem] sm:border-[8px]">
            <div className="absolute left-1/2 top-0 z-10 h-3.5 w-16 -translate-x-1/2 rounded-b-lg bg-navy sm:h-5 sm:w-24 sm:rounded-b-xl" />
            <div className="relative flex w-full flex-col overflow-hidden rounded-[1.4rem] bg-navy sm:rounded-[2.1rem]">
              <Image
                src={shot.src}
                alt={ALT[lang]}
                width={SHOT_WIDTH}
                height={shot.height}
                className="h-auto w-full shrink-0"
                priority
              />
              <MealsPreview lang={lang} />
              <div className="flex justify-center pb-2 pt-1.5 sm:pb-3 sm:pt-2">
                <div className="h-0.5 w-20 rounded-full bg-white/20 sm:h-1 sm:w-28" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
