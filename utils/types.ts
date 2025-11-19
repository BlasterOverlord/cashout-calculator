export type Method = "App" | "USSD" | "ATM" | "PriyoAgent";

export interface FeeTier {
  maxAmount: number; 
  rate: number;      
}

export interface PricingOption {
  method: Method;    
  rate: number;      
  tiers?: FeeTier[]; 
}

// A dedicated theme interface to handle all color logic
export interface ProviderTheme {
  bg: string;       // Main background (Header & Active Buttons)
  text: string;     // Main text color (Result & Active Text)
  border: string;   // Border color for active states
  light: string;    // Light background for active states
}

export interface ServiceProvider {
  name: string;
  theme: ProviderTheme;
  options: PricingOption[];
}