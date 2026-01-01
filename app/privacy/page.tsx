import Footer from "@/components/Footer";
import HomeButton from "@/components/HomeButton";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata = {
    title: "Privacy Policy",
    description: "Privacy policy and data usage for cashoutcalc.tech",
    alternates: {
        canonical: 'https://cashoutcalc.tech/privacy',
    },
};

export default function Privacy() {
    return (
        <main className="min-h-screen bg-gray-50 flex flex-col">
            <HomeButton />

            <div className="flex-grow max-w-3xl mx-auto px-6 py-12 md:py-20 font-sans text-gray-800">
                {/* Breadcrumb Navigation */}
                <Breadcrumbs items={[{ label: 'Privacy Policy' }]} className="mb-8" />

                <h1 className="text-3xl md:text-4xl font-extrabold mb-8 text-gray-900">Privacy Policy</h1>
                <div className="prose prose-blue max-w-none bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                    <p className="text-sm text-gray-500 mb-6">Last updated: January 1, 2026</p>

                    <p className="mb-4">
                        At cashoutcalc.tech, accessible from https://cashoutcalc.tech, one of the primary priorities is the privacy of visitors. This Privacy Policy document describes the types of information collected and recorded by Cashoutcalc.tech and how that information is used.
                    </p>

                    <h2 className="text-xl font-bold mt-8 mb-4 text-gray-900">Log Files</h2>
                    <p className="mb-4">
                        Cashoutcalc.tech follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services&apos; analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users&apos; movement on the website, and gathering demographic information.
                    </p>

                    <h2 className="text-xl font-bold mt-8 mb-4 text-gray-900">Google AdSense & Cookies</h2>
                    <p className="mb-4">
                        Google uses cookies to help serve the ads it displays on the websites of its partners, such as websites displaying Google ads or participating in Google certified ad networks. When users visit a Google partner&apos;s website, a cookie may be dropped on that end user&apos;s browser.
                    </p>
                    <p className="mb-4">
                        Third party vendors, including Google, use cookies to serve ads based on a user&apos;s prior visits to your website or other websites.
                    </p>
                    <p className="mb-4">
                        You have the option to opt-out of personalized advertising:
                    </p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li>
                            By visiting <a href="https://www.google.com/settings/ads" className="text-blue-600 hover:underline" target="_blank" rel="nofollow">Google Ads Settings</a>.
                        </li>
                        <li>
                            Alternatively, you can opt out of a third-party vendor&apos;s use of cookies for personalized advertising by visiting <a href="https://www.aboutads.info" className="text-blue-600 hover:underline" target="_blank" rel="nofollow">www.aboutads.info</a>.
                        </li>
                    </ul>

                    <h2 className="text-xl font-bold mt-8 mb-4 text-gray-900">Analytics</h2>
                    <p className="mb-4">
                        Cashoutcalc.tech uses Vercel Analytics to understand how visitors use the website. This service collects anonymous data such as page views, geographic location (country/region), device type, and browser information. No personally identifiable information or cookies are used for tracking.
                    </p>

                    <h2 className="text-xl font-bold mt-8 mb-4 text-gray-900">Consent</h2>
                    <p className="mb-4">
                        By using this website, you consent to this Privacy Policy and agree to its Terms and Conditions.
                    </p>

                    <h2 className="text-xl font-bold mt-8 mb-4 text-gray-900">Contact Us</h2>
                    <p className="mb-4">
                        For questions or additional information about this Privacy Policy, contact <strong>feedback@cashoutcalc.tech</strong>.
                    </p>
                </div>
            </div>

            <Footer />
        </main>
    );
}