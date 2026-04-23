"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { fadeUp, staggerContainer } from "@/lib/animations";

export function Projects() {
  const t = useTranslations("Home.Projects");

  const featured = [
    {
      slug: "guia",
      image: "/projects/guia/guia1.png",
      titleKey: "guia.title" as const,
      categoryKey: "guia.category" as const,
      descriptionKey: "guia.description" as const,
    },
    {
      slug: "itiba",
      image: "/projects/itiba/itiba1.jpeg",
      titleKey: "itiba.title" as const,
      categoryKey: "itiba.category" as const,
      descriptionKey: "itiba.description" as const,
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container-site">
        {/* Header row */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-16"
        >
          <div>
            <motion.span
              variants={fadeUp}
              className="inline-block px-4 py-1.5 rounded-md bg-primary/10 text-xs font-bold tracking-widest uppercase text-primary mb-6"
            >
              {t("label")}
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-gray-900">
              {t("headline1")}
              {/* <br />
              {t("headline2")} */}
            </motion.h2>
          </div>

          <motion.div variants={fadeUp}>
            <Link href="/proyectos" className="btn-primary">
              {t("viewAll")}
            </Link>
          </motion.div>
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16">
          {featured.map((project) => (
            <ProjectCard
              key={project.slug}
              title={t(project.titleKey)}
              category={t(project.categoryKey)}
              description={t(project.descriptionKey)}
              image={project.image}
              href="/proyectos"
              viewLabel={t("viewAll")}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
