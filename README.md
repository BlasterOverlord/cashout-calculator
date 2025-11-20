# 💸 BD Cash Out Calculator

[Live Demo](https://bdcashout.me) • Progressive Web App (PWA) for accurately computing Bangladeshi Mobile Financial Service (MFS) cash‑out fees.

> Traditional calculators still assume a flat 1.85%. This app implements current tiered and contextual fee rules (e.g., bKash Priyo Agent limits, Nagad channel differences, ATM withdrawal variability) to produce precise, explainable results.

---

## 🚀 Motivation

Cash‑out calculations in Bangladesh now depend on:
- Tiered percentages (e.g. bKash Priyo Agent: 1.49% up to 50,000 Tk monthly, then 1.85%).
- Channel-based pricing (e.g. Nagad App vs USSD).
- Institution-specific ATM withdrawal fees.
- Split scenarios when a transaction straddles a tier boundary.

This project encodes those rules with transparent, test‑backed logic so users can trust the numbers.

---

## ✨ Key Features

| Feature | Description |
|---------|-------------|
| ⚡ Tiered Logic Engine | Splits a single withdrawal across remaining discounted quota and standard rate seamlessly. |
| 📱 Programmatic SEO | Pre-rendered dynamic routes (`/bkash`, `/nagad`, etc.) for improved discoverability. |
| 🛡️ Type-Safe | Strict TypeScript interfaces guard financial logic. |
| 🧪 Unit Tested | Jest suites cover edge cases (boundary splits, rate transitions). |
| 🎨 Dynamic Theming | Provider selection auto-adjusts brand palette for UI components. |
| 📦 PWA | Installable, offline-capable shell for quick repeated use. |
| 🚀 Fast Rendering | Next.js App Router + React Server Components for optimized payloads. |

---

## 🛠️ Tech Stack

| Layer | Tech |
|-------|------|
| Framework | Next.js 16 |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS |
| Testing | Jest |
| Deployment | Vercel |

---

## 🏃‍♂️ Getting Started

### 1. Clone

```bash
git clone https://github.com/BlasterOverlord/cashout-calculator.git
cd cashout-calculator
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Development Server

```bash
npm run dev
```

Open http://localhost:3000 to view the app.

### 4. Build (Optional)

```bash
npm run build
npm run start
```

---

## 🧪 Testing

Financial accuracy is critical. The Jest suite covers standard fees, tier boundaries, and split logic.

Run tests:

```bash
npm test
```

Sample Output:

```
PASS  src/utils/__tests__/calculate.test.ts
  Fee Calculation Logic
    ✓ calculates standard bKash fee correctly (1.85%) (2 ms)
    ✓ calculates Priyo fee correctly when under limit (1.49%) (1 ms)
    ✓ correctly splits fee when transaction crosses the limit boundary (1 ms)
```

Add more cases in `src/utils/__tests__/` to extend coverage.

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the project
2. Create a feature branch:
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. Commit changes:
   ```bash
   git commit -m "feat: Add AmazingFeature"
   ```
4. Push:
   ```bash
   git push origin feature/AmazingFeature
   ```
5. Open a Pull Request

Please:
- Write tests for logic changes.
- Update documentation if fee rules are modified.
- Follow conventional commits (`feat:`, `fix:`, `docs:`, etc.).

---

## ⚠️ Disclaimer

Rates are implemented based on publicly available information and observed provider behavior as of 2025. Always verify critical transactions against official provider disclosures. If a discrepancy is found, please open an issue with:
- Provider name
- Expected vs. actual fee
- Date and channel (App / USSD / ATM)

---

## 📄 License

Distributed under the GPL-3.0 License. See [LICENSE](./LICENSE) for details.
