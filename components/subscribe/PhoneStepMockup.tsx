import Image from "next/image";

const STEP_IMAGES: Record<"unlock" | "discount" | "code", { src: string; position: string }> = {
  unlock: { src: "/subscribe/step-1-unlock.jpg", position: "object-top" },
  discount: { src: "/subscribe/step-2-discount.jpg", position: "object-bottom" },
  code: { src: "/subscribe/step-3-code.png", position: "object-bottom" },
};

// Renders the same three images through next/image's real pipeline, hidden, so
// their optimized URLs are fetched and cached before the user reaches Step 3.
export function PhoneStepImagePreload() {
  return (
    <div className="hidden" aria-hidden="true">
      {Object.values(STEP_IMAGES).map(({ src }) => (
        <div key={src} className="relative h-[320px] w-[170px]">
          <Image src={src} alt="" fill sizes="170px" priority />
        </div>
      ))}
    </div>
  );
}

export default function PhoneStepMockup({
  step,
  variant,
}: {
  step: 1 | 2 | 3;
  variant: keyof typeof STEP_IMAGES;
}) {
  const { src, position } = STEP_IMAGES[variant];

  return (
    <div className="relative mx-auto w-[150px] sm:w-[170px]">
      <div className="absolute -inset-4 -z-10 rounded-[3rem] bg-mint/20 blur-2xl" aria-hidden="true" />

      <div
        className="absolute left-1/2 -top-4 z-20 grid h-8 w-8 -translate-x-1/2 place-items-center rounded-full bg-brand text-sm font-extrabold text-white shadow-card ring-4 ring-paper"
        aria-hidden="true"
      >
        {step}
      </div>

      <div className="overflow-hidden rounded-[1.6rem] border-[5px] border-navy bg-navy shadow-soft">
        <div className="absolute left-1/2 top-0 z-10 h-3 w-14 -translate-x-1/2 rounded-b-lg bg-navy" />
        <div className="relative h-[280px] w-full overflow-hidden rounded-[1.2rem] bg-navy-soft sm:h-[320px]">
          <Image src={src} alt="" fill sizes="170px" priority className={`object-cover ${position}`} />
        </div>
      </div>
    </div>
  );
}
