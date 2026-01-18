import Link from 'next/link';
import HomeButton from '@/components/HomeButton';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import { blogPosts } from '@/utils/blogData';
import { notFound } from 'next/navigation';

const post = blogPosts.find(p => p.slug === 'mfs-transaction-limits')!

export const metadata = {
  title: "Mobile Banking Transaction Limits 2026: bKash, Nagad, Rocket & Upay | CashOutCalc",
  description: "Updated daily and monthly transaction limits for bKash, Nagad, Rocket, and Upay. Know your Cash Out, Send Money, and Payment limits in 2026.",
  alternates: {
    canonical: 'https://cashoutcalc.tech/blog/mfs-transaction-limits',
  },
};

export default function BlogPost() {
  if (!post) {
    return notFound()
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "datePublished": "2026-01-05",
    "dateModified": post.lastModified,
    "author": {
      "@type": "Organization",
      "name": "CashOutCalc"
    },
    "description": "Updated daily and monthly transaction limits for bKash, Nagad, Rocket, and Upay."
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
            { label: "MFS Transaction Limits 2026"}
          ]} 
          className="mb-8" 
        />

        <header className="mb-10">
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <time dateTime={post.lastModified} itemProp="dateModified">
              {post.date}
            </time>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
        </header>

        <div className="prose prose-blue max-w-none bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <p className="text-lg leading-relaxed mb-6">
            Have you ever tried to cash out money in an emergency only to see the dreaded <strong>&quot;Limit Exceeded&quot;</strong> message? It happens to the best of us. Bangladesh Bank sets strict limits on Mobile Financial Services (MFS) to prevent money laundering and ensure security.
          </p>
          <p className="text-lg leading-relaxed mb-8">
            In 2026, these limits are more important than ever as we rely on bKash, Nagad, Rocket, and Upay for everything from grocery shopping to paying bills. Here is the complete breakdown of transaction limits for all major providers.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8 rounded-r-lg">
            <p className="text-blue-900">
              <strong>Pro Tip:</strong> Transaction limits are reset at the beginning of every calendar month. If you hit your limit on bKash, you can still use Nagad or Rocket as they have separate limits!
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Cash Out Limits (Agent & ATM)</h2>
          <p className="mb-4">
            This is the most critical limit for most users. &quot;Cash Out&quot; refers to withdrawing physical money from an Agent point or an ATM.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-3 border border-gray-200">Provider</th>
                  <th className="p-3 border border-gray-200">Daily Limit</th>
                  <th className="p-3 border border-gray-200">Monthly Limit</th>
                  <th className="p-3 border border-gray-200">Max Count (Daily)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border border-gray-200 font-semibold">bKash</td>
                  <td className="p-3 border border-gray-200">30,000 Tk</td>
                  <td className="p-3 border border-gray-200">200,000 Tk</td>
                  <td className="p-3 border border-gray-200">10 times</td>
                </tr>
                <tr>
                  <td className="p-3 border border-gray-200 font-semibold">Nagad</td>
                  <td className="p-3 border border-gray-200">30,000 Tk</td>
                  <td className="p-3 border border-gray-200">200,000 Tk</td>
                  <td className="p-3 border border-gray-200">15 times</td>
                </tr>
                <tr>
                  <td className="p-3 border border-gray-200 font-semibold">Rocket</td>
                  <td className="p-3 border border-gray-200">25,000 Tk</td>
                  <td className="p-3 border border-gray-200">150,000 Tk</td>
                  <td className="p-3 border border-gray-200">5 times</td>
                </tr>
                <tr>
                  <td className="p-3 border border-gray-200 font-semibold">Upay</td>
                  <td className="p-3 border border-gray-200">30,000 Tk</td>
                  <td className="p-3 border border-gray-200">200,000 Tk</td>
                  <td className="p-3 border border-gray-200">5 times</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 italic mb-6">
            *Note: ATM Cash Out limits are usually included within these daily limits.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Send Money Limits (P2P)</h2>
          <p className="mb-4">
            Sending money to friends and family (Person to Person) has higher limits than cashing out.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-3 border border-gray-200">Provider</th>
                  <th className="p-3 border border-gray-200">Daily Limit</th>
                  <th className="p-3 border border-gray-200">Monthly Limit</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border border-gray-200 font-semibold">bKash</td>
                  <td className="p-3 border border-gray-200">50,000 Tk</td>
                  <td className="p-3 border border-gray-200">300,000 Tk</td>
                </tr>
                <tr>
                  <td className="p-3 border border-gray-200 font-semibold">Nagad</td>
                  <td className="p-3 border border-gray-200">50,000 Tk</td>
                  <td className="p-3 border border-gray-200">300,000 Tk</td>
                </tr>
                <tr>
                  <td className="p-3 border border-gray-200 font-semibold">Rocket</td>
                  <td className="p-3 border border-gray-200">25,000 Tk</td>
                  <td className="p-3 border border-gray-200">75,000 Tk</td>
                </tr>
                <tr>
                  <td className="p-3 border border-gray-200 font-semibold">Upay</td>
                  <td className="p-3 border border-gray-200">50,000 Tk</td>
                  <td className="p-3 border border-gray-200">300,000 Tk</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mb-6">
            <strong>Cost Warning:</strong> Remember that Send Money is often free up to a certain amount (e.g., 100 Tk or 500 Tk), but charges apply for larger amounts (usually 5 Tk or 10 Tk).
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Cash In (Deposit) Limits</h2>
          <p className="mb-4">
            How much money can you put into your account?
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-3 border border-gray-200">Provider</th>
                  <th className="p-3 border border-gray-200">Daily Limit</th>
                  <th className="p-3 border border-gray-200">Monthly Limit</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border border-gray-200 font-semibold">bKash</td>
                  <td className="p-3 border border-gray-200">50,000 Tk</td>
                  <td className="p-3 border border-gray-200">300,000 Tk</td>
                </tr>
                <tr>
                  <td className="p-3 border border-gray-200 font-semibold">Nagad</td>
                  <td className="p-3 border border-gray-200">50,000 Tk</td>
                  <td className="p-3 border border-gray-200">300,000 Tk</td>
                </tr>
                <tr>
                  <td className="p-3 border border-gray-200 font-semibold">Rocket</td>
                  <td className="p-3 border border-gray-200">30,000 Tk</td>
                  <td className="p-3 border border-gray-200">200,000 Tk</td>
                </tr>
                <tr>
                  <td className="p-3 border border-gray-200 font-semibold">Upay</td>
                  <td className="p-3 border border-gray-200">50,000 Tk</td>
                  <td className="p-3 border border-gray-200">300,000 Tk</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Payment & Mobile Recharge</h2>
          <p className="mb-4">
            Good news! Payments for shopping (Merchant Pay) and Mobile Recharge usually have <strong>no strict limits</strong> or very high limits.
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Merchant Payment:</strong> No official limit (depends on account balance).</li>
            <li><strong>Mobile Recharge:</strong> No official limit.</li>
            <li><strong>Bill Pay:</strong> No official limit.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How to Check Your Remaining Limit</h2>
          <p className="mb-4">
            You don&apos;t need to guess. You can check your remaining limit instantly in the app:
          </p>
          <ol className="list-decimal pl-6 mb-6 space-y-2">
            <li><strong>bKash App:</strong> Tap the bKash menu (top right) {'>'} Limits.</li>
            <li><strong>Nagad App:</strong> Go to &quot;My Nagad&quot; {'>'} Limits.</li>
            <li><strong>Rocket App:</strong> Check &quot;My Account&quot; or &quot;Limits&quot; section.</li>
          </ol>

          <div className="bg-gray-100 p-6 rounded-xl mt-8">
            <h3 className="text-xl font-bold mb-2">Need to Calculate cash out Fees?</h3>
            <p className="mb-4">
              Knowing your limit is half the battle. Knowing the cost is the other half.
            </p>
            <Link href="/" className="inline-block bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors">
              Open Fee Calculator
            </Link>
          </div>
        </div>
      </article>
      
      <Footer />
    </main>
  );
}
