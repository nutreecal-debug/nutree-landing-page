import { getDictionary } from "@/lib/dictionaries";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MacroIcons from "@/components/MacroIcons";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import DownloadSection from "@/components/DownloadSection";
import Footer from "@/components/Footer";

export default async function LandingPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = getDictionary(lang);

  return (
    <div className="bg-paper">
      <Header dict={dict} />
      <main>
        <Hero dict={dict} />
        <MacroIcons dict={dict} />
        <Features dict={dict} />
        <HowItWorks dict={dict} />
        <Pricing dict={dict} />
        <DownloadSection dict={dict} />
      </main>
      <Footer dict={dict} />
    </div>
  );
}
