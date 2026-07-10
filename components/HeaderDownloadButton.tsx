"use client";

import { useEffect, useState } from "react";
import { APP_STORE_URL, GOOGLE_PLAY_URL } from "@/lib/storeLinks";

const FALLBACK_HREF = "#download-buttons";

function detectStoreHref(): string {
  if (typeof navigator === "undefined") return FALLBACK_HREF;
  const ua = navigator.userAgent || "";
  const isIOS = /iPhone|iPad|iPod/i.test(ua) || (ua.includes("Macintosh") && navigator.maxTouchPoints > 1);
  if (isIOS) return APP_STORE_URL;
  if (/Android/i.test(ua)) return GOOGLE_PLAY_URL;
  return FALLBACK_HREF;
}

export default function HeaderDownloadButton({ label }: { label: string }) {
  const [href, setHref] = useState(FALLBACK_HREF);

  useEffect(() => {
    setHref(detectStoreHref());
  }, []);

  return (
    <a
      href={href}
      className="inline-flex shrink-0 items-center rounded-lg bg-brand px-3 py-1.5 text-xs font-semibold text-white shadow-card transition hover:bg-brand-dark md:hidden"
    >
      {label}
    </a>
  );
}
