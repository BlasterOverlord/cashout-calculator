import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({ subsets: ["latin"] });
const baseUrl = 'https://cashoutcalc.tech';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),

  alternates: {
    canonical: '/',
  },

  title: {
    default: "BD Cash Out Charge Calculator 2025 | bKash, Nagad, Rocket, Upay",
    template: "%s | Cash Out BD"
  },
  description: "Calculate exact cash out charges for bKash, Nagad, Rocket, and Upay. Includes Priyo Agent rates, App vs USSD, and ATM fees.",
  keywords: [
    "bkash charge calculator",
    "bkash cash out charge 2026",
    "nagad cash out fee",
    "rocket cash out charge",
    "upay withdrawal charge",
    "bkash priyo agent cash out charge",
    "mobile banking charges bangladesh 2025",
    "cash out calculator bd",
    "bkash vs nagad cash out charges",
    "cheapest cash out charge bangladesh",
  ],
  openGraph: {
    title: "BD Cash Out Charge Calculator",
    description: "Calculate exact cash out charges for bKash, Nagad, Rocket, and Upay in Bangladesh.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3050260579669772"
          crossOrigin="anonymous"></script>
      </head>
      <body className={inter.className}>

        {children}

        <Analytics />
      </body>
    </html>
  );
}