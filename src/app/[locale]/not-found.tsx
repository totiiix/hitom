'use client'
import Link from 'next/link'
import { useLocale, useTranslations } from 'next-intl'
import { Button } from '@/components/ui'
import { Home, Mail, Sparkles, Rocket, Settings, Search, ArrowLeft } from 'lucide-react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function NotFound() {
  const locale = useLocale()
  const t = useTranslations('notFound')
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation({ threshold: 0.1 })
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation({ threshold: 0.1 })

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div
            ref={heroRef}
            className={`text-center transition-all duration-700 ${
              heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {/* 404 avec icône */}
            <div className="mb-8 flex items-center justify-center gap-4">
              <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-2xl bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center animate-pulse">
                <Search className="w-10 h-10 lg:w-12 lg:h-12 text-white" />
              </div>
              <span className="text-8xl lg:text-9xl font-bold bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
                {t('error_code')}
              </span>
            </div>

            <h1 className="text-fluid-3xl font-bold mb-4 dark:text-white">
              {t('title')}
            </h1>

            <p className="text-fluid-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              {t('description')}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                variant="outline"
                size="large"
                onClick={() => window.history.back()}
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                {t('go_back')}
              </Button>
              <Link href={`/${locale}`}>
                <Button variant="primary" size="large">
                  <Home className="w-5 h-5 mr-2" />
                  {t('back_home')}
                </Button>
              </Link>
              <Link href={`/${locale}#contact`}>
                <Button variant="outline" size="large">
                  <Mail className="w-5 h-5 mr-2" />
                  {t('contact_us')}
                </Button>
              </Link>
            </div>
          </div>

          {/* Popular Pages Cards */}
          <div
            ref={cardsRef}
            className={`mt-16 lg:mt-24 transition-all duration-700 delay-200 ${
              cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-2xl font-bold text-center mb-8 dark:text-white">
              {t('popular_pages_title')}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Services */}
              <Link href={`/${locale}#services`}>
                <div className="group p-6 bg-white dark:bg-gray-800 rounded-2xl border-2 border-gray-200 dark:border-gray-700 hover:border-brand-primary dark:hover:border-brand-primary transition-all duration-300 hover:shadow-xl cursor-pointer">
                  <div className="w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center mb-4 group-hover:bg-brand-primary group-hover:scale-110 transition-all duration-300">
                    <Sparkles className="w-6 h-6 text-brand-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 dark:text-white group-hover:text-brand-primary dark:group-hover:text-brand-primary transition-colors">
                    {t('services')}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {t('services_desc')}
                  </p>
                </div>
              </Link>

              {/* POC IA */}
              <Link href={`/${locale}/poc-ia`}>
                <div className="group p-6 bg-white dark:bg-gray-800 rounded-2xl border-2 border-gray-200 dark:border-gray-700 hover:border-brand-primary dark:hover:border-brand-primary transition-all duration-300 hover:shadow-xl cursor-pointer">
                  <div className="w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center mb-4 group-hover:bg-brand-primary group-hover:scale-110 transition-all duration-300">
                    <Rocket className="w-6 h-6 text-brand-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 dark:text-white group-hover:text-brand-primary dark:group-hover:text-brand-primary transition-colors">
                    {t('poc_ia')}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {t('poc_ia_desc')}
                  </p>
                </div>
              </Link>

              {/* About */}
              <Link href={`/${locale}#about`}>
                <div className="group p-6 bg-white dark:bg-gray-800 rounded-2xl border-2 border-gray-200 dark:border-gray-700 hover:border-brand-primary dark:hover:border-brand-primary transition-all duration-300 hover:shadow-xl cursor-pointer">
                  <div className="w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center mb-4 group-hover:bg-brand-primary group-hover:scale-110 transition-all duration-300">
                    <Settings className="w-6 h-6 text-brand-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 dark:text-white group-hover:text-brand-primary dark:group-hover:text-brand-primary transition-colors">
                    {t('about')}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {t('about_desc')}
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
