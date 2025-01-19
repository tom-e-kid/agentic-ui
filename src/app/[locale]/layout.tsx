import Header from "@/components/Header";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { LanguageSwitcher } from "../../components/LanguageSwitcher";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Agentic UI - Modern Web Solutions",
  description:
    "Professional web development and design services for modern businesses",
};

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <html lang={locale} className="scroll-smooth">
      <body className={inter.className}>
        <LanguageSwitcher />
        <Header />
        <div className="pt-16">{children}</div>
      </body>
    </html>
  );
}
