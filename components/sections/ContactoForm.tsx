"use client";

import { useTranslations } from "next-intl";
import ContactForm from "./ContactForm";
import { RiInstagramLine, RiCheckLine, RiMailLine } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { FAQ } from "./FAQ";

const steps = [
  { num: "01", titleKey: "nextStep1Title", descKey: "nextStep1Desc" },
  { num: "02", titleKey: "nextStep2Title", descKey: "nextStep2Desc" },
  { num: "03", titleKey: "nextStep3Title", descKey: "nextStep3Desc" },
] as const;

const iconClass =
  "w-10 h-10 rounded-full border border-secondary/25 flex items-center justify-center text-secondary group-hover:text-primary group-hover:border-primary transition-colors duration-200 shrink-0";

export function ContactoForm() {
  const t = useTranslations("Contacto.Form");

  return (
    <section className="bg-white">
      <div className="container-site py-32 flex flex-col gap-16">
        {/* Form grid */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: What happens next */}
          <div className="flex flex-col justify-between gap-12">
            <div className="flex flex-col gap-8">
              <span className="inline-block self-start px-4 py-1.5 rounded-md bg-primary/10 text-xs font-bold tracking-widest uppercase text-primary">
                {t("nextStepsLabel")}
              </span>
              <div className="flex flex-col gap-7">
                {steps.map(({ num, titleKey, descKey }) => (
                  <div key={num} className="flex gap-5">
                    <span className="text-primary font-bold text-base leading-tight pt-0.5 w-8 shrink-0">
                      {num}
                    </span>
                    <div className="flex flex-col gap-1">
                      <h4 className="text-gray-900">{t(titleKey)}</h4>
                      <p className="text-secondary text-base leading-relaxed">
                        {t(descKey)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2 text-sm font-medium text-secondary">
              <RiCheckLine className="text-primary text-base shrink-0" />
              {t("budgetNote")}
            </div>
          </div>

          {/* Right: Form */}
          <ContactForm />
        </div>

        {/* Social banner */}
        <div className="mesh-gradient-bg rounded-2xl px-8 py-10 grid lg:grid-cols-2 gap-8 lg:gap-24 lg:items-center">

          {/* Heading */}
          <div className="flex flex-col gap-2">
            <p className="font-semibold text-gray-900 text-lg leading-snug">
              {t("follow")}
            </p>
            <p className="text-secondary text-base leading-relaxed">
              {t("followSubtitle")}
            </p>
          </div>

          {/* 3 rows */}
          <div className="flex flex-col gap-4">
            <a
              href="https://www.instagram.com/atbastudio/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 group w-fit"
            >
              <span className={iconClass}><RiInstagramLine size={18} /></span>
              <span className="text-secondary group-hover:text-primary transition-colors font-medium">
                @atbastudio
              </span>
            </a>

            <a
              href="https://www.linkedin.com/in/atbastudio"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 group w-fit"
            >
              <span className={iconClass}><FaLinkedinIn size={16} /></span>
              <span className="text-secondary group-hover:text-primary transition-colors font-medium">
                /atbastudio
              </span>
            </a>

            <a
              href={`mailto:${t("email")}`}
              className="flex items-center gap-4 group w-fit"
            >
              <span className={iconClass}><RiMailLine size={17} /></span>
              <span className="text-secondary group-hover:text-primary transition-colors font-medium">
                {t("email")}
              </span>
            </a>
          </div>

        </div>
      </div>
            <FAQ />
      
    </section>
  );
}
