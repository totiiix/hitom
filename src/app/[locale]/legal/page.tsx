'use client'

import { useTranslations, useLocale } from 'next-intl'

export default function LegalPage() {
  const t = useTranslations('legal')
  const locale = useLocale()

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32 lg:pt-40 pb-16 lg:pb-24 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">{t('title')}</h1>

      <section className="prose prose-lg max-w-none">
        <h2>{t('editor_title')}</h2>
        <p>
          <strong>{t('editor_company')}</strong> {t('editor_company_value')}<br />
          <strong>{t('editor_legal_form')}</strong> {t('editor_legal_form_value')}<br />
          <strong>{t('editor_capital')}</strong> {t('editor_capital_value')}<br />
          <strong>{t('editor_address')}</strong> {t('editor_address_value')}<br />
          <strong>{t('editor_siret')}</strong> {t('editor_siret_value')}<br />
          <strong>{t('editor_email')}</strong> hello@hitom.fr
        </p>

        <h2>{t('director_title')}</h2>
        <p>{t('director_value')}</p>

        <h2>{t('hosting_title')}</h2>
        <p>
          {t('hosting_intro')}<br />
          <strong>{t('hosting_company')}</strong><br />
          {t('hosting_address1')}<br />
          {t('hosting_address2')}<br />
          {t('hosting_country')}
        </p>

        <h2>{t('ip_title')}</h2>
        <p>{t('ip_desc')}</p>

        <h2>{t('privacy_title')}</h2>
        <p>
          {t('privacy_desc')}{' '}
          <a href={`/${locale}/privacy`} className="text-brand-primary hover:underline">
            {t('privacy_link')}
          </a>.
        </p>

        <h2>{t('cookies_title')}</h2>
        <p>
          {t('cookies_desc')}{' '}
          <a href={`/${locale}/cookies`} className="text-brand-primary hover:underline">
            {t('cookies_link')}
          </a>.
        </p>
      </section>
    </div>
  )
}
