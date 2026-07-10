import Reveal from "./Reveal";
import { AppleGlyph, PlayGlyph } from "./AppStoreButtons";
import { APP_STORE_URL, GOOGLE_PLAY_URL } from "@/lib/storeLinks";
import type { Dictionary } from "@/lib/types";

const BRAND_WORD: Record<Dictionary["lang"], string> = {
  en: "Nutree",
  ar: "نيوتري",
};

function Headline({ title, brandWord }: { title: string; brandWord: string }) {
  const index = title.indexOf(brandWord);
  if (index === -1) return <>{title}</>;

  return (
    <>
      {title.slice(0, index)}
      <span className="text-brand">{brandWord}</span>
      {title.slice(index + brandWord.length)}
    </>
  );
}

export default function DownloadSection({ dict }: { dict: Dictionary }) {
  const { download } = dict;

  return (
    <section id="download" className="py-20 sm:py-28">
      <div className="container">
        <Reveal>
          <div className="relative isolate overflow-hidden rounded-5xl bg-navy px-8 py-16 text-center sm:px-16 sm:py-20">
            <div
              className="pointer-events-none absolute -top-20 inset-x-0 -z-10 mx-auto h-72 w-72 rounded-full bg-mint/30 blur-3xl"
              aria-hidden="true"
            />

            <h2 className="text-balance text-3xl font-bold text-white sm:text-4xl">
              <Headline title={download.title} brandWord={BRAND_WORD[dict.lang]} />
            </h2>
            <p className="mx-auto mt-4 max-w-md text-lg text-white/60">{download.subtitle}</p>

            <div
              id="download-buttons"
              tabIndex={-1}
              className="mx-auto mt-10 flex w-full max-w-sm scroll-mt-24 flex-col gap-3 outline-none"
            >
              <a
                href={APP_STORE_URL}
                className="inline-flex items-center justify-center gap-2.5 rounded-2xl bg-white px-6 py-4 text-lg font-bold text-ink shadow-card transition hover:-translate-y-0.5"
              >
                <AppleGlyph className="h-6 w-6 shrink-0" />
                {download.appStoreLabel}
              </a>
              <a
                href={GOOGLE_PLAY_URL}
                className="inline-flex items-center justify-center gap-2.5 rounded-2xl border border-white/25 bg-white/5 px-6 py-4 text-lg font-bold text-white shadow-card backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/10"
              >
                <PlayGlyph className="h-6 w-6 shrink-0" />
                {download.googlePlayLabel}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
