'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import Image from 'next/image'
import { Menu, X, Moon, Sun } from 'lucide-react'
import { useLocale, useTranslations } from 'next-intl'
import { useTheme } from 'next-themes'
import { locales } from '@/lib/i18n'
import { motion, AnimatePresence } from 'framer-motion'

const navigation = [
  { key: 'home', href: '/' },
  { key: 'services', href: '#services' },
  { key: 'poc', href: '/poc-ia' },
  { key: 'about', href: '#about' },
  { key: 'contact', href: '#contact' }
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const locale = useLocale()
  const t = useTranslations('nav')
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const localeNames: Record<string, string> = {
    fr: 'Français',
    en: 'English',
    zh: '中文',
    es: 'Español'
  }

  const switchLocale = (newLocale: string) => {
    // Enlever le hash si présent
    const pathWithoutHash = pathname.split('#')[0]
    const segments = pathWithoutHash.split('/')
    segments[1] = newLocale
    const newPath = segments.join('/')

    // Forcer un rechargement complet de la page
    window.location.href = newPath
  }

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Si c'est une ancre et qu'on est sur la homepage
    if (href.startsWith('#')) {
      e.preventDefault()
      const element = document.getElementById(href.slice(1))
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
      setMobileMenuOpen(false)
    }
  }

  return (
    <header className="@container fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center gap-3">
            <Image
              src="/brand/logo.png"
              alt="Logo Hitom"
              width={48}
              height={48}
              priority
              className="rounded-xl w-12 h-auto"
            />
            <span className="text-xl font-bold text-brand-dark dark:text-white">Hitom</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden @2xl:flex items-center gap-8">
            {navigation.map(item => (
              <Link
                key={item.href}
                href={item.href.startsWith('#') ? item.href : `/${locale}${item.href}`}
                onClick={(e) => handleClick(e, item.href)}
                className="text-gray-700 dark:text-gray-300 hover:text-brand-primary dark:hover:text-brand-secondary transition-colors duration-200"
              >
                {t(item.key)}
              </Link>
            ))}

            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="text-gray-700 dark:text-gray-300 hover:text-brand-primary dark:hover:text-brand-secondary transition-all duration-200 hover:scale-110"
              aria-label="Toggle theme"
            >
              {mounted ? (
                theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />
              ) : (
                <div className="w-5 h-5" />
              )}
            </button>
          </div>

          {/* Mobile Actions */}
          <div className="@2xl:hidden flex items-center gap-4">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="text-gray-700 dark:text-gray-300"
              aria-label="Toggle theme"
            >
              {mounted ? (
                theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />
              ) : (
                <div className="w-5 h-5" />
              )}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 dark:text-gray-300"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="@2xl:hidden overflow-hidden"
            >
              <div className="mt-4 pb-4 border-t border-gray-100 dark:border-gray-800 pt-4 space-y-1">
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.2 }}
                  >
                    <Link
                      href={item.href.startsWith('#') ? item.href : `/${locale}${item.href}`}
                      onClick={(e) => handleClick(e, item.href)}
                      className="block py-2 text-gray-700 dark:text-gray-300 hover:text-brand-primary dark:hover:text-brand-secondary transition-colors duration-200"
                    >
                      {t(item.key)}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
