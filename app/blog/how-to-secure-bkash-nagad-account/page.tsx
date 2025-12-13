import Link from 'next/link';
import HomeButton from '@/components/HomeButton';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata = {
  title: "5 Golden Rules to Keep Your bKash & Nagad Account Safe | CashOutCalc",
  description: "Protect your mobile wallet from scammers. Learn how to spot fake calls, secure your PIN, and what to do if you lose your phone.",
  alternates: {
    canonical: 'https://cashoutcalc.tech/blog/how-to-secure-bkash-nagad-account',
  },
};

export default function BlogPost() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "5 Golden Rules to Keep Your bKash & Nagad Account Safe",
    "datePublished": "2025-12-11",
    "author": {
      "@type": "Organization",
      "name": "CashOutCalc Team"
    },
    "description": "Protect your mobile wallet from scammers. Learn how to spot fake calls, secure your PIN, and what to do if you lose your phone."
  };

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomeButton />
      
      <article className="flex-grow max-w-3xl mx-auto px-6 py-12 md:py-20 font-sans text-gray-800">
        {/* Breadcrumb */}
        <Breadcrumbs 
          items={[
            { label: 'Blog', href: '/blog' },
            { label: 'Account Security Guide' }
          ]} 
          className="mb-8" 
        />

        <header className="mb-10">
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            5 Golden Rules to Keep Your bKash & Nagad Account Safe
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span>December 11, 2025</span>
            <span>•</span>
            <span>4 min read</span>
          </div>
        </header>

        <div className="prose prose-blue max-w-none bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <p className="text-lg leading-relaxed mb-6">
            Mobile Financial Services (MFS) like bKash, Nagad, and Rocket have made our lives easier, but they have also attracted scammers. Every day, innocent users lose thousands of Taka to simple tricks.
          </p>
          <p className="text-lg leading-relaxed mb-8">
            The good news? <strong>99% of these scams are avoidable</strong> if you follow a few simple rules. Here is how to bulletproof your account in 2026.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Never Share Your PIN or OTP</h2>
          <p className="mb-4">
            This is rule #1 for a reason.
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>PIN:</strong> Your Personal Identification Number is for your eyes only. No bKash/Nagad employee will EVER ask for your PIN.</li>
            <li><strong>OTP:</strong> The One Time Password sent to your SMS is the key to your account. If you share this, a hacker can take over your account instantly.</li>
          </ul>
          <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6 rounded-r-lg">
            <p className="text-red-900 font-bold">
              If someone calls claiming to be from "Head Office" and asks for a code sent to your phone, HANG UP. It is a scam.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Don't Trust the "Cash In" SMS</h2>
          <p className="mb-4">
            A common scam involves sending a fake SMS that <em>looks</em> like a bKash/Nagad confirmation.
          </p>
          <p className="mb-4">
            <strong>The Scam:</strong> You receive an SMS saying "Cash In Tk 5,000 Successful". Then someone calls you saying they sent money by mistake and asks you to send it back.
          </p>
          <p className="mb-4">
            <strong>The Fix:</strong> Always check your <strong>Balance</strong> in the App or by dialing USSD (*247# / *167#). Never rely on the SMS alone. If the balance didn't increase, the money isn't there.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Avoid "Lottery" and "Offer" Links</h2>
          <p className="mb-4">
            "Congratulations! You won an iPhone!"
          </p>
          <p className="mb-4">
            If you see a link on Facebook, WhatsApp, or SMS promising free money or prizes if you click and log in—don't do it. These are <strong>Phishing</strong> sites designed to steal your password. Only use the official Apps from the Google Play Store or Apple App Store.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Use a Strong PIN</h2>
          <p className="mb-4">
            Don't use easy-to-guess PINs like:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>12345</li>
            <li>11111</li>
            <li>Your birth year (e.g., 1990)</li>
            <li>Last digits of your phone number</li>
          </ul>
          <p className="mb-4">
            If your phone is stolen, these are the first numbers a thief will try.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. What to Do If You Lose Your Phone</h2>
          <p className="mb-4">
            If your phone is lost or stolen, act fast:
          </p>
          <ol className="list-decimal pl-6 mb-6 space-y-2">
            <li><strong>Call the Helpline Immediately:</strong> Call 16247 (bKash), 16167 (Nagad), or 16216 (Rocket).</li>
            <li><strong>Block Your Account:</strong> Ask the agent to temporarily suspend your wallet so no one can withdraw money.</li>
            <li><strong>Replace SIM:</strong> Go to your SIM operator (Grameenphone, Robi, etc.) to get a replacement SIM. Your MFS account is tied to the SIM, not the phone.</li>
          </ol>

          <div className="bg-green-50 p-6 rounded-xl mt-8 border border-green-100">
            <h3 className="text-xl font-bold mb-2 text-green-900">Stay Safe, Save Money</h3>
            <p className="mb-4 text-green-800">
              Now that your account is secure, make sure you aren't losing money to high fees!
            </p>
            <Link href="/" className="inline-block bg-green-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-700 transition-colors">
              Check Cash Out Charges
            </Link>
          </div>
        </div>
      </article>
      
      <Footer />
    </main>
  );
}
