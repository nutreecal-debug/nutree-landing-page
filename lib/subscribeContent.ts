export type SubscribeLang = "en" | "ar";

// Example activation code shown in the illustrations — non-linguistic, same in both languages.
export const SAMPLE_CODE = "5BNUE";

// TODO: replace with the real Stream invoice/payment URL when it's ready.
// Both "Skip to payment" and the final "Continue to payment" button lead to
// the in-flow PaymentScreen, whose own submit button redirects here.
export const STREAM_PAYMENT_URL = "#stream-checkout";

export const SUPPORT_EMAIL = "Nutree.cal@gmail.com";

export interface ActivateStepContent {
  smallLabel: string;
  stepLabel: string;
  title: string;
  subtitle: string;
  button: string;
}

export interface SubscribeContent {
  lang: SubscribeLang;
  brand: string;
  homeHref: string;
  skipToPayment: string;
  back: string;
  welcome: {
    title: string;
    subtitle: string;
    button: string;
  };
  buy: {
    stepLabel: string;
    title: string;
    subtitle: string;
    pill: string;
    button: string;
    price: string;
  };
  emailCode: {
    stepLabel: string;
    title: string;
    subtitle: string;
    pill: string;
    button: string;
  };
  activate: [ActivateStepContent, ActivateStepContent, ActivateStepContent];
  payment: {
    title: string;
    subtitle: string;
    planLabel: string;
    price: string;
    pricePeriod: string;
    monthlyEquivalent: string;
    emailLabel: string;
    emailPlaceholder: string;
    helperText: string;
    invalidEmail: string;
    button: string;
    loadingState: string;
    secureText: string;
    howItWorksToggle: string;
    howItWorksSteps: [string, string, string];
    supportIntro: string;
  };
}

const en: SubscribeContent = {
  lang: "en",
  brand: "Nutree",
  homeHref: "/en",
  skipToPayment: "Skip to payment",
  back: "Back",
  welcome: {
    title: "Welcome to Nutree Pro 👋",
    subtitle: "Here's how you get your subscription — 3 simple steps.",
    button: "Let's start",
  },
  buy: {
    stepLabel: "Step 1 / 3",
    title: "Buy your subscription here",
    subtitle:
      "Pay once through our secure payment partner. One yearly payment — no auto-renewal, no surprise charges.",
    pill: "mada • Apple Pay • cards",
    button: "Next",
    price: "129 SAR",
  },
  emailCode: {
    stepLabel: "Step 2 / 3",
    title: "Get your code by email",
    subtitle: "Right after payment, we instantly email you a one-time activation code.",
    pill: "Check your inbox — and the spam folder",
    button: "Next",
  },
  activate: [
    {
      smallLabel: "Activate your code in the Nutree app",
      stepLabel: "Step 3 • 1/3",
      title: "Open Settings and tap “Unlock premium”",
      subtitle: "You'll find the upgrade button at the top of the Settings screen.",
      button: "Next",
    },
    {
      smallLabel: "Activate your code in the Nutree app",
      stepLabel: "Step 3 • 2/3",
      title: "Tap “Have a discount code?”",
      subtitle: "It's near the bottom of the subscription page.",
      button: "Next",
    },
    {
      smallLabel: "Activate your code in the Nutree app",
      stepLabel: "Step 3 • 3/3",
      title: "Paste your code and tap “Activate”",
      subtitle: "Your Pro subscription unlocks instantly.",
      button: "Continue to payment",
    },
  ],
  payment: {
    title: "Subscribe to Nutree Pro",
    subtitle: "One payment unlocks a full year of Nutree Pro.",
    planLabel: "Nutree Pro",
    price: "129 SAR",
    pricePeriod: "/ year",
    monthlyEquivalent: "≈ 10.75 SAR / month",
    emailLabel: "Your email",
    emailPlaceholder: "you@example.com",
    helperText: "We'll send your activation code to this email.",
    invalidEmail: "Enter a valid email address.",
    button: "Continue to payment",
    loadingState: "Starting checkout…",
    secureText: "Secure payment powered by Stream",
    howItWorksToggle: "How does it work?",
    howItWorksSteps: [
      "Pay once for a full year of Nutree Pro.",
      "Get your activation code by email within minutes.",
      "Enter the code in the app's Settings to unlock Nutree Pro.",
    ],
    supportIntro: "Have an issue? Reach us at:",
  },
};

