import { HTMLAttributes, ReactNode } from 'react'
import { clsx } from 'clsx'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  hover?: boolean
}

export function Card({ children, hover = false, className, ...props }: CardProps) {
  return (
    <div
      className={clsx(
        'p-6 lg:p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-soft',
        hover && 'hover:shadow-lg transition-all duration-300 ease-out hover:-translate-y-1',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export function CardHeader({ children, className, ...props }: CardHeaderProps) {
  return (
    <div className={clsx('mb-4 lg:mb-6', className)} {...props}>
      {children}
    </div>
  )
}

interface CardTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode
  as?: 'h2' | 'h3' | 'h4'
}

export function CardTitle({ children, as: Component = 'h3', className, ...props }: CardTitleProps) {
  return (
    <Component className={clsx('text-fluid-xl font-semibold dark:text-white', className)} {...props}>
      {children}
    </Component>
  )
}

interface CardContentProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export function CardContent({ children, className, ...props }: CardContentProps) {
  return (
    <div className={clsx('text-fluid-base text-gray-600 dark:text-gray-400', className)} {...props}>
      {children}
    </div>
  )
}
