"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import FadeIn from "@/components/ui/FadeIn";

const projects = [
  {
    id: "guia",
    title: "Guía Gastronómica Dominicana",
    category: "Web Development · Branding",
    href: "https://www.guiagastronomicadr.com/es",
    coverImage: "/projects/guia/guia1.png",
    year: "2024",
  },
  {
    id: "learn",
    title: "Learn with IOK",
    category: "Product Design · Web Development",
    href: "https://learnwithiok.vercel.app/",
    coverImage: "/projects/learn/learn1.jpeg",
    year: "2024",
  },
  {
    id: "neuro",
    title: "Neurosinergia",
    category: "Web Development · E-commerce",
    href: "https://neurosinergia.store/",
    coverImage: "/projects/neuro/neuro1.jpeg",
    year: "2024",
  },
  {
    id: "photoscape",
    title: "Photoscape",
    category: "Branding · Web Development",
    href: "https://photoscapelandscape.com/",
    coverImage: "/projects/photoscape/photoscape1.jpeg",
    year: "2024",
  },
  {
    id: "m4life",
    title: "M4Life",
    category: "Web Development · Product Design",
    href: "https://www.microbesforlife.com/",
    coverImage: "/projects/m4life/m4life1.jpeg",
    year: "2024",
  },
];

function ProjectCard({
  project,
  index,
  viewLabel,
  description,
}: {
  project: (typeof projects)[0];
  index: number;
  viewLabel: string;
  description: string;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <FadeIn delay={index * 0.08}>
      <motion.a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group block relative overflow-hidden cursor-pointer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden bg-brand-dark/5">
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />

          {/* Hover overlay */}
          <AnimatePresence>
            {hovered && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-brand-dark/72 flex items-end p-8"
              >
                <div>
                  <p className="text-brand-bg/75 text-sm leading-relaxed mb-4">
                    {description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-brand-accent text-xs tracking-widest uppercase">
                    {viewLabel}
                    <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                      <path
                        d="M1 5H13M9 1L13 5L9 9"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Info */}
        <div className="pt-5 pb-2">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3
                className="font-normal text-brand-dark mb-1 group-hover:text-brand-dark/60 transition-colors"
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: "clamp(1rem, 1.5vw, 1.25rem)",
                }}
              >
                {project.title}
              </h3>
              {/* <p className="text-xs text-brand-dark/45 tracking-wide">{project.category}</p> */}
            </div>
            {/* <span className="text-xs text-brand-dark/25 shrink-0 mt-1">{project.year}</span> */}
          </div>
        </div>
      </motion.a>
    </FadeIn>
  );
}

export default function Projects() {
  const t = useTranslations("projects");

  return (
    <Section id="work" className="bg-brand-bg">
      <Container>
        {/* Header */}
        <div className="mb-16 md:mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-xs tracking-[0.25em] uppercase text-brand-dark/40 mb-4"
            >
              {t("label")}
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-normal text-brand-dark leading-tight"
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
              }}
            >
              {t("headline1")}
              <br />
              {t("headline2")}
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-sm text-brand-dark/50 max-w-xs leading-relaxed"
          >
            {t("description")}
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-x-8 gap-y-16">
          {projects.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={idx}
              viewLabel={t("viewProject")}
              description={t(`${project.id}.description`)}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
