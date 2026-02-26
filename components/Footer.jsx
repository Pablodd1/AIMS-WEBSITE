import SecondaryButton from "@utils/SecondaryButton";
import { links, linksLegal } from "./assets/data/resources";
import { langNav } from "@dictionary/NAV/main";
import Switch_Lang from "@utils/SwitchLang";
import Image from "next/image";
import Link from "next/link";

export default async function Footer({ lang }) {
  const dict = await langNav(lang);

  return (
    <footer className="relative mt-20 border-t border-[var(--glass-border)]">
      {/* Gradient glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--accent-primary)]/5 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-1 lg:col-span-1">
            <Link href={`/${lang}`} className="flex items-center gap-3 mb-4">
              <div className="relative w-10 h-10 rounded-xl overflow-hidden">
                <Image
                  src="/logo.png"
                  alt="AIMS - AI Medical Scriber"
                  className="object-cover"
                  fill
                  sizes="40px"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-lg text-[var(--text-primary)]">AIMS</span>
                <span className="text-xs text-[var(--text-muted)]">
                  {lang === "es" ? "Inteligencia Médica" : "Medical Intelligence"}
                </span>
              </div>
            </Link>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
              {lang === "es" 
                ? "Plataforma de documentación médica con IA para proveedores de salud. Automatiza notas SOAP, facturación y codificación."
                : "AI-powered medical documentation platform for healthcare providers. Automate SOAP notes, billing, and coding."}
            </p>
            <div className="flex items-center gap-3">
              <a 
                href="https://linkedin.com/company/aimedicalscriber" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[var(--glass-bg)] border border-[var(--glass-border)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--accent-primary)] hover:border-[var(--accent-primary)] transition-all duration-300"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a 
                href="https://twitter.com/aims_health" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[var(--glass-bg)] border border-[var(--glass-border)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--accent-primary)] hover:border-[var(--accent-primary)] transition-all duration-300"
                aria-label="Twitter"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a 
                href="https://youtube.com/@aimedicalscriber" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[var(--glass-bg)] border border-[var(--glass-border)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--accent-primary)] hover:border-[var(--accent-primary)] transition-all duration-300"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-semibold text-[var(--text-primary)] mb-4">
              {lang === "es" ? "Producto" : "Product"}
            </h4>
            <ul className="space-y-2">
              {links.slice(0, 4).map((link) => (
                <li key={link.label}>
                  <Link
                    href={`/${lang}${link.href}`}
                    className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors duration-200"
                  >
                    {dict[link.label]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-[var(--text-primary)] mb-4">
              {lang === "es" ? "Empresa" : "Company"}
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href={`/${lang}/about-us`}
                  className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors duration-200"
                >
                  {lang === "es" ? "Nosotros" : "About Us"}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${lang}/articles`}
                  className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors duration-200"
                >
                  {lang === "es" ? "Artículos" : "Articles"}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${lang}/customer-care`}
                  className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors duration-200"
                >
                  {lang === "es" ? "Contacto" : "Contact"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Language */}
          <div>
            <h4 className="font-semibold text-[var(--text-primary)] mb-4">
              {lang === "es" ? "Legal" : "Legal"}
            </h4>
            <ul className="space-y-2 mb-6">
              {linksLegal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-2">
              <span className="text-sm text-[var(--text-muted)]">
                {lang === "es" ? "Idioma:" : "Language:"}
              </span>
              <Switch_Lang lang={lang} />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[var(--glass-border)]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-[var(--text-muted)]">
              © {new Date().getFullYear()} AIMS - AI Medical Scriber. {lang === "es" ? "Todos los derechos reservados." : "All rights reserved."}
            </p>
            <div className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-[var(--success)]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                HIPAA {lang === "es" ? "Compatible" : "Compliant"}
              </span>
              <span className="hidden sm:inline">•</span>
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-[var(--accent-primary)]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                SOC 2 Type II
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
