import SimpleHeader from "./SimpleHeader";
import BackToHome from "./BackToHome";
import ContactCard from "./ContactCard";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { getDictionary } from "@/lib/dictionaries";
import type { Lang } from "@/lib/types";
import type { ReactNode } from "react";

export default function LegalShell({
  lang,
  slug,
  title,
  lastUpdated,
  intro,
  children,
}: {
  lang: Lang;
  slug: string;
  title: string;
  lastUpdated?: string;
  intro?: string;
  children: ReactNode;
}) {
  const dict = getDictionary(lang);

  return (
    <div className="bg-paper">
      <SimpleHeader lang={lang} slug={slug} />
      <main className="py-14 sm:py-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <Reveal>
            <h1 className="text-balance text-3xl font-bold text-ink sm:text-4xl">{title}</h1>
            {lastUpdated && <p className="mt-3 text-sm text-muted">{lastUpdated}</p>}
            {intro && <p className="mt-6 text-lg leading-relaxed text-muted">{intro}</p>}
          </Reveal>

          <Reveal delay={100} className="mt-10">
            {children}
          </Reveal>

          <Reveal delay={150} className="mt-14">
            <ContactCard lang={lang} />
          </Reveal>

          <div className="mt-10">
            <BackToHome lang={lang} />
          </div>
        </div>
      </main>
      <Footer dict={dict} />
    </div>
  );
}
