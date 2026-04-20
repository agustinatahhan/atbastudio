import type { Metadata } from 'next'
import { Wix_Madefor_Text } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import '../globals.css';

const wix = Wix_Madefor_Text({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-wix',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'ATBA Studio | Estudio Digital Boutique',
  description:
    'Un estudio boutique dedicado a transformar visiones complejas en experiencias táctiles, rápidas y emocionalmente inteligentes.',
}

type Props = {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params

  if (!routing.locales.includes(locale as 'en' | 'es')) {
    notFound()
  }

  const messages = await getMessages()

  return (
    <html lang={locale} className={wix.variable}>
      <body className="font-body antialiased text-on-surface bg-white">
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
