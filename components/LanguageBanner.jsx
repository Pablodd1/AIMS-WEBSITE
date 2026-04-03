"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaLanguage, FaTimes } from "react-icons/fa";
import { useState } from "react";

export default function LanguageBanner({ lang }) {
  const pathname = usePathname();
  const switchLang = lang === "en" ? "es" : "en";
  const [isVisible, setIsVisible] = useState(true);

  const generateLangLink = () => {
    if (pathname === `/${lang}` || pathname === `/${lang}/`) {
      return `/${switchLang}`;
    }
    return pathname.replace(`/${lang}`, `/${switchLang}`);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm">
          <FaLanguage className="text-lg" />
          <span className="hidden sm:inline">
            {lang === "en"
              ? "This site is also available in Spanish"
              : "Este sitio también está disponible en inglés"}
          </span>
          <span className="sm:hidden">
            {lang === "en" ? "Available in Español" : "Disponible en English"}
          </span>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href={generateLangLink()}
            className="px-4 py-1 bg-white/20 hover:bg-white/30 rounded-full text-sm font-semibold transition-colors duration-300"
          >
            {lang === "en" ? "Cambiar a Español" : "Switch to English"}
          </Link>
          <button
            onClick={() => setIsVisible(false)}
            className="p-1 hover:bg-white/20 rounded-full transition-colors duration-300"
            aria-label="Close language banner"
          >
            <FaTimes className="text-sm" />
          </button>
        </div>
      </div>
    </div>
  );
}
