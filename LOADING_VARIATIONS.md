# Variations de la page de chargement

## Version actuelle (Progress Bar)
- Logo avec animation pulse
- Nom Hitom
- Barre de progression avec gradient
- Pourcentage

## Variation 1: Spinner circulaire
```tsx
'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-white dark:bg-gray-900 transition-colors">
      <div className="flex flex-col items-center gap-8">
        {/* Logo */}
        <div className="relative">
          <Image
            src="/brand/logo.png"
            alt="Hitom"
            width={120}
            height={120}
            className="rounded-2xl"
            priority
          />
          {/* Spinning ring around logo */}
          <div className="absolute -inset-4 rounded-full border-4 border-transparent border-t-brand-primary border-r-brand-secondary animate-spin" />
        </div>

        {/* Brand Name */}
        <h1 className="text-4xl font-bold text-brand-dark dark:text-white animate-pulse">
          Hitom
        </h1>

        {/* Loading dots */}
        <div className="flex gap-2">
          <div className="w-3 h-3 bg-brand-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
          <div className="w-3 h-3 bg-brand-secondary rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
          <div className="w-3 h-3 bg-brand-tertiary rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
        </div>
      </div>
    </div>
  )
}
```

## Variation 2: Pulsation du logo
```tsx
'use client'

import Image from 'next/image'

export function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-white dark:bg-gray-900 transition-colors">
      <div className="flex flex-col items-center gap-8">
        {/* Logo with scale pulse */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-2xl blur-2xl opacity-50 animate-pulse" />
          <Image
            src="/brand/logo.png"
            alt="Hitom"
            width={120}
            height={120}
            className="rounded-2xl relative animate-pulse"
            priority
            style={{
              animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
            }}
          />
        </div>

        {/* Brand Name with gradient */}
        <h1 className="text-4xl font-bold bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
          Hitom
        </h1>

        {/* Animated underline */}
        <div className="w-32 h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-brand-primary to-brand-secondary animate-[loading_1.5s_ease-in-out_infinite]" />
        </div>
      </div>
    </div>
  )
}

// Add to tailwind.config.ts:
// keyframes: {
//   loading: {
//     '0%': { transform: 'translateX(-100%)' },
//     '100%': { transform: 'translateX(200%)' }
//   }
// }
```

## Variation 3: Multiple cercles concentriques
```tsx
'use client'

import Image from 'next/image'

export function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-white dark:bg-gray-900 transition-colors">
      <div className="relative flex flex-col items-center gap-8">
        {/* Concentric circles */}
        <div className="relative w-40 h-40 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border-4 border-brand-primary/30 animate-ping" />
          <div className="absolute inset-2 rounded-full border-4 border-brand-secondary/30 animate-ping" style={{ animationDelay: '0.2s' }} />
          <div className="absolute inset-4 rounded-full border-4 border-brand-tertiary/30 animate-ping" style={{ animationDelay: '0.4s' }} />

          <Image
            src="/brand/logo.png"
            alt="Hitom"
            width={96}
            height={96}
            className="rounded-2xl relative z-10"
            priority
          />
        </div>

        {/* Brand Name */}
        <h1 className="text-4xl font-bold text-brand-dark dark:text-white">
          Hitom
        </h1>
      </div>
    </div>
  )
}
```

## Variation 4: Orbites rotatives
```tsx
'use client'

import Image from 'next/image'

export function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-white dark:bg-gray-900 transition-colors">
      <div className="flex flex-col items-center gap-12">
        {/* Logo with orbiting dots */}
        <div className="relative w-40 h-40 flex items-center justify-center">
          <Image
            src="/brand/logo.png"
            alt="Hitom"
            width={96}
            height={96}
            className="rounded-2xl"
            priority
          />

          {/* Orbit 1 */}
          <div className="absolute inset-0 animate-spin" style={{ animationDuration: '3s' }}>
            <div className="absolute top-0 left-1/2 w-3 h-3 -ml-1.5 bg-brand-primary rounded-full" />
          </div>

          {/* Orbit 2 */}
          <div className="absolute inset-0 animate-spin" style={{ animationDuration: '2s', animationDirection: 'reverse' }}>
            <div className="absolute bottom-0 left-1/2 w-3 h-3 -ml-1.5 bg-brand-secondary rounded-full" />
          </div>

          {/* Orbit 3 */}
          <div className="absolute inset-0 animate-spin" style={{ animationDuration: '2.5s' }}>
            <div className="absolute top-1/2 right-0 w-3 h-3 -mt-1.5 bg-brand-tertiary rounded-full" />
          </div>
        </div>

        {/* Brand Name */}
        <h1 className="text-4xl font-bold text-brand-dark dark:text-white">
          Hitom
        </h1>
      </div>
    </div>
  )
}
```

