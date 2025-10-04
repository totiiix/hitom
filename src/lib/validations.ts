import { z } from 'zod'

// Contact form validation
export const contactFormSchema = z.object({
  name: z.string().min(2, 'Le nom doit contenir au moins 2 caractères').max(100),
  email: z.string().email('Adresse email invalide'),
  company: z.string().optional(),
  message: z.string().min(10, 'Le message doit contenir au moins 10 caractères').max(1000),
  phone: z.string().optional(),
  // Honeypot field for spam protection
  website: z.string().max(0, 'Spam détecté').optional()
})

export type ContactFormData = z.infer<typeof contactFormSchema>

// Newsletter subscription validation
export const newsletterSchema = z.object({
  email: z.string().email('Adresse email invalide'),
  locale: z.enum(['fr', 'en', 'zh', 'es']),
  // Honeypot
  name: z.string().max(0, 'Spam détecté').optional()
})

export type NewsletterData = z.infer<typeof newsletterSchema>

// Lead form validation (from Tally webhook)
export const leadFormSchema = z.object({
  email: z.string().email(),
  name: z.string().min(1).max(200),
  company: z.string().optional(),
  service: z.enum(['audit', 'prototype', 'deployment', 'other']).optional(),
  message: z.string().max(2000).optional(),
  source: z.string().optional(),
  locale: z.string().optional()
})

export type LeadFormData = z.infer<typeof leadFormSchema>

// Webhook validation
export const webhookSchema = z.object({
  event: z.string(),
  timestamp: z.string().datetime(),
  data: z.record(z.any())
})

export type WebhookData = z.infer<typeof webhookSchema>
