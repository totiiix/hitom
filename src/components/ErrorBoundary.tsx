'use client'
import { Component, ReactNode } from 'react'
import { X } from 'lucide-react'

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
  error?: Error
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: any) {
    console.error('Error caught by boundary:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback
      }

      return (
        <>
          {this.props.children}
          <div className="fixed top-4 right-4 z-[9999] max-w-md">
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 shadow-lg">
              <div className="flex items-start gap-3">
                <X className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <h4 className="font-semibold text-red-800 dark:text-red-300">Erreur</h4>
                  <p className="text-sm text-red-700 dark:text-red-400 mt-1">
                    Une erreur est survenue. Veuillez réessayer.
                  </p>
                  {process.env.NODE_ENV === 'development' && this.state.error && (
                    <details className="mt-2">
                      <summary className="cursor-pointer text-xs text-red-600 dark:text-red-400">
                        Détails (dev)
                      </summary>
                      <pre className="text-xs mt-1 text-red-700 dark:text-red-400 overflow-auto max-h-24">
                        {this.state.error.toString()}
                      </pre>
                    </details>
                  )}
                  <div className="flex gap-2 mt-3">
                    <button
                      onClick={() => this.setState({ hasError: false })}
                      className="text-xs px-3 py-1.5 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
                    >
                      Réessayer
                    </button>
                    <button
                      onClick={() => window.location.href = '/'}
                      className="text-xs px-3 py-1.5 bg-red-100 dark:bg-red-900/40 text-red-800 dark:text-red-300 rounded hover:bg-red-200 dark:hover:bg-red-900/60 transition-colors"
                    >
                      Accueil
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => this.setState({ hasError: false })}
                  className="text-red-400 hover:text-red-600 dark:hover:text-red-300"
                  aria-label="Fermer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </>
      )
    }

    return this.props.children
  }
}
