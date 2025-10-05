'use client'
import Link from 'next/link'
import { useLocale } from 'next-intl'
import { Button } from '@/components/ui'

export default function NotFound() {
  const locale = useLocale()

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <span className="text-8xl lg:text-9xl font-bold text-brand-primary">404</span>
        </div>

        <h1 className="text-fluid-3xl font-bold mb-4 dark:text-white">
          Page introuvable
        </h1>

        <p className="text-fluid-lg text-gray-600 dark:text-gray-400 mb-8">
          Désolé, la page que vous cherchez n'existe pas ou a été déplacée.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href={`/${locale}`}>
            <Button variant="primary" size="large">
              Retour à l'accueil
            </Button>
          </Link>
          <Link href={`/${locale}#contact`}>
            <Button variant="outline" size="large">
              Nous contacter
            </Button>
          </Link>
        </div>

        <div className="mt-16 lg:mt-24 p-8 lg:p-12 bg-gray-50 dark:bg-gray-800 rounded-3xl">
          <h2 className="text-xl font-semibold mb-4">Pages populaires</h2>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href={`/${locale}#services`} className="text-brand-primary hover:underline">
              Services
            </Link>
            <span className="text-gray-300">•</span>
            <Link href={`/${locale}/poc-ia`} className="text-brand-primary hover:underline">
              POC IA
            </Link>
            <span className="text-gray-300">•</span>
            <Link href={`/${locale}#about`} className="text-brand-primary hover:underline">
              À propos
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
