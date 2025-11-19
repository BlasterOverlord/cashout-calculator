export type Method = "App" | "USSD" | "ATM" | "PriyoAgent";

export interface FeeTier {
	maxAmount: number; // Up to how much? (e.g., 50000 for Priyo)
	rate: number;      // Fee percentage (e.g., 1.49)
}

export interface PricingOption {
	method: Method;    // Is this App or USSD?
	rate: number;      // The standard fee percentage
	tiers?: FeeTier[]; // Optional: strict rules for Priyo numbers
	minFee?: number;   // Optional: Minimum fee (e.g., 10 Tk)
}

export interface ServiceProvider {
	name: string;
	color: string;        // For styling (e.g., Pink for bKash)
	options: PricingOption[];
}