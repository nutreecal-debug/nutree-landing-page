"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { APP_STORE_URL, GOOGLE_PLAY_URL } from "@/lib/storeLinks";
import type { Dictionary } from "@/lib/types";

const FALLBACK_DOWNLOAD_HREF = "#download-buttons";

function detectStoreHref(): string {
  if (typeof navigator === "undefined") return FALLBACK_DOWNLOAD_HREF;
  const ua = navigator.userAgent || "";
  const isIOS = /iPhone|iPad|iPod/i.test(ua) || (ua.includes("Macintosh") && navigator.maxTouchPoints > 1);
  if (isIOS) return APP_STORE_URL;
  if (/Android/i.test(ua)) return GOOGLE_PLAY_URL;
  return FALLBACK_DOWNLOAD_HREF;
}

export default function MobileMenu({ dict }: { dict: Dictionary }) {
  const [open, setOpen] = useState(false);
  const [downloadHref, setDownloadHref] = useState(FALLBACK_DOWNLOAD_HREF);
  const { header } = dict;

  useEffect(() => {
    setDownloadHref(detectStoreHref());
  }, []);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label="Menu"
        aria-expanded={open}
        className="grid h-10 w-10 place-items-center rounded-xl text-ink"
      >
        {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {open && (
        <div className="absolute inset-x-0 top-full z-40 border-t border-black/5 bg-paper px-5 pb-6 pt-4 shadow-card">
          <nav className="flex flex-col gap-1">
            <a onClick={() => setOpen(false)} href="#features" className="rounded-lg px-3 py-3 text-start font-medium text-ink hover:bg-paper-soft">
              {header.features}
            </a>
            <a onClick={() => setOpen(false)} href="#how-it-works" className="rounded-lg px-3 py-3 text-start font-medium text-ink hover:bg-paper-soft">
              {header.howItWorks}
            </a>
            <a onClick={() => setOpen(false)} href="#pricing" className="rounded-lg px-3 py-3 text-start font-medium text-ink hover:bg-paper-soft">
              {header.pricing}
            </a>
            <a
              href={header.switchHref}
              className="rounded-lg px-3 py-3 text-start font-medium text-muted hover:bg-paper-soft"
            >
              {header.switchLabel}
            </a>
            <a
              href={downloadHref}
              onClick={() => setOpen(false)}
              className="mt-2 rounded-xl bg-brand px-4 py-3 text-center font-semibold text-white transition hover:bg-brand-dark"
            >
              {header.downloadShort}
            </a>
          </nav>
        </div>
      )}
    </div>
  );
}
