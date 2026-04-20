"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/Button";
import {
  RiRocketLine,
  RiEyeLine,
  RiCheckLine,
  RiLinkedinBoxFill,
} from "react-icons/ri";
import { fadeUp, staggerContainer } from "@/lib/animations";

const columns = [
  {
    icon: RiRocketLine,
    labelKey: "col2Label" as const,
    textKey: "missionBody" as const,
  },
  {
    icon: RiEyeLine,
    labelKey: "col3Label" as const,
    textKey: "col3Text" as const,
  },
];

const steps = [
  { num: "01", titleKey: "step1Title" as const, descKey: "step1Desc" as const },
  { num: "02", titleKey: "step2Title" as const, descKey: "step2Desc" as const },
  { num: "03", titleKey: "step3Title" as const, descKey: "step3Desc" as const },
  { num: "04", titleKey: "step4Title" as const, descKey: "step4Desc" as const },
];

const checkKeys = ["check1", "check2", "check3", "check4", "check5"] as const;

export function SobreNosotrosBody() {
  const t = useTranslations("SobreNosotros.Body");

  return (
    <>
      {/* Hero — solo texto, centrado */}
      <section className="pady-section bg-linear-to-r  from-accent/20 via-white/80 to-primary/30 ">
        <div className="container-site  ">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="text-left space-y-6"
          >
            <motion.h2 variants={fadeUp} className="leading-tight ">
              {t("heroHeadline")}
              <br />
              <span className="text-gradient-primary">
                {t("heroHighlight")}
              </span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-xl text-secondary leading-relaxed max-w-xl"
            >
              {t("heroBody")}
            </motion.p>

            {/* <motion.span
              variants={fadeUp}
              className="block w-12 h-1 bg-primary rounded-full"
            /> */}
          </motion.div>
        </div>
      </section>

      {/* Misión / Visión — 2 cards ancho completo */}
      <section className="py-24 md:py-32 bg-surface/10">
        <div className="container-site max-w-6xl">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {columns.map(({ icon: Icon, labelKey, textKey }) => (
              <div
                key={labelKey}
                className="bg-primary/10 p-8 rounded-2xl hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-6">
                  <Icon className="text-xl text-primary" />
                </div>
                <motion.h3 variants={fadeUp} className="mb-3">
                  {t(labelKey)}
                </motion.h3>
                <motion.p
                  variants={fadeUp}
                  className="text-base text-secondary leading-relaxed"
                >
                  {t(textKey)}
                </motion.p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Cómo trabajamos — 4 pasos numerados */}
      <section className="py-24 md:py-32">
        <div className="container-site">
          <div className="mb-14">
            <motion.span
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 rounded-md bg-primary/10 text-xs font-bold tracking-widest uppercase text-primary mb-6"
            >
              {t("howLabel")}
            </motion.span>

            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-4"
            >
              {t("howHeadline")}
            </motion.h2>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-secondary max-w-xl"
            >
              {t("howBody")}
            </motion.p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {steps.map(({ num, titleKey, descKey }) => (
              <motion.div
                key={num}
                variants={fadeUp}
                className="bg-primary/10 p-8 rounded-md hover:-translate-y-1 transition-transform duration-300"
              >
                <span className="block text-5xl font-bold text-primary leading-none mb-5">
                  {num}
                </span>
                <h3 className="mb-2">{t(titleKey)}</h3>
                <p className="text-base text-secondary leading-relaxed">
                  {t(descKey)}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Por qué elegirnos — checklist + image */}
      <section className="py-24 md:py-32 mesh-gradient-bg">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: text + checklist */}
            <div>
              <motion.span
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="inline-block px-4 py-1.5 rounded-md bg-primary/10 text-xs font-bold tracking-widest uppercase text-primary mb-6"
              >
                {t("differentiatorLabel")}
              </motion.span>

              <motion.h2
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="mb-4"
              >
                {t("differentiatorHeadline")}
              </motion.h2>

              <motion.p
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-secondary mb-8"
              >
                {t("differentiatorBody")}
              </motion.p>

              {/* <motion.ul
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-4"
              >
                {checkKeys.map((key) => (
                  <motion.li key={key} variants={fadeUp} className="flex items-start gap-3">
                    <span className="mt-0.5 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <RiCheckLine className="text-sm text-primary" />
                    </span>
                    <span className="text-base text-on-surface leading-snug">{t(key)}</span>
                  </motion.li>
                ))}
              </motion.ul> */}
            </div>

            {/* Right: image */}
            <div className="relative aspect-4/3 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/about/coup.jpeg"
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 md:py-32">
        <div className="container-site">
          <div className="mb-16">
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-4"
            >
              {t("teamHeadline")}
            </motion.h2>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-secondary"
            >
              {t("teamSubheadline")}
            </motion.p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {/* Member 1 — Agustina */}
            <div className="group bg-primary/10 rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex flex-col sm:flex-row gap-8 items-center">
                <div className="w-36 h-36 rounded-full overflow-hidden shrink-0 border-4 border-white">
                  <Image
                    src="/about/agus.jpg"
                    alt="Agustina"
                    width={144}
                    height={144}
                    className="w-full h-full object-cover object-left group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="space-y-2 text-center sm:text-left">
                  <motion.span
                    variants={fadeUp}
                    className="text-primary font-bold tracking-widest text-xs uppercase"
                  >
                    {t("member1Role")}
                  </motion.span>
                  <motion.h3 variants={fadeUp}>{t("member1Name")}</motion.h3>
                  <motion.p
                    variants={fadeUp}
                    className="text-secondary text-base"
                  >
                    {t("member1Bio")}
                  </motion.p>
                  <motion.div
                    variants={fadeUp}
                    className="pt-1 flex justify-center sm:justify-start"
                  >
                    <a
                      href="https://www.linkedin.com/in/agustinatahhan"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/40 transition-colors duration-200"
                      aria-label="LinkedIn de Agustina"
                    >
                      <RiLinkedinBoxFill className="text-2xl" />
                    </a>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Member 2 — Nicolás */}
            <div className="group bg-primary/10 rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex flex-col sm:flex-row gap-8 items-center">
                <div className="w-36 h-36 rounded-full overflow-hidden shrink-0 border-4 border-white">
                  <Image
                    src="/about/nico.jpg"
                    alt="Nicolás"
                    width={144}
                    height={144}
                    className="w-full h-full object-cover object-right group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="space-y-2 text-center sm:text-left">
                  <motion.span
                    variants={fadeUp}
                    className="text-primary font-bold tracking-widest text-xs uppercase"
                  >
                    {t("member2Role")}
                  </motion.span>
                  <motion.h3 variants={fadeUp}>{t("member2Name")}</motion.h3>
                  <motion.p
                    variants={fadeUp}
                    className="text-secondary text-base"
                  >
                    {t("member2Bio")}
                  </motion.p>
                  <motion.div
                    variants={fadeUp}
                    className="pt-1 flex justify-center sm:justify-start"
                  >
                    <a
                      href="https://www.linkedin.com/in/nicolasbarquin"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/40 transition-colors duration-200"
                      aria-label="LinkedIn de Nicolás"
                    >
                      <RiLinkedinBoxFill className="text-2xl" />
                    </a>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32">
        <div className="container-site">
          <div className="relative rounded-md overflow-hidden bg-linear-to-br mesh-gradient-bg border border-gray-100 py-20 px-8 md:py-28 md:px-20 text-center">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative z-10 flex flex-col items-center gap-8"
            >
              <motion.h2 variants={fadeUp} className="max-w-3xl">
                {t("ctaHeadline1")}
                <br className="hidden md:block" />
                {t("ctaHeadline2")}
              </motion.h2>

              <motion.div variants={fadeUp}>
                <Link href="/proyectos" className="btn-primary">
                  {t("ctaBtn")}
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
