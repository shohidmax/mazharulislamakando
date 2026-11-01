import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "মোঃ মাজহারুল ইসলাম আকন্দ রবিউল | Mazharul Islam Akando Robiul",
  description:
    "মোঃ মাজহারুল ইসলাম আকন্দ রবিউল — শরিফপুর ইউনিয়ন পরিষদ চেয়ারম্যান পদে বিএনপি মনোনয়নপ্রত্যাশী, জামালপুর সদর। Md. Mazharul Islam Akando Robiul — BNP nominee for Sharifpur Union Parishad Chairman, Jamalpur.",
  keywords: [
    "Mazharul Islam Akando Robiul",
    "মাজহারুল ইসলাম আকন্দ রবিউল",
    "Sharifpur Union Parishad",
    "শরিফপুর ইউনিয়ন পরিষদ",
    "BNP Jamalpur",
    "জামালপুর বিএনপি",
    "Chairman candidate",
    "ইউনিয়ন পরিষদ চেয়ারম্যান",
  ],
  authors: [{ name: "Mazharul Islam Akando Robiul" }],
  openGraph: {
    title: "মোঃ মাজহারুল ইসলাম আকন্দ রবিউল",
    description: "শরিফপুর ইউনিয়ন পরিষদ চেয়ারম্যান পদে বিএনপি মনোনয়নপ্রত্যাশী",
    locale: "bn_BD",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+Bengali:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-gray-800">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
