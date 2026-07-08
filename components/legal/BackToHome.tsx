import { ArrowLeft } from "lucide-react";
import type { Lang } from "@/lib/types";

export default function BackToHome({ lang }: { lang: Lang }) {
  return (
    <a
      href={`/${lang}`}
      className="inline-flex items-center gap-2 text-sm font-semibold text-ink/70 transition hover:text-ink"
    >
      <ArrowLeft className="h-4 w-4 rtl:rotate-180" />
      {lang === "ar" ? "العودة للرئيسية" : "Back to Home"}
    </a>
  );
}
