import HomeButton from "@/components/HomeButton";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata = {
  title: "Contact",
  alternates: {
    canonical: 'https://cashoutcalc.tech/contact',
  },
};

export default function Contact() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12 font-sans text-gray-800">
      <HomeButton />

      {/* Breadcrumb Navigation */}
      <Breadcrumbs items={[{ label: 'Contact' }]} className="mb-8" />

      <h1 className="text-3xl font-bold mb-6">Contact</h1>
      <p className="mb-6 text-lg leading-relaxed">
        This is a solo project and your feedback is what keeps it going. Whether you&apos;ve found a bug, have a feature suggestion, or want to report incorrect data, the project relies on community input to stay accurate and useful.
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-xl font-bold mb-4 text-gray-900">Get in Touch</h2>
          <p className="mb-4 text-gray-600">
            For general inquiries, bug reports, or partnership opportunities, please email directly. Typical response time is 24-48 hours.
          </p>
          <div className="flex items-center gap-3 text-blue-600 font-medium">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
            <a href="mailto:feedback@cashoutcalc.tech" className="hover:underline">feedback@cashoutcalc.tech</a>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-xl font-bold mb-4 text-gray-900">Common Topics</h2>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li>• Reporting an incorrect fee calculation</li>
            <li>• Suggesting a new MFS provider</li>
            <li>• Feature requests for the calculator</li>
            <li>• Advertising or sponsorship inquiries</li>
          </ul>
        </div>
      </div>
      <Footer />
    </main>
  );
}