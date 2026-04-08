'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { Link } from '@/i18n/routing'
import { Button } from '@/components/ui/Button'
import {
  RiGroupLine,
  RiRocketLine,
  RiEyeLine,
  RiPaletteLine,
  RiLightbulbLine,
  RiToolsLine,
} from 'react-icons/ri'
import { fadeUp, staggerContainer } from '@/lib/animations'

const columns = [
  { icon: RiGroupLine, labelKey: 'col1Label' as const, textKey: 'whoText' as const },
  { icon: RiRocketLine, labelKey: 'col2Label' as const, textKey: 'missionBody' as const },
  { icon: RiEyeLine, labelKey: 'col3Label' as const, textKey: 'col3Text' as const },
]

const pillars = [
  { icon: RiPaletteLine, titleKey: 'diff1Title' as const, descKey: 'diff1Desc' as const },
  { icon: RiLightbulbLine, titleKey: 'diff2Title' as const, descKey: 'diff2Desc' as const },
  { icon: RiToolsLine, titleKey: 'diff3Title' as const, descKey: 'diff3Desc' as const },
]

export function SobreNosotrosBody() {
  const t = useTranslations('SobreNosotros.Body')

  return (
    <>
      {/* Hero — 2-col: text left, image right */}
      <section className="pt-12 pb-24 md:pb-32">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="space-y-8"
            >
              <motion.h1 variants={fadeUp} className="leading-none">
                {t('heroHeadline')}{' '}
                <span className="text-gradient-primary">{t('heroHighlight')}</span>
              </motion.h1>

              <motion.p variants={fadeUp} className="max-w-lg text-secondary">
                {t('heroBody')}
              </motion.p>

              <motion.span
                variants={fadeUp}
                className="block w-12 h-1 bg-primary rounded-full"
              />
            </motion.div>

            {/* Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700 aspect-3/4 lg:aspect-auto lg:h-125">
                <Image
                  src="/about/couple.jpeg"
                  alt=""
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-accent rounded-full opacity-30 blur-3xl pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* Quiénes Somos / Misión / Visión — 3-col cards */}
      <section className="py-24 md:py-32 bg-surface">
        <div className="container-site">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {columns.map(({ icon: Icon, labelKey, textKey }) => (
              <div
                key={labelKey}
                className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Icon className="text-xl text-primary" />
                </div>
                <motion.h3 variants={fadeUp} className="mb-3">
                  {t(labelKey)}
                </motion.h3>
                <motion.p variants={fadeUp} className="text-base text-secondary leading-relaxed">
                  {t(textKey)}
                </motion.p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* What sets us apart */}
      <section className="py-24 md:py-32">
        <div className="container-site">
          {/* Top: text + image */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <motion.span
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-xs font-bold tracking-widest uppercase text-primary mb-6"
              >
                {t('differentiatorLabel')}
              </motion.span>

              <motion.h2
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="mb-6"
              >
                {t('differentiatorHeadline')}
              </motion.h2>

              <motion.p
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {t('differentiatorBody')}
              </motion.p>
            </div>

            <div className="relative aspect-4/3 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/home/home4.png"
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Pillar cards */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {pillars.map(({ icon: Icon, titleKey, descKey }) => (
              <div
                key={titleKey}
                className="bg-surface p-8 rounded-2xl border border-gray-100 shadow-sm hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Icon className="text-xl text-primary" />
                </div>
                <motion.h3 variants={fadeUp} className="mb-3">
                  {t(titleKey)}
                </motion.h3>
                <motion.p variants={fadeUp} className="text-base">
                  {t(descKey)}
                </motion.p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 md:py-32 bg-surface">
        <div className="container-site">
          <div className="mb-16">
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-4"
            >
              {t('teamHeadline')}
            </motion.h2>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-secondary"
            >
              {t('teamSubheadline')}
            </motion.p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {/* Member 1 */}
            <div className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex flex-col sm:flex-row gap-8 items-center">
                <div className="w-36 h-36 rounded-full overflow-hidden shrink-0 border-4 border-surface">
                  <Image
                    src="/about/couple.jpeg"
                    alt=""
                    width={144}
                    height={144}
                    className="w-full h-full object-cover object-left group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="space-y-2 text-center sm:text-left">
                  <motion.span
                    variants={fadeUp}
                    className="text-primary font-bold tracking-widest text-xs uppercase"
                  >
                    {t('member1Role')}
                  </motion.span>
                  <motion.h3 variants={fadeUp}>{t('member1Name')}</motion.h3>
                  <motion.p variants={fadeUp} className="text-secondary text-base">
                    {t('member1Bio')}
                  </motion.p>
                </div>
              </div>
            </div>

            {/* Member 2 */}
            <div className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex flex-col sm:flex-row gap-8 items-center">
                <div className="w-36 h-36 rounded-full overflow-hidden shrink-0 border-4 border-surface">
                  <Image
                    src="/about/couple.jpeg"
                    alt=""
                    width={144}
                    height={144}
                    className="w-full h-full object-cover object-right group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="space-y-2 text-center sm:text-left">
                  <motion.span
                    variants={fadeUp}
                    className="text-primary font-bold tracking-widest text-xs uppercase"
                  >
                    {t('member2Role')}
                  </motion.span>
                  <motion.h3 variants={fadeUp}>{t('member2Name')}</motion.h3>
                  <motion.p variants={fadeUp} className="text-secondary text-base">
                    {t('member2Bio')}
                  </motion.p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32">
        <div className="container-site">
          <div className="relative rounded-2xl overflow-hidden bg-linear-to-br from-primary/5 to-accent/10 border border-gray-100 py-20 px-8 md:py-28 md:px-20 text-center">
            <div className="absolute top-0 right-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/20 rounded-full blur-3xl -ml-32 -mb-32 pointer-events-none" />

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative z-10 flex flex-col items-center gap-8"
            >
              <motion.h2 variants={fadeUp} className="max-w-3xl">
                {t('ctaHeadline1')}
                <br className="hidden md:block" />
                {t('ctaHeadline2')}
              </motion.h2>

              <motion.div variants={fadeUp}>
                <Link href="/proyectos">
                  <Button variant="primary" size="lg">
                    {t('ctaBtn')} →
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
