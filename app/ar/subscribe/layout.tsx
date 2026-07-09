import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "الاشتراك في نيوتري برو — نيوتري",
  description: "اشترك في نيوتري برو واحصل على كود التفعيل عبر البريد الإلكتروني.",
};

export default function SubscribeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div dir="rtl" lang="ar" className="font-ar">
      {children}
    </div>
  );
}
