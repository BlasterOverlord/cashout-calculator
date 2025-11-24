import Footer from "@/components/Footer";
import HomeButton from "@/components/HomeButton";

export const metadata = {
    title: "Privacy Policy | CashOutCalc.tech",
    description: "Privacy policy and data usage for CashOutCalc.tech",
};

export default function Privacy() {
    return (
        <main className="min-h-screen bg-gray-50 flex flex-col">
            <HomeButton />

            <div className="flex-grow max-w-3xl mx-auto px-6 py-12 md:py-20 font-sans text-gray-800">
                <h1 className="text-3xl md:text-4xl font-extrabold mb-8 text-gray-900">Privacy Policy</h1>
                <div className="prose prose-blue max-w-none bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                    <p className="text-sm text-gray-500 mb-6">Last updated: November 24, 2025</p>

                    <p className="mb-4">
                        At CashOutCalc.tech, accessible from https://cashoutcalc.tech, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by CashOutCalc.tech and how we use it.
                    </p>

                    <h2 className="text-xl font-bold mt-8 mb-4 text-gray-900">Google AdSense & Cookies</h2>
                    <p className="mb-4">
                        Google uses cookies to help serve the ads it displays on the websites of its partners, such as websites displaying Google ads or participating in Google certified ad networks. When users visit a Google partner&apos;s website, a cookie may be dropped on that end user&apos;s browser.
                    </p>
                    <p className="mb-4">
                        Third party vendors, including Google, use cookies to serve ads based on a user&apos;s prior visits to your website or other websites. You may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" className="text-blue-600 hover:underline" target="_blank" rel="nofollow">Google Ads Settings</a>.
                    </p>

                    <h2 className="text-xl font-bold mt-8 mb-4 text-gray-900">Analytics</h2>
                    <p className="mb-4">
                        We use Vercel Analytics to understand how visitors use our website. This service collects anonymous data such as page views, geographic location (country/region), device type, and browser information. No personally identifiable information or cookies are used for tracking.
                    </p>
                </div>
            </div>

            <Footer />
        </main>
    );
}