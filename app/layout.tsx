import type { Metadata } from "next";
import { Inter, Cairo } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-en",
  display: "swap",
});

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-ar",
  display: "swap",
});

export const metadata: Metadata = {
  title: "نيوتري — تتبع السعرات بالذكاء الاصطناعي",
  description:
    "صور وجبتك، اوصفها، أو سجلها يدويًا. نيوتري يساعدك تتابع السعرات، الماكروز، الماء، الخطوات، والوزن من تطبيق واحد.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${cairo.variable} bg-paper text-ink antialiased`}>
        {children}
      </body>
    </html>
  );
}
