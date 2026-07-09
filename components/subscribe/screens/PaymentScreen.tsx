"use client";

import { useState } from "react";
import { Lock, Loader2, ChevronDown } from "lucide-react";
import { STREAM_PAYMENT_URL, SUPPORT_EMAIL, type SubscribeContent } from "@/lib/subscribeContent";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function PaymentScreen({ content }: { content: SubscribeContent }) {
  const { payment } = content;
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [showHowItWorks, setShowHowItWorks] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!EMAIL_RE.test(email)) {
      setError(payment.invalidEmail);
      return;
    }
    setError(null);
    setLoading(true);
    window.setTimeout(() => {
      window.location.href = STREAM_PAYMENT_URL;
    }, 900);
  }

  return (
    <div className="flex flex-col items-center px-1 pt-1 text-center">
      <h2 className="text-xl font-extrabold tracking-tight text-ink sm:text-2xl">{payment.title}</h2>
      <p className="mt-2 max-w-xs text-balance text-sm leading-relaxed text-muted">{payment.subtitle}</p>

      <div className="mt-6 w-full rounded-2xl bg-paper-soft p-5 text-start ring-1 ring-black/5">
        <p className="text-xs font-bold uppercase tracking-wide text-muted">{payment.planLabel}</p>
        <div className="mt-1 flex items-end gap-1.5">
          <span className="text-3xl font-extrabold text-ink">{payment.price}</span>
          <span className="pb-0.5 text-sm text-muted">{payment.pricePeriod}</span>
        </div>
        <p className="mt-1 text-xs text-ink/40">{payment.monthlyEquivalent}</p>
      </div>

      <form onSubmit={handleSubmit} className="mt-5 w-full text-start">
        <label htmlFor="subscribe-email" className="text-xs font-semibold text-ink/70">
          {payment.emailLabel}
        </label>
        <input
          id="subscribe-email"
          type="email"
          inputMode="email"
          autoComplete="email"
          placeholder={payment.emailPlaceholder}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={loading}
          className="mt-1.5 w-full rounded-xl border border-black/10 bg-paper px-4 py-3 text-sm text-ink outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20 disabled:opacity-60"
        />
        <p className="mt-1.5 text-xs text-ink/40">{payment.helperText}</p>
        {error && <p className="mt-1.5 text-xs font-semibold text-red-600">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="mt-5 flex w-full items-center justify-center gap-2 rounded-2xl bg-navy px-6 py-4 text-base font-semibold text-white shadow-card transition hover:-translate-y-0.5 hover:bg-navy-soft disabled:pointer-events-none disabled:opacity-80"
        >
          {loading && <Loader2 className="h-4 w-4 animate-spin" />}
          {loading ? payment.loadingState : payment.button}
        </button>
      </form>

      <p className="mt-4 flex items-center gap-1.5 text-xs font-medium text-ink/40">
        <Lock className="h-3.5 w-3.5" />
        {payment.secureText}
      </p>

      <button
        onClick={() => setShowHowItWorks((v) => !v)}
        className="mt-3 flex items-center gap-1 text-sm font-semibold text-brand transition hover:text-brand-dark"
      >
        {payment.howItWorksToggle}
        <ChevronDown className={`h-3.5 w-3.5 transition-transform ${showHowItWorks ? "rotate-180" : ""}`} />
      </button>

      {showHowItWorks && (
        <ol className="mt-3 w-full animate-fade-slide list-decimal space-y-1.5 rounded-xl bg-paper-soft p-4 text-start text-xs leading-relaxed text-muted marker:font-bold marker:text-brand rtl:pe-5 rtl:ps-0">
          {payment.howItWorksSteps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      )}

      <p className="mt-6 text-xs leading-relaxed text-ink/40">
        {payment.supportIntro}
        <br />
        <a href={`mailto:${SUPPORT_EMAIL}`} className="font-semibold text-ink/60 underline underline-offset-2">
          {SUPPORT_EMAIL}
        </a>
      </p>
    </div>
  );
}
