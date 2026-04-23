import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { SobreNosotrosBody } from '@/components/sections/SobreNosotrosBody'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'Seo' })
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://atbastudio.com'

  return {
    title: t('sobreNosotrosTitle'),
    description: t('sobreNosotrosDescription'),
    alternates: {
      canonical: `${siteUrl}/${locale}/sobre-nosotros`,
      languages: {
        en: `${siteUrl}/en/sobre-nosotros`,
        es: `${siteUrl}/es/sobre-nosotros`,
      },
    },
    openGraph: {
      title: t('sobreNosotrosTitle'),
      description: t('sobreNosotrosDescription'),
      url: `${siteUrl}/${locale}/sobre-nosotros`,
      locale: locale === 'es' ? 'es_AR' : 'en_US',
      type: 'website',
    },
    twitter: {
      title: t('sobreNosotrosTitle'),
      description: t('sobreNosotrosDescription'),
    },
  }
}

export default function SobreNosotrosPage() {
  return <SobreNosotrosBody />
}
