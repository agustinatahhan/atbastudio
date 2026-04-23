'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { fadeUp, staggerContainer } from '@/lib/animations'

export function ContactoHeader() {
  const t = useTranslations('Contacto.Header')

  return (
     <section className="bg-linear-to-r from-accent/20 via-white/80 to-primary/30 py-40 lg:py-52">
        <div className="container-site  ">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-2xl"
        >
          <motion.h2 variants={fadeUp} className="text-gray-900 leading-tight mb-6">
            {t('title1')}{' '}
            <span className="text-gradient-primary">{t('titleHighlight')}</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="max-w-2xl text-secondary">
            {t('subtitle')}
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
