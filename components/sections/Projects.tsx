'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/routing'
import { ProjectCard } from '@/components/ui/ProjectCard'
import { Button } from '@/components/ui/Button'
import { fadeUp, staggerContainer } from '@/lib/animations'

export function Projects() {
  const t = useTranslations('Home.Projects')

  const featured = [
    {
      slug: 'guia',
      image: '/projects/guia/guia1.png',
      titleKey: 'guia.title' as const,
      categoryKey: 'guia.category' as const,
      descriptionKey: 'guia.description' as const,
    },
    {
      slug: 'photoscape',
      image: '/projects/photoscape/photoscape1.jpeg',
      titleKey: 'photoscape.title' as const,
      categoryKey: 'photoscape.category' as const,
      descriptionKey: 'photoscape.description' as const,
    },
  ]

  return (
    <section className="py-24 md:py-32 bg-surface/50">
      <div className="container-site">
        {/* Header row */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16"
        >
          <div>
            <motion.p
              variants={fadeUp}
              className="text-primary text-xs font-bold tracking-[0.2em] uppercase mb-4"
            >
              {t('label')}
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-gray-900">
              {t('headline1')}
              <br />
              {t('headline2')}
            </motion.h2>
          </div>

          <motion.div variants={fadeUp}>
            <Link href="/proyectos" className='btn-primary'>
              {/* <Button  size="md">
                {t('viewAll')}
              </Button> */}
              {t("viewAll")}
            </Link>
          </motion.div>
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16">
          {featured.map((project) => (
            <ProjectCard
              key={project.slug}
              title={t(project.titleKey)}
              category={t(project.categoryKey)}
              description={t(project.descriptionKey)}
              image={project.image}
              href="/proyectos"
              viewLabel={t('viewAll')}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
