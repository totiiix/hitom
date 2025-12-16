'use client'

import { useTranslations } from 'next-intl'

export default function CookiesPage() {
  const t = useTranslations('cookies')

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32 lg:pt-40 pb-16 lg:pb-24 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">{t('title')}</h1>

      <section className="prose prose-lg max-w-none">
        <p className="text-gray-600 mb-8">
          <em>{t('last_updated')} {new Date().toLocaleDateString()}</em>
        </p>

        <h2>{t('what_is_cookie_title')}</h2>
        <p>{t('what_is_cookie_desc')}</p>

        <h2>{t('used_cookies_title')}</h2>

        <h3>{t('essential_title')}</h3>
        <p>{t('essential_desc')}</p>
        <ul>
          <li><strong>{t('essential_axeptio')}</strong></li>
          <li><strong>{t('essential_locale')}</strong></li>
        </ul>

        <h3>{t('analytics_title')}</h3>
        <p>{t('analytics_desc')}</p>
        <ul>
          <li>
            <strong>{t('analytics_ga')}</strong>
            <ul>
              <li>{t('analytics_ga_id')}</li>
              <li>{t('analytics_ga_session')}</li>
              <li>{t('analytics_ga_duration')}</li>
            </ul>
          </li>
          <li>
            <strong>{t('analytics_clarity')}</strong>
            <ul>
              <li>{t('analytics_clarity_cookies')}</li>
              <li>{t('analytics_clarity_duration')}</li>
            </ul>
          </li>
        </ul>

        <h3>{t('functional_title')}</h3>
        <ul>
          <li>
            <strong>{t('functional_crisp')}</strong>
            <ul>
              <li>{t('functional_crisp_cookies')}</li>
              <li>{t('functional_crisp_duration')}</li>
            </ul>
          </li>
        </ul>

        <h2>{t('management_title')}</h2>
        <p>{t('management_desc')}</p>

        <h3>{t('browser_settings_title')}</h3>
        <ul>
          <li>
            <strong>{t('browser_chrome')}</strong>{' '}
            <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">
              {t('browser_manage_link')}
            </a>
          </li>
          <li>
            <strong>{t('browser_firefox')}</strong>{' '}
            <a href="https://support.mozilla.org/fr/kb/activer-desactiver-cookies" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">
              {t('browser_manage_link')}
            </a>
          </li>
          <li>
            <strong>{t('browser_safari')}</strong>{' '}
            <a href="https://support.apple.com/fr-fr/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">
              {t('browser_manage_link')}
            </a>
          </li>
        </ul>

        <h2>{t('consent_title')}</h2>
        <p>{t('consent_desc')}</p>
        <p>{t('consent_withdrawal')}</p>

        <h2>{t('contact_title')}</h2>
        <p>
          {t('contact_desc')} <a href="mailto:contact@hitom.fr" className="text-brand-primary hover:underline">contact@hitom.fr</a>
        </p>
      </section>
    </div>
  )
}
