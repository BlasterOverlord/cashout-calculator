import Link from "next/link";
import HomeButton from "@/components/HomeButton";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata = {
  title: "About Us | CashOutCalc.tech",
  alternates: {
    canonical: 'https://cashoutcalc.tech/about',
  },
};

export default function About() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12 text-gray-800">
      <HomeButton />
      
      {/* Breadcrumb Navigation */}
      <Breadcrumbs items={[{ label: 'About Us' }]} className="mb-8" />

      <h1 className="text-3xl font-bold mb-6">About Us</h1>
      
      <section className="mb-8">
        <p className="mb-4 text-lg leading-relaxed">
          Welcome to <strong>Cash Out Calculator</strong>, the most comprehensive and up-to-date fee calculation tool for Mobile Financial Services (MFS) in Bangladesh. We simplify the complex fee structures of bKash, Nagad, Rocket, and Upay so you can make informed financial decisions.
        </p>
        <p className="mb-4 text-lg leading-relaxed">
          Whether you are a student, a small business owner, or an everyday user, knowing the exact cash-out charge before you go to an agent can save you money and hassle.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Our Mission</h2>
        <p className="mb-4">
          Our mission is to bring transparency to digital financial transactions in Bangladesh. With varying rates for App withdrawals, USSD codes (*247#, *167#, etc.), and ATM cash-outs, it is easy to lose track of how much money is actually being deducted.
        </p>
        <p className="mb-4">
          We aim to provide:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li><strong>Accuracy:</strong> Real-time calculations based on the latest official tariff charts.</li>
          <li><strong>Simplicity:</strong> A clean, no-nonsense interface that works fast on any device.</li>
          <li><strong>Education:</strong> Clear explanations of "Priyo Agent" numbers, tiered pricing, and hidden VAT costs.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Why Trust Us?</h2>
        <p className="mb-4">
          We manually verify our data against the official websites and press releases of all major MFS providers. Our calculator is regularly updated to reflect:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Government tax/VAT changes.</li>
          <li>New &quot;Priyo&quot; number limits and conditions.</li>
          <li>Promotional rates for specific banks or ATMs.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">The Story Behind the Tool</h2>
        <p className="mb-4">
          Calculating cash-out charges used to be simple: just multiply by 1.85%. But today, with Nagad&apos;s lower rates, bKash&apos;s Priyo numbers, and Rocket&apos;s ATM advantages, the math has become complicated.
        </p>
        <p className="mb-4">
          I built this tool because I found myself constantly Googling &quot;bKash cash out charge&quot; and then manually calculating to figure out if I have enough balance on my wallet for this cash out. Not only was this troublesome but it was also error prone. This web app solves that problem instantly by calculating with the correct up-to-date rates and tiers.
        </p>
      </section>

      <section className="border-t pt-8">
        <p>
          If you have any questions, suggestions, or partnership inquiries, please don&apos;t hesitate to
          {" "}
          <Link href="/contact" className="text-blue-600 hover:underline font-medium">
            contact us
          </Link>
          .
        </p>
      </section>
      <Footer />
    </main>
  );
}