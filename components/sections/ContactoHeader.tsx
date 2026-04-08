'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { fadeUp, staggerContainer } from '@/lib/animations'

export function ContactoHeader() {
  const t = useTranslations('Contacto.Header')

  return (
    <section className="pt-40 pb-16 md:pt-48 md:pb-20">
      <div className="container-site">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          <motion.h1 variants={fadeUp} className="text-gray-900 mb-6">
            {t('title1')}{' '}
            <span className="text-gradient-primary">{t('titleHighlight')}</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="max-w-2xl text-secondary">
            {t('subtitle')}
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
