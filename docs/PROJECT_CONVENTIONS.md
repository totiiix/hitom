# Conventions et Bonnes Pratiques du Projet Hitom

## 🎯 Règles Générales

### Git & Versioning

#### Commits
- ✅ **Commit souvent** : Chaque fonctionnalité logique = 1 commit
- ✅ **Messages clairs** : Utiliser le format `[type]: [description]`
  - `feat`: Nouvelle fonctionnalité
  - `fix`: Correction de bug
  - `refactor`: Refactoring
  - `docs`: Documentation
  - `style`: Formatage/style
  - `test`: Tests
  - `chore`: Tâches (config, deps)
- ✅ **Tester avant commit** : S'assurer que le code compile et fonctionne
- ❌ **Ne jamais commiter** : Code qui ne compile pas, secrets, node_modules

#### Push
- ✅ **Push quand** :
  - Feature complète et testée
  - Fin de session de travail
  - Avant de quitter pour sauvegarder
- ❌ **Ne jamais pusher** : Code avec bugs connus, code non testé

#### Branches
- `main` : Branche stable, toujours fonctionnelle
- `feature/*` : Nouvelles fonctionnalités
- `fix/*` : Corrections de bugs
- `backup-*` : Branches de sauvegarde temporaires

### Workflow Recommandé
```bash
# 1. Créer une branche
git checkout -b feature/ma-feature

# 2. Travailler + commits fréquents
git add .
git commit -m "feat: Add X"

# 3. Tester
npm run dev

# 4. Merger dans main
git checkout main
git merge feature/ma-feature

# 5. Pusher
git push

# 6. Nettoyer
git branch -d feature/ma-feature
```

---

## 🎨 Styles & UI

### CSS & Tailwind
- ✅ **TOUJOURS utiliser Tailwind CSS** quand possible
- ❌ **JAMAIS de CSS-in-JS** (`<style jsx>`, `style={{}}`)
- ❌ **JAMAIS de fichiers CSS séparés** sauf cas exceptionnels
- ✅ **Animations** : Définir dans `tailwind.config.ts` puis utiliser les classes
- ✅ **Classes utilitaires custom** : Via plugin Tailwind dans config

### Exemples

#### ✅ BON
```tsx
<div className="flex items-center gap-4 transition-all duration-300 hover:scale-105">
  <Button className="bg-brand-primary hover:bg-brand-secondary" />
</div>
```

#### ❌ MAUVAIS
```tsx
<div style={{ display: 'flex', gap: '16px' }}>
  <Button style={{ backgroundColor: '#1FA2FF' }} />
</div>
```

---

## 🎨 Assets Graphiques (Design System)

### Règle d'Or
**Tous les composants UI doivent être basés sur `/src/app/[locale]/assets-graphiques/page.tsx`**

### Process
1. **Consulter** `assets-graphiques/page.tsx` pour voir les composants existants
2. **Si le composant existe** : Utiliser exactement le même style/structure
3. **Si le composant n'existe pas** :
   - Le créer d'abord dans `assets-graphiques/page.tsx`
   - Valider visuellement
   - Puis l'implémenter dans le projet

### Catégories disponibles
- **Buttons** : Primary, Secondary, Outline, Ghost, Danger
- **Cards** : Default, Hover, Featured, Gradient
- **Alerts & Notifications** : Success, Error, Warning, Info
- **Forms** : Input, Textarea, Select, Checkbox, Radio
- **Badges & Pills** : Status badges, tags
- **Animations** : Fade, Slide, Scale, etc.

### Exemple
```tsx
// ❌ MAUVAIS : Créer un bouton custom sans référence
<button className="px-6 py-3 bg-blue-500 rounded">Click</button>

// ✅ BON : Utiliser le design system
// 1. Vérifier dans assets-graphiques/page.tsx
// 2. Copier le style exact
<button className="px-6 py-3 rounded-3xl bg-brand-primary text-white hover:bg-brand-secondary transition-all duration-300 hover:shadow-lg">
  Click
</button>
```

---

## 🏗️ Architecture & Code

