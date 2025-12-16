# Templates d'Emails Hitom

Ce dossier contient les templates d'emails utilisés par l'application Hitom, construits avec [React Email](https://react.email/).

## 📧 Templates disponibles

### ConfirmationEmail.tsx
Email de confirmation envoyé automatiquement aux utilisateurs après soumission du formulaire de contact.

**Personnalisé selon 5 types de demandes :**
- 🚀 **POC** - Proof of Concept IA
- 🔍 **UX** - Audit UX
- 🤖 **AI** - Solutions IA
- ⚙️ **Automation** - Automatisation
- 📧 **Other** - Demandes personnalisées

## 🎨 Personnaliser le design

### 1. Prévisualiser les emails en temps réel

```bash
npm run email:preview
```

Ouvre un navigateur sur http://localhost:3001 avec :
- ✅ Prévisualisation en temps réel
- ✅ Mode desktop/mobile
- ✅ Test sur différents clients email
- ✅ Hot reload automatique

### 2. Modifier le design

Éditez le fichier `ConfirmationEmail.tsx` :

```tsx
// Modifier les couleurs
const header = {
  backgroundColor: '#6366f1', // Couleur principale
}

const button = {
  backgroundColor: '#6366f1', // Couleur du bouton
  borderRadius: '8px',        // Arrondi
  padding: '14px 32px',       // Espacement
}

// Modifier le texte
const emailContent = {
  poc: {
    title: 'Merci pour votre intérêt !',  // Titre personnalisé
    description: 'Votre description...',   // Description
    emoji: '🚀',                           // Emoji
  }
}
```

### 3. Structure du template

```
┌─────────────────────────┐
│   Header (Branding)     │ ← Logo/Nom Hitom
├─────────────────────────┤
│   Emoji                 │ ← 🚀 🔍 🤖 ⚙️ 📧
│   Salutation            │ ← Bonjour {firstName}
│   Message principal     │ ← Contenu personnalisé
│   [Custom Need Box]     │ ← Si "Autre" est sélectionné
│   ─────────────────     │
│   Prochaines étapes     │ ← Liste des 3 étapes
│   [Bouton CTA]          │ ← Lien vers le site
├─────────────────────────┤
│   Footer                │ ← Signature + liens
└─────────────────────────┘
```

## 🎯 Composants React Email utilisés

- `Html` - Conteneur principal
- `Head` - Métadonnées
- `Preview` - Texte de prévisualisation
- `Body` - Corps de l'email
- `Container` - Conteneur centré
- `Section` - Sections
- `Heading` - Titres (h1, h2)
- `Text` - Paragraphes
- `Link` - Liens
- `Hr` - Séparateurs

## 🎨 Palette de couleurs

```css
/* Couleurs principales */
--primary: #6366f1     /* Bleu Hitom */
--primary-light: #e0e7ff
--white: #ffffff

/* Couleurs de texte */
--text-dark: #1f2937
--text-medium: #374151
--text-light: #4b5563
--text-muted: #6b7280

/* Couleurs de fond */
--bg-light: #f6f9fc
--bg-white: #ffffff
--bg-gray: #f3f4f6

/* Bordures */
--border: #e5e7eb
```

## 📝 Exemples de personnalisation

### Changer le logo/branding

```tsx
<Section style={header}>
  <Img
    src="https://votre-domaine.com/logo.png"
    width="120"
    height="40"
    alt="Hitom"
  />
</Section>
```

### Ajouter une image

```tsx
import { Img } from '@react-email/components'

<Img
  src="https://example.com/image.jpg"
  alt="Description"
  width="600"
  style={{ marginBottom: '24px' }}
/>
```

### Modifier le bouton

```tsx
const button = {
  backgroundColor: '#10b981',  // Vert
  color: '#ffffff',
  fontSize: '18px',            // Plus grand
  padding: '16px 48px',        // Plus d'espace
  borderRadius: '12px',        // Plus arrondi
}
```

### Ajouter une section

```tsx
<Section style={newSection}>
  <Heading as="h2" style={h2}>
    Nouveau titre
  </Heading>
  <Text style={paragraph}>
    Votre contenu ici...
  </Text>
</Section>
```

## 🚀 Déploiement

Les emails sont automatiquement utilisés par l'API route `/api/contact`.

Après modification :
1. Les changements sont appliqués immédiatement
2. Pas besoin de rebuild
3. Testez avec le formulaire de contact

## 📚 Ressources

- [Documentation React Email](https://react.email/docs/introduction)
- [Composants disponibles](https://react.email/docs/components/html)
- [Exemples de templates](https://react.email/examples)
- [Best practices pour les emails](https://react.email/docs/guides/email-client-compatibility)

## 🐛 Dépannage

### L'email ne s'affiche pas correctement

1. Vérifiez que tous les styles sont inline
2. Utilisez des tables pour la mise en page complexe
3. Évitez flexbox/grid (non supporté partout)
4. Testez sur différents clients (Gmail, Outlook, etc.)

### Les images ne s'affichent pas

1. Utilisez des URLs absolues (https://)
2. Vérifiez que les images sont accessibles publiquement
3. Ajoutez des attributs width/height

### Le preview ne fonctionne pas

```bash
# Réinstaller React Email
npm install react-email @react-email/components

# Relancer le preview
npm run email:preview
```
