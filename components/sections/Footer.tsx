"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import Container from "@/components/ui/Container";

const socials = [
  { label: "Twitter", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "GitHub", href: "#" },
];

export default function Footer() {
  const t = useTranslations("footer");
  const year = new Date().getFullYear();

  const navLinks = [
    { label: t("services"), href: "#services" },
    { label: t("work"), href: "#work" },
    { label: t("process"), href: "#process" },
    { label: t("about"), href: "#about" },
    { label: t("contact"), href: "#contact" },
  ];

  return (
    <footer className="bg-[#252220] border-t border-white/6">
      <Container>
        <div className="py-16 md:py-20">
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            {/* Brand */}
            <div>
              <div className="relative h-6 w-20 mb-5">
                <Image
                  src="/logo/logo-white.png"
                  alt="ATBA Studio"
                  fill
                  className="object-contain object-left"
                />
              </div>
              <p className="text-sm text-brand-bg/50 leading-relaxed max-w-xs">
                {t("tagline")}
              </p>
            </div>

            {/* Navigation */}
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-brand-bg/30 mb-5">
                {t("navigation")}
              </p>
              <ul className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-brand-bg/55 hover:text-brand-accent transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-brand-bg/30 mb-5">
                {t("contact")}
              </p>
              <a
                href="mailto:atbastudio@gmail.com"
                className="text-sm text-brand-bg/55 hover:text-brand-accent transition-colors duration-200 block mb-6"
              >
                atbastudio@gmail.com
              </a>
              <div className="flex gap-5">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="text-xs text-brand-bg/30 hover:text-brand-accent transition-colors duration-200"
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-8 border-t border-white/6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <p className="text-xs text-brand-bg/25">
              © {year} ATBA Studio. {t("copyright")}
            </p>
            <p className="text-xs text-brand-bg/20">{t("crafted")}</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
