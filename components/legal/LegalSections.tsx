import type { LegalSection } from "@/lib/legal/types";

function SectionBody({ section }: { section: LegalSection }) {
  return (
    <>
      {section.paragraphs?.map((p, i) => (
        <p key={i} className="mt-3 leading-relaxed text-muted">
          {p}
        </p>
      ))}
      {section.list && (
        <ul className="mt-3 list-disc space-y-2 ps-5 text-muted">
          {section.list.map((item, i) => (
            <li key={i} className="leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export function NumberedSections({ sections }: { sections: LegalSection[] }) {
  return (
    <div className="flex flex-col gap-8">
      {sections.map((section, i) => (
        <div key={section.heading}>
          <h2 className="text-lg font-bold text-ink sm:text-xl">
            {i + 1}. {section.heading}
          </h2>
          <SectionBody section={section} />
        </div>
      ))}
    </div>
  );
}

export function PlainSections({ sections }: { sections: LegalSection[] }) {
  return (
    <div className="flex flex-col gap-8">
      {sections.map((section) => (
        <div key={section.heading}>
          <h2 className="text-lg font-bold text-ink sm:text-xl">{section.heading}</h2>
          <SectionBody section={section} />
        </div>
      ))}
    </div>
  );
}

export function CardSections({ sections }: { sections: LegalSection[] }) {
  return (
    <div className="flex flex-col gap-5">
      {sections.map((section) => (
        <div
          key={section.heading}
          className="rounded-3xl border border-black/5 bg-paper p-6 shadow-card sm:p-7"
        >
          <h2 className="text-lg font-bold text-ink sm:text-xl">{section.heading}</h2>
          <SectionBody section={section} />
        </div>
      ))}
    </div>
  );
}
