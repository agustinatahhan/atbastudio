"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { RiDoubleQuotesL } from "react-icons/ri";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { useEffect, useRef, useState } from "react";
import EmblaCarousel from "../ui/EmblaCarrousel";

const items = [
  { quoteKey: "t1Quote", nameKey: "t1Name", projectKey: "t1Project" },
  { quoteKey: "t2Quote", nameKey: "t2Name", projectKey: "t2Project" },
  { quoteKey: "t3Quote", nameKey: "t3Name", projectKey: "t3Project" },
] as const;

function TestimonialItem({
  quote,
  name,
  project,
}: {
  quote: string;
  name: string;
  project: string;
}) {
  const [expanded, setExpanded] = useState(false);
  const [isTruncated, setIsTruncated] = useState(false);
  const textRef = useRef<HTMLParagraphElement>(null);
  const t = useTranslations("Home.Testimonials"); 
  useEffect(() => {
    const el = textRef.current;
    if (el) {
      setIsTruncated(el.scrollHeight > el.clientHeight);
    }
  }, [quote]);

  return (
    <motion.div
      variants={fadeUp}
      className="bg-primary/10 rounded-2xl p-8 flex flex-col gap-4 h-full"
    >
      <RiDoubleQuotesL className="text-3xl text-primary/30" />

      <p
        ref={textRef}
        className={`text-base text-on-surface leading-relaxed flex-1 transition-all duration-300 ${
          !expanded ? "line-clamp-4" : ""
        }`}
      >
        {quote}
      </p>

      {(isTruncated || expanded) && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-xs text-primary/60 hover:text-primary transition-colors self-start"
        >
          {expanded ? t("viewLess") : t("viewMore")}
        </button>
      )}

      <div className="pt-4 border-t border-primary/20 flex flex-col gap-2">
        <span className="font-semibold text-gray-900 text-sm">
          {name}
        </span>
        <span className="inline-block px-3 py-1 rounded-md bg-primary/10 text-xs font-bold tracking-widest uppercase text-primary self-start">
          {project}
        </span>
      </div>
    </motion.div>
  );
}

export function Testimonials() {
  const t = useTranslations("Home.Testimonials");

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

          <motion.h2 variants={fadeUp} className="text-gray-900">
            {t("headline")}
          </motion.h2>
        </motion.div>

        {/* Carousel */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <EmblaCarousel>
            {items.map(({ quoteKey, nameKey, projectKey }) => (
              <TestimonialItem
                key={nameKey}
                quote={t(quoteKey)}
                name={t(nameKey)}
                project={t(projectKey)}
              />
            ))}
          </EmblaCarousel>
        </motion.div>
      </div>
    </section>
  );
}