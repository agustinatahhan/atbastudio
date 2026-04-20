"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/Button";
import { fadeUp, staggerContainer } from "@/lib/animations";

export function CTA() {
  const t = useTranslations("Home.CTA");

  return (
    <section className="py-24 md:py-32">
      <div className="container-site">
        <div className="mesh-gradient-bg rounded-2xl px-8 py-20 md:px-20 md:py-28 text-center relative overflow-hidden">
          <div className="relative z-10 max-w-3xl mx-auto">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.h2 variants={fadeUp} className="text-gray-900 mb-6">
                {t("headline1")}
                <br />
                {t("headline2")}
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className="max-w-xl mx-auto text-secondary mb-10"
              >
                {t("body")}
              </motion.p>

              <motion.div variants={fadeUp}>
                <Link href="/contacto" className="btn-primary">
                  {/* <Button variant="primary" size="lg">
                    {t('cta')} →
                  </Button> */}
                  {t("cta")} 
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
