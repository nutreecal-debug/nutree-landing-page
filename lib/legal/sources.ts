import type { Lang } from "@/lib/types";
import type { LegalPageContent } from "./types";

export const sources: Record<Lang, LegalPageContent> = {
  en: {
    title: "Health Information & Sources",
    lastUpdated: "Last updated: July 2026",
    intro:
      "Nutree provides nutrition, calorie, macro, meal tracking, barcode scanning, and AI food recognition features for informational and general wellness purposes only. This page explains how our estimates are calculated, the sources and methods behind them, and their limitations.",
    sections: [
      {
        heading: "Body Mass Index (BMI) & Body Composition",
        paragraphs: [
          "Nutree calculates BMI using the standard formula (weight in kilograms divided by height in meters squared), consistent with the classification ranges published by major public health organizations such as the World Health Organization. BMI is a general screening measure and does not account for muscle mass, bone density, age, or body composition, so it should be treated as one data point rather than a complete picture of your health.",
        ],
      },
      {
        heading: "Calorie & Metabolism Estimates",
        paragraphs: [
          "Daily calorie targets in Nutree are estimated using widely-used metabolic formulas (such as Mifflin-St Jeor style equations) that factor in your age, sex, height, weight, and activity level to approximate your basal and total daily energy expenditure. These figures are estimates: actual metabolism varies from person to person and can be affected by genetics, medical conditions, medications, and other factors not captured by the App.",
        ],
      },
      {
        heading: "Macronutrient Guidelines",
        paragraphs: [
          "Default protein, carbohydrate, and fat targets in Nutree are based on commonly recommended macronutrient distribution ranges used in general nutrition guidance. You can adjust these targets manually, and we recommend working with a registered dietitian if you have specific medical or performance needs.",
        ],
      },
      {
        heading: "AI Food Recognition Technology",
        paragraphs: [
          "Nutree uses AI image-recognition models to identify foods from photos and estimate their nutritional content. This technology analyzes visual patterns to make its best guess, but it does not have perfect knowledge of portion size, hidden ingredients, cooking methods, or preparation details that can significantly change a meal's actual nutrition.",
        ],
        list: [
          "AI recognition results are estimates and may misidentify foods or portions.",
          "You can always review and edit AI-detected meals before saving them.",
          "Accuracy generally improves with clear, well-lit photos and simple, separated foods.",
        ],
      },
      {
        heading: "Barcode & Nutrition Database Information",
        paragraphs: [
          "Barcode scanning in Nutree references third-party nutrition databases. These databases are maintained by outside contributors and manufacturers, so entries may occasionally be incomplete, mislabeled, outdated, or specific to a different regional product formulation.",
        ],
      },
      {
        heading: "Medical Disclaimer",
        paragraphs: [
          "Nutree is not a medical device and is not intended to diagnose, treat, cure, or prevent any disease or medical condition. It does not replace professional medical, nutritional, or psychological advice.",
        ],
        list: [
          "Calorie, macro, and metabolism calculations provided by Nutree are estimates only, not precise medical measurements.",
          "AI food recognition and barcode data may not always be 100% accurate.",
          "Always consult a doctor, registered dietitian, or other qualified healthcare professional before making major diet, weight-loss, weight-gain, or health decisions, especially if you are pregnant, nursing, or managing a medical condition.",
          "If something in the App doesn't match your medical guidance, always defer to your healthcare professional.",
        ],
      },
    ],
  },
  ar: {
    title: "المعلومات والمصادر الصحية",
    lastUpdated: "آخر تحديث: يوليو 2026",
    intro:
      "يقدّم نيوتري ميزات تتبع التغذية والسعرات والماكروز والوجبات، ومسح الباركود، والتعرّف على الطعام بالذكاء الاصطناعي، لأغراض معلوماتية وصحية عامة فقط. توضّح هذه الصفحة كيفية حساب تقديراتنا، والمصادر والطرق المستخدمة، وحدودها.",
    sections: [
      {
        heading: "مؤشر كتلة الجسم (BMI) وتكوين الجسم",
        paragraphs: [
          "يحسب نيوتري مؤشر كتلة الجسم باستخدام المعادلة القياسية (الوزن بالكيلوجرام مقسومًا على مربع الطول بالمتر)، بما يتوافق مع نطاقات التصنيف الصادرة عن منظمات الصحة العامة الكبرى مثل منظمة الصحة العالمية. مؤشر كتلة الجسم مقياس فرز عام ولا يأخذ بعين الاعتبار الكتلة العضلية أو كثافة العظام أو العمر أو تكوين الجسم، لذا يجب اعتباره نقطة بيانات واحدة وليس صورة كاملة عن صحتك.",
        ],
      },
      {
        heading: "تقديرات السعرات والأيض",
        paragraphs: [
          "تُقدَّر أهداف السعرات اليومية في نيوتري باستخدام معادلات أيض شائعة الاستخدام (على غرار معادلات Mifflin-St Jeor) تأخذ بعين الاعتبار عمرك وجنسك وطولك ووزنك ومستوى نشاطك لتقريب معدل الأيض الأساسي وإجمالي الطاقة اليومية المستهلكة. هذه الأرقام تقديرات: الأيض الفعلي يختلف من شخص لآخر وقد يتأثر بالوراثة والحالات الصحية والأدوية وعوامل أخرى لا يستطيع التطبيق قياسها.",
        ],
      },
      {
        heading: "إرشادات الماكروز",
        paragraphs: [
          "أهداف البروتين والكارب والدهون الافتراضية في نيوتري مبنية على نطاقات توزيع الماكروز الموصى بها بشكل شائع في الإرشادات الغذائية العامة. يمكنك تعديل هذه الأهداف يدويًا، ونوصي بالعمل مع أخصائي تغذية مسجل إذا كانت لديك احتياجات صحية أو رياضية خاصة.",
        ],
      },
      {
        heading: "تقنية التعرّف على الطعام بالذكاء الاصطناعي",
        paragraphs: [
          "يستخدم نيوتري نماذج ذكاء اصطناعي للتعرّف على الصور لتحديد الأطعمة من الصور وتقدير محتواها الغذائي. تحلل هذه التقنية الأنماط البصرية لتقديم أفضل تخمين، لكنها لا تملك معرفة دقيقة بحجم الحصة أو المكونات الخفية أو طريقة الطهي أو تفاصيل التحضير التي قد تغيّر القيمة الغذائية الفعلية للوجبة بشكل كبير.",
        ],
        list: [
          "نتائج التعرّف بالذكاء الاصطناعي هي تقديرات وقد تخطئ في تحديد الأطعمة أو الكميات.",
          "يمكنك دائمًا مراجعة وتعديل الوجبات المكتشَفة بالذكاء الاصطناعي قبل حفظها.",
          "تتحسن الدقة عمومًا مع الصور الواضحة جيدة الإضاءة والأطعمة البسيطة والمنفصلة.",
        ],
      },
      {
        heading: "بيانات الباركود وقواعد بيانات التغذية",
        paragraphs: [
          "يعتمد مسح الباركود في نيوتري على قواعد بيانات تغذية من أطراف خارجية. يتم صيانة هذه القواعد من قبل مساهمين خارجيين ومصنّعين، لذا قد تكون بعض المدخلات أحيانًا غير مكتملة أو موسومة بشكل خاطئ أو قديمة أو خاصة بنسخة إقليمية مختلفة من المنتج.",
        ],
      },
      {
        heading: "إخلاء المسؤولية الطبية",
        paragraphs: [
          "نيوتري ليس جهازًا طبيًا ولا يهدف إلى تشخيص أو علاج أو شفاء أو الوقاية من أي مرض أو حالة صحية. وهو لا يحل محل الاستشارة الطبية أو الغذائية أو النفسية المتخصصة.",
        ],
        list: [
          "حسابات السعرات والماكروز والأيض التي يقدمها نيوتري هي تقديرات فقط، وليست قياسات طبية دقيقة.",
          "قد لا تكون بيانات التعرّف على الطعام بالذكاء الاصطناعي والباركود دقيقة بنسبة 100% دائمًا.",
          "استشر دائمًا طبيبًا أو أخصائي تغذية مسجل أو مختصًا صحيًا مؤهلاً قبل اتخاذ قرارات كبرى تتعلق بالنظام الغذائي أو فقدان الوزن أو زيادته أو الصحة، خصوصًا إذا كنتِ حاملاً أو مرضعة أو تتعاملين مع حالة صحية.",
          "إذا لم يتوافق شيء في التطبيق مع إرشادات طبيبك، اتبع دائمًا توجيهات مختصك الصحي.",
        ],
      },
    ],
  },
};
