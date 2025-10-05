'use client'
import { useEffect, useState } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

export function useNavigationLoading() {
  const [isNavigating, setIsNavigating] = useState(false)
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    setIsNavigating(false)
  }, [pathname, searchParams])

  const startNavigating = () => setIsNavigating(true)

  return { isNavigating, startNavigating }
}
