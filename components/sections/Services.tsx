'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { RiCodeSSlashLine, RiPenNibLine, RiSettings4Line } from 'react-icons/ri'
import { ServiceCard } from '@/components/ui/ServiceCard'
import { fadeUp, staggerContainer } from '@/lib/animations'

export function Services() {
  const t = useTranslations('Home.Services')

  const cards = [
    {
      icon: <RiCodeSSlashLine />,
      titleKey: 'card1Title' as const,
      descKey: 'card1Desc' as const,
    },
    {
      icon: <RiPenNibLine />,
      titleKey: 'card2Title' as const,
      descKey: 'card2Desc' as const,
    },
    {
      icon: <RiSettings4Line />,
      titleKey: 'card3Title' as const,
      descKey: 'card3Desc' as const,
    },
  ]

  return (
    <section className="py-24 md:py-32 mesh-gradient-bg">
      <div className="container-site">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <motion.p
            variants={fadeUp}
            className="text-primary text-xs font-bold tracking-[0.2em] uppercase mb-4"
          >
            {t('label')}
          </motion.p>
          <motion.h2 variants={fadeUp} className="text-gray-900">
            {t('headline')}
          </motion.h2>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {cards.map((card) => (
            <ServiceCard
              key={card.titleKey}
              icon={card.icon}
              title={t(card.titleKey)}
              description={t(card.descKey)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
