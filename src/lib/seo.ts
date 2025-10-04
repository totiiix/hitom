import type { Metadata } from 'next'

export const defaultMetadata: Metadata = {
  title: 'Hitom — IA utile, expérience simple',
  description: 'Sites et produits IA conçus pour être compris et utilisés.',
  icons: [
    { rel: 'icon', url: '/brand/favicon-32.png' },
    { rel: 'apple-touch-icon', url: '/brand/apple-touch-icon.png' }
  ],
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://hitom.fr')
}
