import Calculator from '@/components/Calculator';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 font-sans">
      
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
                This rate applies up to a monthly limit of 25,000-50,000 Tk depending on current policy. 
                After the limit, it reverts to 1.85%.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg text-gray-900 mb-2">Which is cheaper: bKash or Nagad?</h3>
              <p className="leading-relaxed">
                Currently, <strong className="text-gray-900">Nagad App</strong> is cheaper at approx 1.30% compared to bKash&apos;s standard 1.85%. 
                However, bKash ATM Cash Out (via BRAC Bank/Q-Cash) is competitive at 1.49%.
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
      
      <footer className="text-center py-8 text-gray-400 text-sm bg-white border-t border-gray-100">
        <p>© 2025 BD Cash Out Calculator. Not affiliated with bKash, Nagad, Rocket, or Upay.</p>
      </footer>
    </main>
  );
}