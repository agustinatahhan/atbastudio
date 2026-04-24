"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { projects } from "@/data/projects";

type FilterKey = "all" | "web" | "design" | "software";

export function ProyectosGrid() {
  const tHeader = useTranslations("Proyectos.Header");
  const tGrid = useTranslations("Proyectos.Grid");
  const locale = useLocale() as "en" | "es";
  const [activeFilter, setActiveFilter] = useState<FilterKey>("all");

  const filtered = projects.filter(
    (p) => activeFilter === "all" || p.kind === activeFilter,
  );

  return (
    <>
      {/* Projects vertical list */}
      <section className="pb-24 md:pb-32 py-32">
        <div className="container-site">
          <div className="flex flex-col gap-20 md:gap-28">
            {filtered.map((project) => {
              const t = project[locale];
              return (
                <motion.article
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className={`group flex flex-col ${
                    project.reverse ? "lg:flex-row-reverse" : "lg:flex-row"
                  } gap-8 lg:gap-16 items-stretch`}
                >
                  {/* Image */}
                  <div className="w-full lg:w-3/5 relative aspect-16/10 rounded-md overflow-hidden bg-gray-100">
                    <Image
                      src={project.image}
                      alt={t.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      sizes="(max-width: 768px) 100vw, 60vw"
                    />
                  </div>

                  {/* Text */}
                  <div className="w-full lg:w-2/5 flex flex-col items-start justify-between gap-8">
                    <div className="flex flex-col gap-4">
                      <span className="inline-block self-start px-3 py-1 rounded-md bg-primary/10 text-xs font-bold tracking-widest uppercase text-primary">
                        {t.category}
                      </span>
                      <h3 className="text-gray-900 text-3xl md:text-4xl">
                        {t.title}
                      </h3>
                      <p className="text-gray-500 leading-relaxed">
                        {t.description}
                      </p>
                    </div>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                    >
                      {locale === "es" ? "Conocé el proyecto" : "See it live"}
                    </a>
                  </div>
                </motion.article>
              );
            })}
          </div>

          {/* CTA banner */}
          <div className="mt-24 md:mt-32 relative rounded-md mesh-gradient-bg overflow-hidden py-20 px-8 md:py-24 md:px-16 text-center flex flex-col items-center gap-6">
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
                {tGrid("ctaHeadline")}
              </motion.h2>
              <motion.p variants={fadeUp} className="max-w-xl text-secondary">
                {tGrid("ctaBody")}
              </motion.p>
              <motion.div variants={fadeUp}>
                <Link href="/contacto" className="btn-primary">
                  {tGrid("ctaBtn")}
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
