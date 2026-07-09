import type { Dictionary } from "./types";

export const en: Dictionary = {
  lang: "en",
  meta: {
    title: "Nutree — Track Calories with AI",
    description:
      "Snap a photo, describe your meal, or log it manually. Nutree helps you track calories, macros, water, steps, and weight in one simple app.",
  },
  header: {
    features: "Features",
    howItWorks: "How it Works",
    pricing: "Pricing",
    downloadApp: "Download App",
    switchLabel: "العربية",
    switchHref: "/ar",
  },
  hero: {
    headline: [{ text: "Snap your meal and count your calories in seconds" }],
    downloadLabel: "Download the app",
  },
  macros: {
    title: "Track every macro that matters",
    items: [
      { emoji: "🔥", label: "Calories" },
      { emoji: "🥩", label: "Protein" },
      { emoji: "🌽", label: "Carbs" },
      { emoji: "🥑", label: "Fat" },
    ],
  },
  features: {
    title: "Everything you need in one app",
    subtitle:
      "Nutree brings every part of your health journey into a single, simple experience.",
    items: [
      { icon: "camera", title: "AI food photo analysis" },
      { icon: "mic", title: "Voice and text meal logging" },
      { icon: "flame", title: "Daily calories and macros" },
      { icon: "droplets", title: "Water and steps tracking" },
      { icon: "scale", title: "Weight progress" },
      { icon: "bookmark", title: "Saved meals and history" },
    ],
  },
  howItWorks: {
    title: "How it works",
    subtitle: "Getting started with Nutree takes less than a minute.",
    steps: [
      { number: "1", title: "Complete setup" },
      { number: "2", title: "Log your meals" },
      { number: "3", title: "Track your progress" },
    ],
  },
  pricing: {
    title: "Simple, honest pricing",
    name: "Nutree Pro",
    price: "129 SAR",
    period: "/ year",
    features: [
      "AI food photo analysis",
      "Voice, text, and manual logging",
      "Progress and macro tracking",
      "Saved meals",
      "Smart insights",
    ],
    cta: "Get Started",
    note: "Cancel anytime.",
  },
  download: {
    title: "Snap it. Track it. Reach your goals.",
    subtitle: "Free to download on iPhone and Android.",
  },
  footer: {
    tagline: "AI calorie tracking, made simple.",
    terms: "Terms",
    privacy: "Privacy",
    support: "Support",
    sources: "Health Information & Sources",
    copyright: "© 2026 Nutree. All rights reserved.",
  },
};

export const ar: Dictionary = {
  lang: "ar",
  meta: {
    title: "نيوتري — تتبع السعرات بالذكاء الاصطناعي",
    description:
      "صور وجبتك، اوصفها، أو سجلها يدويًا. نيوتري يساعدك تتابع السعرات، الماكروز، الماء، الخطوات، والوزن من تطبيق واحد.",
  },
  header: {
    features: "الميزات",
    howItWorks: "كيف يعمل",
    pricing: "الأسعار",
    downloadApp: "حمّل التطبيق",
    switchLabel: "English",
    switchHref: "/en",
  },
  hero: {
    headline: [{ text: "صوّر وجبتك واحسب سعراتك في ثواني" }],
    downloadLabel: "حمّل التطبيق",
  },
  macros: {
    title: "تابع كل ماكرو يهمك",
    items: [
      { emoji: "🔥", label: "السعرات" },
      { emoji: "🥩", label: "البروتين" },
      { emoji: "🌽", label: "الكارب" },
      { emoji: "🥑", label: "الدهون" },
    ],
  },
  features: {
    title: "كل ما تحتاجه في تطبيق واحد",
    subtitle: "نيوتري يجمع كل جوانب رحلتك الصحية في تجربة واحدة بسيطة.",
    items: [
      { icon: "camera", title: "تحليل الوجبات بالذكاء الاصطناعي" },
      { icon: "mic", title: "تسجيل بالصوت أو النص" },
      { icon: "flame", title: "متابعة السعرات والماكروز" },
      { icon: "droplets", title: "تتبع الماء والخطوات" },
      { icon: "scale", title: "متابعة الوزن" },
      { icon: "bookmark", title: "حفظ الوجبات والسجل" },
    ],
  },
  howItWorks: {
    title: "كيف يعمل",
    subtitle: "تبدأ رحلتك مع نيوتري في أقل من دقيقة.",
    steps: [
      { number: "١", title: "أكمل الإعداد" },
      { number: "٢", title: "سجل وجباتك" },
      { number: "٣", title: "تابع تقدمك" },
    ],
  },
  pricing: {
    title: "أسعار بسيطة وواضحة",
    name: "نيوتري برو",
    price: "129 ريال",
    period: "سنويًا",
    features: [
      "تحليل الوجبات بالذكاء الاصطناعي",
      "تسجيل بالصوت والنص واليدوي",
      "متابعة التقدم والماكروز",
      "حفظ الوجبات",
      "رؤى ذكية",
    ],
    cta: "ابدأ الآن",
    note: "ألغِ الاشتراك في أي وقت.",
  },
  download: {
    title: "صوّرها. تابعها. حقق هدفك.",
    subtitle: "متوفر مجانًا على آيفون وأندرويد.",
  },
  footer: {
    tagline: "تتبع السعرات بالذكاء الاصطناعي، ببساطة.",
    terms: "الشروط والأحكام",
    privacy: "سياسة الخصوصية",
    support: "الدعم",
    sources: "المعلومات والمصادر الصحية",
    copyright: "© 2026 نيوتري. جميع الحقوق محفوظة.",
  },
};

export const dictionaries = { en, ar };

export function getDictionary(lang: string): Dictionary {
  return lang === "ar" ? ar : en;
}
