import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { Hero } from "@/components/sections/Hero";
import { Pillars } from "@/components/sections/Pillars";
import { Services } from "@/components/sections/Services";
import { Projects } from "@/components/sections/Projects";
import { MiniNosotros } from "@/components/sections/MiniNosotros";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTA } from "@/components/sections/CTA";
import { FAQ } from "@/components/sections/FAQ";

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'Seo' })
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://atbastudio.com'

  return {
    title: t('homeTitle'),
    description: t('homeDescription'),
    alternates: {
      canonical: `${siteUrl}/${locale}`,
      languages: { en: `${siteUrl}/en`, es: `${siteUrl}/es` },
    },
    openGraph: {
      title: t('homeTitle'),
      description: t('homeDescription'),
      url: `${siteUrl}/${locale}`,
      locale: locale === 'es' ? 'es_AR' : 'en_US',
      type: 'website',
    },
    twitter: {
      title: t('homeTitle'),
      description: t('homeDescription'),
    },
  }
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Pillars />
      <Services />
      <Projects />
      <MiniNosotros />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
}
