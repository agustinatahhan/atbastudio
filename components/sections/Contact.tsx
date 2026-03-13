"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import emailjs from "@emailjs/browser";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import FadeIn from "@/components/ui/FadeIn";

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

export default function Contact() {
  const t = useTranslations("contact");
  const [focused, setFocused] = useState<string | null>(null);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);
  const isFormValid =
    form.name.trim() !== "" &&
    form.email.trim() !== "" &&
    emailValid &&
    form.subject.trim() !== "" &&
    form.message.trim() !== "";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [e.target.id]: e.target.value }));

  const handleBlur = (id: string) =>
    setTouched((prev) => ({ ...prev, [id]: true }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY);
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
      setTouched({});
      setTimeout(() => setStatus("idle"), 3000);
    } catch {
      setStatus("error");
    }
  };

  const fields = [
    { id: "name", label: t("nameLabel"), type: "text", placeholder: t("namePlaceholder") },
    { id: "email", label: t("emailLabel"), type: "email", placeholder: t("emailPlaceholder") },
  ];

  return (
    <Section id="contact" className="bg-brand-dark">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left */}
          <div>
            <FadeIn>
              <p className="text-xs tracking-[0.25em] uppercase text-brand-accent/50 mb-6">
                {t("label")}
              </p>
              <h2
                className="font-normal text-brand-bg leading-tight mb-8"
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: "clamp(2rem, 4vw, 3.5rem)",
                }}
              >
                {t("headline1")}
                <br />
                {t("headline2")}
              </h2>
            </FadeIn>

            <FadeIn delay={0.15}>
              <p className="text-brand-bg/50 text-base leading-relaxed mb-10">
                {t("description")}
              </p>
            </FadeIn>

            <FadeIn delay={0.25}>
              <div className="flex flex-col gap-4">
                <a
                  href={`mailto:${t("email")}`}
                  className="text-sm text-brand-accent hover:text-brand-bg transition-colors tracking-wide"
                >
                  {t("email")}
                </a>
                {/* <div className="flex gap-6">
                  {["Twitter", "LinkedIn", "GitHub"].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="text-sm text-brand-bg/30 hover:text-brand-accent transition-colors"
                    >
                      {social}
                    </a>
                  ))}
                </div> */}
              </div>
            </FadeIn>
          </div>

          {/* Right — form */}
          <FadeIn delay={0.2} direction="left">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid sm:grid-cols-2 gap-6">
                {fields.map((field) => (
                  <div key={field.id} className="flex flex-col gap-2">
                    <label
                      htmlFor={field.id}
                      className={`text-xs tracking-[0.15em] uppercase transition-colors duration-200 ${
                        focused === field.id ? "text-brand-accent" : "text-brand-bg/40"
                      }`}
                    >
                      {field.label}
                    </label>
                    <input
                      id={field.id}
                      type={field.type}
                      placeholder={field.placeholder}
                      value={form[field.id as keyof typeof form]}
                      onChange={handleChange}
                      onFocus={() => setFocused(field.id)}
                      onBlur={() => { setFocused(null); handleBlur(field.id); }}
                      className={`bg-transparent border-b text-brand-bg placeholder-brand-bg/20 text-sm py-3 outline-none transition-colors duration-200 ${
                        field.id === "email" && touched.email && !emailValid
                          ? "border-red-400 focus:border-red-400"
                          : "border-brand-bg/20 focus:border-brand-accent"
                      }`}
                    />
                    {field.id === "email" && touched.email && !emailValid && (
                      <p className="text-xs text-red-400 mt-1">{t("emailError")}</p>
                    )}
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="subject"
                  className={`text-xs tracking-[0.15em] uppercase transition-colors duration-200 ${
                    focused === "subject" ? "text-brand-accent" : "text-brand-bg/40"
                  }`}
                >
                  {t("subjectLabel")}
                </label>
                <input
                  id="subject"
                  type="text"
                  placeholder={t("subjectPlaceholder")}
                  value={form.subject}
                  onChange={handleChange}
                  onFocus={() => setFocused("subject")}
                  onBlur={() => { setFocused(null); handleBlur("subject"); }}
                  className="bg-transparent border-b border-brand-bg/20 focus:border-brand-accent text-brand-bg placeholder-brand-bg/20 text-sm py-3 outline-none transition-colors duration-200"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="message"
                  className={`text-xs tracking-[0.15em] uppercase transition-colors duration-200 ${
                    focused === "message" ? "text-brand-accent" : "text-brand-bg/40"
                  }`}
                >
                  {t("messageLabel")}
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder={t("messagePlaceholder")}
                  value={form.message}
                  onChange={handleChange}
                  onFocus={() => setFocused("message")}
                  onBlur={() => { setFocused(null); handleBlur("message"); }}
                  className="bg-transparent border-b border-brand-bg/20 focus:border-brand-accent text-brand-bg placeholder-brand-bg/20 text-sm py-3 outline-none resize-none transition-colors duration-200"
                />
              </div>

              <motion.button
                type="submit"
                disabled={!isFormValid || status === "sending"}
                whileHover={isFormValid && status === "idle" ? { scale: 1.02 } : {}}
                whileTap={isFormValid && status === "idle" ? { scale: 0.98 } : {}}
                animate={status === "success" ? { backgroundColor: "#4ade80" } : { backgroundColor: "" }}
                transition={{ duration: 0.4 }}
                className="mt-2 self-start inline-flex items-center gap-3 text-sm font-medium text-brand-dark bg-brand-bg px-8 py-4 hover:bg-brand-accent transition-colors duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
              >
                <AnimatePresence mode="wait">
                  {status === "success" ? (
                    <motion.span
                      key="success"
                      className="inline-flex items-center gap-3"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.2 }}
                    >
                      {t("sent")}
                      <svg width="14" height="11" viewBox="0 0 14 11" fill="none">
                        <path d="M1 5.5L5 9.5L13 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </motion.span>
                  ) : (
                    <motion.span
                      key="default"
                      className="inline-flex items-center gap-3"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.2 }}
                    >
                      {status === "sending" ? t("sending") : t("submit")}
                      <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                        <path d="M1 5H13M9 1L13 5L9 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>

              {status === "error" && (
                <p className="text-xs text-red-400">{t("error")}</p>
              )}
            </form>
          </FadeIn>
        </div>
      </Container>
    </Section>
  );
}