## Variation 5: Skeleton minimaliste
```tsx
'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export function Loading() {
  const [dots, setDots] = useState('.')

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => prev.length >= 3 ? '.' : prev + '.')
    }, 500)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-white dark:bg-gray-900 transition-colors">
      <div className="flex flex-col items-center gap-6">
        {/* Simple logo */}
        <Image
          src="/brand/logo.png"
          alt="Hitom"
          width={80}
          height={80}
          className="rounded-2xl"
          priority
        />

        {/* Brand Name with animated dots */}
        <div className="flex items-center gap-1">
          <h1 className="text-3xl font-bold text-brand-dark dark:text-white">
            Hitom
          </h1>
          <span className="text-2xl text-brand-primary w-8 text-left">
            {dots}
          </span>
        </div>
      </div>
    </div>
  )
}
```

## Variation 6: Fade in élégant
```tsx
'use client'

import Image from 'next/image'

export function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-white dark:bg-gray-900 transition-colors">
      <div className="flex flex-col items-center gap-8 animate-fade-in">
        {/* Logo */}
        <div className="relative">
          <Image
            src="/brand/logo.png"
            alt="Hitom"
            width={120}
            height={120}
            className="rounded-2xl"
            priority
          />
          {/* Glow effect */}
          <div className="absolute -inset-4 bg-gradient-to-r from-brand-primary/20 to-brand-secondary/20 rounded-3xl blur-xl animate-pulse" />
        </div>

        {/* Brand Name */}
        <h1 className="text-5xl font-bold text-brand-dark dark:text-white tracking-tight">
          Hitom
        </h1>

        {/* Slim loading bar */}
        <div className="w-48 h-0.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <div className="h-full w-1/3 bg-gradient-to-r from-brand-primary to-brand-secondary animate-[shimmer_1.5s_ease-in-out_infinite]" />
        </div>
      </div>
    </div>
  )
}

// Add to tailwind.config.ts:
// keyframes: {
//   'fade-in': {
//     '0%': { opacity: '0', transform: 'scale(0.95)' },
//     '100%': { opacity: '1', transform: 'scale(1)' }
//   },
//   shimmer: {
//     '0%': { transform: 'translateX(-200%)' },
//     '100%': { transform: 'translateX(400%)' }
//   }
// }
```

## Variation 7: Modern Gradient Circles
```tsx
'use client'

import Image from 'next/image'

export function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-white dark:bg-gray-900 transition-colors overflow-hidden">
      {/* Animated background circles */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-brand-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-brand-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative flex flex-col items-center gap-8">
        {/* Logo */}
        <Image
          src="/brand/logo.png"
          alt="Hitom"
          width={120}
          height={120}
          className="rounded-2xl relative z-10"
          priority
        />

        {/* Brand Name */}
        <h1 className="text-5xl font-bold bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-tertiary bg-clip-text text-transparent">
          Hitom
        </h1>

        {/* Rotating gradient ring */}
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-brand-primary to-brand-secondary animate-spin" style={{ clipPath: 'polygon(50% 0%, 100% 0%, 100% 100%, 50% 100%)' }} />
          <div className="absolute inset-0.5 rounded-full bg-white dark:bg-gray-900" />
        </div>
      </div>
    </div>
  )
}
```

---

## Instructions pour changer la variation

Pour utiliser une de ces variations, remplacez le contenu de `src/components/Loading.tsx` avec le code de la variation choisie.

Certaines variations nécessitent d'ajouter des animations personnalisées dans `tailwind.config.ts` - voir les commentaires dans chaque variation.

**Recommandations:**
- **Variation 1** (Spinner): Classique et universellement reconnu
- **Variation 4** (Orbites): Original et rappelle l'aspect tech/AI
- **Variation 5** (Minimaliste): Très élégant et rapide à charger
- **Variation 7** (Gradient moderne): Très actuel, suit les tendances 2024
