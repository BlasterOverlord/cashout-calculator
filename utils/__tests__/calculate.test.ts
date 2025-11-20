import { calculateFee } from '../calculate';
import { PricingOption } from '../types';

// Mock Data for testing
const standardBkash: PricingOption = { 
  method: "App", 
  rate: 1.85 
};

const priyoBkash: PricingOption = { 
  method: "PriyoAgent", 
  rate: 1.85,
  tiers: [{ maxAmount: 50000, rate: 1.49 }] 
};

describe('Fee Calculation Logic', () => {
  
  // Case 1: Standard Calculation
  test('calculates standard bKash fee correctly (1.85%)', () => {
    const result = calculateFee(1000, standardBkash, 0);
    expect(result).toBe(18.5);
  });

  // Case 2: Priyo Number - Fully within limit
  test('calculates Priyo fee correctly when under limit (1.49%)', () => {
    // Cash out 10,000. Usage 0. Should be all cheap.
    const result = calculateFee(10000, priyoBkash, 0);
    // 10000 * 1.49% = 149
    expect(result).toBe(149);
  });

  // Case 3: Priyo Number - Already exceeded limit
  test('reverts to standard rate if Priyo limit is already used up', () => {
    // Usage is 50,000 (Limit full). Now cashing out 1,000.
    const result = calculateFee(1000, priyoBkash, 50000);
    // Should use 1.85% now -> 18.5
    expect(result).toBe(18.5);
  });

  // Case 4: THE COMPLEX ONE - Split Calculation
  test('correctly splits fee when transaction crosses the limit boundary', () => {
    // Usage is 49,000. Limit is 50,000. Remaining cheap space = 1,000.
    // User wants to cash out 2,000.
    
    // Logic:
    // First 1,000 @ 1.49% = 14.9
    // Next 1,000 @ 1.85% = 18.5
    // Total should be 33.4
    
    const result = calculateFee(2000, priyoBkash, 49000);
    expect(result).toBeCloseTo(33.4); 
  });

  // Case 5: Edge Case - 0 amount
  test('returns 0 for 0 amount', () => {
    const result = calculateFee(0, standardBkash, 0);
    expect(result).toBe(0);
  });

});