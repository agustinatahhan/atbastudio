"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { RiArrowDownSLine } from "react-icons/ri";
import { fadeUp, staggerContainer } from "@/lib/animations";

const faqKeys = ["faq1", "faq2", "faq3", "faq4", "faq5"] as const;

export function FAQ() {
  const t = useTranslations("Home.FAQ");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 md:py-32 mesh-gradient-bg ">
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
          className="flex flex-col gap-3"
        >
          {faqKeys.map((key, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={key}
                variants={fadeUp}
                className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left gap-4 cursor-pointer"
                >
                  <span className="font-semibold text-gray-900 text-base">
                    {t(`${key}Q` as `${typeof key}Q`)}
                  </span>
                  <RiArrowDownSLine
                    className={`text-xl text-primary shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 text-secondary text-base leading-relaxed">
                        {t(`${key}A` as `${typeof key}A`)}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
