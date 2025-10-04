'use client'

import { useTranslations, useLocale } from 'next-intl'
import { pocs } from '@/data/poc-ia'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useLoadingComplete } from '@/lib/loading-context'
import { Card } from '@/components/ui/Card'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
}

export default function PocIaPage() {
  const t = useTranslations('poc')
  const locale = useLocale()
  const { isLoadingComplete } = useLoadingComplete()

  return (
    <main className="@container pt-20">
      {/* Hero Section */}
      <section className="@container py-12 @lg:py-16 @3xl:py-20 bg-white dark:bg-gray-900">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isLoadingComplete ? "visible" : "hidden"}
          className="container mx-auto px-4 @lg:px-6"
        >
          <motion.h1
            variants={itemVariants}
            className="text-3xl @lg:text-4xl @3xl:text-5xl font-bold mb-4 @lg:mb-6 dark:text-white text-center"
          >
            {t('title')}
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-base @lg:text-lg text-gray-600 dark:text-gray-400 text-center max-w-3xl mx-auto"
          >
            {t('subtitle')}
          </motion.p>
        </motion.div>
      </section>

      {/* POC Cards Grid */}
      <section className="@container py-12 @lg:py-16 bg-gray-50 dark:bg-gray-800">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isLoadingComplete ? "visible" : "hidden"}
          className="container mx-auto px-4 @lg:px-6"
        >
          <div className="@container grid grid-cols-1 @2xl:grid-cols-2 @5xl:grid-cols-3 gap-6 @lg:gap-8">
            {pocs.map((poc) => {
              const Icon = poc.icon
              const isComingSoon = poc.status === 'coming-soon'

              return (
                <motion.div key={poc.id} variants={itemVariants}>
                  <Link
                    href={`/${locale}/poc-ia/${poc.slug}`}
                    className="block h-full"
                  >
                    <Card
                      hover
                      className={`relative h-full transition-all duration-300 ${
                        isComingSoon ? 'opacity-70 hover:opacity-85' : ''
                      }`}
                    >
                      {/* Coming Soon Badge */}
                      {isComingSoon && (
                        <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-sm font-semibold rounded-full shadow-md">
                          {t('coming_soon')}
                        </div>
                      )}

                      <div className="p-6 @lg:p-8">
                        {/* Icon */}
                        <div className="w-16 h-16 @lg:w-20 @lg:h-20 mx-auto mb-4 @lg:mb-6 bg-gradient-to-br from-brand-primary/20 to-brand-primary/10 rounded-2xl flex items-center justify-center">
                          <Icon className="w-8 h-8 @lg:w-10 @lg:h-10 text-brand-primary" />
                        </div>

                        {/* Title */}
                        <h3 className="text-xl @lg:text-2xl font-bold mb-3 @lg:mb-4 text-center dark:text-white">
                          {poc.title[locale]}
                        </h3>

                        {/* Description */}
                        <p className="text-sm @lg:text-base text-gray-600 dark:text-gray-300 mb-4 text-center">
                          {poc.description[locale]}
                        </p>

                        {/* Tagline */}
                        <p className="text-sm italic text-gray-500 dark:text-gray-400 text-center">
                          {poc.tagline[locale]}
                        </p>
                      </div>
                    </Card>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </section>
    </main>
  )
}
