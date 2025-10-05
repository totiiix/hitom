'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef } from 'react'
import { useTranslations, useLocale } from 'next-intl'
import { useLoadingComplete } from '@/lib/loading-context'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  }
}

export function Hero() {
  const t = useTranslations('hero')
  const locale = useLocale()
  const { isLoadingComplete } = useLoadingComplete()

  return (
    <section className="relative">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isLoadingComplete ? "visible" : "hidden"}
        className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 lg:pt-32 pb-12 lg:pb-16 text-center"
      >
        <motion.div variants={itemVariants} className="mx-auto mb-6 w-20 lg:w-24">
          <Image
            src="/brand/logo.png"
            alt="Logo Hitom"
            width={96}
            height={96}
            priority
            className="mx-auto rounded-2xl w-full h-auto"
          />
        </motion.div>
        <motion.h1
          variants={itemVariants}
          className="text-fluid-4xl font-bold tracking-tight dark:text-white"
        >
          {t('title')}
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="mt-4 lg:mt-6 text-fluid-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-4"
        >
          {t('subtitle')}
        </motion.p>
        <motion.div
          variants={itemVariants}
          className="mt-8 lg:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <Link href={`/${locale}#contact`} className="w-full sm:w-auto px-6 py-3 rounded-3xl bg-brand-primary text-white hover:bg-brand-secondary transition-all duration-300 hover:shadow-lg">
            {t('cta_primary')}
          </Link>
          <a href={process.env.NEXT_PUBLIC_CALENDLY_URL} className="w-full sm:w-auto px-6 py-3 rounded-3xl bg-white dark:bg-gray-800 dark:text-white shadow-soft hover:shadow-lg transition-all duration-300">
            {t('cta_secondary')}
          </a>
        </motion.div>
      </motion.div>
      <AnimatedCursor />
    </section>
  )
}

function AnimatedCursor() {
  const blobRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const blob = blobRef.current
    if (!blob) return

    // Position initiale au centre de l'écran
    blob.style.transform = `translate(${window.innerWidth / 2 - 128}px, ${window.innerHeight / 2 - 128}px)`

    const handlePointerMove = (e: PointerEvent) => {
      requestAnimationFrame(() => {
        if (blob) {
          blob.style.transform = `translate(${e.clientX - 128}px, ${e.clientY - 128}px)`
        }
      })
    }

    window.addEventListener('pointermove', handlePointerMove)
    return () => window.removeEventListener('pointermove', handlePointerMove)
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 z-0 hidden lg:block">
      <div
        ref={blobRef}
        className="absolute w-64 h-64 rounded-full blur-3xl opacity-30 will-change-transform"
        style={{
          background: 'radial-gradient(circle, #1FA2FF 0%, transparent 60%)'
        }}
      />
    </div>
  )
}
