'use client'

import { useState, useEffect } from 'react'
import { useTranslations, useLocale } from 'next-intl'
import { Check, Send, ChevronDown, AlertCircle } from 'lucide-react'
import { createPortal } from 'react-dom'

interface ContactFormProps {
  onSuccess?: () => void
}

export function ContactForm({ onSuccess }: ContactFormProps) {
  const t = useTranslations('contactForm')
  const locale = useLocale()
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    company: '',
    need: '',
    customNeed: '',
    budget: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isNeedDropdownOpen, setIsNeedDropdownOpen] = useState(false)
  const [isBudgetDropdownOpen, setIsBudgetDropdownOpen] = useState(false)
  const [emailError, setEmailError] = useState('')
  const [mounted, setMounted] = useState(false)
  const [isClosing, setIsClosing] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validation de l'email
    if (!validateEmail(formData.email)) {
      setEmailError(t('emailError'))
      return
    }

    setEmailError('')
    setIsSubmitting(true)

    try {
      // Envoyer les données à l'API avec la locale
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          locale,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Erreur lors de l\'envoi')
      }

      setIsSubmitting(false)
      setIsSubmitted(true)
      setIsClosing(false)

      if (onSuccess) {
        onSuccess()
      }

      // Hide notification after 5 seconds with animation
      setTimeout(() => {
        setIsClosing(true)
        setTimeout(() => {
          setIsSubmitted(false)
          setIsClosing(false)
        }, 300)
      }, 5000)

      // Reset form
      setFormData({
        firstName: '',
        email: '',
        company: '',
        need: '',
        customNeed: '',
        budget: '',
        message: ''
      })
    } catch (error) {
      console.error('Erreur:', error)
      setEmailError(error instanceof Error ? error.message : 'Erreur lors de l\'envoi du message')
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target

    // Clear email error when user types
    if (name === 'email' && emailError) {
      setEmailError('')
    }

    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleNeedChange = (value: string) => {
    setFormData({
      ...formData,
      need: value,
      customNeed: value !== 'other' ? '' : formData.customNeed
    })
  }

  const handleBudgetChange = (value: string) => {
    setFormData({
      ...formData,
      budget: value
    })
  }

  return (
    <>
      {/* Success Notification - Rendered in portal */}
      {mounted && isSubmitted && createPortal(
        <div className={`fixed top-4 right-4 z-[9999] max-w-md ${isClosing ? 'animate-slide-out-right' : 'animate-slide-in-right'}`}>
          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4 shadow-lg">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0">
                <Check className="w-5 h-5 text-green-600 dark:text-green-400" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-green-800 dark:text-green-300">{t('successTitle')}</h4>
                <p className="text-sm text-green-700 dark:text-green-400 mt-1">{t('successMessage')}</p>
              </div>
              <button
                onClick={() => {
                  setIsClosing(true)
                  setTimeout(() => {
                    setIsSubmitted(false)
                    setIsClosing(false)
                  }, 300)
                }}
                className="text-green-400 hover:text-green-600 dark:hover:text-green-300"
                aria-label="Fermer"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>,
        document.body
      )}

      {/* Form */}
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      {/* Prénom + Email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block text-sm font-semibold mb-2 dark:text-gray-300">
            {t('firstName')} <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-transparent bg-white dark:bg-gray-700 dark:text-white transition-all"
            placeholder={t('firstNamePlaceholder')}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-semibold mb-2 dark:text-gray-300">
            {t('email')} <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-transparent bg-white dark:bg-gray-700 dark:text-white transition-all ${
              emailError ? 'border-red-500 dark:border-red-500' : 'border-gray-300 dark:border-gray-600'
            }`}
            placeholder={t('emailPlaceholder')}
          />
          {emailError && (
            <div className="flex items-center gap-2 mt-2 text-red-500">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <p className="text-sm">{emailError}</p>
            </div>
          )}
        </div>
      </div>

      {/* Nom de l'entreprise */}
      <div>
        <label htmlFor="company" className="block text-sm font-semibold mb-2 dark:text-gray-300">
          {t('company')} <span className="text-gray-400 text-xs">({t('optional')})</span>
        </label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-transparent bg-white dark:bg-gray-700 dark:text-white transition-all"
          placeholder={t('companyPlaceholder')}
        />
      </div>

      {/* Besoin principal */}
      <div>
        <label className="block text-sm font-semibold mb-2 dark:text-gray-300">
          {t('needLabel')}
        </label>
        <div className="relative">
          <button
            type="button"
            onClick={() => {
              setIsNeedDropdownOpen(!isNeedDropdownOpen)
              setIsBudgetDropdownOpen(false)
            }}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-transparent bg-white dark:bg-gray-700 dark:text-white text-left flex items-center justify-between transition-all hover:border-brand-primary/50"
          >
            <span className={!formData.need ? 'text-gray-400' : ''}>
              {formData.need ? t(`need.${formData.need}`) : t('needPlaceholder')}
            </span>
            <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${isNeedDropdownOpen ? 'rotate-180' : ''}`} />
          </button>
          {isNeedDropdownOpen && (
            <div className="absolute z-10 w-full mt-2 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl shadow-lg overflow-hidden">
              {['poc', 'ux', 'ai', 'automation', 'other'].map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => {
                    handleNeedChange(option)
                    setIsNeedDropdownOpen(false)
                  }}
                  className="w-full px-4 py-3 text-left hover:bg-brand-primary/10 dark:hover:bg-brand-primary/20 transition-colors dark:text-white flex items-center justify-between group"
                >
                  <span>{t(`need.${option}`)}</span>
                  {formData.need === option && <Check className="w-4 h-4 text-brand-primary" />}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Champ personnalisé si "Autre" sélectionné */}
      {formData.need === 'other' && (
        <div className="transition-all duration-300 ease-out">
          <input
            type="text"
            name="customNeed"
            value={formData.customNeed}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-transparent bg-white dark:bg-gray-700 dark:text-white transition-all"
            placeholder={t('customNeedPlaceholder')}
          />
        </div>
      )}

      {/* Budget */}
      <div>
        <label className="block text-sm font-semibold mb-2 dark:text-gray-300">
          {t('budgetLabel')}
        </label>
        <div className="relative">
          <button
            type="button"
            onClick={() => {
              setIsBudgetDropdownOpen(!isBudgetDropdownOpen)
              setIsNeedDropdownOpen(false)
            }}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-transparent bg-white dark:bg-gray-700 dark:text-white text-left flex items-center justify-between transition-all hover:border-brand-primary/50"
          >
            <span className={!formData.budget ? 'text-gray-400' : ''}>
              {formData.budget ? t(`budget.${formData.budget}`) : t('budgetPlaceholder')}
            </span>
            <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${isBudgetDropdownOpen ? 'rotate-180' : ''}`} />
          </button>
          {isBudgetDropdownOpen && (
            <div className="absolute z-10 w-full mt-2 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl shadow-lg overflow-hidden">
              {['small', 'medium', 'large'].map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => {
                    handleBudgetChange(option)
                    setIsBudgetDropdownOpen(false)
                  }}
                  className="w-full px-4 py-3 text-left hover:bg-brand-primary/10 dark:hover:bg-brand-primary/20 transition-colors dark:text-white flex items-center justify-between group"
                >
                  <span>{t(`budget.${option}`)}</span>
                  {formData.budget === option && <Check className="w-4 h-4 text-brand-primary" />}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Message libre */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold mb-2 dark:text-gray-300">
          {t('message')} <span className="text-gray-400 text-xs">({t('optional')})</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={3}
          maxLength={300}
          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-transparent bg-white dark:bg-gray-700 dark:text-white transition-all resize-none"
          placeholder={t('messagePlaceholder')}
        />
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
          {formData.message.length}/300
        </p>
      </div>

      {/* CTA */}
      <div className="space-y-4">
        <button
          type="submit"
          disabled={isSubmitting || !formData.firstName || !formData.email}
          className="w-full px-6 py-4 bg-brand-primary text-white rounded-xl hover:bg-brand-secondary transition-all duration-300 font-semibold text-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg"
        >
          <Send className="w-5 h-5" />
          {isSubmitting ? t('sending') : t('submit')}
        </button>
        <p className="text-sm text-center text-gray-600 dark:text-gray-400">
          {t('responseTime')}
        </p>
        <div className="text-center">
          <a
            href={process.env.NEXT_PUBLIC_CALENDLY_URL || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-brand-primary hover:text-brand-secondary transition-colors underline"
          >
            {t('bookCall')}
          </a>
        </div>
      </div>
    </form>
    </>
  )
}
