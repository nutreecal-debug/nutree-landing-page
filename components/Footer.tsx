import Logo from "./Logo";
import type { Dictionary } from "@/lib/types";

export default function Footer({ dict }: { dict: Dictionary }) {
  const { footer } = dict;

  return (
    <footer className="border-t border-black/5 py-12">
      <div className="container">
        <div className="flex flex-col items-center justify-between gap-8 sm:flex-row sm:items-start">
          <div className="flex flex-col items-center gap-3 sm:items-start">
            <Logo lang={dict.lang} />
            <p className="max-w-xs text-center text-sm text-muted sm:text-start">{footer.tagline}</p>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 sm:justify-start">
            <a
              href={`/${dict.lang}/terms`}
              className="text-sm font-medium text-ink/80 transition hover:text-ink"
            >
              {footer.terms}
            </a>
            <a
              href={`/${dict.lang}/privacy`}
              className="text-sm font-medium text-ink/80 transition hover:text-ink"
            >
              {footer.privacy}
            </a>
            <a
              href={`/${dict.lang}/support`}
              className="text-sm font-medium text-ink/80 transition hover:text-ink"
            >
              {footer.support}
            </a>
            <a
              href={`/${dict.lang}/sources`}
              className="text-sm font-medium text-ink/80 transition hover:text-ink"
            >
              {footer.sources}
            </a>
          </nav>
        </div>

        <p className="mt-10 text-center text-sm text-muted sm:text-start">{footer.copyright}</p>
      </div>
    </footer>
  );
}
