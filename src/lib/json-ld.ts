export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Hitom',
    url: 'https://hitom.fr',
    logo: 'https://hitom.fr/brand/logo.png',
    description: 'Agence digitale spécialisée en audit, prototypage et déploiement de solutions innovantes',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'FR'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'contact@hitom.fr',
      contactType: 'Customer Service',
      availableLanguage: ['French', 'English', 'Chinese', 'Spanish']
    },
    sameAs: [
      'https://linkedin.com/company/hitom',
      'https://twitter.com/hitom'
    ]
  }
}

export function getWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Hitom',
    url: 'https://hitom.fr',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://hitom.fr/search?q={search_term_string}',
      'query-input': 'required name=search_term_string'
    }
  }
}

export function getBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  }
}

export function getArticleSchema({
  title,
  description,
  datePublished,
  dateModified,
  author,
  image,
  url
}: {
  title: string
  description: string
  datePublished: string
  dateModified?: string
  author?: string
  image?: string
  url: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      '@type': 'Person',
      name: author || 'Hitom'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Hitom',
      logo: {
        '@type': 'ImageObject',
        url: 'https://hitom.fr/brand/logo.png'
      }
    },
    image: image || 'https://hitom.fr/brand/logo.png',
    url
  }
}
