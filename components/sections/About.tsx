"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

const pillarKeys = [
  { key: "pillar1", number: "01" },
  { key: "pillar2", number: "02" },
  { key: "pillar3", number: "03" },
] as const;

export default function About() {
  const t = useTranslations("about");

  return (
    <Section id="about" className="bg-brand-bg border-t border-brand-dark/8">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left */}
          <div className="">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-xs tracking-[0.25em] uppercase text-brand-dark/40 mb-6"
            >
              {t("label")}
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-normal text-brand-dark leading-tight mb-8"
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
              }}
            >
              {t("headline")}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="text-base text-brand-dark/65 leading-relaxed mb-5"
            >
              {t("paragraph1")}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.24 }}
              className="text-base text-brand-dark/65 leading-relaxed"
            >
              {t("paragraph2")}
            </motion.p>
          </div>

          {/* Right — pillars */}
          <div className="flex flex-col gap-0 divide-y divide-brand-dark/8">
            {pillarKeys.map(({ key, number }, idx) => (
              <motion.div
                key={key}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.25 }}
                className="flex gap-6 items-start py-8 group cursor-default"
              >
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.12 }}
                  className="text-xs tracking-[0.2em] text-brand-accent shrink-0 mt-1 font-medium"
                >
                  {number}
                </motion.span>
                <div>
                  <motion.h3
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.12 + 0.08 }}
                    className="font-normal text-brand-dark mb-2 group-hover:text-brand-dark/70 transition-colors"
                    style={{
                      fontFamily: "var(--font-playfair)",
                      fontSize: "1.2rem",
                    }}
                  >
                    {t(`${key}Title`)}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.12 + 0.15 }}
                    className="text-sm text-brand-dark/60 leading-relaxed"
                  >
                    {t(`${key}Description`)}
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
