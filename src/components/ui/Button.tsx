import { ButtonHTMLAttributes, forwardRef } from 'react'
import { clsx } from 'clsx'
import { Loader2 } from 'lucide-react'
import * as Tooltip from '@radix-ui/react-tooltip'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'small' | 'medium' | 'large'
  loading?: boolean
  disabledTooltip?: string
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'medium', className, children, loading = false, disabled, disabledTooltip, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center gap-2 font-medium rounded-3xl transition-all duration-300 ease-out disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2'

    const variants = {
      primary: 'bg-brand-primary text-white hover:bg-brand-secondary hover:shadow-lg active:scale-95',
      secondary: 'bg-brand-tertiary text-brand-dark hover:bg-brand-secondary hover:text-white hover:shadow-lg active:scale-95',
      outline: 'border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white active:scale-95'
    }

    const sizes = {
      small: 'px-4 py-2 text-sm min-h-[36px]',
      medium: 'px-6 py-3 text-base min-h-[44px]',
      large: 'px-8 py-4 text-lg min-h-[52px]'
    }

    const isDisabled = disabled || loading

    const buttonContent = (
      <button
        ref={ref}
        className={clsx(baseStyles, variants[variant], sizes[size], className)}
        disabled={isDisabled}
        {...props}
      >
        {loading && <Loader2 className="w-4 h-4 animate-spin" />}
        {children}
      </button>
    )

    // Si le bouton est désactivé ET qu'il y a un tooltip
    if (isDisabled && disabledTooltip) {
      return (
        <Tooltip.Provider>
          <Tooltip.Root>
            <Tooltip.Trigger asChild>
              <span className="inline-flex">
                {buttonContent}
              </span>
            </Tooltip.Trigger>
            <Tooltip.Portal>
              <Tooltip.Content
                className="px-3 py-2 text-sm text-white bg-gray-900 dark:bg-gray-700 rounded-lg shadow-lg max-w-xs"
                sideOffset={5}
              >
                {disabledTooltip}
                <Tooltip.Arrow className="fill-gray-900 dark:fill-gray-700" />
              </Tooltip.Content>
            </Tooltip.Portal>
          </Tooltip.Root>
        </Tooltip.Provider>
      )
    }

    return buttonContent
  }
)

Button.displayName = 'Button'
