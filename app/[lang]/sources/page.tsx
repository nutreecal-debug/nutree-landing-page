import type { Metadata } from "next";
import LegalShell from "@/components/legal/LegalShell";
import { CardSections } from "@/components/legal/LegalSections";
import { sources } from "@/lib/legal/sources";
import type { Lang } from "@/lib/types";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const l: Lang = lang === "ar" ? "ar" : "en";
  return { title: `${sources[l].title} — Nutree` };
}

export default async function SourcesPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const l: Lang = lang === "ar" ? "ar" : "en";
  const s = sources[l];

  return (
    <LegalShell lang={l} slug="sources" title={s.title} lastUpdated={s.lastUpdated} intro={s.intro}>
      <CardSections sections={s.sections} />
    </LegalShell>
  );
}
