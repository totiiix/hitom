# Guide d'utilisation des Skeletons

## 📖 Qu'est-ce qu'un Skeleton Loader ?

Les Skeleton Loaders sont des placeholders animés qui s'affichent pendant le chargement du contenu. Ils améliorent l'UX en montrant la structure de la page avant que le contenu réel n'arrive.

## 🎯 Quand utiliser les Skeletons ?

- ✅ Pages avec du contenu qui charge (API, fichiers, données dynamiques)
- ✅ Listes de cards, grilles, articles
- ✅ Contenu textuel (articles, descriptions)
- ❌ Pages 100% statiques sans chargement

## 🚀 Utilisation rapide

### Méthode 1 : Composants Skeleton individuels

```tsx
import { SkeletonCard, SkeletonText, Skeleton } from '@/components/ui'
import { useState, useEffect } from 'react'

export default function MyPage() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simuler ou attendre un vrai chargement
    const timer = setTimeout(() => setIsLoading(false), 600)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div>
      {isLoading ? (
        // Skeletons pendant le chargement
        <div className="grid grid-cols-3 gap-6">
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
        </div>
      ) : (
        // Contenu réel
        <div className="grid grid-cols-3 gap-6">
          {/* Vos cards ici */}
        </div>
      )}
    </div>
  )
}
```

### Méthode 2 : HOC PageWithSkeleton (Recommandé)

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
        {/* Votre contenu ici */}
      </div>
    </PageWithSkeleton>
  )
}
```

## 🎨 Types de Skeletons disponibles

### 1. SkeletonCard
Pour les cards de type POC, services, etc.

```tsx
<SkeletonCard />
```

### 2. SkeletonText
Pour du contenu textuel (paragraphes, articles)

```tsx
<SkeletonText lines={5} />
```

### 3. Skeleton
Skeleton de base personnalisable

```tsx
<Skeleton
  variant="rectangular"  // 'text' | 'circular' | 'rectangular'
  width={200}
  height={100}
  animation="wave"       // 'pulse' | 'wave' | 'none'
/>
```

## 🛠️ Options du HOC PageWithSkeleton

| Prop | Type | Défaut | Description |
|------|------|--------|-------------|
| `skeletonType` | `'cards' \| 'text' \| 'custom'` | `'cards'` | Type de skeleton à afficher |
| `skeletonCount` | `number` | `3` | Nombre de skeletons |
| `loadingDuration` | `number` | `600` | Durée en ms |
| `customSkeleton` | `ReactNode` | - | Skeleton personnalisé |

## 📝 Exemples par type de page

### Page avec Cards (POC, Services)

```tsx
import { PageWithSkeleton } from '@/components/PageWithSkeleton'

export default function ServicesPage() {
  return (
    <PageWithSkeleton skeletonType="cards" skeletonCount={3}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map(service => (
          <Card key={service.id}>{/* Card content */}</Card>
        ))}
      </div>
    </PageWithSkeleton>
  )
}
```

### Page avec Texte (Articles, Blog)

```tsx
import { PageWithSkeleton } from '@/components/PageWithSkeleton'

export default function ArticlePage() {
  return (
    <PageWithSkeleton skeletonType="text" skeletonCount={5}>
      <article>
        <h1>{article.title}</h1>
        <p>{article.content}</p>
      </article>
    </PageWithSkeleton>
  )
}
```

### Page avec Skeleton personnalisé

```tsx
import { PageWithSkeleton } from '@/components/PageWithSkeleton'
import { Skeleton } from '@/components/ui'

const MyCustomSkeleton = (
  <div className="space-y-4">
    <Skeleton variant="rectangular" height={200} className="w-full" />
    <Skeleton variant="text" width="80%" />
    <Skeleton variant="text" width="60%" />
  </div>
)

export default function CustomPage() {
  return (
    <PageWithSkeleton
      skeletonType="custom"
      customSkeleton={MyCustomSkeleton}
    >
      {/* Votre contenu */}
    </PageWithSkeleton>
  )
}
```

## ⚡ Bonnes pratiques

1. **Durée de chargement** : 400-800ms est optimal
   - Trop court (< 300ms) : L'utilisateur ne voit pas le skeleton
   - Trop long (> 1000ms) : Frustrant pour l'utilisateur

2. **Nombre de skeletons** : Correspond au nombre réel d'éléments
   - Si vous affichez 6 POCs, utilisez `skeletonCount={6}`

3. **Type de skeleton** : Correspond à votre layout
   - Cards → `skeletonType="cards"`
   - Texte → `skeletonType="text"`
   - Mixte → `skeletonType="custom"`

4. **Animation** : Préférez `wave` pour un effet moderne
   ```tsx
   <Skeleton animation="wave" />
   ```

## 🎯 Template pour nouvelle page

```tsx
'use client'

import { PageWithSkeleton } from '@/components/PageWithSkeleton'
// Vos autres imports...

export default function NewPage() {
  return (
    <main className="pt-20">
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h1>Page Title</h1>

          <PageWithSkeleton
            skeletonType="cards"
            skeletonCount={6}
            loadingDuration={600}
          >
            <div className="grid grid-cols-3 gap-6">
              {/* Votre contenu ici */}
            </div>
          </PageWithSkeleton>
        </div>
      </section>
    </main>
  )
}
```

## 🔧 Configuration Tailwind

Les animations sont déjà configurées dans `tailwind.config.ts` :
- `animate-pulse` : Animation de pulsation
- `animate-shimmer` : Animation de shimmer (vague)

## 📚 Ressources

- Composants dans `/src/components/ui/Skeleton.tsx`
- HOC dans `/src/components/PageWithSkeleton.tsx`
- Exemples dans `/src/app/[locale]/poc-ia/page.tsx`

---

**💡 Astuce** : Pour tester vos skeletons, augmentez temporairement `loadingDuration` à 3000ms
