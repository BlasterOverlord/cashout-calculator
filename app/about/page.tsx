import Link from "next/link";
import HomeButton from "@/components/HomeButton";
import Footer from "@/components/Footer";

export const metadata = {
  title: "About Us | CashOutCalc.tech",
};

export default function About() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12 text-gray-800">
      <HomeButton />
      <h1 className="text-3xl font-bold mb-6">About Us</h1>
      <p className="mb-4">
        Welcome to <strong>Cash Out Calculator</strong>, your number one source for accurate Mobile Financial Service (MFS) fee calculations in Bangladesh.
      </p>
      <p className="mb-4">
        Dedicated to giving you the very best calculator tool, with a focus on accuracy, up-to-date charges, and user-friendly design.
      </p>
      <h2 className="text-xl font-bold mt-6 mb-2">Why I Created This Tool</h2>
      <p className="mb-4">
        Calculating cash-out charges for bKash, Nagad, and Rocket has become complicated with the introduction of &quot;Priyo Agent&quot; numbers and varying app vs. USSD rates. I built this tool to help everyday users save time and money by planning their withdrawals smartly.
      </p>
      <p>
        If you have any questions or comments, please don&apos;t hesitate to
        {" "}
        <Link href="/contact" className="text-blue-600 hover:underline">
          contact me
        </Link>
        .
      </p>
      <Footer />
    </main>
  );
}