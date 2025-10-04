'use client'
import Link from 'next/link'
import { useLocale, useTranslations } from 'next-intl'
import { usePathname } from 'next/navigation'
import { Globe } from 'lucide-react'
import { locales } from '@/lib/i18n'

const footerLinks = {
  company: [
    { key: 'about', href: '/#about', scroll: true },
    { key: 'services', href: '/#services', scroll: true },
    { key: 'poc', href: '/poc-ia', scroll: false },
    { key: 'contact', href: '/#contact', scroll: true }
  ],
  legal: [
    { key: 'legal_mentions', href: '/legal' },
    { key: 'privacy', href: '/privacy' },
    { key: 'cookies', href: '/cookies' }
  ],
  social: [
    { name: 'LinkedIn', href: 'https://linkedin.com' },
    { name: 'Twitter', href: 'https://twitter.com' },
    { name: 'GitHub', href: 'https://github.com' }
  ]
}

export function Footer() {
  const locale = useLocale()
  const pathname = usePathname()
  const currentYear = new Date().getFullYear()
  const t = useTranslations('footer')
  const tNav = useTranslations('nav')

  const localeNames: Record<string, string> = {
    fr: 'Français',
    en: 'English',
    zh: '中文',
    es: 'Español'
  }

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, link: typeof footerLinks.company[0]) => {
    if (link.scroll && pathname === `/${locale}`) {
      e.preventDefault()
      const targetId = link.href.split('#')[1]
      if (targetId) {
        const element = document.getElementById(targetId)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }
    }
  }

  const switchLocale = (newLocale: string) => {
    const pathWithoutHash = pathname.split('#')[0]
    const segments = pathWithoutHash.split('/')
    segments[1] = newLocale
    const newPath = segments.join('/')
    window.location.href = newPath
  }

  return (
    <footer className="@container bg-brand-dark text-white mt-16">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 @2xl:grid-cols-5 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4">Hitom</h3>
            <p className="text-gray-400 text-sm">
              {t('tagline')}
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-4">{t('company')}</h4>
            <ul className="space-y-2">
              {footerLinks.company.map(link => (
                <li key={link.href}>
                  <Link
                    href={`/${locale}${link.href}`}
                    onClick={(e) => handleNavClick(e, link)}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {tNav(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold mb-4">{t('legal')}</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map(link => (
                <li key={link.href}>
                  <Link
                    href={`/${locale}${link.href}`}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {t(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-4">{t('social')}</h4>
            <ul className="space-y-2">
              {footerLinks.social.map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Language Switcher */}
          <div>
            <h4 className="font-semibold mb-4 flex items-center gap-2">
              <Globe className="w-4 h-4" />
              {tNav('language')}
            </h4>
            <ul className="space-y-2">
              {locales.map(loc => (
                <li key={loc}>
                  <button
                    onClick={() => switchLocale(loc)}
                    className={`text-sm transition-colors duration-200 ${
                      loc === locale
                        ? 'text-white font-medium'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {localeNames[loc]}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>&copy; {currentYear} Hitom. {t('copyright')}</p>
        </div>
      </div>
    </footer>
  )
}
