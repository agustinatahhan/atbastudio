import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { ContactoHeader } from '@/components/sections/ContactoHeader'
import { ContactoForm } from '@/components/sections/ContactoForm'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'Seo' })
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://atbastudio.com'

  return {
    title: t('contactoTitle'),
    description: t('contactoDescription'),
    alternates: {
      canonical: `${siteUrl}/${locale}/contacto`,
      languages: {
        en: `${siteUrl}/en/contacto`,
        es: `${siteUrl}/es/contacto`,
      },
    },
    openGraph: {
      title: t('contactoTitle'),
      description: t('contactoDescription'),
      url: `${siteUrl}/${locale}/contacto`,
      locale: locale === 'es' ? 'es_AR' : 'en_US',
      type: 'website',
    },
    twitter: {
      title: t('contactoTitle'),
      description: t('contactoDescription'),
    },
  }
}

export default function ContactoPage() {
  return (
    <>
      <ContactoHeader />
      <ContactoForm />
    </>
  )
}
