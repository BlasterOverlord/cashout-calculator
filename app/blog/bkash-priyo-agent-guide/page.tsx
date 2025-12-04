import Link from 'next/link';
import HomeButton from '@/components/HomeButton';
import Footer from '@/components/Footer';

export const metadata = {
  title: "bKash Priyo Agent Guide 2025: How to Set & Save | CashOutCalc",
  description: "Step-by-step guide to setting up a bKash Priyo Agent number. Learn how to reduce your cash out charge to 1.49% and save money every month.",
};

export default function BlogPost() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "bKash Priyo Agent: Everything You Need to Know",
    "datePublished": "2025-12-03",
    "author": {
      "@type": "Organization",
      "name": "CashOutCalc Team"
    },
    "description": "Step-by-step guide to setting up a bKash Priyo Agent number to reduce cash out charges."
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
        <nav className="mb-8 text-sm text-gray-500">
          <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-blue-600 transition-colors">Blog</Link>
          <span className="mx-2">/</span>
          <span className="font-medium text-gray-900">bKash Priyo Agent Guide</span>
        </nav>

        <header className="mb-10">
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            bKash Priyo Agent: Everything You Need to Know
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span>December 3, 2025</span>
            <span>•</span>
            <span>3 min read</span>
          </div>
        </header>

        <div className="prose prose-blue max-w-none bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <p className="text-lg leading-relaxed mb-6">
            bKash introduced the <strong>&quot;Priyo Agent&quot;</strong> feature to give relief to regular users from high cash-out charges. But many users still don&apos;t use it because they don&apos;t know how to set it up or how it works.
          </p>
          <p className="text-lg leading-relaxed mb-8">
            This guide will explain exactly how to use this feature to lower your cash out fee from <strong>18.50 Tk</strong> to <strong>14.90 Tk</strong> per thousand.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What is a Priyo Agent?</h2>
          <p className="mb-4">
            A &quot;Priyo Agent&quot; is a specific bKash agent number that you select in your app. Once selected, any cash out made <em>specifically to that agent</em> will be charged at a lower rate.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 mb-6">
            <h3 className="font-bold text-blue-900 mb-2">The Math:</h3>
            <ul className="list-disc pl-6 space-y-1 text-blue-800">
              <li><strong>Regular Charge:</strong> 18.50 Tk per 1,000 Tk.</li>
              <li><strong>Priyo Agent Charge:</strong> 14.90 Tk per 1,000 Tk.</li>
              <li><strong>Savings:</strong> 3.60 Tk per 1,000 Tk.</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How to Add a Priyo Agent (Step-by-Step)</h2>
          <ol className="list-decimal pl-6 mb-6 space-y-3">
            <li>Open your <strong>bKash App</strong>.</li>
            <li>Tap on the <strong>&quot;Cash Out&quot;</strong> icon.</li>
            <li>Select <strong>&quot;Priyo Agent&quot;</strong> from the options.</li>
            <li>Tap the <strong>&quot;Add&quot;</strong> button.</li>
            <li>Enter the <strong>Agent Number</strong> of your local shop (or select from contacts/history).</li>
            <li>Enter your <strong>PIN</strong> to confirm.</li>
          </ol>
          <p className="mb-4">
            Congratulations! You have successfully added a Priyo Agent.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Important Limits & Rules</h2>
          <p className="mb-4">
            There are some restrictions you must know to avoid surprises:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Monthly Limit:</strong> The reduced rate applies only up to <strong>50,000 Tk</strong> per month.</li>
            <li><strong>Over the Limit:</strong> If you cash out more than 50,000 Tk in a month, the charge reverts to the standard <strong>18.50%</strong> for the excess amount.</li>
            <li><strong>One Agent Only:</strong> You can only have <strong>1 Priyo Agent</strong> at a time.</li>
            <li><strong>Changing Agent:</strong> You can change your Priyo Agent number only <strong>once per calendar month</strong>.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Common Mistakes to Avoid</h2>
          <p className="mb-4">
            <strong>Don&apos;t add a Personal Number:</strong> You cannot add a personal bKash account as a Priyo Agent. It must be an official Agent wallet.
          </p>
          <p className="mb-4">
            <strong>Don&apos;t forget to check the limit:</strong> Use our <Link href="/" className="text-blue-600 hover:underline">Calculator</Link> to see if your withdrawal will cross the 50,000 Tk limit. Our tool automatically calculates the split fee (part at 1.49%, part at 1.85%) so you know exactly how much will be deducted.
          </p>
        </div>
      </article>
      
      <Footer />
    </main>
  );
}