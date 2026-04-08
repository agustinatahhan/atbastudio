'use client'

import { useLocale } from 'next-intl'
import { useRouter, usePathname } from '@/i18n/routing'
import { useTransition } from 'react'

export function LanguageSwitcher() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const [isPending, startTransition] = useTransition()

  const handleSwitch = () => {
    const nextLocale = locale === 'es' ? 'en' : 'es'
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale })
    })
  }

  return (
    <button
      onClick={handleSwitch}
      disabled={isPending}
      className="text-sm font-semibold tracking-widest text-gray-500 hover:text-primary transition-colors duration-200 disabled:opacity-50"
      aria-label="Switch language"
    >
      {locale === 'es' ? 'EN' : 'ES'}
    </button>
  )
}
