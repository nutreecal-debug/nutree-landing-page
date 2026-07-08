import type { Lang } from "@/lib/types";

export const SUPPORT_EMAIL = "Nutree.cal@gmail.com";
export const INSTAGRAM_URL = "https://www.instagram.com/Nutree.app";
export const INSTAGRAM_HANDLE = "@Nutree.app";
export const TIKTOK_URL = "https://www.tiktok.com/@nutree.app";
export const TIKTOK_HANDLE = "@nutree.app";
export const APP_DEVELOPER = "Nutree Health";

export interface ContactContent {
  heading: string;
  intro: string;
  supportLabel: string;
  emailLabel: string;
  instagramLabel: string;
  tiktokLabel: string;
  developerLabel: string;
}

export const contactContent: Record<Lang, ContactContent> = {
  en: {
    heading: "Get in Touch",
    intro: "Questions, feedback, or need a hand with something in Nutree? We'd love to hear from you.",
    supportLabel: "App Support",
    emailLabel: "Email:",
    instagramLabel: "Instagram:",
    tiktokLabel: "TikTok:",
    developerLabel: "App Developer",
  },
  ar: {
    heading: "تواصل معنا",
    intro: "عندك سؤال أو ملاحظة أو تحتاج مساعدة في نيوتري؟ يسعدنا نسمع منك.",
    supportLabel: "الدعم الفني",
    emailLabel: "البريد الإلكتروني:",
    instagramLabel: "انستقرام:",
    tiktokLabel: "تيك توك:",
    developerLabel: "مطور التطبيق",
  },
};
