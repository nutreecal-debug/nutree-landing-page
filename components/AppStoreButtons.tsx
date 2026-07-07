import { PlayCircle } from "lucide-react";

function AppleGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 shrink-0" fill="currentColor" aria-hidden="true">
      <path d="M16.365 1.43c0 1.14-.417 2.13-1.25 2.97-.833.84-1.833 1.32-3 1.44-.03-1.11.42-2.1 1.24-2.94.84-.87 1.833-1.38 3.01-1.47ZM20.3 17.14c-.55 1.24-.82 1.8-1.5 2.9-.98 1.53-2.35 3.44-4.06 3.46-1.52.01-1.91-.99-3.97-.98-2.06.01-2.49 1-4.01.98-1.7-.02-3-1.75-3.98-3.28-2.73-4.2-3.02-9.13-1.34-11.76 1.2-1.87 3.1-2.97 4.88-2.97 1.82 0 2.96 1 4.47 1 1.46 0 2.35-1 4.47-1 1.6 0 3.29.87 4.5 2.38-3.95 2.17-3.31 7.82.54 9.27Z" />
    </svg>
  );
}

export default function AppStoreButtons({
  appStoreLabel,
  googlePlayLabel,
  variant = "dark",
  className = "",
}: {
  appStoreLabel: string;
  googlePlayLabel: string;
  variant?: "dark" | "light";
  className?: string;
}) {
  const buttonStyles =
    variant === "dark"
      ? "bg-navy text-white hover:opacity-90"
      : "border border-white/20 bg-white/10 text-white backdrop-blur hover:bg-white/15";

  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      <a
        href="#"
        className={`inline-flex items-center gap-3 rounded-2xl px-5 py-3 shadow-card transition hover:-translate-y-0.5 ${buttonStyles}`}
      >
        <AppleGlyph />
        <span className="text-sm font-semibold leading-tight">{appStoreLabel}</span>
      </a>
      <a
        href="#"
        className={`inline-flex items-center gap-3 rounded-2xl px-5 py-3 shadow-card transition hover:-translate-y-0.5 ${buttonStyles}`}
      >
        <PlayCircle className="h-6 w-6 shrink-0" strokeWidth={1.75} />
        <span className="text-sm font-semibold leading-tight">{googlePlayLabel}</span>
      </a>
    </div>
  );
}
