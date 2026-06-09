import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Doyeon Kim | AI Engineer Portfolio",
  description: "AI Engineer specializing in LLMs, Recommender Systems, and NLP. Samsung Electronics MX Division.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <div className="animated-bg" />
        {children}
      </body>
    </html>
  );
}
