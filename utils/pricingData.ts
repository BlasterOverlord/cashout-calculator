import { ServiceProvider } from "./types";

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
  },
];