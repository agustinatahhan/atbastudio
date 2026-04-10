'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { fadeUp, staggerContainer } from '@/lib/animations'

export function ProyectosHeader() {
  const t = useTranslations('Proyectos.Header')

  return (
    <section className="py-24 md:py-32">
      
      <div className="container-site">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-start gap-5 max-w-4xl"
        >
          {/* Badge */}
          {/* <motion.span
            variants={fadeUp}
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase"
          >
            {t('badge')}
          </motion.span> */}

          {/* Title */}
          <motion.h1 variants={fadeUp} className="text-gray-900">
            {t('title')}
          </motion.h1>

          {/* Subtitle */}
          <motion.p variants={fadeUp} className="max-w-2xl text-secondary">
            {t('subtitle')}
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
