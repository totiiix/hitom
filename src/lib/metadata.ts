import type { Metadata } from 'next'

interface PageMetadata {
  title: string
  description: string
  path: string
  locale?: string
}

export function generatePageMetadata({
  title,
  description,
  path,
  locale = 'fr'
}: PageMetadata): Metadata {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://hitom.fr'
  const fullUrl = `${siteUrl}${path}`

  return {
    title: `${title} | Hitom`,
    description,
    openGraph: {
      title: `${title} | Hitom`,
      description,
      url: fullUrl,
      siteName: 'Hitom',
      locale: locale === 'zh' ? 'zh_CN' : locale === 'es' ? 'es_ES' : locale === 'en' ? 'en_US' : 'fr_FR',
      type: 'website',
      images: [
        {
          url: `${siteUrl}/brand/logo.png`,
          width: 1200,
          height: 630,
          alt: 'Hitom'
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | Hitom`,
      description,
      images: [`${siteUrl}/brand/logo.png`]
    },
    alternates: {
      canonical: fullUrl,
      languages: {
        'fr': `${siteUrl}/fr${path}`,
        'en': `${siteUrl}/en${path}`,
        'zh': `${siteUrl}/zh${path}`,
        'es': `${siteUrl}/es${path}`
      }
    }
  }
}
