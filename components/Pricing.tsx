import { Check } from "lucide-react";
import Reveal from "./Reveal";
import type { Dictionary } from "@/lib/types";

export default function Pricing({ dict }: { dict: Dictionary }) {
  const { pricing } = dict;

  return (
    <section id="pricing" className="bg-paper-soft py-20 sm:py-28">
      <div className="container">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold text-ink sm:text-4xl">{pricing.title}</h2>
          {pricing.subtitle && <p className="mt-4 text-lg text-muted">{pricing.subtitle}</p>}
        </Reveal>

        <Reveal delay={100} className="relative mx-auto mt-16 max-w-md">
          {pricing.badge && (
            <span className="absolute -top-4 right-8 z-10 rounded-full bg-brand px-4 py-1.5 text-xs font-bold text-white shadow-card">
              {pricing.badge}
            </span>
          )}

          <div className="rounded-4xl border-2 border-mint/60 bg-paper p-8 shadow-soft sm:p-10">
            <h3 className="text-xl font-bold text-ink">{pricing.name}</h3>
            <div className="mt-3 flex items-end gap-2">
              <span className="text-4xl font-extrabold tracking-tight text-brand">{pricing.price}</span>
              <span className="pb-1 text-muted">{pricing.period}</span>
            </div>
            {pricing.description && (
              <p className="mt-3 text-sm leading-relaxed text-muted">{pricing.description}</p>
            )}

            <div className="my-7 border-t border-black/10" aria-hidden="true" />

            <ul className="flex flex-col gap-4">
              {pricing.features.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-mint/15 text-brand-dark">
                    <Check className="h-4 w-4" strokeWidth={2.5} />
                  </span>
                  <span className="text-ink/80">{feature}</span>
                </li>
              ))}
            </ul>

            <a
              href="#download"
              className="mt-9 flex w-full items-center justify-center rounded-2xl bg-brand px-6 py-4 text-base font-semibold text-white shadow-card transition hover:-translate-y-0.5 hover:bg-brand-dark"
            >
              {pricing.cta}
            </a>
            <p className="mt-4 text-center text-sm text-muted">{pricing.note}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
