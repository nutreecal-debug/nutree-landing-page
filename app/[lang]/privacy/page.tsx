import type { Metadata } from "next";
import LegalShell from "@/components/legal/LegalShell";
import { PlainSections } from "@/components/legal/LegalSections";
import { privacy } from "@/lib/legal/privacy";
import type { Lang } from "@/lib/types";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const l: Lang = lang === "ar" ? "ar" : "en";
  return { title: `${privacy[l].title} — Nutree` };
}

export default async function PrivacyPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const l: Lang = lang === "ar" ? "ar" : "en";
  const p = privacy[l];

  return (
    <LegalShell lang={l} slug="privacy" title={p.title} lastUpdated={p.lastUpdated}>
      <PlainSections sections={p.sections} />
    </LegalShell>
  );
}
