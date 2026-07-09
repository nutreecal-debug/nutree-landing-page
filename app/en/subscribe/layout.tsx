import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Subscribe to Nutree Pro — Nutree",
  description: "Subscribe to Nutree Pro and get your activation code by email.",
};

export default function SubscribeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div dir="ltr" lang="en" className="font-en">
      {children}
    </div>
  );
}
