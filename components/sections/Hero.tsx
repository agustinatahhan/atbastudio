"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/Button";
import { fadeUp, staggerContainer } from "@/lib/animations";
import VideoLoop from "@/components/ui/VideoLoop";

export function Hero() {
  const t = useTranslations("Home.Hero");

  return (
    <section className="relative overflow-hidden ">
      {/* Background video */}
      <VideoLoop />
      {/* Dark overlay */}
      {/* <div className="absolute inset-0 bg-black/50" /> */}

      {/* Content */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center max-w-5xl mx-auto px-6 py-32 md:py-44"
      >
        {/* Badge label */}
        {/* <motion.span
          variants={fadeUp}
          className="inline-block px-4 py-1.5 rounded-full bg-black/10 border border-black/20 text-xs font-bold tracking-widest uppercase text-black mb-8"
        >
          {t("label")}
        </motion.span> */}

        {/* H1 */}
        <motion.h1 variants={fadeUp} className="mb-8 text-black">
          {t("title1")} {t("titleHighlight")} {t("title2")}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={fadeUp}
          className="max-w-2xl mx-auto text-black/80 mb-12 text-lg"
        >
          {t("subtitle")}
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="/proyectos">
            <Button variant="primary" size="lg">
              {t("ctaPrimary")}
            </Button>
          </Link>
          {/* <Link href="/contacto">
            <Button variant="outline" size="lg">
              {t("ctaSecondary")}
            </Button>
          </Link> */}
        </motion.div>
      </motion.div>
    </section>
  );
}
