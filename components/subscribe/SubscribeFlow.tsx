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

export default function SubscribeFlow() {
  const [step, setStep] = useState(0);
  const [view, setView] = useState<"onboarding" | "payment">("onboarding");

  const goToPayment = () => setView("payment");
  const backToOnboarding = () => setView("onboarding");

  const onBack =
    view === "payment"
      ? backToOnboarding
      : step > 0
        ? () => setStep((s) => s - 1)
        : undefined;

  return (
    <div className="flex min-h-screen flex-col bg-paper-soft">
      <header className="flex items-center justify-between px-5 py-5 sm:px-8">
        <Link href="/en" className="inline-flex items-center gap-2">
          <Image src="/logo.PNG" alt="Nutree" width={28} height={28} className="h-7 w-7 rounded-lg" />
          <span className="text-sm font-extrabold tracking-tight text-ink">Nutree</span>
        </Link>

        {view === "onboarding" && (
          <button
            onClick={goToPayment}
            className="flex items-center gap-0.5 text-sm font-semibold text-ink/50 transition hover:text-ink"
          >
            Skip to payment
            <ChevronRight className="h-4 w-4" />
          </button>
        )}
      </header>

      <main className="flex flex-1 items-center justify-center px-5 pb-10 sm:px-8">
        <div className="relative w-full max-w-md rounded-4xl bg-paper p-7 shadow-soft sm:rounded-5xl sm:p-10">
          <div className="mb-2 flex h-7 items-center">
            {onBack && (
              <button
                onClick={onBack}
                aria-label="Back"
                className="grid h-7 w-7 place-items-center rounded-full text-ink/40 transition hover:bg-ink/5 hover:text-ink"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
            )}
          </div>

          <div key={view === "payment" ? "payment" : step} className="animate-fade-slide">
            {view === "payment" && <PaymentScreen />}

            {view === "onboarding" && step === 0 && <WelcomeScreen onStart={() => setStep(1)} />}
            {view === "onboarding" && step === 1 && <BuyScreen onNext={() => setStep(2)} />}
            {view === "onboarding" && step === 2 && <EmailCodeScreen onNext={() => setStep(3)} />}
            {view === "onboarding" && step === 3 && (
              <ActivateScreen sub={1} onNext={() => setStep(4)} />
            )}
            {view === "onboarding" && step === 4 && (
              <ActivateScreen sub={2} onNext={() => setStep(5)} />
            )}
            {view === "onboarding" && step === 5 && (
              <ActivateScreen sub={3} onNext={goToPayment} />
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
