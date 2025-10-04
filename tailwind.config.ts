import type { Config } from 'tailwindcss'
const config: Config = {
  darkMode: ['class'],
  content: ['./src/**/*.{ts,tsx}', './content/**/*.{md,mdx}'],
  theme: {
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
      // Container Query breakpoints
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
    // Add prefers-reduced-motion support
    function({ addVariant }: any) {
      addVariant('motion-safe', '@media (prefers-reduced-motion: no-preference)')
      addVariant('motion-reduce', '@media (prefers-reduced-motion: reduce)')
    }
  ]
}
export default config
