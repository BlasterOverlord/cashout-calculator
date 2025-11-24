import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Calculator from '@/components/Calculator';
import { providers } from '@/utils/pricingData';
import HomeButton from '@/components/HomeButton';
import Footer from '@/components/Footer';

// 1. Define params as a Promise (Next.js 15+ Requirement)
interface Props {
	params: Promise<{ provider: string }>;
}

// 2. Helper to find data
const getProviderData = (slug: string) => {
	if (!slug) return undefined;
	return providers.find(p => p.name.toLowerCase() === slug.toLowerCase());
};

// 3. DYNAMIC SEO METADATA
export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const resolvedParams = await params;
	const provider = getProviderData(resolvedParams.provider);

	if (!provider) {
		return {
			title: "Provider Not Found",
		};
	}

	return {
		title: `${provider.name} Cash Out Charge Calculator 2025`,
		description: `Calculate the exact cash out fee for ${provider.name} App and USSD. Check Priyo numbers, ATM charges, and monthly limits instantly.`,
		alternates: {
			canonical: `https://cashoutcalc.tech/${resolvedParams.provider.toLowerCase()}`,
		}
	};
}

// 4. THE PAGE CONTENT
export default async function ProviderPage({ params }: Props) {
	const resolvedParams = await params;
	const provider = getProviderData(resolvedParams.provider);

	if (!provider) {
		notFound();
	}

	return (
		<main className="min-h-screen bg-gray-50">
			<HomeButton />
			{/* Hero Section */}
			<section className="flex flex-col items-center justify-center pt-12 pb-8 px-4">
				<div className="text-center mb-8">
					<h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">
						<span className={provider.theme.text}>{provider.name}</span> Cash Out Charge
					</h1>
					<p className="text-gray-600 text-lg max-w-xl mx-auto">
						Calculate <span className="font-semibold">{provider.name}</span> fees for App, USSD, and ATM.
						Updated for 2025.
					</p>
				</div>

				{/* Pass the provider name so the calculator starts with it selected */}
				<Calculator initialProviderName={provider.name} />
			</section>

			{/* SEO Content Specific to this Provider */}
			<section className="max-w-3xl mx-auto px-6 py-12 space-y-8 text-gray-700">
				<div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
					<h2 className="text-2xl font-bold text-gray-900 mb-4">Why use this {provider.name} Calculator?</h2>
					<p>
						Calculating {provider.name} charges manually is difficult because of different rates for App, USSD, and ATMs.
						This tool helps you find the exact amount deducted from your balance.
					</p>
					<ul className="list-disc pl-5 space-y-2 text-sm mt-2">
						<li>Check {provider.name} <strong>App vs USSD</strong> rates instantly.</li>
						<li>Calculate <strong>Priyo Agent</strong> discounts (if applicable).</li>
						<li>See the total deduction needed for your <strong>Cash Out</strong>.</li>
						<li>Updated for <strong>2025 fees</strong> and limits.</li>
					</ul>
				</div>
			</section>

			<Footer />
		</main>
	);
}

// 5. STATIC PARAMS GENERATION
export async function generateStaticParams() {
	return providers.map((provider) => ({
		provider: provider.name.toLowerCase(),
	}));
}