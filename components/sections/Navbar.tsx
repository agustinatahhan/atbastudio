"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/routing";
import Container from "@/components/ui/Container";

export default function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: t("services"), href: "#services" },
    { label: t("work"), href: "#work" },
    { label: t("process"), href: "#process" },
    { label: t("about"), href: "#about" },
  ];

  function switchLocale() {
    const next = locale === "en" ? "es" : "en";
    router.replace(pathname, { locale: next });
  }

  const isEN = locale === "en";

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-brand-bg/92 backdrop-blur-md border-b border-brand-dark/8"
          : "bg-transparent"
      }`}
    >
      <Container>
        <nav className="flex items-center justify-between h-18 py-5">
          {/* Logo */}
          <a href="#" className="relative h-18 w-18 shrink-0">
            <Image
              src="/logo/logo-dark.png"
              alt="ATBA Studio"
              fill
              className="object-contain object-left"
              priority
            />
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm text-brand-dark/60 hover:text-brand-dark tracking-wide transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop right: lang switcher + CTA */}
          <div className="hidden md:flex items-center gap-5">
            {/* Pill language toggle */}
            <button
              onClick={switchLocale}
              aria-label="Switch language"
              className="flex items-center gap-0.5 text-xs font-medium tracking-widest border border-brand-dark/15 rounded-full px-3 py-1.5 hover:border-brand-dark/30 transition-colors duration-200"
            >
              <span className={isEN ? "text-brand-dark" : "text-brand-dark/30"}>EN</span>
              <span className="text-brand-dark/20 mx-1.5">|</span>
              <span className={!isEN ? "text-brand-dark" : "text-brand-dark/30"}>ES</span>
            </button>
            <a
              href="#contact"
              className="inline-flex items-center text-sm font-medium text-brand-bg bg-brand-dark px-6 py-2.5 transition-all duration-300 hover:bg-brand-accent hover:text-brand-dark"
            >
              {t("cta")}
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-brand-dark transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 bg-brand-dark transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 bg-brand-dark transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </nav>
      </Container>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-brand-bg border-t border-brand-dark/10 overflow-hidden"
          >
            <Container>
              <ul className="py-6 flex flex-col gap-5">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="text-base text-brand-dark tracking-wide"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
                <li className="flex items-center gap-5 pt-2 border-t border-brand-dark/8">
                  <a
                    href="#contact"
                    onClick={() => setMenuOpen(false)}
                    className="inline-flex text-sm font-medium text-brand-bg bg-brand-dark px-6 py-3"
                  >
                    {t("cta")}
                  </a>
                  {/* Mobile pill toggle */}
                  <button
                    onClick={() => { switchLocale(); setMenuOpen(false); }}
                    aria-label="Switch language"
                    className="flex items-center gap-0.5 text-xs font-medium tracking-widest border border-brand-dark/15 rounded-full px-3 py-1.5"
                  >
                    <span className={isEN ? "text-brand-dark" : "text-brand-dark/30"}>EN</span>
                    <span className="text-brand-dark/20 mx-1.5">|</span>
                    <span className={!isEN ? "text-brand-dark" : "text-brand-dark/30"}>ES</span>
                  </button>
                </li>
              </ul>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
