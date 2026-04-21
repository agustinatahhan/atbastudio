'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { usePathname } from '@/i18n/routing'
import { Link } from '@/i18n/routing'
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher'
import { RiMenuLine, RiCloseLine } from 'react-icons/ri'
import Image from 'next/image'
type NavLink = {
  href: string
  label: string
}

export function Navbar() {
  const t = useTranslations('Nav')
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const links: NavLink[] = [
    { href: '/', label: t('inicio') },
    { href: '/sobre-nosotros', label: t('about') },
    { href: '/proyectos', label: t('projects') },
    { href: '/contacto', label: t('contact') },
  ]

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-5 px-4">
      <nav className="w-full max-w-5xl bg-white/80 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] rounded-md
           text-sm font-medium px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-gray-900 font-display"
        >
          <Image
              src="/logo/logo-dark.png"
              alt="Logo ATBA"
              width={50}
              height={50}
            />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-7">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-normal tracking-tight transition-colors duration-200 ${
                isActive(link.href)
                  ? 'text-primary font-semibold'
                  : 'text-black hover:text-gray-900'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right: lang switcher + CTA */}
        <div className="hidden md:flex items-center gap-4">
          <LanguageSwitcher />
          {/* <Link href="/contacto">
            <Button variant="primary" size="sm">
              {t('cta')} →
            </Button>
          </Link> */}
        </div>

        {/* Mobile: lang switcher + hamburger */}
        <div className="flex md:hidden items-center gap-3">
          <LanguageSwitcher />
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="text-black hover:text-primary transition-colors p-1"
            aria-label="Toggle menu"
          >
            {isOpen ? <RiCloseLine size={22} /> : <RiMenuLine size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`absolute top-full left-4 right-4 mt-2 bg-white/95 backdrop-blur-xl rounded-2xl shadow-lg overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col py-4 px-6 gap-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`text-sm font-normal py-2 transition-colors duration-200 ${
                isActive(link.href)
                  ? 'text-primary font-semibold'
                  : 'text-black hover:text-gray-900'
              }`}
            >
              {link.label}
            </Link>
          ))}
          {/* <Link href="/contacto" onClick={() => setIsOpen(false)}>
            <Button variant="primary" size="sm" className="w-full">
              {t('cta')} →
            </Button>
          </Link> */}
        </div>
      </div>
    </header>
  )
}
