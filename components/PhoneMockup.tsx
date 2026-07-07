import Image from "next/image";
import type { Lang } from "@/lib/types";

const SHOT_WIDTH = 1290;
const SHOT_HEIGHT = 2380;

const SCREENSHOTS: Record<Lang, string> = {
  en: "/progress-en.png",
  ar: "/progress-ar.png",
};

const ALT: Record<Lang, string> = {
  en: "Nutree app daily tracking screen",
  ar: "شاشة المتابعة اليومية في تطبيق نيوتري",
};

export default function PhoneMockup({ lang }: { lang: Lang }) {
  return (
    <div className="relative mx-auto w-[280px] animate-float sm:w-[300px]">
      <div className="absolute -inset-6 -z-10 rounded-[3.5rem] bg-mint/25 blur-3xl" aria-hidden="true" />
      <div className="relative overflow-hidden rounded-[3rem] border-[10px] border-navy bg-navy shadow-soft">
        <Image
          src={SCREENSHOTS[lang]}
          alt={ALT[lang]}
          width={SHOT_WIDTH}
          height={SHOT_HEIGHT}
          className="h-auto w-full rounded-[2.4rem]"
          priority
        />
      </div>
    </div>
  );
}
