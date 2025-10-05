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
  { key: 'services', href: '#services' },
  { key: 'poc', href: '#poc' },
  { key: 'about', href: '#about' },
  { key: 'contact', href: '#contact' }
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const pathname = usePathname()
  const router = useRouter()
  const locale = useLocale()
  const t = useTranslations('nav')
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  // Scroll Spy - Détecter la section active
  useEffect(() => {
    const handleScroll = () => {
      const sections = navigation.map(item => item.href.slice(1)) // Enlever le #

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          // Si la section est visible dans le viewport (avec un offset pour le header)
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    // Vérifier si on est sur la homepage
    const isHomepage = pathname === `/${locale}` || pathname === `/${locale}/`
    if (isHomepage) {
      handleScroll() // Initial check
      window.addEventListener('scroll', handleScroll, { passive: true })
      return () => window.removeEventListener('scroll', handleScroll)
    } else {
      setActiveSection('') // Reset si pas sur homepage
    }
  }, [pathname, locale])

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
    // Fermer le menu mobile dans tous les cas
    setMobileMenuOpen(false)

    // Si c'est une ancre (commence par #)
    if (href.startsWith('#')) {
      // Vérifier si on est sur la homepage
      const isHomepage = pathname === `/${locale}` || pathname === `/${locale}/`
      const sectionId = href.slice(1) // Enlever le #

      if (isHomepage) {
        // On est sur la homepage, faire le scroll smooth
        e.preventDefault()
        const element = document.getElementById(sectionId)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }
      // Sinon, laisser Next.js gérer la navigation normale
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
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
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navigation.map(item => {
              const isActive = activeSection === item.href.slice(1)
              return (
                <Link
                  key={item.href}
                  href={item.href.startsWith('#') ? `/${locale}/${item.href}` : `/${locale}${item.href}`}
                  onClick={(e) => handleClick(e, item.href)}
                  className={`relative text-gray-700 dark:text-gray-300 hover:text-brand-primary dark:hover:text-brand-secondary transition-colors duration-200 ${
                    isActive ? 'text-brand-primary dark:text-brand-secondary font-semibold' : ''
                  }`}
                >
                  {t(item.key)}
                  {isActive && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand-primary dark:bg-brand-secondary"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              )
            })}

            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="relative p-2"
              aria-label="Toggle theme"
            >
              <div className="relative w-14 h-7 rounded-full bg-gray-300 dark:bg-gray-600 transition-colors duration-300">
                {mounted && (
                  <>
                    <div className={`absolute inset-0 flex items-center justify-between px-2 transition-opacity duration-300 ${theme === 'light' ? 'opacity-100' : 'opacity-0'}`}>
                      <Moon className="w-3 h-3 text-indigo-300 ml-auto" />
                    </div>
                    <div className={`absolute inset-0 flex items-center justify-between px-2 transition-opacity duration-300 ${theme === 'dark' ? 'opacity-100' : 'opacity-0'}`}>
                      <Sun className="w-3 h-3 text-yellow-500" />
                    </div>
                    <div className={`absolute top-0.5 left-0.5 w-6 h-6 rounded-full bg-white shadow-md transition-transform duration-300 flex items-center justify-center ${theme === 'dark' ? 'translate-x-7' : 'translate-x-0'}`}>
                      {theme === 'dark' ? (
                        <Moon className="w-3 h-3 text-indigo-500" />
                      ) : (
                        <Sun className="w-3 h-3 text-yellow-500" />
                      )}
                    </div>
                  </>
                )}
              </div>
            </button>
          </div>

          {/* Mobile Actions */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="relative p-2"
              aria-label="Toggle theme"
            >
              <div className="relative w-14 h-7 rounded-full bg-gray-300 dark:bg-gray-600 transition-colors duration-300">
                {mounted && (
                  <>
                    <div className={`absolute inset-0 flex items-center justify-between px-2 transition-opacity duration-300 ${theme === 'light' ? 'opacity-100' : 'opacity-0'}`}>
                      <Moon className="w-3 h-3 text-indigo-300 ml-auto" />
                    </div>
                    <div className={`absolute inset-0 flex items-center justify-between px-2 transition-opacity duration-300 ${theme === 'dark' ? 'opacity-100' : 'opacity-0'}`}>
                      <Sun className="w-3 h-3 text-yellow-500" />
                    </div>
                    <div className={`absolute top-0.5 left-0.5 w-6 h-6 rounded-full bg-white shadow-md transition-transform duration-300 flex items-center justify-center ${theme === 'dark' ? 'translate-x-7' : 'translate-x-0'}`}>
                      {theme === 'dark' ? (
                        <Moon className="w-3 h-3 text-indigo-500" />
                      ) : (
                        <Sun className="w-3 h-3 text-yellow-500" />
                      )}
                    </div>
                  </>
                )}
              </div>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 dark:text-gray-300 min-h-[44px] min-w-[44px] flex items-center justify-center"
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
              transition={{ duration: 0.2 }}
              className="md:hidden"
            >
              <div className="mt-4 pb-4 border-t border-gray-100 dark:border-gray-800 pt-4 space-y-1">
                {navigation.map((item) => {
                  const isActive = activeSection === item.href.slice(1)
                  return (
                    <Link
                      key={item.href}
                      href={item.href.startsWith('#') ? `/${locale}/${item.href}` : `/${locale}${item.href}`}
                      onClick={(e) => handleClick(e, item.href)}
                      className={`block py-2 text-gray-700 dark:text-gray-300 hover:text-brand-primary dark:hover:text-brand-secondary transition-colors duration-200 ${
                        isActive ? 'text-brand-primary dark:text-brand-secondary font-semibold' : ''
                      }`}
                    >
                      {t(item.key)}
                    </Link>
                  )
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
