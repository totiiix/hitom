'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export function Loading() {
  const [progress, setProgress] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setIsComplete(true)
          return 100
        }
        return prev + 2
      })
    }, 20)

    return () => clearInterval(interval)
  }, [])

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-white dark:bg-gray-900 transition-all duration-500 ${
        isComplete ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="flex flex-col items-center gap-8">
        {/* Logo + Brand Name on same line */}
        <div className="flex items-center gap-4">
          {/* Logo with slide up animation */}
          <div
            className="animate-[slideUp_0.6s_ease-out]"
            style={{
              animation: 'slideUp 0.6s ease-out'
            }}
          >
            <Image
              src="/brand/logo.png"
              alt="Hitom"
              width={64}
              height={64}
              priority
              className="rounded-xl w-16 h-auto"
            />
          </div>

          {/* Brand Name with slide up animation */}
          <h1
            className="text-6xl font-bold text-brand-dark dark:text-white animate-[slideUp_0.6s_ease-out]"
            style={{
              animation: 'slideUp 0.6s ease-out'
            }}
          >
            Hitom
          </h1>
        </div>

        {/* Progress Bar */}
        <div className="w-64 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-brand-primary to-brand-secondary transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Progress Percentage */}
        <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
          {progress}%
        </p>
      </div>

      <style jsx>{`
        @keyframes slideUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}
