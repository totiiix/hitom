import createMiddleware from 'next-intl/middleware'
import { locales } from '@/lib/i18n'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const intlMiddleware = createMiddleware({
  locales,
  defaultLocale: 'fr',
  localePrefix: 'always'
})

export default function middleware(request: NextRequest) {
  const response = intlMiddleware(request)

  // Security headers
  const csp = [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://www.clarity.ms https://*.clarity.ms https://client.axept.io https://static.axept.io https://client.crisp.chat https://settings.crisp.chat https://assets.calendly.com https://va.vercel-scripts.com",
    "style-src 'self' 'unsafe-inline' https://client.crisp.chat https://assets.calendly.com",
    "img-src 'self' data: blob: https: http:",
    "font-src 'self' data: https://client.crisp.chat https://assets.calendly.com",
    "connect-src 'self' https://www.googletagmanager.com https://www.google-analytics.com https://analytics.google.com https://www.clarity.ms https://*.clarity.ms https://client.axept.io https://static.axept.io https://api.axept.io https://client.crisp.chat wss://client.crisp.chat https://assets.calendly.com https://vitals.vercel-insights.com",
    "frame-src 'self' https://calendly.com https://client.crisp.chat",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self' https://tally.so",
    "frame-ancestors 'none'",
    "upgrade-insecure-requests"
  ].join('; ')

  response.headers.set('Content-Security-Policy', csp)
  response.headers.set('X-Frame-Options', 'DENY')
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()')
  response.headers.set('X-XSS-Protection', '1; mode=block')

  // Strict-Transport-Security (only in production)
  if (process.env.NODE_ENV === 'production') {
    response.headers.set('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload')
  }

  return response
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
}
