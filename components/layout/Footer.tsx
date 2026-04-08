import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/routing'
import { RiInstagramLine, RiLinkedinLine, RiGithubLine } from 'react-icons/ri'

export function Footer() {
  const t = useTranslations('Footer')
  const navT = useTranslations('Nav')

  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-10">
      <div className="container-site">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <p className="text-xl font-bold tracking-tight text-gray-900 font-display mb-3">
              ATBA Studio
            </p>
            <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
              {t('tagline')}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-5">
              {t('navigation')}
            </p>
            <nav className="flex flex-col gap-3">
              <Link
                href="/"
                className="text-sm text-gray-600 hover:text-primary transition-colors duration-200"
              >
                {navT('services')}
              </Link>
              <Link
                href="/proyectos"
                className="text-sm text-gray-600 hover:text-primary transition-colors duration-200"
              >
                {t('projects')}
              </Link>
              <Link
                href="/contacto"
                className="text-sm text-gray-600 hover:text-primary transition-colors duration-200"
              >
                {t('contact')}
              </Link>
              <Link
                href="/sobre-nosotros"
                className="text-sm text-gray-600 hover:text-primary transition-colors duration-200"
              >
                {t('about')}
              </Link>
            </nav>
          </div>

          {/* Social */}
          <div>
            <p className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-5">
              {t('social')}
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-gray-600 hover:text-primary transition-colors duration-200"
              >
                <RiInstagramLine size={16} />
                {t('instagram')}
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-gray-600 hover:text-primary transition-colors duration-200"
              >
                <RiLinkedinLine size={16} />
                {t('linkedin')}
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-gray-600 hover:text-primary transition-colors duration-200"
              >
                <RiGithubLine size={16} />
                {t('github')}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} ATBA Studio. {t('copyright')}
          </p>
          <p className="text-xs text-gray-400">
            Buenos Aires, Argentina
          </p>
        </div>
      </div>
    </footer>
  )
}
