import Reveal from "./Reveal";
import AppStoreButtons from "./AppStoreButtons";
import type { Dictionary } from "@/lib/types";

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
            <h2 className="text-balance text-3xl font-bold text-white sm:text-4xl">{download.title}</h2>
            <p className="mx-auto mt-4 max-w-md text-lg text-white/70">{download.subtitle}</p>
            <div className="mt-9 flex justify-center">
              <AppStoreButtons
                appStoreLabel={download.appStore}
                googlePlayLabel={download.googlePlay}
                variant="light"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
