import { ButtonHTMLAttributes, forwardRef } from 'react'
import { clsx } from 'clsx'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'small' | 'medium' | 'large'
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'medium', className, children, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center font-medium rounded-3xl transition-all duration-300 ease-out disabled:opacity-50 disabled:cursor-not-allowed'

    const variants = {
      primary: 'bg-brand-primary text-white hover:bg-brand-secondary hover:shadow-lg',
      secondary: 'bg-brand-tertiary text-brand-dark hover:bg-brand-secondary hover:text-white hover:shadow-lg',
      outline: 'border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white'
    }

    const sizes = {
      small: 'px-4 py-2 text-sm',
      medium: 'px-6 py-3 text-base',
      large: 'px-8 py-4 text-lg'
    }

    return (
      <button
        ref={ref}
        className={clsx(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'
