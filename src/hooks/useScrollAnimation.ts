'use client'

import { useEffect, useRef, useState } from 'react'

interface UseScrollAnimationOptions {
  threshold?: number
  rootMargin?: string
  triggerOnce?: boolean
}

/**
 * Hook pour animer les éléments au scroll avec Intersection Observer
 *
 * @param options - Options de configuration
 * @param options.threshold - Pourcentage de visibilité pour déclencher l'animation (0-1)
 * @param options.rootMargin - Marge autour de la zone de détection
 * @param options.triggerOnce - Si true, l'animation ne se déclenche qu'une seule fois
 *
 * @returns Object avec ref à attacher à l'élément et état isVisible
 *
 * @example
 * const { ref, isVisible } = useScrollAnimation({ threshold: 0.2, triggerOnce: true })
 * return <div ref={ref} className={isVisible ? 'opacity-100' : 'opacity-0'}>Content</div>
 */
export function useScrollAnimation<T extends HTMLElement = HTMLDivElement>(
  options: UseScrollAnimationOptions = {}
) {
  const {
    threshold = 0.1,
    rootMargin = '0px',
    triggerOnce = true
  } = options

  const ref = useRef<T>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (triggerOnce) {
            observer.unobserve(element)
          }
        } else if (!triggerOnce) {
          setIsVisible(false)
        }
      },
      {
        threshold,
        rootMargin
      }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [threshold, rootMargin, triggerOnce])

  return { ref, isVisible }
}
