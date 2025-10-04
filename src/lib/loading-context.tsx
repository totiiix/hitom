'use client'
import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

interface LoadingContextType {
  isLoadingComplete: boolean
}

const LoadingContext = createContext<LoadingContextType>({ isLoadingComplete: false })

export function useLoadingComplete() {
  return useContext(LoadingContext)
}

export function LoadingProvider({ children }: { children: ReactNode }) {
  const [isLoadingComplete, setIsLoadingComplete] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoadingComplete(true)
    }, 2100) // Slightly after loading animation (2000ms)

    return () => clearTimeout(timer)
  }, [])

  return (
    <LoadingContext.Provider value={{ isLoadingComplete }}>
      {children}
    </LoadingContext.Provider>
  )
}
