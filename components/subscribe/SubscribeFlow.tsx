"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import WelcomeScreen from "./screens/WelcomeScreen";
import BuyScreen from "./screens/BuyScreen";
import EmailCodeScreen from "./screens/EmailCodeScreen";
import ActivateScreen from "./screens/ActivateScreen";
import PaymentScreen from "./screens/PaymentScreen";
import { getSubscribeContent, type SubscribeLang } from "@/lib/subscribeContent";

const LAST_STEP = 5;

export default function SubscribeFlow({ lang }: { lang: SubscribeLang }) {
  const [step, setStep] = useState(() => {
    if (typeof window !== "undefined") {
      const s = Number(new URLSearchParams(window.location.search).get("step"));
      if (!Number.isNaN(s) && s >= 0 && s <= LAST_STEP) return s;
    }
    return 0;
  });
  const [view, setView] = useState<"onboarding" | "payment">(() => {
    if (typeof window !== "undefined") {
      return new URLSearchParams(window.location.search).get("view") === "payment"
        ? "payment"
        : "onboarding";
    }
    return "onboarding";
  });
  const content = getSubscribeContent(lang);

  const goToPayment = () => setView("payment");
  const backToOnboarding = () => setView("onboarding");

  const onBack =
    view === "payment" ? backToOnboarding : step > 0 ? () => setStep((s) => s - 1) : undefined;
  const showSkip = view === "onboarding" && step !== LAST_STEP;

  return (
    <div className="flex min-h-screen flex-col bg-paper-soft">
      <header className="flex items-center justify-center px-5 py-5 sm:px-8">
        <Link href={content.homeHref} className="inline-flex items-center gap-2">
          <Image src="/logo.PNG" alt={content.brand} width={28} height={28} className="h-7 w-7 rounded-lg" />
          <span className="text-sm font-extrabold tracking-tight text-ink">{content.brand}</span>
        </Link>
      </header>

      <main className="flex flex-1 items-center justify-center px-5 pb-10 sm:px-8">
        <div className="relative w-full max-w-md rounded-4xl bg-paper p-7 shadow-soft sm:rounded-5xl sm:p-10">
          <div className="mb-2 flex h-7 items-center justify-between">
            {onBack ? (
              <button
                onClick={onBack}
                aria-label={content.back}
                className="grid h-7 w-7 place-items-center rounded-full text-ink/40 transition hover:bg-ink/5 hover:text-ink"
              >
                <ChevronLeft className="h-4 w-4 rtl:rotate-180" />
              </button>
            ) : (
              <span />
            )}

            {showSkip && (
              <button
                onClick={goToPayment}
                className="flex items-center gap-0.5 text-sm font-semibold text-ink/50 transition hover:text-ink"
              >
                {content.skipToPayment}
                <ChevronRight className="h-4 w-4 rtl:rotate-180" />
              </button>
            )}
          </div>

          <div key={view === "payment" ? "payment" : step} className="animate-fade-slide">
            {view === "payment" && <PaymentScreen content={content} />}

            {view === "onboarding" && step === 0 && (
              <WelcomeScreen content={content} onStart={() => setStep(1)} />
            )}
            {view === "onboarding" && step === 1 && (
              <BuyScreen content={content} onNext={() => setStep(2)} />
            )}
            {view === "onboarding" && step === 2 && (
              <EmailCodeScreen content={content} onNext={() => setStep(3)} />
            )}
            {view === "onboarding" && step === 3 && (
              <ActivateScreen content={content} sub={1} onNext={() => setStep(4)} />
            )}
            {view === "onboarding" && step === 4 && (
              <ActivateScreen content={content} sub={2} onNext={() => setStep(5)} />
            )}
            {view === "onboarding" && step === 5 && (
              <ActivateScreen content={content} sub={3} onNext={goToPayment} />
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
