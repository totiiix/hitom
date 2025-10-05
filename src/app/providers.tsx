'use client'
import { useEffect, useState } from 'react'
import { Analytics } from '@vercel/analytics/react'
import Lenis from 'lenis'
import { ThemeProvider } from '@/components/ThemeProvider'
import { Loading } from '@/components/Loading'
import { LoadingProvider } from '@/lib/loading-context'
import { ToastProvider } from '@/components/ui/Toast'

export function Providers({ children, locale }: { children: React.ReactNode, locale: string }) {
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
    const id = process.env.NEXT_PUBLIC_AXEPTIO_CLIENT_ID
    if (!id) {
      // If no Axeptio, assume consent (dev mode)
      setConsentGiven(true)
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

    // Check for consent
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
  }, [locale])

  // GA4 - Only after consent
  useEffect(() => {
    if (!consentGiven) return

    const id = process.env.NEXT_PUBLIC_GA4_ID
    if (!id) return

    const s = document.createElement('script')
    s.src = `https://www.googletagmanager.com/gtag/js?id=${id}`
    s.async = true
    document.head.appendChild(s)

    ;(window as any).dataLayer = (window as any).dataLayer || []
    function gtag(...args: any[]){ (window as any).dataLayer.push(args) }
    ;(window as any).gtag = gtag
    gtag('js', new Date())
    gtag('config', id, { anonymize_ip: true })
  }, [consentGiven])

  // Microsoft Clarity - Only after consent
  useEffect(() => {
    if (!consentGiven) return

    const id = process.env.NEXT_PUBLIC_CLARITY_ID
    if (!id) return

    ;(function(c: any,l: any,a: any,r: any,i: any){
      let t: any, y: any
      c[a]=c[a]||function(){ (c[a].q=c[a].q||[]).push(arguments) }
      t=l.createElement(r); t.async=1; t.src='https://www.clarity.ms/tag/'+i
      y=l.getElementsByTagName(r)[0]; y.parentNode?.insertBefore(t,y)
    })(window, document, 'clarity', 'script', id)
  }, [consentGiven])

  // Crisp Chat - Always active (functional, not analytics)
  useEffect(() => {
    const id = process.env.NEXT_PUBLIC_CRISP_WEBSITE_ID
    if (!id) return

    (window as any).$crisp = []
    ;(window as any).CRISP_WEBSITE_ID = id
    const s = document.createElement('script')
    s.src = 'https://client.crisp.chat/l.js'
    s.async = true
    document.head.appendChild(s)
  }, [])

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
