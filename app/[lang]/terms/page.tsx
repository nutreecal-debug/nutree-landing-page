import type { Metadata } from "next";
import LegalShell from "@/components/legal/LegalShell";
import { NumberedSections } from "@/components/legal/LegalSections";
import { terms } from "@/lib/legal/terms";
import type { Lang } from "@/lib/types";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const l: Lang = lang === "ar" ? "ar" : "en";
  return { title: `${terms[l].title} — Nutree` };
}

export default async function TermsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const l: Lang = lang === "ar" ? "ar" : "en";
  const t = terms[l];

  return (
    <LegalShell lang={l} slug="terms" title={t.title} lastUpdated={t.lastUpdated}>
      <NumberedSections sections={t.sections} />
    </LegalShell>
  );
}
