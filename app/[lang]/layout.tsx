import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDictionary } from "@/lib/dictionaries";
import DirectionSync from "@/components/DirectionSync";
import type { Lang } from "@/lib/types";

const LANGS: Lang[] = ["en", "ar"];

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!LANGS.includes(lang as Lang)) return {};
  const dict = getDictionary(lang);
  return {
    title: dict.meta.title,
    description: dict.meta.description,
    alternates: {
      languages: {
        en: "/en",
        ar: "/ar",
        "x-default": "/ar",
      },
    },
  };
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!LANGS.includes(lang as Lang)) notFound();
  const dir = lang === "ar" ? "rtl" : "ltr";

  return (
    <div
      dir={dir}
      lang={lang}
      className={lang === "ar" ? "font-ar" : "font-en"}
    >
      <DirectionSync lang={lang as Lang} />
      {children}
    </div>
  );
}
