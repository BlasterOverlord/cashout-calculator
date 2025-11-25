import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "BD Cash Out Charge Calculator 2025 | bKash, Nagad, Rocket, Upay",
    template: "%s | Cash Out BD"
  },
  description: "Calculate exact cash out charges for bKash, Nagad, Rocket, and Upay. Includes Priyo Agent rates, App vs USSD, and ATM fees.",
  keywords: [
    "bkash charge calculator",
    "nagad cash out charge",
    "rocket cash out fee",
    "upay withdrawal charge",
    "bkash priyo number limit",
    "mobile banking charges bangladesh 2025",
    "cash out calculator bd",
    "bkash vs nagad charges"
  ],
  openGraph: {
    title: "BD Cash Out Charge Calculator",
    description: "Calculate exact cash out charges for bKash, Nagad, Rocket, and Upay in Bangladesh.",
    type: "website",
  },
  // verification: {
  //   google: "google-site-verification-code-goes-here",
  // },
};

// JSON-LD Schema Data
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      "name": "BD Cash Out Calculator",
      "applicationCategory": "FinanceApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "BDT"
      },
      "description": "Instant calculator for bKash, Nagad, Rocket and Upay cash out charges including Priyo numbers."
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much is the bKash Priyo Agent charge?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For a Priyo Agent, the charge is 1.49% (14.90 Tk per 1,000) up to a monthly limit of 50,000 Tk."
          }
        },
        {
          "@type": "Question",
          "name": "Which is cheaper: bKash or Nagad?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Currently, Nagad App is cheaper at approx 1.30% compared to bKash's standard 1.85%."
          }
        }
      ]
    }
  ]
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
        {/* Inject Schema here */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {children}

        <Analytics />
      </body>
    </html>
  );
}