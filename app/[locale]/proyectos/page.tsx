import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { ProyectosHeader } from '@/components/sections/ProyectosHeader'
import { ProyectosGrid } from '@/components/sections/ProyectosGrid'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'Seo' })
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://atbastudio.com'

  return {
    title: t('proyectosTitle'),
    description: t('proyectosDescription'),
    alternates: {
      canonical: `${siteUrl}/${locale}/proyectos`,
      languages: {
        en: `${siteUrl}/en/proyectos`,
        es: `${siteUrl}/es/proyectos`,
      },
    },
    openGraph: {
      title: t('proyectosTitle'),
      description: t('proyectosDescription'),
      url: `${siteUrl}/${locale}/proyectos`,
      locale: locale === 'es' ? 'es_AR' : 'en_US',
      type: 'website',
    },
    twitter: {
      title: t('proyectosTitle'),
      description: t('proyectosDescription'),
    },
  }
}

export default function ProyectosPage() {
  return (
    <>
      <ProyectosHeader />
      <ProyectosGrid />
    </>
  )
}