### Composants
- ✅ **'use client'** : Uniquement si hooks React (useState, useEffect, etc.)
- ✅ **TypeScript** : Toujours typer les props et retours
- ✅ **Composants réutilisables** : Dans `/src/components/`
- ✅ **Hooks custom** : Dans `/src/hooks/`

### Imports
```tsx
// Ordre recommandé
import { useState, useEffect } from 'react'           // React
import { useTranslations } from 'next-intl'           // Libs externes
import { Button, Card } from '@/components/ui'        // Composants UI
import { useScrollAnimation } from '@/hooks/...'      // Hooks custom
import { track } from '@/lib/analytics'               // Utils
```

### Performance
- ✅ **Images** : Toujours utiliser `next/image` avec `priority` pour hero
- ✅ **Lazy loading** : Composants lourds avec `dynamic()`
- ✅ **Memoization** : `useMemo`, `useCallback` pour calculs lourds
- ❌ **Éviter** : Re-renders inutiles, state dans loops

---

## 📦 Composants UI Disponibles

### Existants (`/src/components/ui/`)
- `Button.tsx` : Boutons avec variants
- `Card.tsx` : Cards avec hover effects
- `Toast.tsx` : Notifications toast
- `Skeleton.tsx` : Skeleton loaders (SkeletonCard, SkeletonText)

### HOCs
- `PageWithSkeleton.tsx` : Wrapper pour skeletons automatiques
- `ErrorBoundary.tsx` : Gestion globale des erreurs

### Hooks
- `useScrollAnimation.ts` : Animations au scroll (Intersection Observer)
- `useLoadingComplete.ts` : État de chargement global
- `useToast.ts` : Notifications

---

## 🎬 Animations

### Principes
- ✅ **Tailwind uniquement** : Toutes les animations dans `tailwind.config.ts`
- ✅ **Durées** : 300ms (rapide), 500ms (normal), 700ms (lent)
- ✅ **Easing** : `ease-out` (par défaut), `ease-in-out` (smooth)
- ✅ **Reduced motion** : Toujours respecter `prefers-reduced-motion`

### Animations disponibles
```typescript
// Dans tailwind.config.ts
- 'slide-in-right', 'slide-out-right', 'slide-up'
- 'fade-in-up', 'fade-in-down', 'fade-in-left', 'fade-in-right'
- 'fade-in', 'scale-in'
- 'shimmer' (pour skeletons)
```

### Utilisation
```tsx
// Scroll animations (avec hook)
const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 })

<div
  ref={ref}
  className={`transition-all duration-700 ${
    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
  }`}
>
  Content
</div>

// Animations Tailwind directes
<div className="animate-fade-in-up">Content</div>
```

---

## 🌍 Internationalisation (i18n)

### Next-intl
- ✅ **Toujours utiliser** `useTranslations('namespace')`
- ✅ **Fichiers** : `/messages/[locale].json`
- ✅ **Namespaces** : `hero`, `services`, `about`, `contact`, `poc`, etc.

```tsx
const t = useTranslations('hero')

<h1>{t('title')}</h1>
<p>{t('subtitle')}</p>
```

---

## 📚 Documentation

### Quand documenter
- ✅ **Nouveaux composants** : JSDoc avec exemples
- ✅ **Hooks custom** : Description + paramètres + exemples
- ✅ **Systèmes complexes** : Guide markdown (ex: SKELETON_GUIDE.md)
- ✅ **API publiques** : Toujours documenter

### Format JSDoc
```tsx
/**
 * Hook pour animer les éléments au scroll
 *
 * @param options - Options de configuration
 * @param options.threshold - % de visibilité pour trigger (0-1)
 * @param options.triggerOnce - Animation une seule fois
 *
 * @returns Object avec ref et isVisible
 *
 * @example
 * const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 })
 * <div ref={ref} className={isVisible ? 'visible' : 'hidden'}>...</div>
 */
```

---

## 🚫 Interdictions Absolues

### Code
- ❌ **JAMAIS** de `console.log` en production (utiliser `track()` analytics)
- ❌ **JAMAIS** de secrets hardcodés (utiliser `.env.local`)
- ❌ **JAMAIS** de `any` en TypeScript (utiliser `unknown` si besoin)
- ❌ **JAMAIS** de CSS inline sauf exception justifiée
- ❌ **JAMAIS** de modifications directes du DOM (utiliser React state)

