'use client'
import { useEffect, useState } from 'react'
import { Analytics } from '@vercel/analytics/react'
import Lenis from 'lenis'
import { ThemeProvider } from '@/components/ThemeProvider'
import { Loading } from '@/components/Loading'
import { LoadingProvider } from '@/lib/loading-context'
import { ToastProvider } from '@/components/ui/Toast'

interface EnvConfig {
  gtmId?: string
  axeptioId?: string
  clarityId?: string
  crispId?: string
}

export function Providers({
  children,
  locale,
  envConfig
}: {
  children: React.ReactNode
  locale: string
  envConfig: EnvConfig
}) {
  const [consentGiven, setConsentGiven] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [isMounted, setIsMounted] = useState(false)

  // Check if component is mounted (client-side only)
  useEffect(() => {
    setIsMounted(true)

    // Remove browser extension attributes that cause hydration warnings
    document.body.removeAttribute('data-titans-quick-view-extension-id')
  }, [])

  // Loading screen
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000) // 2 seconds minimum loading time

    return () => clearTimeout(timer)
  }, [])

  // Smooth scrolling (Lenis) - Always active
  useEffect(() => {
    const lenis = new Lenis({ smoothWheel: true })
    function raf(time: number) {
      lenis.raf(time); requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }, [])

  // Axeptio CMP - Load first
  useEffect(() => {
    const id = envConfig.axeptioId
    if (!id) {
      // If no Axeptio, assume consent (dev mode)
      setConsentGiven(true)
      return
    }

    // Check if already loaded
    if ((window as any).axeptio || document.querySelector('script[src*="axept.io"]')) {
      return
    }

    const s = document.createElement('script')
    s.setAttribute('data-axeptio-client-id', id)
    s.src = 'https://static.axept.io/sdk.js'
    s.async = true
    document.head.appendChild(s)

    // Listen for Axeptio consent events
    ;(window as any).axeptioSettings = {
      clientId: id,
      cookiesVersion: locale
    }

    // In dev mode, auto-accept to test GTM/Analytics
    if (process.env.NODE_ENV === 'development') {
      setTimeout(() => {
        setConsentGiven(true)
      }, 3000)
    }

    // Check for consent (production)
    const checkConsent = () => {
      const axeptio = (window as any).axeptio
      if (axeptio) {
        axeptio.on('cookies:complete', (choices: any) => {
          if (choices.google_analytics || choices.analytics) {
            setConsentGiven(true)
          }
        })
      }
    }

    // Retry check if Axeptio not loaded yet
    setTimeout(checkConsent, 1000)
    setTimeout(checkConsent, 3000)
  }, [locale, envConfig.axeptioId])

  // Google Tag Manager - Only after consent
  useEffect(() => {
    if (!consentGiven) return

    const id = envConfig.gtmId
    if (!id) return

    // Check if already loaded
    if ((window as any).dataLayer || document.querySelector('script[src*="googletagmanager"]')) {
      return
    }

    // GTM Script
    ;(function(w: any,d: any,s: any,l: any,i: any){
      w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer',id);
  }, [consentGiven, envConfig.gtmId])

  // Microsoft Clarity - Only after consent
  useEffect(() => {
    if (!consentGiven) return

    const id = envConfig.clarityId
    if (!id) return

    ;(function(c: any,l: any,a: any,r: any,i: any){
      let t: any, y: any
      c[a]=c[a]||function(){ (c[a].q=c[a].q||[]).push(arguments) }
      t=l.createElement(r); t.async=1; t.src='https://www.clarity.ms/tag/'+i
      y=l.getElementsByTagName(r)[0]; y.parentNode?.insertBefore(t,y)
    })(window, document, 'clarity', 'script', id)
  }, [consentGiven, envConfig.clarityId])

  // Crisp Chat - Always active (functional, not analytics)
  useEffect(() => {
    const id = envConfig.crispId
    if (!id) return

    (window as any).$crisp = []
    ;(window as any).CRISP_WEBSITE_ID = id
    const s = document.createElement('script')
    s.src = 'https://client.crisp.chat/l.js'
    s.async = true
    document.head.appendChild(s)
  }, [envConfig.crispId])

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <LoadingProvider>
        <ToastProvider>
          {isMounted && isLoading && <Loading />}
          <div className={isLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-500'}>
            {children}
          </div>
          <Analytics />
        </ToastProvider>
      </LoadingProvider>
    </ThemeProvider>
  )
}
