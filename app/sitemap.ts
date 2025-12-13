import { MetadataRoute } from 'next'
import { providers } from '@/utils/pricingData'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://cashoutcalc.tech'

  const homeEntry = {
    url: baseUrl,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 1,
  }

  const providerEntries = providers.map((provider) => ({
    url: `${baseUrl}/${provider.name.toLowerCase()}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const staticPages = [
    'about',
    'contact',
    'privacy',
    'terms',
    'blog',
  ].map((route) => ({
    url: `${baseUrl}/${route}`,
    lastModified: new Date(),
    changeFrequency: 'yearly' as const,
    priority: 0.5,
  }))

  const blogPosts = [
    'how-to-secure-bkash-nagad-account',
    'mfs-transaction-limits-2026',
    'bkash-vs-nagad-vs-rocket-vs-upay-2026',
    'how-to-save-on-cash-out-charges',
    'bkash-priyo-agent-guide',
  ].map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // return the combined list
  return [homeEntry, ...providerEntries, ...staticPages, ...blogPosts]
}