import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Calculator from '@/components/Calculator';
import { providers } from '@/utils/pricingData';
import HomeButton from '@/components/HomeButton';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';

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

	const pageUrl = `https://cashoutcalc.tech/${resolvedParams.provider.toLowerCase()}`;

	return {
		title: provider.seoTitle || `${provider.name} Cash Out Charge Calculator 2026`,
		description: provider.description || `Calculate the exact cash out fee for ${provider.name} App and USSD. Check Priyo numbers, ATM charges, and monthly limits instantly.`,
		alternates: {
			canonical: pageUrl,
		},
		openGraph: {
			title: provider.seoTitle || `${provider.name} Cash Out Calculator`,
			description: provider.description || `Calculate exact cash out charges for ${provider.name} in Bangladesh.`,
			type: "website",
			url: pageUrl,
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
	const pageUrl = `https://cashoutcalc.tech/${resolvedParams.provider.toLowerCase()}`;

	// Clean up markdown from features for Schema
	const cleanFeatures = provider.uniqueFeatures?.map(f => f.replace(/\*\*/g, '')).join(', ');

	return (
		<main className="min-h-screen bg-gray-50">
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "WebApplication",
						"name": `${provider.name} Cash Out Calculator`,
						"url": pageUrl,
						"applicationCategory": "FinanceApplication",
						"operatingSystem": "Any",
						"description": provider.description || `Calculate ${provider.name} cash out charges for Bangladesh.`,
						"offers": {
							"@type": "Offer",
							"price": "0",
							"priceCurrency": "BDT"
						},
						"featureList": cleanFeatures || "Calculate App and USSD charges"
					})
				}}
			/>
			<HomeButton />

			{/* Breadcrumb Navigation */}
			<div className="max-w-3xl mx-auto px-6 pt-6">
				<Breadcrumbs items={[{ label: provider.name }]} />
			</div>

			{/* Hero Section */}
			<section className="flex flex-col items-center justify-center pt-6 pb-8 px-4">
				<div className="text-center mb-8">
					<h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">
						<span className={provider.theme.text}>{provider.name}</span> Cash Out Charge
					</h1>
					<p className="text-gray-600 text-lg max-w-xl mx-auto">
						Calculate <span className="font-semibold">{provider.name}</span> fees for App, USSD, and ATM.
						Updated for 2026.
					</p>
				</div>

				{/* Pass the provider name so the calculator starts with it selected */}
				<Calculator initialProviderName={provider.name} />
			</section>

			{/* SEO Content Specific to this Provider */}
			<section className="max-w-3xl mx-auto px-6 py-12 space-y-8 text-gray-700">
				<div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
					<h2 className="text-2xl font-bold text-gray-900 mb-4">Why use this {provider.name} Calculator?</h2>
					<p className="mb-4 text-lg leading-relaxed">
						{provider.description}
					</p>
					<h3 className="font-semibold text-gray-900 mb-3">Key Features & Benefits:</h3>
					<ul className="space-y-3 text-gray-700">
						{provider.uniqueFeatures?.map((feature, i) => (
							<li key={i} className="flex gap-3">
								<span className={`mt-1 min-w-[20px] font-bold ${provider.theme.text}`}>✓</span>
								<span>
									{feature.split('**').map((part, index) => 
										index % 2 === 1 ? <strong key={index} className="text-gray-900">{part}</strong> : part
									)}
								</span>
							</li>
						))}
					</ul>
				</div>

				<article className="prose prose-blue max-w-none bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
					<h2 className="text-2xl font-bold text-gray-900">Our Verdict on {provider.name}</h2>
					<p className="leading-relaxed text-lg">
						{provider.verdict}
					</p>

					<h3 className="text-xl font-semibold text-gray-800 mt-6">Regulatory Limits (2026)</h3>
					<p>
						Adhering to Bangladesh Bank regulations, {provider.name} enforces daily and monthly ceilings on cash-out transactions. While this calculator ensures you have the correct balance for fees, always ensure your transaction volume stays within the <strong>30,000 Tk daily</strong> (personal) limit to avoid transaction failures at the agent point.
					</p>
				</article>
			</section>

			<div className="max-w-3xl mx-auto px-6 pb-12">
				<h3 className="text-center text-sm font-semibold text-gray-400 mb-4 uppercase">
					Compare with Other Providers
				</h3>
				<div className="flex flex-wrap justify-center gap-4">
					{providers
						.filter(p => p.name !== provider.name)
						.map(p => {
							// Map provider names to their hover classes
							const hoverClass = 
								p.name === 'bKash' ? 'hover:border-pink-500 hover:text-pink-600' :
								p.name === 'Nagad' ? 'hover:border-orange-500 hover:text-orange-600' :
								p.name === 'Rocket' ? 'hover:border-purple-500 hover:text-purple-600' :
								p.name === 'Upay' ? 'hover:border-blue-500 hover:text-blue-600' :
								'hover:border-gray-400';
							
							return (
								<Link
									key={p.name}
									href={`/${p.name.toLowerCase()}`}
									className={`px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-600 transition ${hoverClass}`}
								>
									{p.name} Calculator
								</Link>
							);
						})
					}
				</div>
			</div>

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