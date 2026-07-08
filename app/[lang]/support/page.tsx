import type { Metadata } from "next";
import LegalShell from "@/components/legal/LegalShell";
import FaqSection from "@/components/legal/FaqSection";
import TipsGrid from "@/components/legal/TipsGrid";
import { support } from "@/lib/legal/support";
import type { Lang } from "@/lib/types";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const l: Lang = lang === "ar" ? "ar" : "en";
  return { title: `${support[l].title} — Nutree` };
}

export default async function SupportPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const l: Lang = lang === "ar" ? "ar" : "en";
  const s = support[l];

  return (
    <LegalShell lang={l} slug="support" title={s.title} intro={s.subtitle}>
      <div className="flex flex-col gap-10">
        {s.categories.map((category) => (
          <FaqSection key={category.title} category={category} />
        ))}
        <TipsGrid title={s.tipsTitle} tips={s.tips} />
      </div>
    </LegalShell>
  );
}
