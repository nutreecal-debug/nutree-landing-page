import { ChevronDown } from "lucide-react";
import type { FaqCategory } from "@/lib/legal/types";

export default function FaqSection({ category }: { category: FaqCategory }) {
  return (
    <div>
      <h2 className="flex items-center gap-2.5 text-lg font-bold text-ink sm:text-xl">
        <span aria-hidden="true">{category.icon}</span>
        {category.title}
      </h2>
      <div className="mt-4 flex flex-col gap-3">
        {category.items.map((item) => (
          <details
            key={item.q}
            className="group rounded-2xl border border-black/5 bg-paper p-5 shadow-card open:shadow-soft"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-ink [&::-webkit-details-marker]:hidden">
              {item.q}
              <ChevronDown className="h-5 w-5 shrink-0 text-muted transition-transform duration-200 group-open:rotate-180" />
            </summary>
            <p className="mt-3 leading-relaxed text-muted">{item.a}</p>
          </details>
        ))}
      </div>
    </div>
  );
}