const ar: SubscribeContent = {
  lang: "ar",
  brand: "نيوتري",
  homeHref: "/ar",
  skipToPayment: "تخطي إلى الدفع",
  back: "رجوع",
  welcome: {
    title: "مرحباً بك في نيوتري برو 👋",
    subtitle: "إليك طريقة الحصول على اشتراكك في 3 خطوات بسيطة.",
    button: "ابدأ",
  },
  buy: {
    stepLabel: "الخطوة 1 / 3",
    title: "اشترك من هنا",
    subtitle: "ادفع مرة واحدة عبر شريك الدفع الآمن. دفعة سنوية واحدة بدون تجديد تلقائي وبدون رسوم مفاجئة.",
    pill: "مدى • Apple Pay • البطاقات",
    button: "التالي",
    price: "129 ريال سعودي",
  },
  emailCode: {
    stepLabel: "الخطوة 2 / 3",
    title: "استلم كودك عبر البريد الإلكتروني",
    subtitle: "بعد الدفع مباشرة، سنرسل لك كود التفعيل لمرة واحدة عبر البريد الإلكتروني.",
    pill: "تحقق من البريد الوارد والرسائل غير المرغوب فيها",
    button: "التالي",
  },
  activate: [
    {
      smallLabel: "فعّل كودك داخل تطبيق نيوتري",
      stepLabel: "الخطوة 3 • 1/3",
      title: "افتح الإعدادات واضغط على ترقية",
      subtitle: "ستجد زر الترقية أعلى شاشة الإعدادات.",
      button: "التالي",
    },
    {
      smallLabel: "فعّل كودك داخل تطبيق نيوتري",
      stepLabel: "الخطوة 3 • 2/3",
      title: "اضغط على لديك كود خصم؟",
      subtitle: "ستجدها أسفل صفحة الاشتراك.",
      button: "التالي",
    },
    {
      smallLabel: "فعّل كودك داخل تطبيق نيوتري",
      stepLabel: "الخطوة 3 • 3/3",
      title: "الصق كودك ثم اضغط على تفعيل",
      subtitle: "سيتم تفعيل اشتراك برو فوراً.",
      button: "المتابعة إلى الدفع",
    },
  ],
  payment: {
    title: "اشترك في نيوتري برو",
    subtitle: "دفعة واحدة تفتح لك اشتراك نيوتري برو لمدة سنة كاملة.",
    planLabel: "نيوتري برو",
    price: "129 ريال سعودي",
    pricePeriod: "/ سنة",
    monthlyEquivalent: "≈ 10.75 ريال / الشهر",
    emailLabel: "بريدك الإلكتروني",
    emailPlaceholder: "you@example.com",
    helperText: "سنرسل كود التفعيل إلى هذا البريد.",
    invalidEmail: "أدخل بريدًا إلكترونيًا صالحًا.",
    button: "المتابعة إلى الدفع",
    loadingState: "جاري بدء الدفع...",
    secureText: "دفع آمن عبر Stream",
    howItWorksToggle: "كيف يعمل؟",
    howItWorksSteps: [
      "ادفع مرة واحدة للحصول على نيوتري برو لمدة سنة كاملة.",
      "استلم كود التفعيل عبر البريد الإلكتروني خلال دقائق.",
      "أدخل الكود في إعدادات التطبيق لتفعيل نيوتري برو.",
    ],
    supportIntro: "هل لديك مشكلة؟ تواصل معنا على:",
  },
};

export const subscribeContent: Record<SubscribeLang, SubscribeContent> = { en, ar };

export function getSubscribeContent(lang: string): SubscribeContent {
  return lang === "ar" ? ar : en;
}
