import Reveal from "./Reveal";
import type { Dictionary } from "@/lib/types";

const RING_STYLES = [
  "bg-orange-50",
  "bg-rose-50",
  "bg-amber-50",
  "bg-lime-50",
];

export default function MacroIcons({ dict }: { dict: Dictionary }) {
  const { macros } = dict;

  return (
    <section className="py-16 sm:py-20">
      <div className="container">
        <Reveal>
          <h2 className="text-balance text-center text-2xl font-bold text-ink sm:text-3xl">
            {macros.title}
          </h2>
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-3xl grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-8">
          {macros.items.map((item, i) => (
            <Reveal key={item.label} delay={i * 80}>
              <div className="flex flex-col items-center gap-3 text-center">
                <div
                  className={`grid h-20 w-20 place-items-center rounded-full text-4xl shadow-card sm:h-24 sm:w-24 ${RING_STYLES[i % RING_STYLES.length]}`}
                >
                  <span aria-hidden="true">{item.emoji}</span>
                </div>
                <span className="font-semibold text-ink">{item.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