### Git
- ❌ **JAMAIS** de `git push --force` sur `main` (sauf backup validé)
- ❌ **JAMAIS** de commit de `node_modules`, `.env`, `dist/`
- ❌ **JAMAIS** de commit avec message vague ("fix", "update", "wip")

---

## ✅ Checklist avant Commit

- [ ] Le code compile sans erreur
- [ ] Pas de console.log restant
- [ ] Tailwind utilisé (pas de CSS inline)
- [ ] Composants UI basés sur assets-graphiques
- [ ] Types TypeScript corrects
- [ ] Animations définies dans tailwind.config.ts
- [ ] Traductions ajoutées si texte visible
- [ ] Tests manuels effectués
- [ ] Message de commit clair et descriptif

---

## ✅ Checklist avant Push

- [ ] Tous les commits testés individuellement
- [ ] Build réussit (`npm run build`)
- [ ] Pas de warnings TypeScript
- [ ] Feature complète et fonctionnelle
- [ ] Documentation ajoutée si nécessaire
- [ ] Branch mergée dans main proprement

---

## 🎯 Priorités du Projet

### Performance
1. Chargement instantané (pas de délais artificiels)
2. Animations fluides (60fps)
3. Images optimisées (WebP, lazy loading)
4. Code splitting (dynamic imports)

### UX
1. Feedback visuel immédiat (loading states, skeletons)
2. Animations subtiles mais présentes
3. Accessibilité (keyboard nav, ARIA, contrast)
4. Responsive mobile-first

### Maintenabilité
1. Code DRY (Don't Repeat Yourself)
2. Composants réutilisables
3. Documentation inline
4. Types TypeScript stricts

---

## 📝 Notes Spécifiques au Projet

### Loading Screen
- **État** : Temporairement désactivé
- **Fichier** : `src/components/Loading.tsx`
- **Raison** : Besoin de revoir la logique avec sessionStorage
- **TODO** : Réimplémenter avec logique première visite uniquement

### Skeletons

#### Qu'est-ce qu'un Skeleton ?
Les Skeleton Loaders sont des placeholders animés qui s'affichent pendant le chargement du contenu pour améliorer l'UX.

#### Quand les utiliser
- ✅ Pages avec contenu dynamique (API, données)
- ✅ Listes de cards, grilles
- ✅ Contenu textuel (articles)
- ❌ Pages 100% statiques

#### Méthode recommandée : HOC PageWithSkeleton
```tsx
import { PageWithSkeleton } from '@/components/PageWithSkeleton'

export default function MyPage() {
  return (
    <PageWithSkeleton
      skeletonType="cards"
      skeletonCount={6}
      loadingDuration={600}
    >
      <div className="grid grid-cols-3 gap-6">
        {/* Votre contenu */}
      </div>
    </PageWithSkeleton>
  )
}
```

#### Types disponibles
- `SkeletonCard` : Pour cards (POC, services)
- `SkeletonText` : Pour contenu textuel
- `Skeleton` : Skeleton de base personnalisable

#### Options du HOC
- `skeletonType`: `'cards' | 'text' | 'custom'`
- `skeletonCount`: Nombre de skeletons
- `loadingDuration`: 600-800ms recommandé
- `customSkeleton`: Skeleton personnalisé

#### Bonnes pratiques
- **Durée** : 600-800ms optimal (< 300ms invisible, > 1000ms frustrant)
- **Nombre** : Correspond au nombre réel d'éléments
- **Animation** : Préférer `wave` pour effet moderne

### Analytics
- **Google Tag Manager** : Configuré
- **Clarity** : Intégré
- **Tracking** : Utiliser `track()` de `@/lib/analytics`

---

## 🔄 Mise à jour de ce document

Ce document doit être mis à jour quand :
- Nouvelles conventions adoptées
- Nouveaux composants UI créés
- Changements d'architecture
- Nouvelles règles Git

**Dernière mise à jour** : 2025-01-05
**Version** : 1.0
