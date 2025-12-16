import { MetadataRoute } from 'next'
import { pocs } from '@/data/poc-ia'

const locales = ['fr', 'en', 'es', 'zh'] as const
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://hitom.fr'

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date()

  // Pages principales pour chaque locale
  const mainPages = locales.flatMap((locale) => [
    {
      url: `${baseUrl}/${locale}`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/${locale}/poc-ia`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/${locale}/legal`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/${locale}/privacy`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/${locale}/cookies`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/${locale}/assets-graphiques`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.4,
    },
  ])

  // Pages POC individuelles pour chaque locale
  const pocPages = locales.flatMap((locale) =>
    pocs.map((poc) => ({
      url: `${baseUrl}/${locale}/poc-ia/${poc.slug}`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }))
  )

  return [...mainPages, ...pocPages]
}
