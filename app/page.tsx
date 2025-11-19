import Calculator from '@/components/Calculator';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gray-50 font-sans">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">
          BD Cashout Charge
        </h1>
        <p className="text-gray-600">
          Check accurate cash-out fees for bKash, Nagad, Rocket & Upay
        </p>
      </div>
      
      <Calculator />
      
      <footer className="mt-12 text-sm text-gray-500">
        Built with Next.js & Tailwind
      </footer>
    </main>
  );
}