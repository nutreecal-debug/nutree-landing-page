import Image from "next/image";
import type { Lang } from "@/lib/types";

export default function Logo({ lang, className = "" }: { lang: Lang; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <Image
        src="/logo.PNG"
        alt="Nutree"
        width={36}
        height={36}
        className="h-9 w-9 shrink-0 rounded-xl"
      />
      <span className="text-xl font-extrabold tracking-tight text-ink">
        {lang === "ar" ? "نيوتري" : "Nutree"}
      </span>
    </span>
  );
}
