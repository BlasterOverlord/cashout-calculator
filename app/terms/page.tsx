import Footer from "@/components/Footer";
import HomeButton from "@/components/HomeButton";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata = {
  title: "Terms of Service | CashOutCalc.tech",
  alternates: {
    canonical: 'https://cashoutcalc.tech/terms',
  },
};

export default function Terms() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col">
      <HomeButton />
      
      <div className="flex-grow max-w-3xl mx-auto px-6 py-12 md:py-20 font-sans text-gray-800">
        {/* Breadcrumb Navigation */}
        <Breadcrumbs items={[{ label: 'Terms of Service' }]} className="mb-8" />

        <h1 className="text-3xl md:text-4xl font-extrabold mb-8 text-gray-900">Terms of Service</h1>
        <div className="prose prose-blue max-w-none bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <p className="text-sm text-gray-500 mb-8">Last updated: December 28, 2025</p>

          <h2 className="text-xl font-bold mt-4 mb-4 text-gray-900">1. Acceptance of Terms</h2>
          <p className="mb-4">
            By accessing and using <strong>CashOutCalc.tech</strong>, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using this website's particular services, you shall be subject to any posted guidelines or rules applicable to such services.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-4 text-gray-900">2. Use License</h2>
          <p className="mb-4">
            Permission is granted to temporarily download one copy of the materials (information or software) on CashOutCalc.tech's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>modify or copy the materials;</li>
            <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
            <li>attempt to decompile or reverse engineer any software contained on CashOutCalc.tech's website;</li>
            <li>remove any copyright or other proprietary notations from the materials; or</li>
            <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
          </ul>
          <p className="mb-4">
            This license shall automatically terminate if you violate any of these restrictions and may be terminated by CashOutCalc.tech at any time.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-4 text-gray-900">3. Disclaimer</h2>
          <p className="mb-4">
            The materials on CashOutCalc.tech are provided "as is". CashOutCalc.tech makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties, including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
          </p>
          <p className="mb-4">
            Further, CashOutCalc.tech does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its Internet web site or otherwise relating to such materials or on any sites linked to this site. <strong>We are not affiliated with bKash, Nagad, Rocket, Upay, or any other financial service provider mentioned.</strong>
          </p>

          <h2 className="text-xl font-bold mt-8 mb-4 text-gray-900">4. Limitations</h2>
          <p className="mb-4">
            In no event shall CashOutCalc.tech or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption,) arising out of the use or inability to use the materials on CashOutCalc.tech's Internet site, even if CashOutCalc.tech or a CashOutCalc.tech authorized representative has been notified orally or in writing of the possibility of such damage.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-4 text-gray-900">5. Revisions and Errata</h2>
          <p className="mb-4">
            The materials appearing on CashOutCalc.tech's web site could include technical, typographical, or photographic errors. CashOutCalc.tech does not warrant that any of the materials on its web site are accurate, complete, or current. CashOutCalc.tech may make changes to the materials contained on its web site at any time without notice.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-4 text-gray-900">6. Links</h2>
          <p className="mb-4">
            CashOutCalc.tech has not reviewed all of the sites linked to its Internet web site and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by CashOutCalc.tech of the site. Use of any such linked web site is at the user's own risk.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-4 text-gray-900">7. Site Terms of Use Modifications</h2>
          <p className="mb-4">
            CashOutCalc.tech may revise these terms of use for its web site at any time without notice. By using this web site you are agreeing to be bound by the then current version of these Terms and Conditions of Use.
          </p>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}