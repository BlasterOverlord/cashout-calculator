import Footer from "@/components/Footer";
import HomeButton from "@/components/HomeButton";

export const metadata = {
  title: "Terms of Service | CashOutCalc.tech",
};

export default function Terms() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col">
      <HomeButton />
      
      <div className="flex-grow max-w-3xl mx-auto px-6 py-12 md:py-20 font-sans text-gray-800">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-8 text-gray-900">Terms of Service</h1>
        <div className="prose prose-blue max-w-none bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-xl font-bold mt-4 mb-4 text-gray-900">1. Terms</h2>
          <p className="mb-4">
            By accessing this website, you agree to be bound by these website Terms and Conditions of Use and agree that you are responsible for the agreement with any applicable local laws. If you disagree with any of these terms, you are prohibited from accessing this site.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-4 text-gray-900">2. Disclaimer</h2>
          <p className="mb-4">
            The materials on cashoutcalc.tech are provided &quot;as is&quot;. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties. Furthermore, we do not guarantee the accuracy of the calculation results as MFS providers (bKash, Nagad, etc.) may change their fees at any time without notice.
          </p>
          
          <h2 className="text-xl font-bold mt-8 mb-4 text-gray-900">3. Limitations</h2>
          <p className="mb-4">
            In no event shall CashOutCalc.tech be liable for any damages (including, without limitation, damages for loss of data or profit) arising out of the use or inability to use the materials on this website.
          </p>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}