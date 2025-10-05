'use client'

import { useTranslations, useLocale } from 'next-intl'
import { getPocBySlug } from '@/data/poc-ia'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useLoadingComplete } from '@/lib/loading-context'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { ArrowLeft, Lock } from 'lucide-react'

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

export default function PocDetailPage({ params }: { params: { slug: string } }) {
  const t = useTranslations('poc')
  const locale = useLocale()
  const { isLoadingComplete } = useLoadingComplete()

  const poc = getPocBySlug(params.slug)

  if (!poc) {
    notFound()
  }

  const Icon = poc.icon
  const isComingSoon = poc.status === 'coming-soon'
  const hasArticles = poc.articles.length > 0
  const hasDiagrams = poc.diagrams.length > 0
  const hasVideos = poc.videos.length > 0

  return (
    <main className="pt-20">
      {/* Breadcrumb */}
      <section className="py-6 lg:py-8 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href={`/${locale}/poc-ia`}
            className="inline-flex items-center gap-2 text-brand-primary hover:text-brand-primary/80 transition-colors"
          >
            <span className="text-fluid-base">{t('back_to_list')}</span>
          </Link>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-12 lg:py-16 bg-white dark:bg-gray-900">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isLoadingComplete ? "visible" : "hidden"}
          className="container mx-auto px-4 sm:px-6 lg:px-8"
        >
          {/* Icon & Status */}
          <motion.div variants={itemVariants} className="flex flex-col items-center mb-6 lg:mb-8">
            <div className="w-20 h-20 lg:w-24 lg:h-24 mb-4 bg-gradient-to-br from-brand-primary/20 to-brand-primary/10 rounded-2xl flex items-center justify-center">
              <Icon className="w-10 h-10 lg:w-12 lg:h-12 text-brand-primary" />
            </div>
            {isComingSoon && (
              <div className="px-4 py-1.5 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-sm font-semibold rounded-full shadow-md">
                {t('status_coming_soon')}
              </div>
            )}
          </motion.div>

          {/* Title & Description */}
          <motion.h1
            variants={itemVariants}
            className="text-fluid-3xl font-bold mb-4 lg:mb-6 dark:text-white text-center"
          >
            {poc.title[locale]}
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-fluid-lg text-gray-600 dark:text-gray-400 text-center max-w-3xl mx-auto mb-4"
          >
            {poc.description[locale]}
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-fluid-base italic text-gray-500 dark:text-gray-500 text-center max-w-2xl mx-auto mb-8 lg:mb-10"
          >
            {poc.tagline[locale]}
          </motion.p>

          {/* CTA Button */}
          <motion.div variants={itemVariants} className="flex justify-center">
            {isComingSoon ? (
              <div className="relative group">
                <Button
                  size="large"
                  disabled
                  className="cursor-not-allowed opacity-50 flex items-center gap-2"
                >
                  <Lock className="w-4 h-4" />
                  {t('access_saas')}
                </Button>
                <div className="absolute hidden group-hover:block bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 dark:bg-gray-700 text-white text-sm rounded-lg whitespace-nowrap shadow-lg">
                  {t('coming_soon')}
                </div>
              </div>
            ) : (
              <a
                href={poc.saasUrl || '#'}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="large">
                  {t('access_saas')}
                </Button>
              </a>
            )}
          </motion.div>
        </motion.div>
      </section>

      {/* Articles Section */}
      {hasArticles && (
        <section className="py-12 lg:py-16 bg-gray-50 dark:bg-gray-800">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isLoadingComplete ? "visible" : "hidden"}
            className="container mx-auto px-4 sm:px-6 lg:px-8"
          >
            <motion.h2
              variants={itemVariants}
              className="text-fluid-2xl font-bold mb-8 lg:mb-10 dark:text-white text-center"
            >
              {t('how_built')}
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
              {poc.articles.map((article, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card hover className="h-full p-6">
                    <h3 className="text-fluid-xl font-bold mb-3 dark:text-white">
                      {article.title[locale]}
                    </h3>
                    <p className="text-fluid-base text-gray-600 dark:text-gray-300 mb-4">
                      {article.content[locale]}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {new Date(article.date).toLocaleDateString(locale)}
                    </p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
      )}

      {/* Diagrams Section */}
      {hasDiagrams && (
        <section className="py-12 lg:py-16 bg-white dark:bg-gray-900">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isLoadingComplete ? "visible" : "hidden"}
            className="container mx-auto px-4 sm:px-6 lg:px-8"
          >
            <motion.h2
              variants={itemVariants}
              className="text-fluid-2xl font-bold mb-8 lg:mb-10 dark:text-white text-center"
            >
              {t('diagrams')}
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
              {poc.diagrams.map((diagram, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="h-full overflow-hidden">
                    <img
                      src={diagram.imageUrl}
                      alt={diagram.alt[locale]}
                      className="w-full h-auto object-cover"
                    />
                    <div className="p-4">
                      <h3 className="text-fluid-lg font-semibold dark:text-white">
                        {diagram.title[locale]}
                      </h3>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
      )}

      {/* Videos Section */}
      {hasVideos && (
        <section className="py-12 lg:py-16 bg-gray-50 dark:bg-gray-800">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isLoadingComplete ? "visible" : "hidden"}
            className="container mx-auto px-4 sm:px-6 lg:px-8"
          >
            <motion.h2
              variants={itemVariants}
              className="text-fluid-2xl font-bold mb-8 lg:mb-10 dark:text-white text-center"
            >
              {t('videos')}
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
              {poc.videos.map((video, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="h-full overflow-hidden">
                    <div className="aspect-video">
                      {video.platform === 'youtube' && (
                        <iframe
                          src={video.url}
                          title={video.title[locale]}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="w-full h-full"
                        />
                      )}
                      {video.platform === 'loom' && (
                        <iframe
                          src={video.url}
                          title={video.title[locale]}
                          allowFullScreen
                          className="w-full h-full"
                        />
                      )}
                      {video.platform === 'vimeo' && (
                        <iframe
                          src={video.url}
                          title={video.title[locale]}
                          allow="autoplay; fullscreen; picture-in-picture"
                          allowFullScreen
                          className="w-full h-full"
                        />
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="text-fluid-lg font-semibold dark:text-white">
                        {video.title[locale]}
                      </h3>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
      )}

      {/* Empty State when no content */}
      {!hasArticles && !hasDiagrams && !hasVideos && (
        <section className="py-12 lg:py-16 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-fluid-lg text-gray-500 dark:text-gray-400">
              {t('coming_soon')}
            </p>
          </div>
        </section>
      )}
    </main>
  )
}
