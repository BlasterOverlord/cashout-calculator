import Link from 'next/link';
import HomeButton from '@/components/HomeButton';
import Footer from '@/components/Footer';

export const metadata = {
  title: "Blog | CashOutCalc.tech",
  description: "Latest guides, comparisons, and tips for Mobile Financial Services (bKash, Nagad, Rocket, Upay) in Bangladesh.",
};

const blogPosts = [
  {
    slug: "bkash-vs-nagad-vs-rocket-2025",
    title: "bKash vs Nagad vs Rocket: Which is Best in 2025?",
    excerpt: "A complete comparison of cash out charges, limits, and features to help you decide which MFS provider saves you the most money.",
    date: "December 5, 2025",
    readTime: "5 min read"
  },
  {
    slug: "how-to-save-on-cash-out-charges",
    title: "5 Proven Ways to Save Money on Cash Out Charges",
    excerpt: "Stop paying 18.50 Tk per thousand. Learn how to use Priyo numbers, ATMs, and Apps to cut your withdrawal fees by up to 50%.",
    date: "December 4, 2025",
    readTime: "4 min read"
  },
  {
    slug: "bkash-priyo-agent-guide",
    title: "bKash Priyo Agent: Everything You Need to Know",
    excerpt: "How to set a Priyo number, what the limits are, and how to get the reduced 1.49% cash out rate.",
    date: "December 3, 2025",
    readTime: "3 min read"
  }
];

export default function BlogIndex() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col">
      <HomeButton />
      
      <div className="flex-grow max-w-4xl mx-auto px-6 py-12 md:py-20 font-sans text-gray-800">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-gray-500">
          <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <span className="font-medium text-gray-900">Blog</span>
        </nav>

        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">Latest Guides & Tips</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Expert advice on managing your mobile wallet, saving on fees, and understanding the latest MFS regulations in Bangladesh.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
              <article className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 h-full transition-all duration-300 hover:shadow-md hover:border-blue-200 flex flex-col">
                <div className="mb-4 text-xs font-medium text-gray-400 flex justify-between items-center">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
                  {post.excerpt}
                </p>
                <div className="text-blue-600 text-sm font-semibold flex items-center gap-1 mt-auto">
                  Read Article 
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 transition-transform group-hover:translate-x-1">
                    <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                  </svg>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
      
      <Footer />
    </main>
  );
}