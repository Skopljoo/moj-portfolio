import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar"; // 1. Uvezen Navbar iz components foldera

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Promijenjen naslov i opis za tvoj lični brend
export const metadata: Metadata = {
  title: "Skopljak Portfolio",
  description: "Software & Hardware Engineer Portfolio",
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
      {/* Dodata klasa bg-zinc-950 da osiguramo stabilnu tamnu pozadinu na cijelom sajtu */}
      <body className="min-h-full flex flex-col bg-zinc-950 text-white">
        <Navbar /> {/* 2. Navbar postavljen ovdje da se prikazuje na svim stranicama */}
        {children}
      </body>
    </html>
  );
}