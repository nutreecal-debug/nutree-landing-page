"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import ProgressDots from "./ProgressDots";
import WelcomeScreen from "./screens/WelcomeScreen";
import BuyScreen from "./screens/BuyScreen";
import EmailCodeScreen from "./screens/EmailCodeScreen";
import ActivateScreen from "./screens/ActivateScreen";
import PaymentScreen from "./screens/PaymentScreen";

const TOTAL_STEPS = 6;

export default function SubscribeFlow() {
  const [step, setStep] = useState(0);
  const [view, setView] = useState<"onboarding" | "payment">("onboarding");

  const goToPayment = () => setView("payment");
  const backToOnboarding = () => setView("onboarding");

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
        <div className="w-full max-w-md rounded-4xl bg-paper p-7 shadow-soft sm:rounded-5xl sm:p-10">
          {view === "onboarding" && (
            <div className="mb-6">
              <ProgressDots total={TOTAL_STEPS} current={step} />
            </div>
          )}

          <div key={view === "payment" ? "payment" : step} className="animate-fade-slide">
            {view === "payment" && <PaymentScreen onBack={backToOnboarding} />}

            {view === "onboarding" && step === 0 && <WelcomeScreen onStart={() => setStep(1)} />}
            {view === "onboarding" && step === 1 && (
              <BuyScreen onNext={() => setStep(2)} onBack={() => setStep(0)} />
            )}
            {view === "onboarding" && step === 2 && (
              <EmailCodeScreen onNext={() => setStep(3)} onBack={() => setStep(1)} />
            )}
            {view === "onboarding" && step === 3 && (
              <ActivateScreen sub={1} onNext={() => setStep(4)} onBack={() => setStep(2)} />
            )}
            {view === "onboarding" && step === 4 && (
              <ActivateScreen sub={2} onNext={() => setStep(5)} onBack={() => setStep(3)} />
            )}
            {view === "onboarding" && step === 5 && (
              <ActivateScreen sub={3} onNext={goToPayment} onBack={() => setStep(4)} />
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
