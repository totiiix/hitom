'use client'

import { useState, useEffect } from 'react'
import { Moon, Sun, Sparkles, Rocket, Settings, Mail, Phone, MapPin, Check, X, AlertCircle, Info, ChevronDown, ChevronRight, Play, User, TrendingUp, TrendingDown } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'

export default function AssetsGraphiquesPage() {
  const [mounted, setMounted] = useState(false)
  const [activeTab, setActiveTab] = useState('tab1')
  const [isAccordionOpen, setIsAccordionOpen] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState('Choisissez une option')
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4 dark:text-white">Assets Graphiques</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Bibliothèque de composants réutilisables et guide de style
          </p>
        </div>

        {/* Couleurs */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 dark:text-white">Palette de Couleurs</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4">
            <div className="space-y-2">
              <div className="h-24 rounded-lg bg-brand-primary"></div>
              <p className="text-sm dark:text-gray-300">Brand Primary</p>
              <code className="text-xs text-gray-500">#3B82F6</code>
            </div>
            <div className="space-y-2">
              <div className="h-24 rounded-lg bg-brand-secondary"></div>
              <p className="text-sm dark:text-gray-300">Brand Secondary</p>
              <code className="text-xs text-gray-500">#8B5CF6</code>
            </div>
            <div className="space-y-2">
              <div className="h-24 rounded-lg bg-[#a6ffcb]"></div>
              <p className="text-sm dark:text-gray-300">Success Green</p>
              <code className="text-xs text-gray-500">#A6FFCB</code>
            </div>
            <div className="space-y-2">
              <div className="h-24 rounded-lg bg-gradient-to-r from-yellow-500 to-orange-500"></div>
              <p className="text-sm dark:text-gray-300">Warning Gradient</p>
              <code className="text-xs text-gray-500">Yellow→Orange</code>
            </div>
            <div className="space-y-2">
              <div className="h-24 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500"></div>
              <p className="text-sm dark:text-gray-300">Premium Gradient</p>
              <code className="text-xs text-gray-500">Purple→Pink</code>
            </div>
            <div className="space-y-2">
              <div className="h-24 rounded-lg bg-gray-900 dark:bg-white"></div>
              <p className="text-sm dark:text-gray-300">Dark/Light</p>
              <code className="text-xs text-gray-500">#111827</code>
            </div>
            <div className="space-y-2">
              <div className="h-24 rounded-lg bg-gray-100 dark:bg-gray-800"></div>
              <p className="text-sm dark:text-gray-300">Background</p>
              <code className="text-xs text-gray-500">#F3F4F6</code>
            </div>
          </div>
        </section>

        {/* Typographie */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 dark:text-white">Typographie</h2>
          <div className="space-y-4 bg-white dark:bg-gray-800 p-6 rounded-xl">
            <div>
              <p className="text-xs text-gray-500 mb-2">Heading 1 - text-fluid-3xl</p>
              <h1 className="text-fluid-3xl font-bold dark:text-white">The quick brown fox jumps</h1>
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-2">Heading 2 - text-fluid-2xl</p>
              <h2 className="text-fluid-2xl font-bold dark:text-white">The quick brown fox jumps</h2>
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-2">Heading 3 - text-fluid-xl</p>
              <h3 className="text-fluid-xl font-bold dark:text-white">The quick brown fox jumps</h3>
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-2">Body - text-fluid-base</p>
              <p className="text-fluid-base dark:text-gray-300">The quick brown fox jumps over the lazy dog</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-2">Small - text-fluid-sm</p>
              <p className="text-fluid-sm text-gray-600 dark:text-gray-400">The quick brown fox jumps over the lazy dog</p>
            </div>
          </div>
        </section>

        {/* Boutons */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 dark:text-white">Boutons</h2>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl">
            <div className="space-y-6">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Test Notifications</p>
                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={() => {
                      const notification = document.createElement('div')
                      notification.className = 'fixed top-4 right-4 z-[9999] max-w-md animate-slide-in-right'
                      notification.innerHTML = `
                        <div class="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 shadow-lg">
                          <div class="flex items-start gap-3">
                            <svg class="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                            </svg>
                            <div class="flex-1">
                              <h4 class="font-semibold text-red-800 dark:text-red-300">Erreur</h4>
                              <p class="text-sm text-red-700 dark:text-red-400 mt-1">Une erreur est survenue. Veuillez réessayer.</p>
                            </div>
                            <button onclick="
                              const notif = this.parentElement.parentElement.parentElement;
                              notif.classList.remove('animate-slide-in-right');
                              notif.classList.add('animate-slide-out-right');
                              setTimeout(() => notif.remove(), 300);
                            " class="text-red-400 hover:text-red-600 dark:hover:text-red-300" aria-label="Fermer">
                              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                              </svg>
                            </button>
                          </div>
                        </div>
                      `
                      document.body.appendChild(notification)
                      setTimeout(() => {
                        notification.classList.remove('animate-slide-in-right')
                        notification.classList.add('animate-slide-out-right')
                        setTimeout(() => notification.remove(), 300)
                      }, 2000)
                    }}
                    className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-xl transition-all duration-300 font-medium shadow-md hover:shadow-lg flex items-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    Erreur
                  </button>
                  <button
                    onClick={() => {
                      const notification = document.createElement('div')
                      notification.className = 'fixed top-4 right-4 z-[9999] max-w-md animate-slide-in-right'
                      notification.innerHTML = `
                        <div class="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4 shadow-lg">
                          <div class="flex items-start gap-3">
                            <svg class="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            <div class="flex-1">
                              <h4 class="font-semibold text-green-800 dark:text-green-300">Succès !</h4>
                              <p class="text-sm text-green-700 dark:text-green-400 mt-1">Votre action a été effectuée avec succès.</p>
                            </div>
                            <button onclick="
                              const notif = this.parentElement.parentElement.parentElement;
                              notif.classList.remove('animate-slide-in-right');
                              notif.classList.add('animate-slide-out-right');
                              setTimeout(() => notif.remove(), 300);
                            " class="text-green-400 hover:text-green-600 dark:hover:text-green-300" aria-label="Fermer">
                              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                              </svg>
                            </button>
                          </div>
                        </div>
                      `
                      document.body.appendChild(notification)
                      setTimeout(() => {
                        notification.classList.remove('animate-slide-in-right')
                        notification.classList.add('animate-slide-out-right')
                        setTimeout(() => notification.remove(), 300)
                      }, 2000)
                    }}
                    className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-xl transition-all duration-300 font-medium shadow-md hover:shadow-lg flex items-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Succès
                  </button>
                  <button
                    onClick={() => {
                      const notification = document.createElement('div')
                      notification.className = 'fixed top-4 right-4 z-[9999] max-w-md animate-slide-in-right'
                      notification.innerHTML = `
                        <div class="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 shadow-lg">
                          <div class="flex items-start gap-3">
                            <svg class="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            <div class="flex-1">
                              <h4 class="font-semibold text-blue-800 dark:text-blue-300">Information</h4>
                              <p class="text-sm text-blue-700 dark:text-blue-400 mt-1">Voici une information importante à noter.</p>
                            </div>
                            <button onclick="
                              const notif = this.parentElement.parentElement.parentElement;
                              notif.classList.remove('animate-slide-in-right');
                              notif.classList.add('animate-slide-out-right');
                              setTimeout(() => notif.remove(), 300);
                            " class="text-blue-400 hover:text-blue-600 dark:hover:text-blue-300" aria-label="Fermer">
                              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                              </svg>
                            </button>
                          </div>
                        </div>
                      `
                      document.body.appendChild(notification)
                      setTimeout(() => {
                        notification.classList.remove('animate-slide-in-right')
                        notification.classList.add('animate-slide-out-right')
                        setTimeout(() => notification.remove(), 300)
                      }, 2000)
                    }}
                    className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-xl transition-all duration-300 font-medium shadow-md hover:shadow-lg flex items-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Information
                  </button>
                </div>
              </div>

              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Tailles</p>
                <div className="flex flex-wrap gap-4">
                  <Button size="small">Small Button</Button>
                  <Button size="medium">Medium Button</Button>
                  <Button size="large">Large Button</Button>
                </div>
              </div>

              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Variantes</p>
                <div className="flex flex-wrap gap-4">
                  <Button variant="primary">Primary</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="outline">Outline</Button>
                  <button className="px-6 py-3 bg-green-500 text-white rounded-3xl hover:bg-green-600 transition-all duration-300 font-medium">Success</button>
                  <button className="px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-3xl hover:shadow-lg transition-all duration-300 font-medium">Warning</button>
                </div>
              </div>

              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Avec icônes</p>
                <div className="flex flex-wrap gap-4">
                  <Button>
                    <Sparkles className="w-4 h-4 mr-2" />
                    Avec icône
                  </Button>
                  <Button variant="secondary">
                    <Rocket className="w-4 h-4 mr-2" />
                    Démarrer
                  </Button>
                </div>
              </div>

              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">États</p>
                <div className="flex flex-wrap gap-4">
                  <Button disabled>Disabled</Button>
                  <Button className="opacity-50 cursor-not-allowed">Loading...</Button>
                </div>
              </div>

              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Badges POCs</p>
                <div className="flex flex-wrap items-center gap-4">
                  <div className="inline-flex items-center justify-center px-4 py-1.5 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-sm font-semibold rounded-full shadow-md">
                    Coming Soon
                  </div>
                  <div className="inline-flex items-center justify-center px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-sm font-semibold rounded-full shadow-md">
                    Bientôt disponible
                  </div>
                  <div className="inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-base font-semibold rounded-full shadow-md">
                    Version Large
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cards */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 dark:text-white">Cards</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card hover>
              <div className="p-6">
                <div className="w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center mb-4">
                  <Sparkles className="w-6 h-6 text-brand-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2 dark:text-white">Card avec icône</h3>
                <p className="text-gray-600 dark:text-gray-400">Card moderne avec icône colorée</p>
              </div>
            </Card>

            <Card hover className="bg-gradient-to-br from-brand-primary to-brand-secondary text-white">
              <div className="p-6">
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-4">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Card Gradient Bleu</h3>
                <p className="opacity-90">Dégradé bleu vers violet</p>
              </div>
            </Card>

            <Card hover className="bg-gradient-to-br from-green-500 to-emerald-600 text-white">
              <div className="p-6">
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-4">
                  <Check className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Card Success</h3>
                <p className="opacity-90">Dégradé vert success</p>
              </div>
            </Card>

            <Card hover className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
              <div className="p-6">
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-4">
                  <AlertCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Card Warning</h3>
                <p className="opacity-90">Dégradé jaune-orange</p>
              </div>
            </Card>

            <Card hover className="border-2 border-brand-primary bg-brand-primary/5 dark:bg-brand-primary/10">
              <div className="p-6">
                <div className="w-12 h-12 rounded-xl bg-brand-primary/20 flex items-center justify-center mb-4">
                  <Settings className="w-6 h-6 text-brand-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2 dark:text-white">Card Bordure</h3>
                <p className="text-gray-600 dark:text-gray-400">Card avec bordure colorée</p>
              </div>
            </Card>

            <Card hover className="bg-gradient-to-br from-purple-500 to-pink-500 text-white">
              <div className="p-6">
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-4">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Card Premium</h3>
                <p className="opacity-90">Dégradé violet-rose</p>
              </div>
            </Card>
          </div>
        </section>

        {/* Theme Toggles */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 dark:text-white">Theme Toggles</h2>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl">
            <div className="space-y-8">
              {/* Option 1 : iOS Switch (Actuel) */}
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Option 1 : iOS Switch (Actuel)</p>
                <button
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className="relative w-14 h-7 rounded-full bg-gray-300 dark:bg-gray-600 transition-colors duration-300"
                  aria-label="Toggle theme"
                >
                  {mounted && (
                    <>
                      <div className={`absolute inset-0 flex items-center justify-between px-2 transition-opacity duration-300 ${theme === 'light' ? 'opacity-100' : 'opacity-0'}`}>
                        <Moon className="w-3 h-3 text-indigo-300 ml-auto" />
                      </div>
                      <div className={`absolute inset-0 flex items-center justify-between px-2 transition-opacity duration-300 ${theme === 'dark' ? 'opacity-100' : 'opacity-0'}`}>
                        <Sun className="w-3 h-3 text-yellow-500" />
                      </div>
                      <div className={`absolute top-0.5 left-0.5 w-6 h-6 rounded-full bg-white shadow-md transition-transform duration-300 flex items-center justify-center ${theme === 'dark' ? 'translate-x-7' : 'translate-x-0'}`}>
                        {theme === 'dark' ? (
                          <Moon className="w-3 h-3 text-indigo-500" />
                        ) : (
                          <Sun className="w-3 h-3 text-yellow-500" />
                        )}
                      </div>
                    </>
                  )}
                </button>
              </div>

              {/* Option 2 : Cards côte à côte */}
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Option 2 : Cards côte à côte</p>
                <div className="flex gap-1 p-1 rounded-lg bg-gray-200 dark:bg-gray-700 w-fit">
                  <button
                    onClick={() => setTheme('light')}
                    className={`p-2 rounded-md transition-all duration-200 ${theme === 'light' ? 'bg-white shadow-sm' : 'hover:bg-gray-300 dark:hover:bg-gray-600'}`}
                  >
                    <Sun className={`w-4 h-4 ${theme === 'light' ? 'text-yellow-500' : 'text-gray-500'}`} />
                  </button>
                  <button
                    onClick={() => setTheme('dark')}
                    className={`p-2 rounded-md transition-all duration-200 ${theme === 'dark' ? 'bg-gray-800 shadow-sm' : 'hover:bg-gray-300 dark:hover:bg-gray-600'}`}
                  >
                    <Moon className={`w-4 h-4 ${theme === 'dark' ? 'text-indigo-400' : 'text-gray-500'}`} />
                  </button>
                </div>
              </div>

              {/* Option 3 : Rotation */}
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Option 3 : Rotation</p>
                <button
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className="relative p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200 overflow-hidden"
                >
                  {mounted && (
                    <div className="relative w-5 h-5">
                      <Sun className={`absolute inset-0 w-5 h-5 text-yellow-500 transition-all duration-300 ${theme === 'light' ? 'rotate-0 opacity-100' : 'rotate-180 opacity-0'}`} />
                      <Moon className={`absolute inset-0 w-5 h-5 text-indigo-400 transition-all duration-300 ${theme === 'dark' ? 'rotate-0 opacity-100' : '-rotate-180 opacity-0'}`} />
                    </div>
                  )}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Icônes */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 dark:text-white">Icônes (Lucide React)</h2>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl">
            <div className="grid grid-cols-4 md:grid-cols-8 gap-6">
              <div className="flex flex-col items-center gap-2">
                <Sparkles className="w-6 h-6 text-brand-primary" />
                <span className="text-xs dark:text-gray-400">Sparkles</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Rocket className="w-6 h-6 text-brand-primary" />
                <span className="text-xs dark:text-gray-400">Rocket</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Settings className="w-6 h-6 text-brand-primary" />
                <span className="text-xs dark:text-gray-400">Settings</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Mail className="w-6 h-6 text-brand-primary" />
                <span className="text-xs dark:text-gray-400">Mail</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Phone className="w-6 h-6 text-brand-primary" />
                <span className="text-xs dark:text-gray-400">Phone</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <MapPin className="w-6 h-6 text-brand-primary" />
                <span className="text-xs dark:text-gray-400">MapPin</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Sun className="w-6 h-6 text-brand-primary" />
                <span className="text-xs dark:text-gray-400">Sun</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Moon className="w-6 h-6 text-brand-primary" />
                <span className="text-xs dark:text-gray-400">Moon</span>
              </div>
            </div>
          </div>
        </section>

        {/* Espacements */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 dark:text-white">Espacements</h2>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-24 text-sm dark:text-gray-400">4px (1)</div>
              <div className="h-4 bg-brand-primary" style={{ width: '4px' }}></div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-24 text-sm dark:text-gray-400">8px (2)</div>
              <div className="h-4 bg-brand-primary" style={{ width: '8px' }}></div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-24 text-sm dark:text-gray-400">16px (4)</div>
              <div className="h-4 bg-brand-primary" style={{ width: '16px' }}></div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-24 text-sm dark:text-gray-400">24px (6)</div>
              <div className="h-4 bg-brand-primary" style={{ width: '24px' }}></div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-24 text-sm dark:text-gray-400">32px (8)</div>
              <div className="h-4 bg-brand-primary" style={{ width: '32px' }}></div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-24 text-sm dark:text-gray-400">48px (12)</div>
              <div className="h-4 bg-brand-primary" style={{ width: '48px' }}></div>
            </div>
          </div>
        </section>

        {/* Bordures et Arrondis */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 dark:text-white">Arrondis</h2>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="space-y-2">
                <div className="h-16 bg-brand-primary rounded"></div>
                <p className="text-sm dark:text-gray-400">rounded (4px)</p>
              </div>
              <div className="space-y-2">
                <div className="h-16 bg-brand-primary rounded-lg"></div>
                <p className="text-sm dark:text-gray-400">rounded-lg (8px)</p>
              </div>
              <div className="space-y-2">
                <div className="h-16 bg-brand-primary rounded-xl"></div>
                <p className="text-sm dark:text-gray-400">rounded-xl (12px)</p>
              </div>
              <div className="space-y-2">
                <div className="h-16 bg-brand-primary rounded-3xl"></div>
                <p className="text-sm dark:text-gray-400">rounded-3xl (24px)</p>
              </div>
            </div>
          </div>
        </section>

        {/* Statistiques & Métriques */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 dark:text-white">Statistiques & Métriques</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm text-gray-600 dark:text-gray-400">Utilisateurs</p>
                  <TrendingUp className="w-4 h-4 text-green-500" />
                </div>
                <p className="text-3xl font-bold dark:text-white">12,458</p>
                <p className="text-sm text-green-600 dark:text-green-400 mt-1">+12.5% ce mois</p>
              </div>
            </Card>
            <Card>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm text-gray-600 dark:text-gray-400">Revenus</p>
                  <TrendingUp className="w-4 h-4 text-green-500" />
                </div>
                <p className="text-3xl font-bold dark:text-white">45,678€</p>
                <p className="text-sm text-green-600 dark:text-green-400 mt-1">+8.3% ce mois</p>
              </div>
            </Card>
            <Card>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm text-gray-600 dark:text-gray-400">Conversions</p>
                  <TrendingDown className="w-4 h-4 text-red-500" />
                </div>
                <p className="text-3xl font-bold dark:text-white">3.2%</p>
                <p className="text-sm text-red-600 dark:text-red-400 mt-1">-2.1% ce mois</p>
              </div>
            </Card>
          </div>
        </section>

        {/* Progress Bars */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 dark:text-white">Progress Bars</h2>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl space-y-6">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium dark:text-gray-300">Projet A</span>
                <span className="text-sm font-semibold text-brand-primary">75%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div className="bg-brand-primary h-2.5 rounded-full transition-all duration-500" style={{ width: '75%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium dark:text-gray-300">Projet B - Success</span>
                <span className="text-sm font-semibold text-green-500">85%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div className="bg-green-500 h-2.5 rounded-full transition-all duration-500" style={{ width: '85%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium dark:text-gray-300">Projet C - Warning</span>
                <span className="text-sm font-semibold bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">60%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div className="bg-gradient-to-r from-yellow-500 to-orange-500 h-2.5 rounded-full transition-all duration-500" style={{ width: '60%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium dark:text-gray-300">Projet D - Gradient</span>
                <span className="text-sm font-semibold bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">95%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                <div className="bg-gradient-to-r from-brand-primary to-brand-secondary h-3 rounded-full transition-all duration-500 shadow-lg shadow-brand-primary/50" style={{ width: '95%' }}></div>
              </div>
            </div>
          </div>
        </section>

        {/* Badges de Statut */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 dark:text-white">Badges de Statut</h2>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl">
            <div className="flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-sm font-medium rounded-full">
                <Check className="w-3 h-3" />
                Success
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 text-sm font-medium rounded-full">
                <X className="w-3 h-3" />
                Error
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 text-sm font-medium rounded-full">
                <AlertCircle className="w-3 h-3" />
                Warning
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-sm font-medium rounded-full">
                <Info className="w-3 h-3" />
                Info
              </span>
            </div>
          </div>
        </section>

        {/* Alerts & Notifications */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 dark:text-white">Alerts & Notifications</h2>
          <div className="space-y-4">
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-green-800 dark:text-green-300">Succès !</h4>
                  <p className="text-sm text-green-700 dark:text-green-400 mt-1">Votre action a été effectuée avec succès.</p>
                </div>
              </div>
            </div>
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <X className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-red-800 dark:text-red-300">Erreur</h4>
                  <p className="text-sm text-red-700 dark:text-red-400 mt-1">Une erreur est survenue. Veuillez réessayer.</p>
                </div>
              </div>
            </div>
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-blue-800 dark:text-blue-300">Information</h4>
                  <p className="text-sm text-blue-700 dark:text-blue-400 mt-1">Voici une information importante à noter.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tabs */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 dark:text-white">Tabs</h2>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl">
            <div className="border-b border-gray-200 dark:border-gray-700 mb-4">
              <div className="flex gap-4">
                <button
                  onClick={() => setActiveTab('tab1')}
                  className={`pb-3 px-1 border-b-2 transition-colors ${activeTab === 'tab1' ? 'border-brand-primary text-brand-primary' : 'border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'}`}
                >
                  Onglet 1
                </button>
                <button
                  onClick={() => setActiveTab('tab2')}
                  className={`pb-3 px-1 border-b-2 transition-colors ${activeTab === 'tab2' ? 'border-brand-primary text-brand-primary' : 'border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'}`}
                >
                  Onglet 2
                </button>
                <button
                  onClick={() => setActiveTab('tab3')}
                  className={`pb-3 px-1 border-b-2 transition-colors ${activeTab === 'tab3' ? 'border-brand-primary text-brand-primary' : 'border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'}`}
                >
                  Onglet 3
                </button>
              </div>
            </div>
            <div className="py-4">
              {activeTab === 'tab1' && <p className="dark:text-gray-300">Contenu de l'onglet 1</p>}
              {activeTab === 'tab2' && <p className="dark:text-gray-300">Contenu de l'onglet 2</p>}
              {activeTab === 'tab3' && <p className="dark:text-gray-300">Contenu de l'onglet 3</p>}
            </div>
          </div>
        </section>

        {/* Accordion */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 dark:text-white">Accordion</h2>
          <div className="space-y-3">
            {/* Accordion Item 1 - Avec icône */}
            <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden transition-all hover:shadow-md">
              <button
                onClick={() => setIsAccordionOpen(!isAccordionOpen)}
                className="w-full flex items-center justify-between p-5 text-left group transition-colors hover:bg-gray-50 dark:hover:bg-gray-700/50"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-brand-primary/10 flex items-center justify-center group-hover:bg-brand-primary/20 transition-colors">
                    <Sparkles className="w-5 h-5 text-brand-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold dark:text-white">Comment fonctionne le service ?</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-0.5">Découvrez notre processus étape par étape</p>
                  </div>
                </div>
                <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${isAccordionOpen ? 'rotate-180' : ''}`} />
              </button>
              <div className={`transition-all duration-300 ease-in-out ${isAccordionOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                <div className="p-5 pt-0 text-gray-600 dark:text-gray-400 border-t border-gray-100 dark:border-gray-700">
                  <p className="mb-3">Notre service fonctionne en trois étapes simples :</p>
                  <ol className="list-decimal list-inside space-y-2 ml-2">
                    <li>Inscrivez-vous et créez votre compte gratuitement</li>
                    <li>Configurez vos préférences et objectifs</li>
                    <li>Lancez votre première campagne en quelques clics</li>
                  </ol>
                </div>
              </div>
            </div>

            {/* Accordion Item 2 - Style minimal */}
            <div className="bg-white dark:bg-gray-800 rounded-xl border-l-4 border-brand-primary shadow-sm">
              <button className="w-full flex items-center justify-between p-5 text-left group">
                <div className="flex-1">
                  <h3 className="font-semibold dark:text-white mb-1">Quels sont les tarifs ?</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Plans flexibles adaptés à tous les besoins</p>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </button>
            </div>

            {/* Accordion Item 3 - Avec badge */}
            <div className="bg-gradient-to-r from-brand-primary/5 to-brand-secondary/5 dark:from-brand-primary/10 dark:to-brand-secondary/10 rounded-xl border border-brand-primary/20 dark:border-brand-primary/30">
              <button className="w-full flex items-center justify-between p-5 text-left group">
                <div className="flex items-center gap-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold dark:text-white">Nouveauté : Fonctionnalité IA</h3>
                      <span className="px-2 py-0.5 bg-brand-primary text-white text-xs font-semibold rounded-full">Nouveau</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Intelligence artificielle intégrée</p>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-brand-primary" />
              </button>
            </div>
          </div>
        </section>

        {/* Inputs & Forms */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 dark:text-white">Inputs & Forms</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

            {/* Input avec icône */}
            <div>
              <label className="block text-sm font-semibold mb-2 dark:text-gray-300">Email avec icône</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  placeholder="vous@exemple.com"
                  className="w-full pl-11 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-transparent bg-white dark:bg-gray-700 dark:text-white transition-all"
                />
              </div>
            </div>

            {/* Input avec bouton */}
            <div>
              <label className="block text-sm font-semibold mb-2 dark:text-gray-300">Recherche</label>
              <div className="relative flex">
                <input
                  type="text"
                  placeholder="Rechercher..."
                  className="flex-1 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-l-xl focus:ring-2 focus:ring-brand-primary focus:border-transparent bg-white dark:bg-gray-700 dark:text-white"
                />
                <button className="px-6 bg-brand-primary text-white rounded-r-xl hover:bg-brand-primary/90 transition-colors">
                  <Sparkles className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Input avec label flottant */}
            <div className="relative">
              <input
                type="text"
                id="floating"
                placeholder=" "
                className="peer w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-xl focus:ring-0 focus:border-brand-primary bg-white dark:bg-gray-700 dark:text-white transition-all"
              />
              <label
                htmlFor="floating"
                className="absolute left-3 -top-2.5 bg-white dark:bg-gray-700 px-2 text-sm font-medium text-gray-600 dark:text-gray-400 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-brand-primary transition-all"
              >
                Label flottant
              </label>
            </div>

            {/* Dropdown stylisé */}
            <div>
              <label className="block text-sm font-semibold mb-2 dark:text-gray-300">Dropdown stylisé</label>
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-transparent bg-white dark:bg-gray-700 dark:text-white text-left flex items-center justify-between transition-all hover:border-brand-primary/50"
                >
                  <span className={selectedOption === 'Choisissez une option' ? 'text-gray-400' : ''}>{selectedOption}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                {isDropdownOpen && (
                  <div className="absolute z-10 w-full mt-2 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl shadow-lg overflow-hidden">
                    {['Option Premium', 'Option Standard', 'Option Basique'].map((option) => (
                      <button
                        key={option}
                        onClick={() => {
                          setSelectedOption(option)
                          setIsDropdownOpen(false)
                        }}
                        className="w-full px-4 py-3 text-left hover:bg-brand-primary/10 dark:hover:bg-brand-primary/20 transition-colors dark:text-white flex items-center justify-between group"
                      >
                        <span>{option}</span>
                        {selectedOption === option && <Check className="w-4 h-4 text-brand-primary" />}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Textarea avec compteur */}
            <div className="lg:col-span-2">
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-semibold dark:text-gray-300">Message avec compteur</label>
                <span className="text-xs text-gray-500 dark:text-gray-400">0 / 500</span>
              </div>
              <textarea
                rows={4}
                maxLength={500}
                placeholder="Écrivez votre message ici..."
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-transparent bg-white dark:bg-gray-700 dark:text-white resize-none transition-all"
              />
            </div>

            {/* Checkboxes stylisées */}
            <div className="lg:col-span-2">
              <p className="text-sm font-semibold mb-3 dark:text-gray-300">Checkboxes stylisées</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <label className="relative flex items-center gap-3 p-4 border-2 border-gray-200 dark:border-gray-700 rounded-xl cursor-pointer hover:border-brand-primary dark:hover:border-brand-primary transition-all group">
                  <input type="checkbox" className="w-5 h-5 text-brand-primary border-gray-300 rounded focus:ring-brand-primary" />
                  <div className="flex-1">
                    <p className="font-medium dark:text-white">Option 1</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Description courte</p>
                  </div>
                </label>
                <label className="relative flex items-center gap-3 p-4 border-2 border-gray-200 dark:border-gray-700 rounded-xl cursor-pointer hover:border-brand-primary dark:hover:border-brand-primary transition-all group">
                  <input type="checkbox" className="w-5 h-5 text-brand-primary border-gray-300 rounded focus:ring-brand-primary" />
                  <div className="flex-1">
                    <p className="font-medium dark:text-white">Option 2</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Description courte</p>
                  </div>
                </label>
                <label className="relative flex items-center gap-3 p-4 border-2 border-gray-200 dark:border-gray-700 rounded-xl cursor-pointer hover:border-brand-primary dark:hover:border-brand-primary transition-all group">
                  <input type="checkbox" className="w-5 h-5 text-brand-primary border-gray-300 rounded focus:ring-brand-primary" />
                  <div className="flex-1">
                    <p className="font-medium dark:text-white">Option 3</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Description courte</p>
                  </div>
                </label>
              </div>
            </div>

            {/* Radio buttons en cards */}
            <div className="lg:col-span-2">
              <p className="text-sm font-semibold mb-3 dark:text-gray-300">Radio Cards Premium</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Basique - Bleu */}
                <label className="relative group">
                  <input type="radio" name="plan" className="peer sr-only" />
                  <div className="p-6 border-2 border-gray-200 dark:border-gray-700 rounded-2xl cursor-pointer peer-checked:border-brand-primary peer-checked:bg-gradient-to-br peer-checked:from-brand-primary/5 peer-checked:to-brand-primary/10 dark:peer-checked:from-brand-primary/10 dark:peer-checked:to-brand-primary/20 transition-all hover:border-gray-300 dark:hover:border-gray-600 hover:shadow-lg">
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 rounded-xl bg-brand-primary/10 peer-checked:bg-brand-primary flex items-center justify-center transition-colors">
                        <Rocket className="w-5 h-5 text-brand-primary peer-checked:text-white" />
                      </div>
                      <div className="w-6 h-6 rounded-full border-2 border-gray-300 peer-checked:border-brand-primary peer-checked:bg-brand-primary flex items-center justify-center transition-all">
                        <Check className="w-4 h-4 text-white opacity-0 peer-checked:opacity-100" />
                      </div>
                    </div>
                    <h4 className="font-bold text-lg dark:text-white mb-2">Basique</h4>
                    <p className="text-3xl font-bold bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent mb-1">29€</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">par mois</p>
                  </div>
                </label>

                {/* Pro - Gradient (par défaut sélectionné) */}
                <label className="relative group">
                  <input type="radio" name="plan" className="peer sr-only" defaultChecked />
                  <div className="p-6 border-2 border-gray-200 dark:border-gray-700 rounded-2xl cursor-pointer peer-checked:border-transparent peer-checked:bg-gradient-to-br peer-checked:from-brand-primary peer-checked:to-brand-secondary peer-checked:text-white transition-all hover:shadow-xl hover:scale-105">
                    <div className="absolute -top-3 right-4">
                      <span className="px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold rounded-full shadow-lg">
                        Recommandé
                      </span>
                    </div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                        <Sparkles className="w-5 h-5 text-white" />
                      </div>
                      <div className="w-6 h-6 rounded-full border-2 border-white/50 peer-checked:border-white peer-checked:bg-white flex items-center justify-center transition-all">
                        <Check className="w-4 h-4 text-brand-primary opacity-0 peer-checked:opacity-100" />
                      </div>
                    </div>
                    <h4 className="font-bold text-lg mb-2 peer-checked:text-white dark:text-white">Pro</h4>
                    <p className="text-3xl font-bold mb-1 peer-checked:text-white">99€</p>
                    <p className="text-sm opacity-80">par mois</p>
                  </div>
                </label>

                {/* Enterprise - Premium Violet-Rose */}
                <label className="relative group">
                  <input type="radio" name="plan" className="peer sr-only" />
                  <div className="p-6 border-2 border-gray-200 dark:border-gray-700 rounded-2xl cursor-pointer peer-checked:border-purple-500 peer-checked:bg-gradient-to-br peer-checked:from-purple-500/5 peer-checked:to-pink-500/10 dark:peer-checked:from-purple-500/10 dark:peer-checked:to-pink-500/20 transition-all hover:border-gray-300 dark:hover:border-gray-600 hover:shadow-lg">
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-900/30 peer-checked:bg-gradient-to-r peer-checked:from-purple-500 peer-checked:to-pink-500 flex items-center justify-center transition-colors">
                        <Sparkles className="w-5 h-5 text-purple-600 dark:text-purple-400 peer-checked:text-white" />
                      </div>
                      <div className="w-6 h-6 rounded-full border-2 border-gray-300 peer-checked:border-purple-500 peer-checked:bg-purple-500 flex items-center justify-center transition-all">
                        <Check className="w-4 h-4 text-white opacity-0 peer-checked:opacity-100" />
                      </div>
                    </div>
                    <h4 className="font-bold text-lg dark:text-white mb-2">Enterprise</h4>
                    <p className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-1">Sur mesure</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">contactez-nous</p>
                  </div>
                </label>
              </div>
            </div>

            {/* Toggle Switch */}
            <div className="lg:col-span-2">
              <p className="text-sm font-semibold mb-3 dark:text-gray-300">Toggle Switches</p>
              <div className="space-y-4">
                <label className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl cursor-pointer hover:border-brand-primary/50 transition-colors">
                  <div>
                    <p className="font-medium dark:text-white">Recevoir les notifications</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Restez informé des nouveautés</p>
                  </div>
                  <div className="relative">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-14 h-7 bg-gray-200 dark:bg-gray-700 peer-checked:bg-brand-primary rounded-full transition-colors"></div>
                    <div className="absolute left-1 top-1 w-5 h-5 bg-white rounded-full transition-transform peer-checked:translate-x-7"></div>
                  </div>
                </label>
                <label className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl cursor-pointer hover:border-brand-primary/50 transition-colors">
                  <div>
                    <p className="font-medium dark:text-white">Mode automatique</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Activation automatique des fonctionnalités</p>
                  </div>
                  <div className="relative">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-14 h-7 bg-gray-200 dark:bg-gray-700 peer-checked:bg-brand-primary rounded-full transition-colors"></div>
                    <div className="absolute left-1 top-1 w-5 h-5 bg-white rounded-full transition-transform peer-checked:translate-x-7"></div>
                  </div>
                </label>
              </div>
            </div>
          </div>
        </section>

        {/* Avatars */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 dark:text-white">Avatars</h2>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl">
            <div className="flex flex-wrap items-center gap-6">
              {/* Avatar avec initiales - Bleu */}
              <div className="text-center">
                <div className="w-14 h-14 rounded-full bg-brand-primary flex items-center justify-center text-white font-bold text-lg ring-4 ring-brand-primary/20">
                  JD
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">Bleu</p>
              </div>

              {/* Avatar gradient bleu-violet */}
              <div className="text-center">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center text-white font-bold ring-4 ring-brand-primary/20">
                  <User className="w-7 h-7" />
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">Gradient</p>
              </div>

              {/* Avatar vert */}
              <div className="text-center">
                <div className="w-14 h-14 rounded-full bg-green-500 flex items-center justify-center text-white font-bold text-lg ring-4 ring-green-500/20">
                  ML
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">Vert</p>
              </div>

              {/* Avatar gradient jaune-orange */}
              <div className="text-center">
                <div className="w-14 h-14 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center text-white font-bold text-lg ring-4 ring-orange-500/20">
                  TH
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">Warning</p>
              </div>

              {/* Avatar violet-rose */}
              <div className="text-center">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold">
                  <Sparkles className="w-7 h-7" />
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">Premium</p>
              </div>

              {/* Avatar avec bordure */}
              <div className="text-center">
                <div className="w-14 h-14 rounded-full border-4 border-brand-primary bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                  <User className="w-7 h-7 text-brand-primary" />
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">Bordure</p>
              </div>

              {/* Avatar grande taille */}
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center text-white font-bold text-2xl ring-4 ring-brand-primary/20">
                  AB
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">Large</p>
              </div>
            </div>
          </div>
        </section>

        {/* Skeleton Loaders */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 dark:text-white">Skeleton Loaders</h2>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl space-y-4">
            <div className="animate-pulse space-y-3">
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
            </div>
          </div>
        </section>

        {/* Dividers */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 dark:text-white">Dividers</h2>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl space-y-6">
            <div>
              <p className="text-sm dark:text-gray-400 mb-3">Simple</p>
              <hr className="border-gray-200 dark:border-gray-700" />
            </div>
            <div>
              <p className="text-sm dark:text-gray-400 mb-3">Avec texte</p>
              <div className="relative">
                <hr className="border-gray-200 dark:border-gray-700" />
                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 px-4 text-sm text-gray-600 dark:text-gray-400">OU</span>
              </div>
            </div>
            <div>
              <p className="text-sm dark:text-gray-400 mb-3">Gradient</p>
              <hr className="border-0 h-px bg-gradient-to-r from-transparent via-brand-primary to-transparent" />
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 dark:text-white">Timeline</h2>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-brand-primary"></div>
                  <div className="w-0.5 h-full bg-gray-200 dark:bg-gray-700 mt-2"></div>
                </div>
                <div className="pb-6">
                  <h4 className="font-semibold dark:text-white">Étape 1</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Description de l'étape 1</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-brand-primary"></div>
                  <div className="w-0.5 h-full bg-gray-200 dark:bg-gray-700 mt-2"></div>
                </div>
                <div className="pb-6">
                  <h4 className="font-semibold dark:text-white">Étape 2</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Description de l'étape 2</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-gray-300 dark:bg-gray-600"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-400 dark:text-gray-500">Étape 3</h4>
                  <p className="text-sm text-gray-400 dark:text-gray-500 mt-1">À venir</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 dark:text-white">Pricing Cards</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Starter - Bleu */}
            <Card hover className="border-2 border-gray-200 dark:border-gray-700 hover:border-brand-primary transition-all">
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold dark:text-white">Starter</h3>
                  <div className="w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center">
                    <Rocket className="w-6 h-6 text-brand-primary" />
                  </div>
                </div>
                <div className="mb-6">
                  <span className="text-5xl font-bold bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">29€</span>
                  <span className="text-gray-600 dark:text-gray-400 ml-2">/mois</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3 text-sm dark:text-gray-300">
                    <div className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                      <Check className="w-3 h-3 text-green-600 dark:text-green-400" />
                    </div>
                    Fonctionnalité 1
                  </li>
                  <li className="flex items-center gap-3 text-sm dark:text-gray-300">
                    <div className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                      <Check className="w-3 h-3 text-green-600 dark:text-green-400" />
                    </div>
                    Fonctionnalité 2
                  </li>
                </ul>
                <button className="w-full px-6 py-3 border-2 border-brand-primary text-brand-primary rounded-xl hover:bg-brand-primary hover:text-white transition-all duration-300 font-semibold">
                  Choisir
                </button>
              </div>
            </Card>

            {/* Pro - Gradient Populaire */}
            <Card hover className="relative bg-gradient-to-br from-brand-primary to-brand-secondary text-white transform hover:scale-105 transition-all shadow-xl">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <div className="px-4 py-1.5 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-sm font-bold rounded-full shadow-lg">
                  ⭐ Populaire
                </div>
              </div>
              <div className="p-8 pt-10">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold">Pro</h3>
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="mb-6">
                  <span className="text-5xl font-bold">99€</span>
                  <span className="opacity-80 ml-2">/mois</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3 text-sm">
                    <div className="w-5 h-5 rounded-full bg-white/30 flex items-center justify-center">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    Tout Starter +
                  </li>
                  <li className="flex items-center gap-3 text-sm">
                    <div className="w-5 h-5 rounded-full bg-white/30 flex items-center justify-center">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    Fonctionnalité 3
                  </li>
                  <li className="flex items-center gap-3 text-sm">
                    <div className="w-5 h-5 rounded-full bg-white/30 flex items-center justify-center">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    Fonctionnalité 4
                  </li>
                </ul>
                <button className="w-full px-6 py-3 bg-white text-brand-primary rounded-xl hover:bg-white/90 transition-all duration-300 font-semibold shadow-lg">
                  Choisir
                </button>
              </div>
            </Card>

            {/* Enterprise - Premium Violet-Rose */}
            <Card hover className="border-2 border-gray-200 dark:border-gray-700 hover:border-purple-500 transition-all">
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold dark:text-white">Enterprise</h3>
                  <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                </div>
                <div className="mb-6">
                  <span className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Sur mesure</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3 text-sm dark:text-gray-300">
                    <div className="w-5 h-5 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                      <Check className="w-3 h-3 text-purple-600 dark:text-purple-400" />
                    </div>
                    Tout Pro +
                  </li>
                  <li className="flex items-center gap-3 text-sm dark:text-gray-300">
                    <div className="w-5 h-5 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                      <Check className="w-3 h-3 text-purple-600 dark:text-purple-400" />
                    </div>
                    Support prioritaire
                  </li>
                  <li className="flex items-center gap-3 text-sm dark:text-gray-300">
                    <div className="w-5 h-5 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                      <Check className="w-3 h-3 text-purple-600 dark:text-purple-400" />
                    </div>
                    SLA garantie
                  </li>
                </ul>
                <button className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 font-semibold">
                  Nous contacter
                </button>
              </div>
            </Card>
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 dark:text-white">Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <div className="p-6">
                <p className="text-gray-600 dark:text-gray-300 mb-4 italic">"Un service exceptionnel qui a transformé notre façon de travailler. Je recommande vivement !"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-primary flex items-center justify-center text-white font-semibold">
                    JD
                  </div>
                  <div>
                    <p className="font-semibold dark:text-white">Jean Dupont</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">CEO, Entreprise X</p>
                  </div>
                </div>
              </div>
            </Card>
            <Card>
              <div className="p-6">
                <p className="text-gray-600 dark:text-gray-300 mb-4 italic">"Interface intuitive et résultats rapides. Exactement ce que nous cherchions."</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-secondary flex items-center justify-center text-white font-semibold">
                    ML
                  </div>
                  <div>
                    <p className="font-semibold dark:text-white">Marie Laurent</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">CTO, Start-up Y</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Feature Cards */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 dark:text-white">Feature Cards</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card hover>
              <div className="p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-brand-primary/10 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-brand-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2 dark:text-white">Innovation</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Des solutions innovantes pour vos besoins</p>
              </div>
            </Card>
            <Card hover>
              <div className="p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-brand-primary/10 rounded-lg flex items-center justify-center">
                  <Rocket className="w-6 h-6 text-brand-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2 dark:text-white">Performance</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Rapidité et efficacité garanties</p>
              </div>
            </Card>
            <Card hover>
              <div className="p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-brand-primary/10 rounded-lg flex items-center justify-center">
                  <Settings className="w-6 h-6 text-brand-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2 dark:text-white">Personnalisation</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Adaptable à vos besoins spécifiques</p>
              </div>
            </Card>
          </div>
        </section>

        {/* Tooltip & Modal Demo */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 dark:text-white">Tooltip & Modal</h2>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl flex gap-4">
            <div className="relative">
              <button
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
                className="px-4 py-2 bg-brand-primary text-white rounded-lg"
              >
                Survolez-moi
              </button>
              {showTooltip && (
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 dark:bg-gray-700 text-white text-sm rounded-lg whitespace-nowrap shadow-lg">
                  Ceci est un tooltip
                  <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900 dark:border-t-gray-700"></div>
                </div>
              )}
            </div>
            <button
              onClick={() => setShowModal(true)}
              className="px-4 py-2 bg-brand-secondary text-white rounded-lg"
            >
              Ouvrir Modal
            </button>
          </div>
        </section>

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50" onClick={() => setShowModal(false)}>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 max-w-md w-full mx-4" onClick={(e) => e.stopPropagation()}>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold dark:text-white">Modal Title</h3>
                <button onClick={() => setShowModal(false)} className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-6">Ceci est le contenu du modal. Vous pouvez y mettre n'importe quel contenu.</p>
              <div className="flex gap-3 justify-end">
                <Button variant="outline" onClick={() => setShowModal(false)}>Annuler</Button>
                <Button onClick={() => setShowModal(false)}>Confirmer</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
