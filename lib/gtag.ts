export const GA_MEASUREMENT_ID = "G-X9323QMRJ3";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

type GtagEventParams = Record<string, string | number | boolean | undefined>;

export function pageview(url: string) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", "page_view", {
    page_path: url,
    send_to: GA_MEASUREMENT_ID,
  });
}

export function trackEvent(action: string, params?: GtagEventParams) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", action, params);
}
