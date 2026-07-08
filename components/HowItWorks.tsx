import Reveal from "./Reveal";
import type { Dictionary } from "@/lib/types";

export default function HowItWorks({ dict }: { dict: Dictionary }) {
  const { howItWorks } = dict;

  return (
    <section id="how-it-works" className="pb-20 pt-8 sm:pb-28 sm:pt-10">
      <div className="container">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold text-ink sm:text-4xl">{howItWorks.title}</h2>
          <p className="mt-4 text-lg text-muted">{howItWorks.subtitle}</p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8">
          {howItWorks.steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 100}>
              <div className="flex flex-col items-center gap-4 text-center">
                <div className="grid h-16 w-16 place-items-center rounded-full bg-navy text-2xl font-extrabold text-mint">
                  {step.number}
                </div>
                <h3 className="text-lg font-semibold text-ink">{step.title}</h3>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
