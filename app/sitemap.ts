import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://cashoutcharge.com', // Change this to actual domain
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}