import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });
const baseUrl = 'https://cashoutcalc.tech';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),

  alternates: {
    canonical: '/',
  },

  title: {
    default: "BD Cash Out Charge Calculator 2026 | bKash, Nagad, Rocket, Upay",
    template: "%s | CashOutCalc"
  },
  description: "Calculate exact cash out charges for bKash, Nagad, Rocket, and Upay. Includes Priyo Agent rates, App vs USSD, and ATM fees.",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
      { url: "/favicon.ico", rel: "icon" },
    ],
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "manifest",
        url: "/site.webmanifest",
      },
    ],
  },
  keywords: [
    "bkash charge calculator",
    "bkash cash out charge 2026",
    "nagad cash out fee",
    "rocket cash out charge",
    "upay withdrawal charge",
    "bkash priyo agent cash out charge",
    "mobile banking charges bangladesh 2026",
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
      </head>
      <body className={inter.className}>
        {children}
        <Analytics />
        <Script
          id="adsbygoogle-init"
          strategy="lazyOnload"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3050260579669772"
          crossOrigin="anonymous"
        />
      </body>
    </html>
  );
}