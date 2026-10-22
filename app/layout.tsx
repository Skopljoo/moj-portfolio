import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jusuf Skopljak • Software Developer",
  description:
    "Portfolio Jusufa Skopljaka — Software Developer & Hardware Engineer iz Zenice, Bosna i Hercegovina. Projekti iz oblasti web developmenta, mrežne infrastrukture i softverskih rješenja.",
  keywords: [
    "Jusuf Skopljak",
    "Software Developer",
    "Hardware Engineer",
    "Zenica",
    "Web Development",
    "Next.js",
    "React",
    "C#",
    "Cisco Network",
  ],
  authors: [{ name: "Jusuf Skopljak" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bs" className="dark scroll-smooth">
      <body className="bg-[#090a0d] text-[#f4f4f5] antialiased selection:bg-[#43553673] selection:text-white flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
