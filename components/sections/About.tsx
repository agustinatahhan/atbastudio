'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { RiStarLine, RiPaletteLine, RiLightbulbLine, RiToolsLine } from 'react-icons/ri'
import { fadeUp, staggerContainer } from '@/lib/animations'

const pillars = [
  { icon: RiPaletteLine, titleKey: 'pillar1Title' as const, descKey: 'pillar1Desc' as const },
  { icon: RiLightbulbLine, titleKey: 'pillar2Title' as const, descKey: 'pillar2Desc' as const },
  { icon: RiToolsLine, titleKey: 'pillar3Title' as const, descKey: 'pillar3Desc' as const },
]

export function About() {
  const t = useTranslations('Home.About')

  return (
    <>
      {/* Vision / Quote Section */}
      <section className="py-24 md:py-32 text-center px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeUp} className="flex justify-center mb-8">
              <span className="text-4xl text-primary">
                <RiStarLine />
              </span>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="font-body italic text-4xl md:text-6xl font-bold text-on-surface leading-tight mb-10"
            >
              {t('quote')}
            </motion.h2>

            <motion.p variants={fadeUp} className="max-w-3xl mx-auto text-secondary text-lg md:text-xl leading-relaxed">
              {t('body')}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* What sets us apart */}
      <section className="py-24 md:py-32 bg-surface">
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
                src="/home/home3.png"
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
                className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:-translate-y-1 transition-transform duration-300"
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
    </>
  )
}
