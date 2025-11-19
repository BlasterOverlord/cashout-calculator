import { ServiceProvider } from "./types";

export const providers: ServiceProvider[] = [
  {
    name: "bKash",
    color: "bg-pink-600",
    options: [
      {
        method: "App",
        rate: 1.85
      },
      {
        method: "USSD",
        rate: 1.85
      },
      {
        method: "PriyoAgent",
        rate: 1.85,
        tiers: [
          { maxAmount: 50000, rate: 1.49 } // 1.49% up to 50k
        ]
      },
      {
        method: "ATM",
        rate: 1.49
      }
    ],
  },
  {
    name: "Nagad",
    color: "bg-orange-500",
    options: [
      {
        method: "App",
        rate: 1.299
      },
      {
        method: "USSD",
        rate: 1.50
      },
    ],
  },
  {
    name: "Rocket",
    color: "bg-purple-600",
    options: [
      {
        method: "App",
        rate: 1.8
      },
      {
        method: "ATM",
        rate: 0.9
      },
    ],
  },
  {
    name: "Upay",
    color: "bg-blue-500",
    options: [
      {
        method: "App",
        rate: 1.4
      },
      {
        method: "ATM",
        rate: 0.8
      },
    ],
  },
];