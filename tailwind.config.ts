import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

const config: Config = {
  darkMode: ['class'],
  content: ['./src/**/*.{ts,tsx}', './content/**/*.{md,mdx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem',
        md: '2rem',
        lg: '3rem',
        xl: '4rem',
        '2xl': '5rem',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        brand: {
          // Derived from the blue gradient in the logo
          primary: '#1FA2FF',
          secondary: '#12D8FA',
          tertiary: '#A6FFCB',
          dark: '#0B2F4E'
        },
        surface: {
          50: '#F6F9FC',
          100: '#EDF2F7'
        }
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.25rem'
      },
      boxShadow: {
        soft: '0 10px 30px rgba(0,0,0,0.08)'
      },
      // Container Query breakpoints (gardé pour composants modulaires)
      containers: {
        xs: '20rem',
        sm: '24rem',
        md: '28rem',
        lg: '32rem',
        xl: '36rem',
        '2xl': '42rem',
        '3xl': '48rem',
        '4xl': '56rem',
        '5xl': '64rem',
        '6xl': '72rem',
        '7xl': '80rem'
      },
      // Animations with reduced motion support
      transitionDuration: {
        'reduced': '0ms'
      }
    }
  },
  plugins: [
    require('tailwindcss-animate'),
    require('@tailwindcss/container-queries'),
    // Fluid Typography (clamp uniquement)
    plugin(function({ addUtilities }) {
      addUtilities({
        // Fluid Typography - Smooth scaling
        '.text-fluid-xs': { fontSize: 'clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem)' },
        '.text-fluid-sm': { fontSize: 'clamp(0.875rem, 0.85rem + 0.15vw, 1rem)' },
        '.text-fluid-base': { fontSize: 'clamp(1rem, 0.95rem + 0.25vw, 1.125rem)' },
        '.text-fluid-lg': { fontSize: 'clamp(1.125rem, 1rem + 0.5vw, 1.5rem)' },
        '.text-fluid-xl': { fontSize: 'clamp(1.25rem, 1.1rem + 0.75vw, 1.875rem)' },
        '.text-fluid-2xl': { fontSize: 'clamp(1.5rem, 1.3rem + 1vw, 2.25rem)' },
        '.text-fluid-3xl': { fontSize: 'clamp(1.875rem, 1.5rem + 1.5vw, 3rem)' },
        '.text-fluid-4xl': { fontSize: 'clamp(2.25rem, 1.75rem + 2vw, 3.75rem)' },
        '.text-fluid-5xl': { fontSize: 'clamp(3rem, 2rem + 4vw, 5rem)' },
      })
    }),
    // Add prefers-reduced-motion support
    plugin(function({ addVariant }: any) {
      addVariant('motion-safe', '@media (prefers-reduced-motion: no-preference)')
      addVariant('motion-reduce', '@media (prefers-reduced-motion: reduce)')
    })
  ]
}
export default config
