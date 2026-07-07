import { Camera, Mic, Flame, Droplets, Scale, Bookmark, type LucideIcon } from "lucide-react";
import Reveal from "./Reveal";
import type { Dictionary, FeatureItem } from "@/lib/types";

const ICONS: Record<FeatureItem["icon"], LucideIcon> = {
  camera: Camera,
  mic: Mic,
  flame: Flame,
  droplets: Droplets,
  scale: Scale,
  bookmark: Bookmark,
};

export default function Features({ dict }: { dict: Dictionary }) {
  const { features } = dict;

  return (
    <section id="features" className="bg-paper-soft py-20 sm:py-28">
      <div className="container">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold text-ink sm:text-4xl">{features.title}</h2>
          <p className="mt-4 text-lg text-muted">{features.subtitle}</p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.items.map((item, i) => {
            const Icon = ICONS[item.icon];
            return (
              <Reveal key={item.title} delay={i * 70}>
                <div className="h-full rounded-3xl border border-black/5 bg-paper p-7 shadow-card transition hover:-translate-y-1 hover:shadow-soft">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-mint/15 text-brand-dark">
                    <Icon className="h-6 w-6" strokeWidth={2} />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-ink">{item.title}</h3>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
