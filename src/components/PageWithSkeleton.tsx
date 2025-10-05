'use client'

import { useState, useEffect, ReactNode } from 'react'
import { SkeletonCard, SkeletonText } from '@/components/ui'

interface PageWithSkeletonProps {
  children: ReactNode
  skeletonType?: 'cards' | 'text' | 'custom'
  skeletonCount?: number
  loadingDuration?: number
  customSkeleton?: ReactNode
}

/**
 * HOC pour ajouter automatiquement des skeletons à une page
 * Usage: Envelopper le contenu de votre page avec ce composant
 *
 * @param children - Le contenu de la page à afficher après le chargement
 * @param skeletonType - Type de skeleton ('cards', 'text', 'custom')
 * @param skeletonCount - Nombre de skeletons à afficher (défaut: 3)
 * @param loadingDuration - Durée du chargement en ms (défaut: 600)
 * @param customSkeleton - Skeleton personnalisé (si skeletonType='custom')
 */
export function PageWithSkeleton({
  children,
  skeletonType = 'cards',
  skeletonCount = 3,
  loadingDuration = 600,
  customSkeleton
}: PageWithSkeletonProps) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, loadingDuration)

    return () => clearTimeout(timer)
  }, [loadingDuration])

  if (isLoading) {
    if (skeletonType === 'custom' && customSkeleton) {
      return <>{customSkeleton}</>
    }

    if (skeletonType === 'text') {
      return (
        <div className="space-y-4">
          {Array.from({ length: skeletonCount }).map((_, index) => (
            <SkeletonText key={index} lines={3} />
          ))}
        </div>
      )
    }

    // Par défaut: cards
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {Array.from({ length: skeletonCount }).map((_, index) => (
          <SkeletonCard key={index} />
        ))}
      </div>
    )
  }

  return <>{children}</>
}
