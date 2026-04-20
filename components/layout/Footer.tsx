import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { RiInstagramLine, RiLinkedinLine, RiGithubLine } from "react-icons/ri";
import Image from "next/image";
export function Footer() {
  const t = useTranslations("Footer");
  const navT = useTranslations("Nav");

  return (
    <footer className="mesh-gradient-bg  border-secondary/20 pt-16 pb-10">
      <div className="container-site">
        <div className="flex flex-row justify-between gap-10 mb-12">
          {/* Brand */}
          <div className="">
            <Image
              src="/logo/logo-footer.png"
              alt="Logo ATBA"
              width={100}
              height={100}
            />
            <p className="text-sm text-secondary leading-relaxed max-w-xs mt-3">
              {t("tagline")}
            </p>
          </div>

          {/* Navigation */}
          {/* <div>
            <p className="text-xs font-bold tracking-widest uppercase text-secondary-400 mb-5">
              {t("navigation")}
            </p>
            <nav className="flex flex-col gap-3">
              <Link
                href="/"
                className="text-sm text-secondary-600 hover:text-primary transition-colors duration-200"
              >
                {navT("inicio")}
              </Link>
              <Link
                href="/proyectos"
                className="text-sm text-secondary-600 hover:text-primary transition-colors duration-200"
              >
                {t("projects")}
              </Link>
              <Link
                href="/contacto"
                className="text-sm text-secondary hover:text-primary transition-colors duration-200"
              >
                {t("contact")}
              </Link>
              <Link
                href="/sobre-nosotros"
                className="text-sm text-secondary hover:text-primary transition-colors duration-200"
              >
                {t("about")}
              </Link>
            </nav>
          </div> */}

          {/* Social */}
          <div>
            <p className="text-xs font-bold tracking-widest uppercase text-secondary mb-5 mr-62">
              {t("social")}
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-secondary hover:text-primary transition-colors duration-200"
              >
                <RiInstagramLine size={16} />
                {t("instagram")}
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-secondary hover:text-primary transition-colors duration-200"
              >
                <RiLinkedinLine size={16} />
                {t("linkedin")}
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-secondary hover:text-primary transition-colors duration-200"
              >
                <RiGithubLine size={16} />
                {t("github")}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-secondary/20 pt-8 flex flex-col md:flex-row justify-end items-center gap-3">
          <p className="text-xs text-secondary ">
            © {new Date().getFullYear()} ATBA Studio. {t("copyright")}
          </p>
          {/* <p className="text-xs text-secondary">Buenos Aires, Argentina</p> */}
        </div>
      </div>
    </footer>
  );
}
