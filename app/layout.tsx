import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CitizenPrep AI — Pass Your US Citizenship Test with Confidence 🇺🇸",
  description:
    "Master the official USCIS Naturalization Test with 3D interactive flashcards, official 100 civics questions, and AI mock interview simulations.",
  keywords: [
    "US Citizenship Test",
    "USCIS Naturalization Test",
    "Civics Test 2026",
    "CitizenPrep AI",
    "N-400 Interview",
    "Naturalization Interview Practice",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans selection:bg-blue-100 selection:text-blue-900">
        {children}
      </body>
    </html>
  );
}
