"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

const stepKeys = ["step1", "step2", "step3", "step4"] as const;
const stepNumbers = ["01", "02", "03", "04"];

export default function Process() {
  const t = useTranslations("process");

  return (
    <Section id="process" className="bg-brand-bg border-t border-brand-dark/8">
      <Container>
        {/* Header — text-only animation */}
        <div className="mb-16 md:mb-20">
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
            className="font-normal text-brand-dark leading-tight max-w-2xl"
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

        {/* Steps — no FadeIn on containers, animate text only */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-brand-dark/10">
          {stepKeys.map((key, idx) => (
            <div
              key={key}
              className="bg-brand-bg p-8 md:p-10 h-full group hover:bg-brand-dark transition-colors duration-500 cursor-default"
            >
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="text-xs tracking-[0.2em] text-brand-dark/30 group-hover:text-brand-accent/60 mb-8 block transition-colors duration-500"
              >
                {stepNumbers[idx]}
              </motion.span>
              <motion.h3
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 + 0.08 }}
                className="font-normal text-brand-dark group-hover:text-brand-bg mb-4 transition-colors duration-500"
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: "clamp(1.1rem, 1.5vw, 1.4rem)",
                }}
              >
                {t(`${key}Title`)}
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 + 0.16 }}
                className="text-sm text-brand-dark/60 group-hover:text-brand-bg/55 leading-relaxed transition-colors duration-500"
              >
                {t(`${key}Description`)}
              </motion.p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
