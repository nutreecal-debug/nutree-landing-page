import type { Lang } from "@/lib/types";
import type { LegalPageContent } from "./types";

export const privacy: Record<Lang, LegalPageContent> = {
  en: {
    title: "Privacy Policy",
    lastUpdated: "Last updated: July 2026",
    sections: [
      {
        heading: "Introduction",
        paragraphs: [
          "This Privacy Policy explains how Nutree collects, uses, and protects your information when you use our app. We built Nutree to help you track your nutrition simply and privately, and we take that responsibility seriously.",
        ],
      },
      {
        heading: "Information We Collect",
        paragraphs: ["We collect the following types of information to provide and improve Nutree:"],
        list: [
          "Account information, such as your name and email address.",
          "Health and tracking data you choose to log, including meals, calories, macros, water intake, steps, and weight.",
          "Photos of food you upload for AI recognition, and voice or text descriptions of meals.",
          "Device and usage information, such as app version, general diagnostics, and crash reports.",
        ],
      },
      {
        heading: "How We Use Your Information",
        paragraphs: [
          "We use your information to operate Nutree's core features: estimating calories and macros, generating your daily and weekly progress views, syncing your data across sessions, providing customer support, and improving the accuracy of our AI food-recognition models over time.",
        ],
      },
      {
        heading: "AI Food Recognition & Photo Data",
        paragraphs: [
          "When you take or upload a photo of a meal, it is processed by AI services to identify foods and estimate nutritional values. Photos may be temporarily processed by third-party AI providers solely to generate these estimates. We do not use your personal meal photos for advertising purposes.",
        ],
      },
      {
        heading: "Data Storage and Security",
        paragraphs: [
          "Your data is stored using industry-standard security practices, including encryption in transit. While no system can be guaranteed 100% secure, we work to protect your information from unauthorized access, alteration, or loss.",
        ],
      },
      {
        heading: "Sharing of Information",
        paragraphs: [
          "We do not sell your personal data. We may share limited information with trusted service providers who help us operate Nutree, such as cloud hosting and AI-processing partners, and only to the extent necessary for them to perform their services.",
        ],
      },
      {
        heading: "Your Rights and Choices",
        paragraphs: [
          "You can access, update, or delete most of your information directly from within the App. You may also request a copy of your data or ask us to delete your account entirely by contacting us using the information below.",
        ],
      },
      {
        heading: "Children's Privacy",
        paragraphs: [
          "Nutree is not intended for children under 16, and we do not knowingly collect personal information from children under that age.",
        ],
      },
      {
        heading: "Data Retention",
        paragraphs: [
          "We retain your information for as long as your account remains active, or as needed to provide you the App's features. If you delete your account, we remove your personal data within a reasonable period, except where retention is required by law.",
        ],
      },
      {
        heading: "Changes to This Policy",
        paragraphs: [
          "We may update this Privacy Policy from time to time. Material changes will be communicated through the App. Your continued use of Nutree after changes take effect constitutes acceptance of the updated policy.",
        ],
      },
      {
        heading: "Contact Us",
        paragraphs: [
          "If you have questions about this Privacy Policy or how your data is handled, please reach out using the contact information below.",
        ],
      },
    ],
  },
  ar: {
    title: "سياسة الخصوصية",
    lastUpdated: "آخر تحديث: يوليو 2026",
    sections: [
      {
        heading: "مقدمة",
        paragraphs: [
          "توضّح سياسة الخصوصية هذه كيفية جمع نيوتري لمعلوماتك واستخدامها وحمايتها عند استخدامك للتطبيق. صممنا نيوتري لمساعدتك على تتبع تغذيتك بطريقة بسيطة وخاصة، ونأخذ هذه المسؤولية على محمل الجد.",
        ],
      },
      {
        heading: "المعلومات التي نجمعها",
        paragraphs: ["نجمع الأنواع التالية من المعلومات لتقديم نيوتري وتحسينه:"],
        list: [
          "معلومات الحساب، مثل اسمك وبريدك الإلكتروني.",
          "بيانات الصحة والتتبع التي تختار تسجيلها، مثل الوجبات والسعرات والماكروز وكمية الماء والخطوات والوزن.",
          "صور الطعام التي ترفعها للتعرّف عليها بالذكاء الاصطناعي، والأوصاف الصوتية أو النصية للوجبات.",
          "معلومات الجهاز والاستخدام، مثل إصدار التطبيق، والتشخيصات العامة، وتقارير الأعطال.",
        ],
      },
      {
        heading: "كيف نستخدم معلوماتك",
        paragraphs: [
          "نستخدم معلوماتك لتشغيل الميزات الأساسية في نيوتري: تقدير السعرات والماكروز، وعرض تقدمك اليومي والأسبوعي، ومزامنة بياناتك بين الجلسات، وتقديم الدعم الفني، وتحسين دقة نماذج التعرّف على الطعام بالذكاء الاصطناعي بمرور الوقت.",
        ],
      },
      {
        heading: "التعرّف على الطعام بالذكاء الاصطناعي وبيانات الصور",
        paragraphs: [
          "عندما تلتقط أو ترفع صورة لوجبة، تتم معالجتها عبر خدمات الذكاء الاصطناعي للتعرّف على الأطعمة وتقدير قيمها الغذائية. قد تتم معالجة الصور مؤقتًا عبر مزوّدي ذكاء اصطناعي خارجيين لغرض توليد هذه التقديرات فقط. نحن لا نستخدم صور وجباتك الشخصية لأغراض إعلانية.",
        ],
      },
      {
        heading: "تخزين البيانات وأمانها",
        paragraphs: [
          "يتم تخزين بياناتك باستخدام ممارسات أمان معيارية في الصناعة، بما في ذلك التشفير أثناء النقل. ورغم أنه لا يمكن ضمان أمان أي نظام بنسبة 100%، فإننا نعمل على حماية معلوماتك من الوصول أو التعديل أو الفقدان غير المصرّح به.",
        ],
      },
      {
        heading: "مشاركة المعلومات",
        paragraphs: [
          "نحن لا نبيع بياناتك الشخصية. قد نشارك معلومات محدودة مع مزودي خدمات موثوقين يساعدوننا في تشغيل نيوتري، مثل شركاء الاستضافة السحابية ومعالجة الذكاء الاصطناعي، وفقط بالقدر اللازم لأداء خدماتهم.",
        ],
      },
      {
        heading: "حقوقك وخياراتك",
        paragraphs: [
          "يمكنك الوصول إلى معظم معلوماتك أو تحديثها أو حذفها مباشرة من داخل التطبيق. يمكنك أيضًا طلب نسخة من بياناتك أو طلب حذف حسابك بالكامل عبر التواصل معنا باستخدام المعلومات أدناه.",
        ],
      },
      {
        heading: "خصوصية الأطفال",
        paragraphs: [
          "نيوتري غير مخصص للأطفال دون سن 16 عامًا، ولا نقوم عن قصد بجمع معلومات شخصية من أطفال دون هذا العمر.",
        ],
      },
      {
        heading: "الاحتفاظ بالبيانات",
        paragraphs: [
          "نحتفظ بمعلوماتك طالما ظل حسابك نشطًا، أو حسب الحاجة لتقديم ميزات التطبيق. إذا حذفت حسابك، نقوم بإزالة بياناتك الشخصية خلال فترة معقولة، إلا إذا كان الاحتفاظ بها مطلوبًا بموجب القانون.",
        ],
      },
      {
        heading: "التغييرات على هذه السياسة",
        paragraphs: [
          "قد نقوم بتحديث سياسة الخصوصية هذه من وقت لآخر. سيتم إبلاغك بأي تغييرات جوهرية عبر التطبيق. استمرارك في استخدام نيوتري بعد سريان التغييرات يعني موافقتك على السياسة المحدَّثة.",
        ],
      },
      {
        heading: "تواصل معنا",
        paragraphs: [
          "إذا كانت لديك أي أسئلة حول سياسة الخصوصية هذه أو كيفية التعامل مع بياناتك، يُرجى التواصل معنا عبر معلومات الاتصال أدناه.",
        ],
      },
    ],
  },
};
