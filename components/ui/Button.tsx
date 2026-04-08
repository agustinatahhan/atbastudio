import type { ButtonVariant, ButtonSize } from '@/lib/types'

type Props = {
  variant?: ButtonVariant
  size?: ButtonSize
  children: React.ReactNode
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  className?: string
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-primary text-white hover:bg-primary/90 shadow-sm hover:shadow-md hover:shadow-primary/25',
  outline:
    'border border-primary text-primary bg-transparent hover:bg-primary/5',
  ghost: 'text-gray-700 bg-transparent hover:bg-gray-100',
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-5 py-2 text-sm',
  md: 'px-7 py-3 text-base',
  lg: 'px-10 py-4 text-lg',
}

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  onClick,
  type = 'button',
  disabled = false,
  className = '',
}: Props) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        inline-flex items-center justify-center font-semibold rounded-full
        transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:pointer-events-none cursor-pointer
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${className}
      `}
    >
      {children}
    </button>
  )
}
