import { MetadataRoute } from 'next'
import { providers } from '@/utils/pricingData'
import { blogPosts } from '@/utils/blogData'

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
  
  const bp = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
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
  

  // return the combined list
  return [homeEntry, ...providerEntries, ...bp, ...staticPages]
}