import type { Lang } from "@/lib/types";

const GOOGLE_PLAY_SRC: Record<Lang, string> = {
  en: "/badges/google-play-en.png",
  ar: "/badges/google-play-ar.png",
};

const ALT: Record<Lang, { apple: string; google: string }> = {
  en: { apple: "Download on the App Store", google: "Get it on Google Play" },
  ar: { apple: "حمّله من App Store", google: "احصل عليه من Google Play" },
};

export default function StoreBadges({ lang, className = "" }: { lang: Lang; className?: string }) {
  const alt = ALT[lang];

  return (
    <div className={`flex flex-wrap items-center justify-center gap-3 ${className}`}>
      <a href="#" className="inline-flex transition hover:-translate-y-0.5">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/badges/app-store-badge.svg" alt={alt.apple} className="h-11 w-auto" />
      </a>
      <a href="#" className="inline-flex transition hover:-translate-y-0.5">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={GOOGLE_PLAY_SRC[lang]} alt={alt.google} className="h-11 w-auto" />
      </a>
    </div>
  );
}
