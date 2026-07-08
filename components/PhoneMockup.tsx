import Image from "next/image";
import { Trophy } from "lucide-react";
import type { Lang } from "@/lib/types";

const SHOT_WIDTH = 1290;
const SHOT_HEIGHT = 2500;

const SCREENSHOTS: Record<Lang, string> = {
  en: "/home-en.png",
  ar: "/home-ar.png",
};

const ALT: Record<Lang, string> = {
  en: "Nutree app home screen",
  ar: "الشاشة الرئيسية في تطبيق نيوتري",
};

export default function PhoneMockup({ lang }: { lang: Lang }) {
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
            <Image
              src={SCREENSHOTS[lang]}
              alt={ALT[lang]}
              width={SHOT_WIDTH}
              height={SHOT_HEIGHT}
              className="h-auto w-full rounded-[2.1rem]"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
