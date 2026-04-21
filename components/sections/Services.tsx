"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import {
  RiLayoutBottomLine,
  RiGlobalLine,
  RiShoppingBagLine,
  RiRefreshLine,
} from "react-icons/ri";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { fadeUp, staggerContainer } from "@/lib/animations";

export function Services() {
  const t = useTranslations("Home.Services");

  const cards = [
    { icon: <RiLayoutBottomLine />, titleKey: "card1Title" as const, descKey: "card1Desc" as const },
    { icon: <RiGlobalLine />,        titleKey: "card2Title" as const, descKey: "card2Desc" as const },
    { icon: <RiShoppingBagLine />,   titleKey: "card3Title" as const, descKey: "card3Desc" as const },
    { icon: <RiRefreshLine />,       titleKey: "card4Title" as const, descKey: "card4Desc" as const },
  ];

  return (
    <section className="py-24 md:py-32 mesh-gradient-bg">
      <div className="container-site">
        {/* Header */}
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
          <motion.h2 variants={fadeUp} className="text-gray-900 mb-4">
            {t("headline")}
          </motion.h2>
          <motion.p variants={fadeUp} className="text-secondary max-w-xl">
            {t("subtitle")}
          </motion.p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {cards.map((card) => (
            <ServiceCard
              key={card.titleKey}
              icon={card.icon}
              title={t(card.titleKey)}
              description={t(card.descKey)}
            />
          ))}
        </div>

        {/* Secondary CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 flex items-center gap-3"
        >
          <p className="text-secondary">{t("ctaText")}</p>
          <Link href="/contacto" className="btn-primary">
            {t("ctaLink")}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
