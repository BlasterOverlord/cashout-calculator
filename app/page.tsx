import Calculator from '@/components/Calculator';
import Footer from '@/components/Footer';
import Link from 'next/link';

// JSON-LD Schema Data
const baseUrl = 'https://cashoutcalc.tech';
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      "name": "BD Cash Out Calculator",
      "url": baseUrl,
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
      "url": baseUrl,
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
        },
        {
          "@type": "Question",
          "name": "What is the cheapest way to cash out?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The absolute cheapest way is using Upay at UCB ATMs (0.8%) or Rocket at DBBL ATMs (0.9%)."
          }
        }
      ]
    }
  ]
};

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO SECTION: Calculator */}
      <section className="flex flex-col items-center justify-center pt-12 pb-8 px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Cash Out Charge Calculator
          </h1>
          <p className="text-gray-600 text-lg max-w-xl mx-auto">
            Instantly calculate cash out fees for bKash, Nagad, Rocket & Upay.
            Updated for <span className="font-semibold text-gray-800">2025</span>.
          </p>
        </div>

        <Calculator />
      </section>

      <section className="max-w-3xl mx-auto px-6 pt-12 space-y-8 text-gray-700">
        <div className="prose prose-blue max-w-none">
          <h2 className="text-3xl font-bold mb-2 text-gray-900">Complete Guide to MFS Cash Out Charges in Bangladesh (2025)</h2>
          <p className="text-lg leading-relaxed">
            As we move through 2025, managing mobile financial service (MFS) costs in Bangladesh has become essential for daily financial planning. Whether you use <strong>bKash, Nagad, Rocket, or Upay</strong>, understanding the hidden layers of withdrawal fees can save you thousands of Taka annually.
          </p>
          <br></br>
          <h3 className="text-xl font-bold text-gray-800">The Evolution of Cash Out Fees</h3>
          <p>
            Gone are the days of a flat 1.85% fee across the board. Providers have introduced complex tiered pricing models to compete. For instance, bKash&apos;s <strong>&quot;Priyo Agent&quot;</strong> feature allows for a significantly reduced rate of 1.49% (14.90 Tk per 1,000), but this is strictly capped at a monthly limit. Our calculator is the first of its kind to factor in these &quot;split-tier&quot; scenarios, calculating exactly how much of your withdrawal falls under the cheap rate and how much spills over into the standard rate.
          </p>
          <br></br>
          <h3 className="text-xl font-bold text-gray-800">App vs. USSD: The Cost of Convenience</h3>
          <p>
            A critical factor often overlooked is the method of withdrawal. Digital savvy users who utilize the official apps often enjoy lower rates (e.g., Nagad&apos;s ~1.29% App rate) compared to those using USSD codes (*247#, *167#). This disparity is designed to encourage smartphone adoption, but it can penalize users on feature phones. This tool provides a transparent comparison between App and USSD charges for every major provider.
          </p>
          <br></br>
          <h3 className="text-xl font-bold text-gray-800">ATM Withdrawals: The Hidden Saver</h3>
          <p>
            For users with access to partner ATMs (such as BRAC Bank for bKash or Dutch-Bangla Bank for Rocket), cashing out via ATM is often the most cost-effective method, with rates dropping as low as 0.9% or 1.49%. However, ATM availability is lower in rural areas, making agent points the primary, albeit more expensive, option for many.
          </p>
        </div>
      </section>

      {/* SEO CONTENT SECTION */}
      <section className="max-w-3xl mx-auto px-6 py-12 space-y-12 text-gray-700">

        {/* Quick Reference Table */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Charge List (Per 1,000 Tk)</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-gray-50 text-gray-600 uppercase text-xs tracking-wider">
                <tr>
                  <th className="p-3">Provider</th>
                  <th className="p-3">App Charge</th>
                  <th className="p-3">USSD Charge</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="p-3 font-semibold text-pink-600">bKash</td>
                  <td className="p-3">18.50 Tk</td>
                  <td className="p-3">18.50 Tk</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-pink-600">bKash (Priyo)</td>
                  <td className="p-3">14.90 Tk</td>
                  <td className="p-3">14.90 Tk</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-orange-600">Nagad</td>
                  <td className="p-3">12.99 Tk*</td>
                  <td className="p-3">15.00 Tk</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-purple-600">Rocket</td>
                  <td className="p-3">18.00 Tk</td>
                  <td className="p-3">18.00 Tk</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-blue-600">Upay</td>
                  <td className="p-3">14.00 Tk</td>
                  <td className="p-3">14.00 Tk</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-2">*Nagad App charge excludes VAT in some calculations, usually rounded to 13 Tk.</p>
        </div>

        {/* FAQ for SEO Keywords */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg text-gray-900 mb-2">How much is the bKash Priyo Agent charge?</h3>
              <p className="leading-relaxed">
                For a Priyo Agent, the charge is <strong className="text-gray-900">1.49%</strong> (14.90 Tk per 1,000).
                This rate applies up to a monthly limit of 50,000 Tk.
                After the limit, it reverts to the standard 1.85%.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg text-gray-900 mb-2">Which is cheaper: bKash or Nagad?</h3>
              <p className="leading-relaxed">
                Currently, <strong className="text-gray-900">Nagad App</strong> is cheaper at approx 1.30% (12.99 Tk + VAT) compared to bKash&apos;s standard 1.85%.
                However, if you use bKash Priyo Agent or ATM Cash Out, the rate drops to 1.49%, making it very competitive.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg text-gray-900 mb-2">What is the cheapest way to cash out?</h3>
              <p className="leading-relaxed">
                The absolute cheapest way is using <strong className="text-gray-900">Upay at UCB ATMs</strong> (0.8% or 8 Tk/1000) or <strong className="text-gray-900">Rocket at DBBL ATMs</strong> (0.9% or 9 Tk/1000).
                For agent withdrawals, Nagad App is the cheapest option.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg text-gray-900 mb-2">What is the withdrawal limit?</h3>
              <p className="leading-relaxed">
                For most personal accounts, the daily cash-out limit is <strong className="text-gray-900">30,000 Tk </strong>
                and the monthly limit is <strong className="text-gray-900">2,00,000 Tk</strong>.
              </p>
            </div>
          </div>
        </div>

      </section>

      {/* SEO INTERNAL LINKS */}
      <section className="max-w-3xl mx-auto px-6 pb-12">
        <h3 className="text-center text-sm font-semibold text-gray-400 mb-4 uppercase tracking-wider">
          Browse by Provider
        </h3>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/bkash" className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-600 hover:border-pink-500 hover:text-pink-600 transition">
            bKash Calculator
          </Link>
          <Link href="/nagad" className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-600 hover:border-orange-500 hover:text-orange-600 transition">
            Nagad Calculator
          </Link>
          <Link href="/rocket" className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-600 hover:border-purple-500 hover:text-purple-600 transition">
            Rocket Calculator
          </Link>
          <Link href="/upay" className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-600 hover:border-blue-500 hover:text-blue-600 transition">
            Upay Calculator
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}