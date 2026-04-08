export interface NavLinkItem {
  href: string
  labelKey: string
}

export interface ServiceItem {
  titleKey: string
  descKey: string
  icon: string
}

export interface ProjectItem {
  slug: string
  image: string
  filter: 'web' | 'design' | 'software'
  titleKey: string
  categoryKey: string
  descriptionKey: string
}

export type ButtonVariant = 'primary' | 'outline' | 'ghost'
export type ButtonSize = 'sm' | 'md' | 'lg'

export interface FormState {
  status: 'idle' | 'sending' | 'sent' | 'error'
}
