"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { fadeUp, staggerContainer } from "@/lib/animations";

export function MiniNosotros() {
  const t = useTranslations("Home.MiniNosotros");

  return (
    <section className="py-24 md:py-32 mesh-gradient-bg">
      <div className="container-site max-w-6xl">
        <motion.span
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="inline-block px-4 py-1.5 rounded-md bg-primary/10 text-xs font-bold tracking-widest uppercase text-primary mb-6"
        >
          {t("label")}
        </motion.span>

        <div className="">
          {/* Left — text */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <motion.h2 variants={fadeUp} className="text-gray-900 leading-tight">
              {t("title")}
            </motion.h2>
            <motion.p variants={fadeUp} className="text-secondary">
              {t("body")}
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link href="/sobre-nosotros" className="btn-primary">
                {t("cta")}
              </Link>
            </motion.div>
          </motion.div>

          {/* Right — cards */}
      
        </div>
      </div>
    </section>
  );
}
