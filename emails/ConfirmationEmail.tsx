import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Section,
  Text,
  Hr,
} from '@react-email/components'
import * as React from 'react'

export interface ConfirmationEmailProps {
  firstName: string
  need: 'poc' | 'ux' | 'ai' | 'automation' | 'other'
  customNeed?: string
  siteUrl?: string
  translations: {
    preview: Record<string, string>
    greeting: string
    brand: string
    tagline: string
    title: Record<string, string>
    description: Record<string, string>
    customNeed: string
    nextSteps: string
    steps: {
      step1: string
      step2: string
      step3: string
    }
    cta: Record<string, string>
    footer: {
      signature: string
      team: string
      website: string
      contact: string
      copyright: string
    }
  }
}

const emojiMap = {
  poc: '🚀',
  ux: '🔍',
  ai: '🤖',
  automation: '⚙️',
  other: '📧',
}

const linkPathMap = {
  poc: '/poc-ia',
  ux: '/#services',
  ai: '/#services',
  automation: '/#services',
  other: '/',
}

export const ConfirmationEmail = ({
  firstName,
  need,
  customNeed,
  siteUrl = 'https://hitom.fr',
  translations: t,
}: ConfirmationEmailProps) => {
  const emoji = emojiMap[need] || emojiMap.other
  const linkPath = linkPathMap[need] || linkPathMap.other

  return (
    <Html>
      <Head />
      <Preview>{t.preview[need] || t.preview.other}</Preview>
      <Body style={main}>
        <Container style={container}>
          {/* Header with Logo/Brand */}
          <Section style={header}>
            <Heading style={brandName}>{t.brand}</Heading>
            <Text style={tagline}>{t.tagline}</Text>
          </Section>

          {/* Main Content */}
          <Section style={content_section}>
            <Text style={emojiStyle}>{emoji}</Text>
            <Heading style={h1}>{t.greeting} {firstName},</Heading>

            <Text style={paragraph}>{t.title[need] || t.title.other}</Text>

            <Text style={paragraph}>{t.description[need] || t.description.other}</Text>

            {need === 'other' && customNeed && (
              <Section style={customNeedBox}>
                <Text style={customNeedText}>
                  {t.customNeed} <strong>{customNeed}</strong>
                </Text>
              </Section>
            )}

            <Hr style={hr} />

            <Heading as="h2" style={h2}>
              📅 {t.nextSteps}
            </Heading>
            <Section style={stepsList}>
              <Text style={step}>✓ {t.steps.step1}</Text>
              <Text style={step}>✓ {t.steps.step2}</Text>
              <Text style={step}>✓ {t.steps.step3}</Text>
            </Section>

            <Section style={buttonContainer}>
              <Link
                style={button}
                href={`${siteUrl}${linkPath}`}
              >
                {t.cta[need] || t.cta.other}
              </Link>
            </Section>
          </Section>

          {/* Footer */}
          <Section style={footer}>
            <Hr style={hr} />
            <Text style={footerText}>
              {t.footer.signature}
              <br />
              <strong>{t.footer.team}</strong>
            </Text>
            <Text style={footerLinks}>
              <Link href={`${siteUrl}`} style={footerLink}>
                {t.footer.website}
              </Link>
              {' • '}
              <Link href={`${siteUrl}/#contact`} style={footerLink}>
                {t.footer.contact}
              </Link>
            </Text>
            <Text style={footerCopyright}>
              © {new Date().getFullYear()} {t.brand}. {t.footer.copyright}
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}

export default ConfirmationEmail

// Styles
const main = {
  backgroundColor: '#f6f9fc',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
}

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '20px 0 48px',
  marginBottom: '64px',
  maxWidth: '600px',
}

const header = {
  padding: '32px 24px',
  backgroundColor: '#6366f1',
  textAlign: 'center' as const,
}

const brandName = {
  color: '#ffffff',
  fontSize: '32px',
  fontWeight: 'bold',
  margin: '0 0 8px 0',
  letterSpacing: '-0.5px',
}

const tagline = {
  color: '#e0e7ff',
  fontSize: '14px',
  margin: '0',
  fontWeight: '500',
}

const content_section = {
  padding: '24px 32px',
}

const emojiStyle = {
  fontSize: '48px',
  textAlign: 'center' as const,
  margin: '24px 0',
}

const h1 = {
  color: '#1f2937',
  fontSize: '28px',
  fontWeight: 'bold',
  margin: '16px 0',
  lineHeight: '1.3',
}

const h2 = {
  color: '#374151',
  fontSize: '20px',
  fontWeight: '600',
  margin: '24px 0 16px 0',
}

const paragraph = {
  color: '#4b5563',
  fontSize: '16px',
  lineHeight: '1.6',
  margin: '16px 0',
}

const customNeedBox = {
  backgroundColor: '#f3f4f6',
  borderLeft: '4px solid #6366f1',
  padding: '16px',
  margin: '24px 0',
  borderRadius: '4px',
}

const customNeedText = {
  color: '#374151',
  fontSize: '15px',
  margin: '0',
}

const hr = {
  borderColor: '#e5e7eb',
  margin: '32px 0',
}

const stepsList = {
  margin: '16px 0',
}

const step = {
  color: '#4b5563',
  fontSize: '15px',
  lineHeight: '1.8',
  margin: '8px 0',
}

const buttonContainer = {
  textAlign: 'center' as const,
  margin: '32px 0',
}

const button = {
  backgroundColor: '#6366f1',
  borderRadius: '8px',
  color: '#ffffff',
  fontSize: '16px',
  fontWeight: '600',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'inline-block',
  padding: '14px 32px',
}

const footer = {
  padding: '0 32px',
}

const footerText = {
  color: '#6b7280',
  fontSize: '14px',
  lineHeight: '1.6',
  textAlign: 'center' as const,
  margin: '24px 0',
}

const footerLinks = {
  textAlign: 'center' as const,
  margin: '16px 0',
  fontSize: '14px',
}

const footerLink = {
  color: '#6366f1',
  textDecoration: 'none',
}

const footerCopyright = {
  color: '#9ca3af',
  fontSize: '12px',
  textAlign: 'center' as const,
  margin: '16px 0',
}
