"use client";

import { useTranslations } from "next-intl";
import ContactForm from "./ContactForm";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";

export function ContactoForm() {
  const t = useTranslations("Contacto.Form");

  return (
    <>
      <section className="bg-white">
        <div className="container-site py-32">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
            {/* Left: Info */}
            <div>
              <div />
              {/* <h3 className="mb-8">{t("title")}</h3>
              <p className="mb-12 font-light">{t("subtitle")}</p> */}

              <div className="space-y-6">
                <div>
                  <p className=" mb-4 text-black/80 font-semibold">Email</p>
                  <div className="flex gap-4">
                    <a href={`mailto:${t("email")}`}>
                      <p className="text-black font-light hover:text-primary transition-colors">
                        {t("email")}
                      </p>
                    </a>
                  </div>
                </div>

                <div>
                  <p className=" mb-4 text-black/80 font-semibold">
                    {t("follow")}
                  </p>
                  <div className="flex gap-4">
                    <a
                      href="https://www.instagram.com/atbastudio/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                      className="w-10 h-10 border border-black/40 flex items-center justify-center text-black hover:bg-primary hover:text-white hover:border-white transition-all rounded-md"
                    >
                      <FaInstagram size={20} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/atbastudio"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="w-10 h-10 border border-black/40 flex items-center justify-center text-black hover:bg-primary hover:text-white hover:border-white transition-all rounded-md"
                      >
                        <FaLinkedinIn size={16} />
                      </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
