import Reveal from "./Reveal";
import PhoneMockup from "./PhoneMockup";
import AppStoreButtons from "./AppStoreButtons";
import type { Dictionary } from "@/lib/types";

export default function Hero({ dict }: { dict: Dictionary }) {
  const { hero } = dict;

  return (
    <section id="top" className="relative overflow-hidden pb-20 pt-14 sm:pb-28 sm:pt-20">
      <div
        className="pointer-events-none absolute -top-24 inset-x-0 -z-10 mx-auto h-[36rem] w-[36rem] rounded-full bg-mint/20 blur-3xl"
        aria-hidden="true"
      />

      <div className="container grid items-center gap-16 lg:grid-cols-2 lg:gap-12">
        <Reveal>
          <span className="mb-6 inline-block rounded-full bg-mint/15 px-4 py-1.5 text-sm font-semibold text-brand-dark">
            {hero.eyebrow}
          </span>

          <h1 className="text-balance text-4xl font-extrabold leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            {hero.headline.map((segment, i) => (
              <span key={i} className={segment.highlight ? "text-brand" : undefined}>
                {segment.text}
              </span>
            ))}
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">{hero.subtext}</p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
            <a
              href="#download"
              className="inline-flex items-center justify-center rounded-2xl bg-brand px-7 py-4 text-base font-semibold text-white shadow-card transition hover:-translate-y-0.5 hover:bg-brand-dark"
            >
              {hero.downloadApp}
            </a>
            <AppStoreButtons appStoreLabel={hero.appStore} googlePlayLabel={hero.googlePlay} />
          </div>
        </Reveal>

        <Reveal delay={150} className="lg:justify-self-end">
          <PhoneMockup lang={dict.lang} />
        </Reveal>
      </div>
    </section>
  );
}
