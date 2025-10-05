import { NextIntlClientProvider } from 'next-intl'
import { notFound } from 'next/navigation'
import { Providers } from '@/app/providers'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { NavigationProgress } from '@/components/NavigationProgress'
import { ErrorBoundary } from '@/components/ErrorBoundary'
import { JsonLd } from '@/components/JsonLd'
import { locales } from '@/lib/i18n'
import { getOrganizationSchema, getWebsiteSchema } from '@/lib/json-ld'

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  const { locale } = params

  if (!locales.includes(locale as any)) {
    notFound()
  }

  let messages
  try {
    messages = (await import(`../../../messages/${locale}.json`)).default
  } catch (e) {
    notFound()
  }

  const envConfig = {
    gtmId: process.env.NEXT_PUBLIC_GTM_ID,
    axeptioId: process.env.NEXT_PUBLIC_AXEPTIO_CLIENT_ID,
    clarityId: process.env.NEXT_PUBLIC_CLARITY_ID,
    crispId: process.env.NEXT_PUBLIC_CRISP_WEBSITE_ID
  }

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <JsonLd data={getOrganizationSchema()} />
        <JsonLd data={getWebsiteSchema()} />
      </head>
      <body className="flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors">
        <Providers locale={locale} envConfig={envConfig}>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <ErrorBoundary>
              <NavigationProgress />
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
            </ErrorBoundary>
          </NextIntlClientProvider>
        </Providers>
      </body>
    </html>
  )
}
