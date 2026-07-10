import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import type { Dictionary } from "@/lib/types";

export default function Header({ dict }: { dict: Dictionary }) {
  const { header } = dict;

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-paper/80 backdrop-blur-md">
      <div className="container relative flex h-20 items-center justify-between">
        <a href="#top" aria-label="Nutree">
          <Logo lang={dict.lang} />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          <a href="#features" className="text-sm font-medium text-ink/80 transition hover:text-ink">
            {header.features}
          </a>
          <a href="#how-it-works" className="text-sm font-medium text-ink/80 transition hover:text-ink">
            {header.howItWorks}
          </a>
          <a href="#pricing" className="text-sm font-medium text-ink/80 transition hover:text-ink">
            {header.pricing}
          </a>
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href={header.switchHref}
            className="rounded-full px-3 py-1.5 text-sm font-semibold text-muted transition hover:bg-paper-soft hover:text-ink"
          >
            {header.switchLabel}
          </a>
          <a
            href="#download"
            className="rounded-xl bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow-card transition hover:-translate-y-0.5 hover:bg-brand-dark"
          >
            {header.downloadApp}
          </a>
        </div>

        <MobileMenu dict={dict} />
      </div>
    </header>
  );
}
