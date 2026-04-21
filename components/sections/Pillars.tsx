"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { RiBrushLine, RiCodeSSlashLine, RiHandHeartLine } from "react-icons/ri";
import { fadeUp, staggerContainer } from "@/lib/animations";

const pillars = [
  { icon: RiBrushLine,      titleKey: "pillar1Title" as const, descKey: "pillar1Desc" as const },
  { icon: RiCodeSSlashLine, titleKey: "pillar2Title" as const, descKey: "pillar2Desc" as const },
  { icon: RiHandHeartLine,  titleKey: "pillar3Title" as const, descKey: "pillar3Desc" as const },
];

export function Pillars() {
  const t = useTranslations("Home.Pillars");

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container-site">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <motion.span
            variants={fadeUp}
            className="inline-block px-4 py-1.5 rounded-md bg-primary/10 text-xs font-bold tracking-widest uppercase text-primary mb-6"
          >
            {t("label")}
          </motion.span>
          <motion.h2 variants={fadeUp} className="text-gray-900">
            {t("headline")}
          </motion.h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
        >
          {pillars.map(({ icon: Icon, titleKey, descKey }) => (
            <motion.div
              key={titleKey}
              variants={fadeUp}
              className="bg-primary/10 p-8 rounded-2xl hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-6 text-xl text-primary">
                <Icon />
              </div>
              <h3 className="mb-3">{t(titleKey)}</h3>
              <p className="text-base text-secondary leading-relaxed">{t(descKey)}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
