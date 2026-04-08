"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/Button";
import { fadeUp, staggerContainer } from "@/lib/animations";
import type { FormState } from "@/lib/types";
import { RiMailLine, RiMapPinLine } from "react-icons/ri";

export function ContactoForm() {
  const t = useTranslations("Contacto.Form");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [formState, setFormState] = useState<FormState>({ status: "idle" });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState({ status: "sending" });

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "";
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "";
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "";

    try {
      await emailjs.send(
        serviceId,
        templateId,
        { from_name: name, from_email: email, message },
        publicKey,
      );
      setFormState({ status: "sent" });
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setFormState({ status: "error" });
    }
  };

  const inputClass =
    "w-full bg-transparent border-0 border-b border-gray-200 py-4 px-0 text-lg text-gray-900 placeholder:text-gray-300 focus:outline-none focus:border-primary transition-colors duration-200";

  const labelClass =
    "block text-xs font-bold tracking-widest uppercase text-gray-400 mb-2";

  return (
    <>
      {/* Form section */}
      <section className="pb-0">
        <div className="container-site">
          <motion.form
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            onSubmit={handleSubmit}
            className="max-w-3xl space-y-10"
          >
            {/* Name */}
            <motion.div variants={fadeUp}>
              <label className={labelClass}>{t("nameLabel")}</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={t("namePlaceholder")}
                required
                className={inputClass}
              />
            </motion.div>

            {/* Email */}
            <motion.div variants={fadeUp}>
              <label className={labelClass}>{t("emailLabel")}</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t("emailPlaceholder")}
                required
                className={inputClass}
              />
            </motion.div>

            {/* Message */}
            <motion.div variants={fadeUp}>
              <label className={labelClass}>{t("messageLabel")}</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={t("messagePlaceholder")}
                required
                rows={4}
                className={`${inputClass} resize-none`}
              />
            </motion.div>

            {/* Submit */}
            <motion.div variants={fadeUp} className="pt-4">
              <Button
                type="submit"
                variant="primary"
                size="lg"
                disabled={
                  formState.status === "sending" || formState.status === "sent"
                }
              >
                {formState.status === "sending"
                  ? t("sending")
                  : formState.status === "sent"
                    ? t("sent")
                    : t("submit")}
              </Button>
              {formState.status === "error" && (
                <p className="mt-3 text-red-500 text-sm">{t("error")}</p>
              )}
            </motion.div>
          </motion.form>
        </div>
      </section>

      {/* Contact info + budget CTA — gradient bg */}
      <section className="mt-24 md:mt-32 py-24 text-black mesh-gradient-bg">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Contact info */}
            <div className="space-y-10">
              <div>
                <p className="text-xs font-bold tracking-widest uppercase text-black/60 mb-4">
                  {t("infoTitle")}
                </p>
                <div className="space-y-3">
                  <p className="flex items-center gap-3 text-2xl font-bold text-black">
                    <RiMailLine className="text-black/70" />
                    {t("email")}
                  </p>
                </div>
              </div>

              <div>
                <p className="text-xs font-bold tracking-widest uppercase text-black/60 mb-4">
                  {t("locationTitle")}
                </p>
                <p className="flex items-center gap-3 text-xl text-black/90">
                  <RiMapPinLine className="text-black/70" />
                  {t("location")}
                </p>
              </div>
            </div>

            {/* Budget CTA */}
            <div className="flex flex-col items-center gap-3">
              <Button variant="primary" size="lg">
                <span>{t("budgetCta")}</span>
                <span className="ml-2 transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </Button>

              <p className="text-sm text-black/70 text-center">
                {t("budgetNote")}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
