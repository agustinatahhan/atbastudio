"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { HiOutlineCodeBracket, HiOutlinePaintBrush, HiOutlineCpuChip } from "react-icons/hi2";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

const serviceKeys = ["webDev", "productDesign", "softwareSolutions"] as const;
const serviceNumbers = ["01", "02", "03"];
const serviceIcons = [HiOutlineCodeBracket, HiOutlinePaintBrush, HiOutlineCpuChip];

export default function Services() {
  const t = useTranslations("services");

  return (
    <Section id="services" className="bg-brand-accent/30">
      <Container>
        {/* Header */}
        <div className=" mb-16 md:mb-20">
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

        {/* Service cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {serviceKeys.map((key, idx) => {
            const Icon = serviceIcons[idx];
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                whileHover={{ y: -4 }}
                className="bg-brand-bg rounded-sm p-8 md:p-10 flex flex-col gap-6 shadow-sm cursor-default"
              >
                {/* Icon row */}
                <div className="flex items-center justify-between">
                  <Icon size={28} className="text-brand-accent" />
                  <span className="text-xs tracking-[0.2em] text-brand-dark/25">
                    {serviceNumbers[idx]}
                  </span>
                </div>

                {/* Text */}
                <div className="flex flex-col gap-3 flex-1">
                  <h3
                    className="font-normal text-brand-dark"
                    style={{
                      fontFamily: "var(--font-playfair)",
                      fontSize: "clamp(1.2rem, 2vw, 1.55rem)",
                    }}
                  >
                    {t(`${key}.title`)}
                  </h3>
                  <p className="text-sm text-brand-dark/60 leading-relaxed">
                    {t(`${key}.description`)}
                  </p>
                </div>

                {/* Tags */}
                {/* <div className="flex flex-wrap gap-2 pt-2 border-t border-brand-dark/8">
                  {(t.raw(`${key}.tags`) as string[]).map((tag: string) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 bg-brand-dark/6 text-brand-dark/50 tracking-wide"
                    >
                      {tag}
                    </span>
                  ))}
                </div> */}
              </motion.div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
