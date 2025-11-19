import { PricingOption } from "./types";

export const calculateFee = (amount: number, option: PricingOption, usageThisMonth: number = 0): number => {
  // 1. Handle Tiered Pricing (bkash Priyo Logic)
  if (option.tiers && option.tiers.length > 0) {
    const tier = option.tiers[0]; // Get the 50k limit rule
    const remainingLimit = Math.max(0, tier.maxAmount - usageThisMonth);

    if (remainingLimit >= amount) {
      // Fully covered by cheap rate
      return (amount * tier.rate) / 100;
    } else {
      // Mixed rate: Part cheap, part expensive
      const cheapPart = remainingLimit;
      const expensivePart = amount - remainingLimit;

      const fee1 = (cheapPart * tier.rate) / 100;
      const fee2 = (expensivePart * option.rate) / 100;

      return fee1 + fee2;
    }
  }

  // 2. Handle Standard Pricing
  return (amount * option.rate) / 100;
};