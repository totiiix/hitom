import Link from 'next/link'
import { Button } from '@/components/ui'

export default function NotFound() {
  return (
    <div className="@container container mx-auto px-6 py-24">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <span className="text-9xl font-bold text-brand-primary">404</span>
        </div>

        <h1 className="text-4xl @lg:text-5xl font-bold mb-4">
          Page introuvable
        </h1>

        <p className="text-lg text-gray-600 mb-8">
          Désolé, la page que vous cherchez n'existe pas ou a été déplacée.
        </p>

        <div className="@container flex items-center justify-center gap-4">
          <Link href="/">
            <Button variant="primary" size="large">
              Retour à l'accueil
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline" size="large">
              Nous contacter
            </Button>
          </Link>
        </div>

        <div className="mt-16 p-8 bg-gray-50 rounded-3xl">
          <h2 className="text-xl font-semibold mb-4">Pages populaires</h2>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/services" className="text-brand-primary hover:underline">
              Services
            </Link>
            <span className="text-gray-300">•</span>
            <Link href="/blog" className="text-brand-primary hover:underline">
              Blog
            </Link>
            <span className="text-gray-300">•</span>
            <Link href="/about" className="text-brand-primary hover:underline">
              À propos
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
