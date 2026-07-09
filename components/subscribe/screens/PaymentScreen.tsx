"use client";

import { useState } from "react";
import { Lock, Loader2, ChevronDown } from "lucide-react";
import StepHeader from "../StepHeader";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const SUPPORT_EMAIL = "Nutree.cal@gmail.com";

type Status = "idle" | "loading" | "ready";

export default function PaymentScreen({ onBack }: { onBack: () => void }) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [showHowItWorks, setShowHowItWorks] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!EMAIL_RE.test(email)) {
      setError("Enter a valid email address.");
      return;
    }
    setError(null);
    setStatus("loading");
    window.setTimeout(() => setStatus("ready"), 1200);
  }

  return (
    <div className="flex flex-col items-center px-1 pt-1 text-center">
      <StepHeader label="Payment" onBack={onBack} />

      <h2 className="mt-3 text-xl font-extrabold tracking-tight text-ink sm:text-2xl">
        Complete your subscription
      </h2>
      <p className="mt-2 max-w-xs text-balance text-sm leading-relaxed text-muted">
        One payment unlocks a full year of Nutree Pro.
      </p>

      <div className="mt-6 w-full rounded-2xl bg-paper-soft p-5 text-left ring-1 ring-black/5">
        <p className="text-xs font-bold uppercase tracking-wide text-muted">Nutree Pro</p>
        <div className="mt-1 flex items-end gap-1.5">
          <span className="text-3xl font-extrabold text-ink">299 SAR</span>
          <span className="pb-0.5 text-sm text-muted">/ year</span>
        </div>
        <p className="mt-1 text-xs text-ink/40">≈ 24.92 SAR / month</p>
      </div>

      <form onSubmit={handleSubmit} className="mt-5 w-full text-left">
        <label htmlFor="subscribe-email" className="text-xs font-semibold text-ink/70">
          Email address
        </label>
        <input
          id="subscribe-email"
          type="email"
          inputMode="email"
          autoComplete="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={status !== "idle"}
          className="mt-1.5 w-full rounded-xl border border-black/10 bg-paper px-4 py-3 text-sm text-ink outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20 disabled:opacity-60"
        />
        <p className="mt-1.5 text-xs text-ink/40">
          We&apos;ll send your activation code to this email right after payment.
        </p>
        {error && <p className="mt-1.5 text-xs font-semibold text-red-600">{error}</p>}

        {status !== "ready" ? (
          <button
            type="submit"
            disabled={status === "loading"}
            className="mt-5 flex w-full items-center justify-center gap-2 rounded-2xl bg-navy px-6 py-4 text-base font-semibold text-white shadow-card transition hover:-translate-y-0.5 hover:bg-navy-soft disabled:pointer-events-none disabled:opacity-80"
          >
            {status === "loading" && <Loader2 className="h-4 w-4 animate-spin" />}
            {status === "loading" ? "Starting checkout…" : "Continue to payment"}
          </button>
        ) : (
          <div className="mt-5 animate-fade-slide rounded-2xl border-2 border-dashed border-brand/40 bg-brand/5 p-4 text-sm leading-relaxed text-ink/70">
            <p className="font-semibold text-brand-dark">Checkout ready to connect</p>
            <p className="mt-1">
              In production, this continues to Stream&apos;s secure checkout to complete your 299
              SAR payment. Connect your live Stream checkout URL here to go live.
            </p>
          </div>
        )}
      </form>

      <p className="mt-4 flex items-center gap-1.5 text-xs font-medium text-ink/40">
        <Lock className="h-3.5 w-3.5" />
        Secure payment powered by Stream
      </p>

      <button
        onClick={() => setShowHowItWorks((v) => !v)}
        className="mt-3 flex items-center gap-1 text-sm font-semibold text-brand transition hover:text-brand-dark"
      >
        How does it work?
        <ChevronDown className={`h-3.5 w-3.5 transition-transform ${showHowItWorks ? "rotate-180" : ""}`} />
      </button>

      {showHowItWorks && (
        <ol className="mt-3 w-full animate-fade-slide list-decimal space-y-1.5 rounded-xl bg-paper-soft p-4 text-left text-xs leading-relaxed text-muted marker:font-bold marker:text-brand">
          <li>Pay once for a full year of Nutree Pro.</li>
          <li>Get your activation code by email within minutes.</li>
          <li>Enter the code in the app&apos;s Settings to unlock Nutree Pro.</li>
        </ol>
      )}

      <p className="mt-6 text-xs text-ink/40">
        Need help?{" "}
        <a href={`mailto:${SUPPORT_EMAIL}`} className="font-semibold text-ink/60 underline underline-offset-2">
          {SUPPORT_EMAIL}
        </a>
      </p>
    </div>
  );
}
