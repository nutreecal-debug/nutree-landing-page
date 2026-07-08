import Reveal from "./Reveal";
import PhoneMockup from "./PhoneMockup";
import AppStoreButtons from "./AppStoreButtons";
import ScrollCue from "./ScrollCue";
import type { Dictionary } from "@/lib/types";

export default function Hero({ dict }: { dict: Dictionary }) {
  const { hero } = dict;

  return (
    <section id="top" className="relative overflow-hidden pb-16 pt-10 sm:pb-24 sm:pt-14">
      <div
        className="pointer-events-none absolute -top-32 inset-x-0 -z-10 mx-auto h-[30rem] w-[30rem] rounded-full bg-mint/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="container">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <Reveal className="order-2 lg:order-1">
            <div className="border-t border-ink/10 pt-8 sm:pt-10">
              <h1 className="text-balance text-4xl font-bold leading-[1.15] tracking-tight text-ink sm:text-5xl lg:text-[3.4rem]">
                {hero.headline.map((segment, i) => (
                  <span key={i}>{segment.text}</span>
                ))}
              </h1>
            </div>

            <div className="mt-8">
              <AppStoreButtons lang={dict.lang} />
            </div>
          </Reveal>

          <Reveal delay={150} className="order-1 flex justify-center lg:order-2 lg:justify-end">
            <PhoneMockup lang={dict.lang} />
          </Reveal>
        </div>

        <Reveal delay={260} className="mt-14 flex justify-center">
          <ScrollCue />
        </Reveal>
      </div>
    </section>
  );
}
