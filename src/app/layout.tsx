import type { Metadata } from "next";
import { Rubik, Caveat } from "next/font/google";
import "./globals.css";

const rubik = Rubik({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-rubik",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin", "cyrillic"],
  weight: ["700"],
  variable: "--font-caveat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "YAPROQ — чайная в Ташкенте",
  description:
    "Ko'k choy в фарфоровом чайнике, кайтариш без спешки, холодные чаи, карак и свежая выпечка. Концепт сайта чайной YAPROQ.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={`${rubik.variable} ${caveat.variable}`}>
      <body>{children}</body>
    </html>
  );
}
