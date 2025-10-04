# Formulaires & CRM — explications rapides

**Tally vs Typeform**
- **Tally**: super rapide, très flexible, meilleur coût (souvent gratuit), webhooks natifs → idéal pour démarrer.
- **Typeform**: UX premium, logique avancée, plus cher.

**Pipeline recommandé (simple)**
Formulaire (Tally) → Webhook n8n → Brevo (liste + tag) → Notification Slack/Email → (optionnel) Airtable/Notion pour suivi.

**Pourquoi pas un CRM lourd tout de suite ?**
- Au départ, un tableur (Airtable/Notion) + tags Brevo couvrent 90% des besoins (qualification, suivi).
- Quand le volume augmente: migrer vers HubSpot/Zoho en branchant n8n sans refondre les formulaires.

**Implémentation côté site**
- Boutons/CTAs ouvrent des formulaires Tally (overlay) ou pages dédiées.
- Les events GA4 sont tagués (`lead_submit`, `book_call`, etc.).
