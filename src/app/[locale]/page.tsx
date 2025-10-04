'use client'
import { Hero } from '@/components/Hero'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui'
import Link from 'next/link'
import { Sparkles, Rocket, Settings } from 'lucide-react'
import { useEffect } from 'react'
import { track } from '@/lib/analytics'
import { useTranslations, useLocale } from 'next-intl'
import { motion } from 'framer-motion'
import { useLoadingComplete } from '@/lib/loading-context'
import { pocs } from '@/data/poc-ia'
import { Button } from '@/components/ui/Button'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  }
}

export default function Page() {
  const tServices = useTranslations('services')
  const tAbout = useTranslations('about')
  const tContact = useTranslations('contact')
  const tPoc = useTranslations('poc')
  const locale = useLocale()
  const { isLoadingComplete } = useLoadingComplete()

  const services = [
    {
      icon: Sparkles,
      title: tServices('audit.title'),
      description: tServices('audit.description'),
      features: [
        tServices('audit.feature1'),
        tServices('audit.feature2'),
        tServices('audit.feature3')
      ]
    },
    {
      icon: Rocket,
      title: tServices('prototype.title'),
      description: tServices('prototype.description'),
      features: [
        tServices('prototype.feature1'),
        tServices('prototype.feature2'),
        tServices('prototype.feature3')
      ]
    },
    {
      icon: Settings,
      title: tServices('deployment.title'),
      description: tServices('deployment.description'),
      features: [
        tServices('deployment.feature1'),
        tServices('deployment.feature2'),
        tServices('deployment.feature3')
      ]
    }
  ]

  const values = [
    {
      title: tAbout('value1_title'),
      description: tAbout('value1_desc')
    },
    {
      title: tAbout('value2_title'),
      description: tAbout('value2_desc')
    },
    {
      title: tAbout('value3_title'),
      description: tAbout('value3_desc')
    }
  ]

  useEffect(() => {
    track('page_view', { page: 'home' })
  }, [])

  const handleTallyOpen = () => {
    track('lead_submit', { source: 'tally_form', page: 'home' })
  }

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <Hero />

      {/* Services Section */}
      <section id="services" className="@container py-12 @lg:py-16 @3xl:py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 @lg:px-6">
          <motion.div
            initial="hidden"
            animate={isLoadingComplete ? "visible" : "hidden"}
            variants={fadeInUp}
            className="max-w-3xl mx-auto text-center mb-12 @lg:mb-16"
          >
            <h2 className="text-3xl @lg:text-4xl @3xl:text-5xl font-bold mb-4 @lg:mb-6 dark:text-white">
              {tServices('title')}
            </h2>
            <p className="text-base @lg:text-lg text-gray-600 dark:text-gray-400">
              {tServices('subtitle')}
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={isLoadingComplete ? "visible" : "hidden"}
            variants={staggerContainer}
            className="@container grid grid-cols-1 @2xl:grid-cols-2 @5xl:grid-cols-3 gap-6 @lg:gap-8 mb-12 @lg:mb-16"
          >
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div key={index} variants={cardVariants}>
                  <Card hover className="text-center h-full">
                    <CardHeader>
                      <div className="w-16 h-16 mx-auto mb-4 bg-brand-primary/10 rounded-2xl flex items-center justify-center">
                        <Icon className="w-8 h-8 text-brand-primary" />
                      </div>
                      <CardTitle as="h3">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4">{service.description}</p>
                      <ul className="space-y-2 text-sm text-left">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-brand-primary mt-1">✓</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>

          <motion.div
            initial="hidden"
            animate={isLoadingComplete ? "visible" : "hidden"}
            variants={fadeInUp}
            className="max-w-4xl mx-auto"
          >
            <h3 className="text-2xl @lg:text-3xl font-bold text-center mb-8 @lg:mb-12 dark:text-white">{tServices('method.title')}</h3>
            <motion.div
              variants={staggerContainer}
              className="@container space-y-6 @lg:space-y-8"
            >
              <motion.div variants={cardVariants} className="flex flex-col @lg:flex-row gap-4 @lg:gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-primary text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h4 className="text-lg @lg:text-xl font-semibold mb-2 dark:text-white">{tServices('method.step1_title')}</h4>
                  <p className="text-sm @lg:text-base text-gray-600 dark:text-gray-400">
                    {tServices('method.step1_desc')}
                  </p>
                </div>
              </motion.div>

              <motion.div variants={cardVariants} className="flex flex-col @lg:flex-row gap-4 @lg:gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-primary text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h4 className="text-lg @lg:text-xl font-semibold mb-2 dark:text-white">{tServices('method.step2_title')}</h4>
                  <p className="text-sm @lg:text-base text-gray-600 dark:text-gray-400">
                    {tServices('method.step2_desc')}
                  </p>
                </div>
              </motion.div>

              <motion.div variants={cardVariants} className="flex flex-col @lg:flex-row gap-4 @lg:gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-primary text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h4 className="text-lg @lg:text-xl font-semibold mb-2 dark:text-white">{tServices('method.step3_title')}</h4>
                  <p className="text-sm @lg:text-base text-gray-600 dark:text-gray-400">
                    {tServices('method.step3_desc')}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* POC Section */}
      <section id="poc" className="@container py-12 @lg:py-16 @3xl:py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 @lg:px-6">
          <motion.div
            initial="hidden"
            animate={isLoadingComplete ? "visible" : "hidden"}
            variants={fadeInUp}
            className="max-w-3xl mx-auto text-center mb-12 @lg:mb-16"
          >
            <h2 className="text-3xl @lg:text-4xl @3xl:text-5xl font-bold mb-4 @lg:mb-6 dark:text-white">
              {tPoc('title')}
            </h2>
            <p className="text-base @lg:text-lg text-gray-600 dark:text-gray-400">
              {tPoc('subtitle')}
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={isLoadingComplete ? "visible" : "hidden"}
            variants={staggerContainer}
            className="@container grid grid-cols-1 @2xl:grid-cols-2 @5xl:grid-cols-3 gap-6 @lg:gap-8 mb-8 @lg:mb-12"
          >
            {pocs.slice(0, 3).map((poc) => {
              const Icon = poc.icon
              const isComingSoon = poc.status === 'coming-soon'

              return (
                <motion.div key={poc.id} variants={cardVariants}>
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
                      {isComingSoon && (
                        <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-sm font-semibold rounded-full shadow-md">
                          {tPoc('coming_soon')}
                        </div>
                      )}

                      <div className="p-6 @lg:p-8">
                        <div className="w-16 h-16 @lg:w-20 @lg:h-20 mx-auto mb-4 @lg:mb-6 bg-gradient-to-br from-brand-primary/20 to-brand-primary/10 rounded-2xl flex items-center justify-center">
                          <Icon className="w-8 h-8 @lg:w-10 @lg:h-10 text-brand-primary" />
                        </div>

                        <h3 className="text-xl @lg:text-2xl font-bold mb-3 @lg:mb-4 text-center dark:text-white">
                          {poc.title[locale]}
                        </h3>

                        <p className="text-sm @lg:text-base text-gray-600 dark:text-gray-300 mb-4 text-center">
                          {poc.description[locale]}
                        </p>

                        <p className="text-sm italic text-gray-500 dark:text-gray-400 text-center">
                          {poc.tagline[locale]}
                        </p>
                      </div>
                    </Card>
                  </Link>
                </motion.div>
              )
            })}
          </motion.div>

          <motion.div
            initial="hidden"
            animate={isLoadingComplete ? "visible" : "hidden"}
            variants={fadeInUp}
            className="text-center"
          >
            <Button
              as="a"
              href={`/${locale}/poc-ia`}
              size="large"
              variant="primary"
            >
              {tPoc('view_all')}
            </Button>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="@container py-12 @lg:py-16 @3xl:py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 @lg:px-6">
          <motion.div
            initial="hidden"
            animate={isLoadingComplete ? "visible" : "hidden"}
            variants={fadeInUp}
            className="max-w-3xl mx-auto text-center mb-12 @lg:mb-16"
          >
            <h2 className="text-3xl @lg:text-4xl @3xl:text-5xl font-bold mb-4 @lg:mb-6 dark:text-white">
              {tAbout('title')}
            </h2>
            <p className="text-base @lg:text-lg text-gray-600 dark:text-gray-400">
              {tAbout('subtitle')}
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={isLoadingComplete ? "visible" : "hidden"}
            variants={fadeInUp}
            className="@container max-w-4xl mx-auto mb-12 @lg:mb-16"
          >
            <Card className="p-6 @lg:p-8 @3xl:p-12">
              <h3 className="text-2xl @lg:text-3xl font-bold mb-4 @lg:mb-6 dark:text-white">{tAbout('story_title')}</h3>
              <div className="@container prose max-w-none text-gray-600 dark:text-gray-400">
                <p>
                  {tAbout('story_p1')}
                </p>
                <p>
                  {tAbout('story_p2')}
                </p>
                <p>
                  {tAbout('story_p3')}
                </p>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={isLoadingComplete ? "visible" : "hidden"}
            variants={fadeInUp}
            className="@container mb-12 @lg:mb-16"
          >
            <h3 className="text-2xl @lg:text-3xl font-bold text-center mb-8 @lg:mb-12 dark:text-white">{tAbout('values_title')}</h3>
            <motion.div
              variants={staggerContainer}
              className="@container grid grid-cols-1 @2xl:grid-cols-2 @5xl:grid-cols-3 gap-6 @lg:gap-8"
            >
              {values.map((value, index) => (
                <motion.div key={index} variants={cardVariants}>
                  <Card hover className="text-center h-full">
                    <div className="w-12 h-12 mx-auto mb-4 bg-brand-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-2xl font-bold text-brand-primary">{index + 1}</span>
                    </div>
                    <h4 className="text-xl font-semibold mb-3 dark:text-white">{value.title}</h4>
                    <p className="text-gray-600 dark:text-gray-400">{value.description}</p>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="@container py-12 @lg:py-16 @3xl:py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 @lg:px-6">
          <motion.div
            initial="hidden"
            animate={isLoadingComplete ? "visible" : "hidden"}
            variants={fadeInUp}
            className="max-w-2xl mx-auto text-center mb-8 @lg:mb-12"
          >
            <h2 className="text-3xl @lg:text-4xl @3xl:text-5xl font-bold mb-4 dark:text-white">{tContact('title')}</h2>
            <p className="text-base @lg:text-lg text-gray-600 dark:text-gray-400">
              {tContact('subtitle')}
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={isLoadingComplete ? "visible" : "hidden"}
            variants={staggerContainer}
            className="@container grid grid-cols-1 @3xl:grid-cols-2 gap-8 @lg:gap-12 max-w-5xl mx-auto"
          >
            <motion.div variants={cardVariants} className="@container bg-white dark:bg-gray-800 rounded-3xl shadow-soft p-6 @lg:p-8">
              <h3 className="text-2xl font-semibold mb-6 dark:text-white">{tContact('form_title')}</h3>
              <div className="space-y-4">
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {tContact('form_instructions')}
                </p>
                <ol className="text-sm text-gray-600 dark:text-gray-400 list-decimal list-inside space-y-2">
                  <li>{tContact('form_step1')} <a href="https://tally.so" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">tally.so</a></li>
                  <li>{tContact('form_step2')}</li>
                  <li>{tContact('form_step3')}</li>
                </ol>

                <div className="mt-6 p-6 bg-gray-50 dark:bg-gray-700 rounded-2xl border-2 border-dashed border-gray-300 dark:border-gray-600">
                  <p className="text-center text-gray-500 dark:text-gray-400">
                    {tContact('form_placeholder')}
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={cardVariants} className="@container space-y-6 @lg:space-y-8">
              <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-soft p-6 @lg:p-8">
                <h3 className="text-xl font-semibold mb-4 dark:text-white">{tContact('booking_title')}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {tContact('booking_desc')}
                </p>
                <a
                  href={process.env.NEXT_PUBLIC_CALENDLY_URL || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => track('book_call', { source: 'home_page' })}
                  className="inline-block px-6 py-3 bg-brand-primary text-white rounded-3xl hover:bg-brand-secondary transition-all duration-300 hover:shadow-lg"
                >
                  {tContact('booking_cta')}
                </a>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-soft p-6 @lg:p-8">
                <h3 className="text-lg @lg:text-xl font-semibold mb-4 dark:text-white">{tContact('info_title')}</h3>
                <div className="space-y-3 text-gray-600 dark:text-gray-400">
                  <p>
                    <strong>{tContact('info_email')}</strong>{' '}
                    <a href="mailto:contact@hitom.fr" className="text-brand-primary hover:underline">
                      contact@hitom.fr
                    </a>
                  </p>
                  <p>
                    <strong>{tContact('info_response')}</strong> {tContact('info_response_time')}
                  </p>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-soft p-6 @lg:p-8">
                <h3 className="text-lg @lg:text-xl font-semibold mb-4 dark:text-white">{tContact('social_title')}</h3>
                <div className="flex gap-4">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-brand-primary transition-colors"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-brand-primary transition-colors"
                  >
                    Twitter
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={isLoadingComplete ? "visible" : "hidden"}
            variants={fadeInUp}
            className="@container mt-12 @lg:mt-16 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-2xl @lg:rounded-3xl p-8 @lg:p-12 text-center text-white"
          >
            <h3 className="text-2xl @lg:text-3xl font-bold mb-3 @lg:mb-4">{tContact('cta_title')}</h3>
            <p className="text-base @lg:text-lg mb-6 @lg:mb-8 opacity-90">
              {tContact('cta_subtitle')}
            </p>
            <div className="flex flex-col @lg:flex-row items-center justify-center gap-3 @lg:gap-4">
              <a
                href="#contact"
                className="w-full @lg:w-auto px-6 @lg:px-8 py-3 bg-white text-brand-primary rounded-3xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                {tContact('cta_contact')}
              </a>
              <a
                href={process.env.NEXT_PUBLIC_CALENDLY_URL || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full @lg:w-auto px-6 @lg:px-8 py-3 border-2 border-white text-white rounded-3xl font-semibold hover:bg-white hover:text-brand-primary transition-all duration-300"
              >
                {tContact('cta_book')}
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
