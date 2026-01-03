import { ServiceProvider } from "./types";
const year = new Date().getFullYear();

export const providers: ServiceProvider[] = [
  {
    name: "bKash",
    theme: {
      bg: "bg-pink-600",
      text: "text-pink-600",
      border: "border-pink-500",
      light: "bg-pink-50"
    },
    options: [
      { method: "App", rate: 1.85 },
      { method: "USSD", rate: 1.85 },
      { 
        method: "PriyoAgent", 
        rate: 1.85, 
        tiers: [{ maxAmount: 50000, rate: 1.49 }]
      },
      { method: "ATM", rate: 1.49 }
    ],
    seoTitle: `bKash Cash Out Charge Calculator ${year}`,
    description: "Calculate bKash cash out charges and withdrawal fees for Agent, Priyo Agent & ATM. Compare all methods side-by-side and find the cheapest option.",
    uniqueFeatures: [
      "**Priyo Agent:** Withdraw up to 50,000 Tk per month at a reduced rate of 1.49% (14.90 Tk per thousand).",
      "**ATM Withdrawal:** Cash out from any BRAC Bank or Q-Cash ATM at a flat 1.49% rate.",
      "**Widest Network:** Available in almost every village and corner store in Bangladesh."
    ],
    verdict: "Best for reliability. While the standard 1.85% fee is high, using this calculator to plan your 'Priyo Agent' withdrawals can bring the cost down to a competitive 1.49%."
  },
  {
    name: "Nagad",
    theme: {
      bg: "bg-orange-500",
      text: "text-orange-600",
      border: "border-orange-500",
      light: "bg-orange-50"
    },
    options: [
      { method: "App", rate: 1.299 },
      { method: "USSD", rate: 1.50 },
    ],
    seoTitle: `Nagad Cash Out Charge Calculator ${year}`,
    description: "Calculate Nagad cash out charges and withdrawal fees. Compare App vs USSD costs instantly and discover which method saves you the most money.",
    uniqueFeatures: [
      "**Lowest App Charge:** At ~1.30% (12.99 Tk + VAT), it is the cheapest standard rate in the market.",
      "**Islamic Wallet:** Offers a Shariah-compliant 'Nagad Islamic' account option.",
      "**Government Backed:** Operated by the Bangladesh Post Office, ensuring high trust.",
      "**One-Tap Account:** Easy account opening by simply dialing *167#."
    ],
    verdict: "The clear winner for cost savings. The calculator shows that using the Nagad App saves you roughly 5.50 Tk per thousand compared to standard bKash agents."
  },
  {
    name: "Rocket",
    theme: {
      bg: "bg-purple-600",
      text: "text-purple-600",
      border: "border-purple-500",
      light: "bg-purple-50"
    },
    options: [
      { method: "App", rate: 1.8 },
      { method: "USSD", rate: 1.8 },
      { method: "ATM", rate: 0.9 },
    ],
    seoTitle: `Rocket Cash Out Charge Calculator ${year}`,
    description: "Calculate Rocket cash out charges and ATM withdrawal fees. Compare Agent vs DBBL ATM costs and find the cheapest way to cash out.",
    uniqueFeatures: [
      "**Cheapest ATM Cash Out:** Only 0.9% (9 Tk per thousand) when using a DBBL ATM.",
      "**Salary Accounts:** Widely used by garment and corporate sectors for salary disbursement.",
      "**Bank Integration:** Seamless money transfer to and from DBBL bank accounts.",
      "**Bill Pay:** Excellent for utility bill payments with instant receipts."
    ],
    verdict: "Unbeatable for ATM users. As this calculator demonstrates, withdrawing 10,000 Tk via DBBL ATM costs only 90 Tk, compared to 185 Tk with other providers."
  },
  {
    name: "Upay",
    theme: {
      bg: "bg-blue-500",
      text: "text-blue-600",
      border: "border-blue-500",
      light: "bg-blue-50"
    },
    options: [
      { method: "App", rate: 1.4 },
      { method: "USSD", rate: 1.4 },
      { method: "ATM", rate: 0.8 },
    ],
    seoTitle: `Upay Cash Out Charge Calculator ${year}`,
    description: "Calculate Upay cash out charges and withdrawal fees for Agent & UCB ATM. Compare all methods and find the lowest cost option for you.",
    uniqueFeatures: [
      "**Lowest ATM Fee:** 0.8% (8 Tk per thousand) at UCB ATMs - the lowest in the industry.",
      "**No Hidden Charges:** Transparent pricing structure for all users.",
      "**Security:** Features blockchain-based security for enhanced protection.",
      "**Traffic Fine Payment:** Popular for paying police traffic fines instantly."
    ],
    verdict: "A hidden gem for UCB ATM users. Calculations show it offers the absolute lowest withdrawal cost (8 Tk/1000) in the entire industry."
  },
];