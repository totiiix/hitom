'use client'
import { Hero } from '@/components/Hero'
import { Card, CardHeader, CardTitle, CardContent, SkeletonCard, Accordion } from '@/components/ui'
import { ContactForm } from '@/components/ContactForm'
import Link from 'next/link'
import { Sparkles, Rocket, Settings, Check } from 'lucide-react'
import { useEffect, useState } from 'react'
import { track } from '@/lib/analytics'
import { useTranslations, useLocale } from 'next-intl'
import { useLoadingComplete } from '@/lib/loading-context'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { pocs } from '@/data/poc-ia'
import { Button } from '@/components/ui/Button'

export default function Page() {
  const tServices = useTranslations('services')
  const tAbout = useTranslations('about')
  const tContact = useTranslations('contact')
  const tPoc = useTranslations('poc')
  const tPricing = useTranslations('pricing')
  const tFaq = useTranslations('faq')
  const locale = useLocale()
  const { isLoadingComplete } = useLoadingComplete()

  // Scroll animations for each section
  const servicesTitle = useScrollAnimation({ threshold: 0.2 })
  const servicesCards = useScrollAnimation({ threshold: 0.1 })
  const servicesMethod = useScrollAnimation({ threshold: 0.2 })
  const pocSection = useScrollAnimation({ threshold: 0.2 })
  const pocCards = useScrollAnimation({ threshold: 0.1 })
  const aboutTitle = useScrollAnimation({ threshold: 0.2 })
  const aboutStory = useScrollAnimation({ threshold: 0.2 })
  const aboutValues = useScrollAnimation({ threshold: 0.1 })
  const pricingTitle = useScrollAnimation({ threshold: 0.2 })
  const pricingCards = useScrollAnimation({ threshold: 0.1 })
  const faqTitle = useScrollAnimation({ threshold: 0.2 })
  const faqAccordion = useScrollAnimation({ threshold: 0.1 })
  const contactTitle = useScrollAnimation({ threshold: 0.2 })
  const contactCards = useScrollAnimation({ threshold: 0.1 })
  const contactCta = useScrollAnimation({ threshold: 0.2 })

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

    // Gérer le scroll vers l'ancre si présente dans l'URL
    const hash = window.location.hash
    if (hash) {
      // Attendre que le DOM soit prêt
      setTimeout(() => {
        const element = document.getElementById(hash.slice(1))
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 100)
    }
  }, [])

  const handleTallyOpen = () => {
    track('lead_submit', { source: 'tally_form', page: 'home' })
  }

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <Hero />

      {/* Services Section */}
      <section id="services" className="py-16 lg:py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={servicesTitle.ref}
            className={`max-w-3xl mx-auto text-center mb-12 lg:mb-16 transition-all duration-300 ${
              servicesTitle.isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-fluid-3xl font-bold mb-4 dark:text-white">
              {tServices('title')}
            </h2>
            <p className="text-fluid-lg text-gray-600 dark:text-gray-400">
              {tServices('subtitle')}
            </p>
          </div>

          <div
            ref={servicesCards.ref}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12 lg:mb-16"
          >
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div
                  key={index}
                  className={`transition-all duration-700 ${
                    servicesCards.isVisible
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
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
                </div>
              )
            })}
          </div>

          <div
            ref={servicesMethod.ref}
            className={`max-w-4xl mx-auto transition-all duration-700 ${
              servicesMethod.isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            <h3 className="text-fluid-2xl font-bold text-center mb-8 lg:mb-12 dark:text-white">{tServices('method.title')}</h3>
            <div className="space-y-6 lg:space-y-8">
              {[
                { title: tServices('method.step1_title'), desc: tServices('method.step1_desc'), num: 1 },
                { title: tServices('method.step2_title'), desc: tServices('method.step2_desc'), num: 2 },
                { title: tServices('method.step3_title'), desc: tServices('method.step3_desc'), num: 3 }
              ].map((step, index) => (
                <div
                  key={step.num}
                  className={`flex flex-col sm:flex-row gap-4 lg:gap-6 transition-all duration-700 ${
                    servicesMethod.isVisible
                      ? 'opacity-100 translate-x-0'
                      : 'opacity-0 -translate-x-8'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-brand-primary text-white rounded-full flex items-center justify-center font-bold">
                    {step.num}
                  </div>
                  <div>
                    <h4 className="text-fluid-xl font-semibold mb-2 dark:text-white">{step.title}</h4>
                    <p className="text-fluid-base text-gray-600 dark:text-gray-400">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* POC Section */}
      <section id="poc" className="py-16 lg:py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={pocSection.ref}
            className={`max-w-3xl mx-auto text-center mb-12 lg:mb-16 transition-all duration-700 ${
              pocSection.isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-fluid-3xl font-bold mb-4 dark:text-white">
              {tPoc('title')}
            </h2>
            <p className="text-fluid-lg text-gray-600 dark:text-gray-400">
              {tPoc('subtitle')}
            </p>
          </div>

          <div
            ref={pocCards.ref}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-8"
          >
            {pocs.slice(0, 3).map((poc, index) => {
              const Icon = poc.icon
              const isComingSoon = poc.status === 'coming-soon'

              return (
                <div
                  key={poc.id}
                  className={`transition-all duration-700 ${
                    pocCards.isVisible
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
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

                      <div className="p-6 lg:p-8">
                        <div className="w-16 h-16 lg:w-20 lg:h-20 mx-auto mb-4 lg:mb-6 bg-gradient-to-br from-brand-primary/20 to-brand-primary/10 rounded-2xl flex items-center justify-center">
                          <Icon className="w-8 h-8 lg:w-10 lg:h-10 text-brand-primary" />
                        </div>

                        <h3 className="text-fluid-2xl font-bold mb-3 lg:mb-4 text-center dark:text-white">
                          {poc.title[locale]}
                        </h3>

                        <p className="text-fluid-base text-gray-600 dark:text-gray-300 mb-4 text-center">
                          {poc.description[locale]}
                        </p>

                        <p className="text-fluid-sm italic text-gray-500 dark:text-gray-400 text-center">
                          {poc.tagline[locale]}
                        </p>
                      </div>
                    </Card>
                  </Link>
                </div>
              )
            })}
          </div>

          <div className="text-center">
            <Link
              href={`/${locale}/poc-ia`}
              className="inline-flex items-center justify-center font-medium rounded-3xl transition-all duration-300 ease-out bg-brand-primary text-white hover:bg-brand-secondary hover:shadow-lg px-8 py-4 text-lg"
            >
              {tPoc('view_all')}
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 lg:py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={aboutTitle.ref}
            className={`max-w-3xl mx-auto text-center mb-12 lg:mb-16 transition-all duration-700 ${
              aboutTitle.isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-fluid-3xl font-bold mb-4 dark:text-white">
              {tAbout('title')}
            </h2>
            <p className="text-fluid-lg text-gray-600 dark:text-gray-400">
              {tAbout('subtitle')}
            </p>
          </div>

          <div
            ref={aboutStory.ref}
            className={`max-w-4xl mx-auto mb-12 lg:mb-16 transition-all duration-700 ${
              aboutStory.isVisible
                ? 'opacity-100 scale-100'
                : 'opacity-0 scale-95'
            }`}
          >
            <Card className="p-6 lg:p-8 xl:p-12">
              <h3 className="text-fluid-2xl font-bold mb-4 lg:mb-6 dark:text-white">{tAbout('story_title')}</h3>
              <div className="prose max-w-none text-gray-600 dark:text-gray-400">
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
          </div>

          <div
            ref={aboutValues.ref}
            className="mb-12 lg:mb-16"
          >
            <h3 className="text-fluid-2xl font-bold text-center mb-8 lg:mb-12 dark:text-white">{tAbout('values_title')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className={`transition-all duration-700 ${
                    aboutValues.isVisible
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <Card hover className="text-center h-full">
                    <div className="w-12 h-12 mx-auto mb-4 bg-brand-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-2xl font-bold text-brand-primary">{index + 1}</span>
                    </div>
                    <h4 className="text-xl font-semibold mb-3 dark:text-white">{value.title}</h4>
                    <p className="text-gray-600 dark:text-gray-400">{value.description}</p>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 lg:py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={pricingTitle.ref}
            className={`max-w-3xl mx-auto text-center mb-12 lg:mb-16 transition-all duration-700 ${
              pricingTitle.isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-fluid-3xl font-bold mb-4 dark:text-white">
              {tPricing('title')}
            </h2>
            <p className="text-fluid-lg text-gray-600 dark:text-gray-400">
              {tPricing('subtitle')}
            </p>
          </div>

          <div
            ref={pricingCards.ref}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
          >
            {/* POC Express - Bleu */}
            <div
              className={`transition-all duration-700 ${
                pricingCards.isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <Card hover className="border-2 border-gray-200 dark:border-gray-700 hover:border-brand-primary transition-all h-full">
                <div className="p-8 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold dark:text-white">{tPricing('poc_express.name')}</h3>
                    <div className="w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center">
                      <Rocket className="w-6 h-6 text-brand-primary" />
                    </div>
                  </div>
                  <div className="mb-4">
                    <span className="text-4xl font-bold bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
                      {tPricing('poc_express.price')}
                    </span>
                  </div>
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-brand-primary/10 text-brand-primary text-sm font-semibold rounded-full">
                      {tPricing('poc_express.delay')}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
                    {tPricing('poc_express.description')}
                  </p>
                  <ul className="space-y-3 mb-8 flex-grow">
                    <li className="flex items-start gap-3 text-sm dark:text-gray-300">
                      <div className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-green-600 dark:text-green-400" />
                      </div>
                      {tPricing('poc_express.feature1')}
                    </li>
                    <li className="flex items-start gap-3 text-sm dark:text-gray-300">
                      <div className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-green-600 dark:text-green-400" />
                      </div>
                      {tPricing('poc_express.feature2')}
                    </li>
                    <li className="flex items-start gap-3 text-sm dark:text-gray-300">
                      <div className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-green-600 dark:text-green-400" />
                      </div>
                      {tPricing('poc_express.feature3')}
                    </li>
                    <li className="flex items-start gap-3 text-sm dark:text-gray-300">
                      <div className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-green-600 dark:text-green-400" />
                      </div>
                      {tPricing('poc_express.feature4')}
                    </li>
                  </ul>
                  <button className="w-full px-6 py-3 border-2 border-brand-primary text-brand-primary rounded-xl hover:bg-brand-primary hover:text-white transition-all duration-300 font-semibold">
                    {tPricing('poc_express.cta')}
                  </button>
                </div>
              </Card>
            </div>

            {/* Full Experience - Gradient Populaire */}
            <div
              className={`transition-all duration-700 ${
                pricingCards.isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '100ms' }}
            >
              <Card hover className="relative bg-gradient-to-br from-brand-primary to-brand-secondary text-white transform hover:scale-105 transition-all shadow-xl h-full">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="px-4 py-1.5 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-sm font-bold rounded-full shadow-lg">
                    ⭐ Populaire
                  </div>
                </div>
                <div className="p-8 pt-10 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold">{tPricing('full_experience.name')}</h3>
                    <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                      <Sparkles className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="mb-4">
                    <span className="text-4xl font-bold">
                      {tPricing('full_experience.price')}
                    </span>
                  </div>
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-white/20 text-white text-sm font-semibold rounded-full">
                      {tPricing('full_experience.delay')}
                    </span>
                  </div>
                  <p className="text-sm opacity-90 mb-6">
                    {tPricing('full_experience.description')}
                  </p>
                  <ul className="space-y-3 mb-8 flex-grow">
                    <li className="flex items-start gap-3 text-sm">
                      <div className="w-5 h-5 rounded-full bg-white/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      {tPricing('full_experience.feature1')}
                    </li>
                    <li className="flex items-start gap-3 text-sm">
                      <div className="w-5 h-5 rounded-full bg-white/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      {tPricing('full_experience.feature2')}
                    </li>
                    <li className="flex items-start gap-3 text-sm">
                      <div className="w-5 h-5 rounded-full bg-white/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      {tPricing('full_experience.feature3')}
                    </li>
                    <li className="flex items-start gap-3 text-sm">
                      <div className="w-5 h-5 rounded-full bg-white/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      {tPricing('full_experience.feature4')}
                    </li>
                    <li className="flex items-start gap-3 text-sm">
                      <div className="w-5 h-5 rounded-full bg-white/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      {tPricing('full_experience.feature5')}
                    </li>
                  </ul>
                  <button className="w-full px-6 py-3 bg-white text-brand-primary rounded-xl hover:bg-white/90 transition-all duration-300 font-semibold shadow-lg">
                    {tPricing('full_experience.cta')}
                  </button>
                </div>
              </Card>
            </div>

            {/* Partnership - Premium Violet */}
            <div
              className={`transition-all duration-700 ${
                pricingCards.isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              <Card hover className="border-2 border-gray-200 dark:border-gray-700 hover:border-purple-500 transition-all h-full">
                <div className="p-8 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold dark:text-white">{tPricing('partnership.name')}</h3>
                    <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                      <Settings className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                    </div>
                  </div>
                  <div className="mb-4">
                    <span className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                      {tPricing('partnership.price')}
                    </span>
                  </div>
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-sm font-semibold rounded-full">
                      {tPricing('partnership.delay')}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
                    {tPricing('partnership.description')}
                  </p>
                  <ul className="space-y-3 mb-8 flex-grow">
                    <li className="flex items-start gap-3 text-sm dark:text-gray-300">
                      <div className="w-5 h-5 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-purple-600 dark:text-purple-400" />
                      </div>
                      {tPricing('partnership.feature1')}
                    </li>
                    <li className="flex items-start gap-3 text-sm dark:text-gray-300">
                      <div className="w-5 h-5 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-purple-600 dark:text-purple-400" />
                      </div>
                      {tPricing('partnership.feature2')}
                    </li>
                    <li className="flex items-start gap-3 text-sm dark:text-gray-300">
                      <div className="w-5 h-5 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-purple-600 dark:text-purple-400" />
                      </div>
                      {tPricing('partnership.feature3')}
                    </li>
                    <li className="flex items-start gap-3 text-sm dark:text-gray-300">
                      <div className="w-5 h-5 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-purple-600 dark:text-purple-400" />
                      </div>
                      {tPricing('partnership.feature4')}
                    </li>
                    <li className="flex items-start gap-3 text-sm dark:text-gray-300">
                      <div className="w-5 h-5 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-purple-600 dark:text-purple-400" />
                      </div>
                      {tPricing('partnership.feature5')}
                    </li>
                  </ul>
                  <button className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl hover:shadow-lg transition-all duration-300 font-semibold">
                    {tPricing('partnership.cta')}
                  </button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 lg:py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={faqTitle.ref}
            className={`max-w-3xl mx-auto text-center mb-12 lg:mb-16 transition-all duration-700 ${
              faqTitle.isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-fluid-3xl font-bold mb-4 dark:text-white">
              {tFaq('title')}
            </h2>
            <p className="text-fluid-lg text-gray-600 dark:text-gray-400">
              {tFaq('subtitle')}
            </p>
          </div>

          <div
            ref={faqAccordion.ref}
            className={`max-w-4xl mx-auto transition-all duration-700 ${
              faqAccordion.isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            <Accordion
              items={[
                {
                  question: tFaq('q1'),
                  answer: tFaq('a1')
                },
                {
                  question: tFaq('q2'),
                  answer: tFaq('a2')
                },
                {
                  question: tFaq('q3'),
                  answer: tFaq('a3')
                },
                {
                  question: tFaq('q4'),
                  answer: tFaq('a4')
                },
                {
                  question: tFaq('q5'),
                  answer: tFaq('a5')
                }
              ]}
              allowMultiple={false}
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 lg:py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={contactTitle.ref}
            className={`max-w-2xl mx-auto text-center mb-8 lg:mb-12 transition-all duration-700 ${
              contactTitle.isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-fluid-3xl font-bold mb-4 dark:text-white">{tContact('title')}</h2>
            <p className="text-fluid-lg text-gray-600 dark:text-gray-400">
              {tContact('subtitle')}
            </p>
          </div>

          <div
            ref={contactCards.ref}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto"
          >
            <div
              className={`bg-white dark:bg-gray-800 rounded-3xl shadow-soft p-6 lg:p-8 transition-all duration-700 ${
                contactCards.isVisible
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 -translate-x-8'
              }`}
            >
              <h3 className="text-2xl font-semibold mb-6 dark:text-white">{tContact('form_title')}</h3>
              <ContactForm onSuccess={() => track('contact_form_submit', { source: 'homepage' })} />
            </div>

            <div
              className={`space-y-6 lg:space-y-8 transition-all duration-700 ${
                contactCards.isVisible
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 translate-x-8'
              }`}
              style={{ transitionDelay: '100ms' }}
            >
              <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-soft p-6 lg:p-8">
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

              <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-soft p-6 lg:p-8">
                <h3 className="text-fluid-xl font-semibold mb-4 dark:text-white">{tContact('info_title')}</h3>
                <div className="space-y-3 text-gray-600 dark:text-gray-400">
                  <p>
                    <strong>{tContact('info_email')}</strong>{' '}
                    <a href="mailto:hello@hitom.fr" className="text-brand-primary hover:underline">
                      hello@hitom.fr
                    </a>
                  </p>
                  <p>
                    <strong>{tContact('info_response')}</strong> {tContact('info_response_time')}
                  </p>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-soft p-6 lg:p-8">
                <h3 className="text-fluid-xl font-semibold mb-4 dark:text-white">{tContact('social_title')}</h3>
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
            </div>
          </div>

          <div
            ref={contactCta.ref}
            className={`mt-12 lg:mt-16 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-2xl lg:rounded-3xl p-8 lg:p-12 text-center text-white transition-all duration-700 ${
              contactCta.isVisible
                ? 'opacity-100 scale-100'
                : 'opacity-0 scale-95'
            }`}
          >
            <h3 className="text-fluid-2xl font-bold mb-3 lg:mb-4">{tContact('cta_title')}</h3>
            <p className="text-fluid-lg mb-6 lg:mb-8 opacity-90">
              {tContact('cta_subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 lg:gap-4">
              <a
                href="#contact"
                className="w-full sm:w-auto px-6 lg:px-8 py-3 bg-white text-brand-primary rounded-3xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                {tContact('cta_contact')}
              </a>
              <a
                href={process.env.NEXT_PUBLIC_CALENDLY_URL || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 lg:px-8 py-3 border-2 border-white text-white rounded-3xl font-semibold hover:bg-white hover:text-brand-primary transition-all duration-300"
              >
                {tContact('cta_book')}
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
