import Reveal from "./Reveal";
import PhoneMockup from "./PhoneMockup";
import AppStoreButtons from "./AppStoreButtons";
import ScrollCue from "./ScrollCue";
import type { Dictionary } from "@/lib/types";

export default function Hero({ dict }: { dict: Dictionary }) {
  const { hero } = dict;

  return (
    <section id="top" className="relative overflow-hidden pb-4 pt-10 sm:pb-10 sm:pt-14">
      <div
        className="pointer-events-none absolute -top-32 inset-x-0 -z-10 mx-auto h-[30rem] w-[30rem] rounded-full bg-mint/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="container">
        {/* Mobile / tablet: headline -> phone -> download, all stacked and centered */}
        <div className="flex flex-col items-center text-center lg:hidden">
          <Reveal>
            <h1 className="text-balance text-4xl font-bold leading-[1.15] tracking-tight text-ink sm:text-5xl">
              {hero.headline.map((segment, i) => (
                <span key={i}>{segment.text}</span>
              ))}
            </h1>
          </Reveal>

          <Reveal delay={100} className="mt-4 sm:mt-8">
            <PhoneMockup lang={dict.lang} tilt={false} />
          </Reveal>

          <Reveal delay={200} className="mt-5 flex flex-col items-center gap-4 sm:mt-8">
            <span className="text-lg font-bold text-ink">{hero.downloadLabel}</span>
            <AppStoreButtons lang={dict.lang} />
          </Reveal>
        </div>

        {/* Desktop: headline+badges on one side, phone on the other */}
        <div className="hidden lg:grid lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
          <Reveal>
            <div className="border-t border-ink/10 pt-10">
              <h1 className="text-balance text-4xl font-bold leading-[1.15] tracking-tight text-ink lg:text-[3.4rem]">
                {hero.headline.map((segment, i) => (
                  <span key={i}>{segment.text}</span>
                ))}
              </h1>
            </div>

            <div className="mt-8">
              <AppStoreButtons lang={dict.lang} />
            </div>
          </Reveal>

          <Reveal delay={150} className="flex justify-end">
            <PhoneMockup lang={dict.lang} />
          </Reveal>
        </div>

        <Reveal delay={260} className="mt-6 flex justify-center lg:mt-14">
          <ScrollCue />
        </Reveal>
      </div>
    </section>
  );
}
