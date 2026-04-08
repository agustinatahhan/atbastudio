"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/Button";
import { fadeUp, staggerContainer } from "@/lib/animations";

export function Hero() {
  const t = useTranslations("Home.Hero");

  return (
    <section className="relative overflow-hidden ">
      {/* Background image */}
      <Image
        src="/home/home3.png"
        alt=""
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center max-w-5xl mx-auto px-6 py-32 md:py-44"
      >
        {/* Badge label */}
        <motion.span
          variants={fadeUp}
          className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-bold tracking-widest uppercase text-white mb-8"
        >
          {t("label")}
        </motion.span>

        {/* H1 */}
        <motion.h1 variants={fadeUp} className="mb-8 text-white">
          {t("title1")} {t("titleHighlight")} {t("title2")}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={fadeUp}
          className="max-w-2xl mx-auto text-white/80 mb-12 text-lg"
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
