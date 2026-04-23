import { useTranslations } from "next-intl";
import { RiInstagramLine } from "react-icons/ri";
import Image from "next/image";
import { FaLinkedinIn } from "react-icons/fa";

export function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="mesh-gradient-bg border-t border-secondary/10 pt-16 pb-10">
      <div className="container-site">
        {/* Main grid */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-10 mb-12">
          {/* Brand */}
          <div className="flex flex-col gap-4 max-w-xs">
            <Image
              src="/logo/logo-footer.png"
              alt="Logo ATBA"
              width={100}
              height={100}
            />
            <p className="text-sm text-secondary leading-relaxed">
              {t("tagline")}
            </p>
          </div>

          {/* Social */}
          <div className="flex flex-col gap-4">
            <p className="text-xs font-bold tracking-widest uppercase text-secondary">
              {t("social")}
            </p>
            <div className="flex flex-row gap-3">
              <a
                href="https://www.instagram.com/atbastudio/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full border border-secondary/25 flex items-center justify-center text-secondary hover:text-primary hover:border-primary transition-colors duration-200"
              >
                <RiInstagramLine size={18} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full border border-secondary/25 flex items-center justify-center text-secondary hover:text-primary hover:border-primary transition-colors duration-200"
              >
                <FaLinkedinIn size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-secondary/20 pt-8 flex justify-end">
          <p className="text-xs text-secondary">
            © {new Date().getFullYear()} ATBA Studio. {t("copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
}
