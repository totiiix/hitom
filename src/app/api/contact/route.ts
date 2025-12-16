import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'
import { render } from '@react-email/render'
import ConfirmationEmail from '@/../../emails/ConfirmationEmail'
import { getEmailTranslations, getEmailSubject, type Locale, type NeedType } from '@/lib/email-translations'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { firstName, email, company, need, customNeed, budget, message, locale = 'fr' } = body

    // Validation
    if (!firstName || !email) {
      return NextResponse.json(
        { error: 'Le prénom et l\'email sont requis' },
        { status: 400 }
      )
    }

    // Validation email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Format d\'email invalide' },
        { status: 400 }
      )
    }

    // Construire le contenu de l'email pour l'équipe
    const needText = need === 'other' ? customNeed : need
    const notificationEmailContent = `
Nouveau message depuis le formulaire de contact

👤 Informations du contact:
━━━━━━━━━━━━━━━━━━━━━━━━━━━
Prénom: ${firstName}
Email: ${email}
${company ? `Entreprise: ${company}` : ''}

📋 Détails de la demande:
━━━━━━━━━━━━━━━━━━━━━━━━━━━
Besoin: ${needText}
${budget ? `Budget: ${budget}` : ''}

${message ? `💬 Message:\n${message}` : ''}

━━━━━━━━━━━━━━━━━━━━━━━━━━━
Envoyé depuis: ${process.env.NEXT_PUBLIC_SITE_URL || 'hitom.fr'}
Date: ${new Date().toLocaleString('fr-FR')}
    `.trim()

    // Charger les traductions pour la locale de l'utilisateur
    const translations = getEmailTranslations(locale as Locale)

    // Générer le HTML de l'email de confirmation avec React Email
    const confirmationEmailHtml = await render(
      ConfirmationEmail({
        firstName,
        need: need as NeedType,
        customNeed,
        siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://hitom.fr',
        translations,
      })
    )

    // Envoyer l'email de notification à l'équipe
    const notificationEmail = await resend.emails.send({
      from: 'Formulaire Hitom <noreply@contact.hitom.fr>',
      to: ['hello@hitom.fr'],
      replyTo: email,
      subject: `Nouveau contact: ${firstName} - ${needText}`,
      text: notificationEmailContent,
    })

    // Envoyer l'email de confirmation à l'utilisateur (avec design HTML)
    const confirmationEmail = await resend.emails.send({
      from: 'Hitom <noreply@contact.hitom.fr>',
      to: [email],
      subject: getEmailSubject(locale as Locale, need as NeedType),
      html: confirmationEmailHtml,
    })

    console.log('✅ Emails envoyés avec succès:', {
      notification: notificationEmail.id,
      confirmation: confirmationEmail.id
    })

    return NextResponse.json(
      {
        success: true,
        notificationId: notificationEmail.id,
        confirmationId: confirmationEmail.id
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('❌ Erreur lors de l\'envoi de l\'email:', error)
    return NextResponse.json(
      { error: 'Erreur lors de l\'envoi du message' },
      { status: 500 }
    )
  }
}
