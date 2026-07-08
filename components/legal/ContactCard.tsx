import {
  contactContent,
  SUPPORT_EMAIL,
  INSTAGRAM_URL,
  INSTAGRAM_HANDLE,
  TIKTOK_URL,
  TIKTOK_HANDLE,
  APP_DEVELOPER,
} from "@/lib/legal/contact";
import type { Lang } from "@/lib/types";

export default function ContactCard({ lang }: { lang: Lang }) {
  const t = contactContent[lang];

  return (
    <div className="rounded-4xl border border-black/5 bg-paper p-7 shadow-card sm:p-9">
      <h2 className="text-xl font-bold text-ink sm:text-2xl">{t.heading}</h2>
      <p className="mt-2 text-muted">{t.intro}</p>

      <div className="mt-7 grid gap-6 sm:grid-cols-2">
        <div>
          <div className="text-sm font-semibold text-muted">{t.supportLabel}</div>
          <div className="mt-1 space-y-1 text-ink">
            <p>
              <span className="text-muted">{t.emailLabel} </span>
              <a
                href={`mailto:${SUPPORT_EMAIL}`}
                className="font-semibold text-brand-dark underline decoration-brand-dark/30 underline-offset-4 transition hover:text-brand"
              >
                {SUPPORT_EMAIL}
              </a>
            </p>
            <p>
              <span className="text-muted">{t.instagramLabel} </span>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-brand-dark underline decoration-brand-dark/30 underline-offset-4 transition hover:text-brand"
              >
                {INSTAGRAM_HANDLE}
              </a>
            </p>
            <p>
              <span className="text-muted">{t.tiktokLabel} </span>
              <a
                href={TIKTOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-brand-dark underline decoration-brand-dark/30 underline-offset-4 transition hover:text-brand"
              >
                {TIKTOK_HANDLE}
              </a>
            </p>
          </div>
        </div>

        <div>
          <div className="text-sm font-semibold text-muted">{t.developerLabel}</div>
          <p className="mt-1 font-semibold text-ink">{APP_DEVELOPER}</p>
        </div>
      </div>
    </div>
  );
}
