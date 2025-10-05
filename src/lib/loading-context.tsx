'use client'
import { createContext, useContext, ReactNode } from 'react'

interface LoadingContextType {
  isLoadingComplete: boolean
}

const LoadingContext = createContext<LoadingContextType>({ isLoadingComplete: true })

export function useLoadingComplete() {
  return useContext(LoadingContext)
}

export function LoadingProvider({ children }: { children: ReactNode }) {
  // Loading désactivé: toujours true
  return (
    <LoadingContext.Provider value={{ isLoadingComplete: true }}>
      {children}
    </LoadingContext.Provider>
  )
}
