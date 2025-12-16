import fr from '@/../../messages/fr.json'
import en from '@/../../messages/en.json'
import es from '@/../../messages/es.json'
import zh from '@/../../messages/zh.json'

export type Locale = 'fr' | 'en' | 'es' | 'zh'
export type NeedType = 'poc' | 'ux' | 'ai' | 'automation' | 'other'

const messages = {
  fr,
  en,
  es,
  zh,
}

export function getEmailTranslations(locale: Locale = 'fr') {
  return messages[locale]?.confirmationEmail || messages.fr.confirmationEmail
}

export function getEmailSubject(locale: Locale, need: NeedType): string {
  const t = getEmailTranslations(locale)
  return t.preview[need] || t.preview.other
}

export interface EmailTranslations {
  preview: Record<NeedType, string>
  greeting: string
  brand: string
  tagline: string
  title: Record<NeedType, string>
  description: Record<NeedType, string>
  customNeed: string
  nextSteps: string
  steps: {
    step1: string
    step2: string
    step3: string
  }
  cta: Record<NeedType, string>
  footer: {
    signature: string
    team: string
    website: string
    contact: string
    copyright: string
  }
}
