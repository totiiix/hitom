'use client'

import { useTranslations } from 'next-intl'

export default function PrivacyPage() {
  const t = useTranslations('privacy')

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32 lg:pt-40 pb-16 lg:pb-24 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">{t('title')}</h1>

      <section className="prose prose-lg max-w-none">
        <p className="text-gray-600 mb-8">
          <em>{t('last_updated')} {new Date().toLocaleDateString()}</em>
        </p>

        <h2>{t('controller_title')}</h2>
        <p>
          {t('controller_desc')}<br />
          <strong>{t('controller_company')}</strong><br />
          {t('controller_address')}<br />
          {t('controller_email')} hello@hitom.fr
        </p>

        <h2>{t('data_collected_title')}</h2>
        <p>{t('data_collected_intro')}</p>
        <ul>
          <li><strong>{t('data_navigation')}</strong> {t('data_navigation_desc')}</li>
          <li><strong>{t('data_contact')}</strong> {t('data_contact_desc')}</li>
          <li><strong>{t('data_cookies')}</strong> {t('data_cookies_desc')}</li>
        </ul>

        <h2>{t('purposes_title')}</h2>
        <p>{t('purposes_intro')}</p>
        <ul>
          <li>{t('purpose_respond')}</li>
          <li>{t('purpose_improve')}</li>
          <li>{t('purpose_analyze')}</li>
          <li>{t('purpose_legal')}</li>
        </ul>

        <h2>{t('legal_basis_title')}</h2>
        <p>{t('legal_basis_intro')}</p>
        <ul>
          <li>{t('legal_consent')}</li>
          <li>{t('legal_contract')}</li>
          <li>{t('legal_interest')}</li>
        </ul>

        <h2>{t('recipients_title')}</h2>
        <p>{t('recipients_intro')}</p>
        <ul>
          <li>{t('recipient_ga')}</li>
          <li>{t('recipient_clarity')}</li>
          <li>{t('recipient_crisp')}</li>
          <li>{t('recipient_axeptio')}</li>
        </ul>

        <h2>{t('retention_title')}</h2>
        <p>{t('retention_intro')}</p>
        <ul>
          <li>{t('retention_contact')}</li>
          <li>{t('retention_analytics')}</li>
        </ul>

        <h2>{t('rights_title')}</h2>
        <p>{t('rights_intro')}</p>
        <ul>
          <li>{t('right_access')}</li>
          <li>{t('right_rectification')}</li>
          <li>{t('right_erasure')}</li>
          <li>{t('right_restriction')}</li>
          <li>{t('right_portability')}</li>
          <li>{t('right_objection')}</li>
        </ul>
        <p>
          {t('rights_exercise')} <a href="mailto:hello@hitom.fr" className="text-brand-primary hover:underline">hello@hitom.fr</a>
        </p>

        <h2>{t('complaint_title')}</h2>
        <p>
          {t('complaint_desc')}{' '}
          <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">
            www.cnil.fr
          </a>
        </p>
      </section>
    </div>
  )
}
