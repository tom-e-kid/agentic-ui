import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { LanguageSwitcher } from "../components/LanguageSwitcher";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Agentic UI - Modern Web Solutions",
  description: "Professional web development and design services for modern businesses",
};

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ja" }];
}

export default function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={params.locale} className="scroll-smooth">
      <body className={inter.className}>
        <LanguageSwitcher />
        {children}
      </body>
    </html>
  );
} 
