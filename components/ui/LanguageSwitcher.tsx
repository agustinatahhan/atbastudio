"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/routing";
import { useTransition } from "react";

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const handleSwitch = (lang: "es" | "en") => {
    if (lang === locale) return;
    startTransition(() => {
      router.replace(pathname, { locale: lang });
    });
  };

  return (
    <div
      className="flex items-center bg-muted rounded-[6px] p-0.5 gap-0.5 transition-colors duration-300"
      role="group"
      aria-label="Language selector"
    >
      {(["es", "en"] as const).map((lang) => (
        <button
          key={lang}
          onClick={() => handleSwitch(lang)}
          aria-label={lang === "es" ? "Switch to Spanish" : "Switch to English"}
          className={`px-3 py-1 text-xs font-medium tracking-widest uppercase rounded-md transition-all duration-200 cursor-pointer font-body
        ${
          locale === lang
            ? "bg-white text-primary shadow-sm"
            : "text-muted-foreground hover:text-foreground"
        }`}
        >
          {lang.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
