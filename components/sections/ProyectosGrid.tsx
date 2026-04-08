'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { Link } from '@/i18n/routing'
import { Button } from '@/components/ui/Button'
import { fadeUp, staggerContainer } from '@/lib/animations'

type FilterKey = 'all' | 'web' | 'design' | 'software'

type ProjectEntry = {
  slug: string
  image: string
  filter: Exclude<FilterKey, 'all'>
  titleKey: string
  categoryKey: string
  descriptionKey: string
  reverse: boolean
}

const projects: ProjectEntry[] = [
  {
    slug: 'guia',
    image: '/projects/guia/guia1.png',
    filter: 'web',
    titleKey: 'guia.title',
    categoryKey: 'guia.category',
    descriptionKey: 'guia.description',
    reverse: false,
  },
  {
    slug: 'learn',
    image: '/projects/learn/learn1.jpeg',
    filter: 'web',
    titleKey: 'learn.title',
    categoryKey: 'learn.category',
    descriptionKey: 'learn.description',
    reverse: true,
  },
  {
    slug: 'neuro',
    image: '/projects/neuro/neuro1.jpeg',
    filter: 'design',
    titleKey: 'neuro.title',
    categoryKey: 'neuro.category',
    descriptionKey: 'neuro.description',
    reverse: false,
  },
  {
    slug: 'photoscape',
    image: '/projects/photoscape/photoscape1.jpeg',
    filter: 'design',
    titleKey: 'photoscape.title',
    categoryKey: 'photoscape.category',
    descriptionKey: 'photoscape.description',
    reverse: true,
  },
  {
    slug: 'm4life',
    image: '/projects/m4life/m4life1.jpeg',
    filter: 'web',
    titleKey: 'm4life.title',
    categoryKey: 'm4life.category',
    descriptionKey: 'm4life.description',
    reverse: false,
  },
]

export function ProyectosGrid() {
  const tHeader = useTranslations('Proyectos.Header')
  const tGrid = useTranslations('Proyectos.Grid')
  const [activeFilter, setActiveFilter] = useState<FilterKey>('all')

  // const filters: { key: FilterKey; label: string }[] = [
  //   { key: 'all', label: tHeader('filterAll') },
  //   { key: 'web', label: tHeader('filterWeb') },
  //   { key: 'design', label: tHeader('filterDesign') },
  //   { key: 'software', label: tHeader('filterSoftware') },
  // ]

  const filtered = projects.filter(
    (p) => activeFilter === 'all' || p.filter === activeFilter
  )

  return (
    <>
      {/* Filter bar */}
      {/* <section className="pb-12">
        <div className="container-site">
          <div className="flex flex-wrap gap-3">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setActiveFilter(f.key)}
                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-200 ${
                  activeFilter === f.key
                    ? 'bg-gray-900 text-white'
                    : 'bg-gray-100 text-secondary hover:bg-primary/10 hover:text-primary'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </section> */}

      {/* Projects vertical list */}
      <section className="pb-24 md:pb-32">
        <div className="container-site">
          <div className="flex flex-col gap-20 md:gap-28">
            {filtered.map((project) => (
              <motion.article
                key={project.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className={`group flex flex-col ${
                  project.reverse ? 'md:flex-row-reverse' : 'md:flex-row'
                } gap-8 md:gap-16 items-center`}
              >
                {/* Image */}
                <div className="w-full md:w-3/5 relative aspect-16/10 rounded-2xl overflow-hidden bg-gray-100">
                  <Image
                    src={project.image}
                    alt={tGrid(project.titleKey as Parameters<typeof tGrid>[0])}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 768px) 100vw, 60vw"
                  />
                </div>

                {/* Text */}
                <div className="w-full md:w-2/5 flex flex-col items-start gap-4">
                  <p className="text-xs font-bold tracking-widest uppercase text-secondary">
                    {tGrid(project.categoryKey as Parameters<typeof tGrid>[0])}
                  </p>
                  <h3 className="text-gray-900 text-3xl md:text-4xl">
                    {tGrid(project.titleKey as Parameters<typeof tGrid>[0])}
                  </h3>
                  <p className="text-gray-500 leading-relaxed">
                    {tGrid(project.descriptionKey as Parameters<typeof tGrid>[0])}
                  </p>
                  {/* <Link
                    href="/contacto"
                    className="flex items-center gap-2 text-primary font-bold text-sm mt-2 hover:gap-3 transition-all duration-200"
                  >
                    {tGrid('viewStudy')} →
                  </Link> */}
                </div>
              </motion.article>
            ))}
          </div>

          {/* CTA banner */}
          <div className="mt-24 md:mt-32 relative rounded-2xl bg-gray-50 overflow-hidden py-20 px-8 md:py-24 md:px-16 text-center flex flex-col items-center gap-6">
            {/* Decorative blurs */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-primary/10 blur-[80px] rounded-full -mr-16 -mt-16 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/30 blur-[80px] rounded-full -ml-16 -mb-16 pointer-events-none" />

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative z-10 flex flex-col items-center gap-6"
            >
              <motion.h2
                variants={fadeUp}
                className="text-gray-900 max-w-3xl text-4xl md:text-6xl"
              >
                {tGrid('ctaHeadline')}
              </motion.h2>
              <motion.p variants={fadeUp} className="max-w-xl text-secondary">
                {tGrid('ctaBody')}
              </motion.p>
              <motion.div variants={fadeUp}>
                <Link href="/contacto">
                  <Button variant="primary" size="lg">
                    {tGrid('ctaBtn')} →
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
