"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { RiDoubleQuotesL } from "react-icons/ri";
import { fadeUp, staggerContainer } from "@/lib/animations";

const items = [
  { quoteKey: "t1Quote", nameKey: "t1Name", projectKey: "t1Project" },
  { quoteKey: "t2Quote", nameKey: "t2Name", projectKey: "t2Project" },
  { quoteKey: "t3Quote", nameKey: "t3Name", projectKey: "t3Project" },
] as const;

export function Testimonials() {
  const t = useTranslations("Home.Testimonials");

  return (
    <section className="py-24 md:py-32 bg-surface/40">
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
          {items.map(({ quoteKey, nameKey, projectKey }) => (
            <motion.div
              key={nameKey}
              variants={fadeUp}
              className="bg-primary/10 rounded-2xl p-8 flex flex-col gap-4"
            >
              <RiDoubleQuotesL className="text-3xl text-primary/30" />
              <p className="text-base text-on-surface leading-relaxed flex-1">
                {t(quoteKey)}
              </p>
              <div className="pt-4 border-t border-primary/20 flex flex-col gap-1">
                <span className="font-semibold text-gray-900 text-sm">
                  {t(nameKey)}
                </span>
                <span className="inline-block px-3 py-1 rounded-md bg-primary/10 text-xs font-bold tracking-widest uppercase text-primary self-start">
                  {t(projectKey)}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
    </section>
  );
}
