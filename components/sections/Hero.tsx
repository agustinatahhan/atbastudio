"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const sentence = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.012, delayChildren: 0.3 },
  },
};

const letter = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function Hero() {
  const t = useTranslations("hero");
  const headlines = [t("headline1"), t("headline2"), t("headline3")];

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-brand-bg">
      {/* Sophisticated gradient background */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 75% 55% at 95% 5%, rgba(143,180,192,0.14) 0%, transparent 65%), radial-gradient(ellipse 55% 45% at 5% 95%, rgba(143,180,192,0.09) 0%, transparent 60%)",
        }}
      />

      <Container className="relative z-10 pt-32 pb-20">
        <div className="flex flex-col items-center text-center md:items-start md:text-left max-w-4xl md:mx-0 mx-auto">
          {/* Eyebrow */}
          {/* <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-xs tracking-[0.3em] uppercase text-brand-dark/40 mb-8"
          >
            ATBA Studio
          </motion.p> */}

          {/* Headline */}
          <h1
            className="font-normal text-4xl md:text-5xl lg:text-7xl leading-[1.05] tracking-tight text-brand-dark mb-8"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            {headlines.map((line, lineIdx) => (
              <motion.span
                key={lineIdx}
                className="block overflow-hidden"
                variants={sentence}
                initial="hidden"
                animate="visible"
              >
                {line.split("").map((char, charIdx) => (
                  <motion.span
                    key={charIdx}
                    variants={letter}
                    className="inline-block"
                    style={{ whiteSpace: char === " " ? "pre" : "normal" }}
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.span>
            ))}
          </h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="text-base md:text-lg text-brand-dark/60 max-w-md leading-relaxed mb-12"
          >
            {t("description")}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.1 }}
            className="flex flex-wrap justify-center md:justify-start items-center gap-4"
          >
            <Button href="#work" variant="primary">
              {t("ctaPrimary")}
            </Button>
            <Button href="#contact" variant="outline">
              {t("ctaSecondary")}
            </Button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
