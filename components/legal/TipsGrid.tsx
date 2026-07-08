import type { TipItem } from "@/lib/legal/types";

export default function TipsGrid({ title, tips }: { title: string; tips: TipItem[] }) {
  return (
    <div>
      <h2 className="text-lg font-bold text-ink sm:text-xl">{title}</h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-3">
        {tips.map((tip) => (
          <div key={tip.title} className="rounded-2xl bg-paper-soft p-5">
            <div className="text-2xl">{tip.icon}</div>
            <div className="mt-2 font-semibold text-ink">{tip.title}</div>
            <p className="mt-1 text-sm leading-relaxed text-muted">{tip.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
