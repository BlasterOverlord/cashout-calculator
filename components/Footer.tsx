import Link from 'next/link';
import React from 'react';

export default function Footer() {
  return (
    <footer className="py-12 bg-white border-t border-gray-100 text-center mt-auto">
      <div className="flex flex-wrap justify-center gap-6 mb-4 text-sm text-gray-600">
        <Link href="/blog" className="hover:text-blue-600 transition-colors">Blog</Link>
        <Link href="/about" className="hover:text-blue-600 transition-colors">About Us</Link>
        <Link href="/contact" className="hover:text-blue-600 transition-colors">Contact</Link>
        <Link href="/privacy" className="hover:text-blue-600 transition-colors">Privacy Policy</Link>
        <Link href="/terms" className="hover:text-blue-600 transition-colors">Terms of Service</Link>
      </div>
      <p className="text-xs text-gray-400">
        © {new Date().getFullYear()} CashOutCalc.tech. Not affiliated with bKash, Nagad, Rocket or Upay.
      </p>
    </footer>
  );
}