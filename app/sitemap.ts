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

  // return the combined list
  return [homeEntry, ...providerEntries]
}