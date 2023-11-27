import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./assets/fonts.css";
import "./assets/sanitize.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
