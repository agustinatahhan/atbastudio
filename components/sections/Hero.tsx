"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/Button";
import { fadeUp, staggerContainer } from "@/lib/animations";
import VideoLoop from "@/components/ui/VideoLoop";
import Image from "next/image";
export function Hero() {
  const t = useTranslations("Home.Hero");

  return (
    // <section className="relative overflow-hidden ">
    <section className="relative h-screen min-h-150 flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      {/* Mobile */}
      {/* <Image
        src="/home/homebg.jpeg"
        alt="Homepage image - Tamal"
        fill
        priority
        // placeholder="blur"
        // blurDataURL={BLUR["home/homebgsmall"]}
        className="object-cover "
      /> */}

      <VideoLoop />
      {/* <div className="absolute inset-0 bg-black/50" /> */}

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center max-w-5xl mx-auto px-6 pady"
      >
        <motion.h1 variants={fadeUp} className="mb-6 text-black">
          {t("title1")} {t("titleHighlight")} {t("title2")}
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="max-w-2xl mx-auto text-black mb-10 text-[20px]"
        >
          {t("subtitle")}
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="/proyectos" className="btn-outline h-12 w-full sm:w-56 justify-center">
            {t("ctaPrimary")}
          </Link>
          <Link href="/contacto" className="btn-primary h-12 w-full sm:w-56 justify-center">
            {t("ctaSecondary")}
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
