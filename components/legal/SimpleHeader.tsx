import Logo from "@/components/Logo";
import type { Lang } from "@/lib/types";

export default function SimpleHeader({ lang, slug }: { lang: Lang; slug: string }) {
  const otherLang: Lang = lang === "ar" ? "en" : "ar";
  const switchHref = `/${otherLang}/${slug}`;
  const switchLabel = lang === "ar" ? "English" : "العربية";

  return (
    <header className="border-b border-black/5 bg-paper/80 backdrop-blur-md">
      <div className="container flex h-20 items-center justify-between">
        <a href={`/${lang}`} aria-label="Nutree">
          <Logo lang={lang} />
        </a>
        <a
          href={switchHref}
          className="rounded-full px-3 py-1.5 text-sm font-semibold text-muted transition hover:bg-paper-soft hover:text-ink"
        >
          {switchLabel}
        </a>
      </div>
    </header>
  );
}
