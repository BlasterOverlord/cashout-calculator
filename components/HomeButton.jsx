import Link from 'next/link';

export default function HomeButton() {
  return (
    <div className="fixed bottom-4 right-4 z-50 md:bottom-6 md:right-6">
      <Link
        href="/"
        aria-label="Go to home page"
        className="group flex items-center gap-2 bg-white/85 backdrop-blur-md border border-gray-200 shadow-lg px-4 py-2 rounded-full text-sm font-medium text-gray-600 hover:bg-white hover:text-blue-600 hover:shadow-xl active:scale-[0.97] transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-colors"
          aria-hidden="true"
        >
          <path d="M3 11.5 12 3l9 8.5" />
          <path d="M5.5 9.5v9.25c0 .69.56 1.25 1.25 1.25h4.25v-4.5c0-.69.56-1.25 1.25-1.25h0c.69 0 1.25.56 1.25 1.25v4.5h4.25c.69 0 1.25-.56 1.25-1.25V9.5" />
        </svg>
        <span className="hidden sm:inline">Home</span>
      </Link>
    </div>
  );
}