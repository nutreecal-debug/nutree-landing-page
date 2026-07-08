import type { Lang } from "@/lib/types";
import type { SupportContent } from "./types";

export const support: Record<Lang, SupportContent> = {
  en: {
    title: "How can we help you?",
    subtitle: "Answers to common questions about tracking your meals, calories, and progress with Nutree.",
    categories: [
      {
        icon: "📸",
        title: "AI Food Recognition & Photo Logging",
        items: [
          {
            q: "How does Nutree recognize food from a photo?",
            a: "Nutree uses an AI image-recognition model to identify the food in your photo and estimate its calories and macros. For the best results, take a clear, well-lit photo with the food fully visible.",
          },
          {
            q: "What if Nutree gets my meal wrong?",
            a: "You can always tap the detected meal to edit the food, portion size, or nutrition values before saving it to your log.",
          },
          {
            q: "Can I log a meal without taking a photo?",
            a: "Yes — you can describe your meal with text or voice, or search for it and add it manually from the log screen.",
          },
        ],
      },
      {
        icon: "🔥",
        title: "Calories & Macro Tracking",
        items: [
          {
            q: "How are my daily calorie and macro goals calculated?",
            a: "Nutree estimates your goals from the age, height, weight, sex, and activity level you provide during setup, using standard metabolic formulas. You can adjust any target manually in Settings.",
          },
          {
            q: "Why did my goals change?",
            a: "Goals update automatically when you log a new weight, update your activity level, or change a target in Settings.",
          },
          {
            q: "Can I switch between metric and imperial units?",
            a: "Yes, you can switch between kg/cm and lb/ft-in at any time from Settings.",
          },
        ],
      },
      {
        icon: "📊",
        title: "Barcode Scanning",
        items: [
          {
            q: "How do I scan a barcode?",
            a: "Tap the + button on the Home screen, choose Scan Barcode, and point your camera at the product's barcode.",
          },
          {
            q: "What if a product isn't found?",
            a: "You can add the item manually with its nutrition label information, and it will be saved for faster logging next time.",
          },
        ],
      },
      {
        icon: "💳",
        title: "Subscription & Billing",
        items: [
          {
            q: "What does Nutree Premium include?",
            a: "Premium unlocks AI food photo analysis, voice and manual logging, full progress and macro tracking, saved meals, and smart insights.",
          },
          {
            q: "How do I cancel my subscription?",
            a: "Subscriptions are managed through your App Store or Google Play account settings, where you can cancel or change your plan at any time.",
          },
          {
            q: "Can I get a refund?",
            a: "Refunds are handled by the App Store or Google Play according to their respective policies, since all payments are processed through those platforms.",
          },
        ],
      },
    ],
    tipsTitle: "Tips for the best results",
    tips: [
      {
        icon: "📸",
        title: "Good lighting helps accuracy",
        text: "Natural light and a clear angle help our AI recognize your meal correctly.",
      },
      {
        icon: "🎯",
        title: "Log meals as you go",
        text: "Logging right after eating keeps your daily totals accurate and easy to remember.",
      },
      {
        icon: "⚖️",
        title: "Weigh in consistently",
        text: "Try weighing yourself around the same time each day for the most consistent trend.",
      },
    ],
  },
  ar: {
    title: "كيف يمكننا مساعدتك؟",
    subtitle: "إجابات على الأسئلة الشائعة حول تتبع وجباتك وسعراتك وتقدمك مع نيوتري.",
    categories: [
      {
        icon: "📸",
        title: "التعرّف على الطعام بالذكاء الاصطناعي وتسجيل الصور",
        items: [
          {
            q: "كيف يتعرّف نيوتري على الطعام من الصورة؟",
            a: "يستخدم نيوتري نموذج ذكاء اصطناعي للتعرّف على الطعام في صورتك وتقدير سعراته وماكروزه. للحصول على أفضل النتائج، التقط صورة واضحة وجيدة الإضاءة مع ظهور الطعام بالكامل.",
          },
          {
            q: "ماذا لو أخطأ نيوتري في تحديد وجبتي؟",
            a: "يمكنك دائمًا الضغط على الوجبة المكتشَفة لتعديل نوع الطعام أو حجم الحصة أو القيم الغذائية قبل حفظها في سجلك.",
          },
          {
            q: "هل يمكنني تسجيل وجبة دون التقاط صورة؟",
            a: "نعم، يمكنك وصف وجبتك بالنص أو الصوت، أو البحث عنها وإضافتها يدويًا من شاشة السجل.",
          },
        ],
      },
      {
        icon: "🔥",
        title: "تتبع السعرات والماكروز",
        items: [
          {
            q: "كيف تُحسب أهداف السعرات والماكروز اليومية؟",
            a: "يقدّر نيوتري أهدافك بناءً على العمر والطول والوزن والجنس ومستوى النشاط الذي تدخله أثناء الإعداد، باستخدام معادلات أيض قياسية. يمكنك تعديل أي هدف يدويًا من الإعدادات.",
          },
          {
            q: "لماذا تغيّرت أهدافي؟",
            a: "تتحدث الأهداف تلقائيًا عند تسجيل وزن جديد، أو تحديث مستوى نشاطك، أو تغيير هدف من الإعدادات.",
          },
          {
            q: "هل يمكنني التبديل بين الوحدات المترية والإمبراطورية؟",
            a: "نعم، يمكنك التبديل بين كجم/سم ورطل/قدم-إنش في أي وقت من الإعدادات.",
          },
        ],
      },
      {
        icon: "📊",
        title: "مسح الباركود",
        items: [
          {
            q: "كيف أمسح الباركود؟",
            a: "اضغط على زر + في الشاشة الرئيسية، اختر مسح الباركود، ووجّه الكاميرا نحو باركود المنتج.",
          },
          {
            q: "ماذا لو لم يتم العثور على المنتج؟",
            a: "يمكنك إضافة العنصر يدويًا باستخدام معلومات ملصق التغذية، وسيتم حفظه لتسجيل أسرع في المرة القادمة.",
          },
        ],
      },
      {
        icon: "💳",
        title: "الاشتراك والفوترة",
        items: [
          {
            q: "ماذا يشمل اشتراك نيوتري بريميوم؟",
            a: "يفتح بريميوم تحليل صور الطعام بالذكاء الاصطناعي، والتسجيل الصوتي واليدوي، ومتابعة كاملة للتقدم والماكروز، والوجبات المحفوظة، والرؤى الذكية.",
          },
          {
            q: "كيف ألغي اشتراكي؟",
            a: "تُدار الاشتراكات من خلال إعدادات حسابك في متجر التطبيقات أو جوجل بلاي، حيث يمكنك إلغاء أو تغيير خطتك في أي وقت.",
          },
          {
            q: "هل يمكنني استرداد المبلغ؟",
            a: "تتم معالجة المبالغ المستردة من قِبل متجر التطبيقات أو جوجل بلاي وفق سياساتهما، بما أن جميع المدفوعات تُعالَج عبر هذه المنصات.",
          },
        ],
      },
    ],
    tipsTitle: "نصائح للحصول على أفضل النتائج",
    tips: [
      {
        icon: "📸",
        title: "الإضاءة الجيدة تحسّن الدقة",
        text: "الضوء الطبيعي والزاوية الواضحة يساعدان الذكاء الاصطناعي على التعرّف على وجبتك بشكل صحيح.",
      },
      {
        icon: "🎯",
        title: "سجّل وجباتك أولاً بأول",
        text: "التسجيل مباشرة بعد الأكل يحافظ على دقة إجماليك اليومي ويسهّل تذكّره.",
      },
      {
        icon: "⚖️",
        title: "زِن نفسك بانتظام",
        text: "حاول وزن نفسك في نفس الوقت تقريبًا كل يوم للحصول على أكثر اتجاه ثابت لتقدمك.",
      },
    ],
  },
};
