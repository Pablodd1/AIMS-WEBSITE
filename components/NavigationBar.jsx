"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import styles from "./NavigationBar.module.css";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";

const UseScrollEffect = dynamic(() => import("@hooks/useMonitorScroll"), { ssr: false });

const navLinks = [
  { href: "/technology", label: "technology" },
  { href: "/articles", label: "articles" },
  { href: "/about-us", label: "aboutUs" },
  { href: "/customer-care", label: "customerCare" },
];

export default function Navigation_Bar({ lang = "en", dict = {} }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getLabel = (key) => {
    if (dict && dict[key]) return dict[key];
    const labels = {
      technology: lang === "es" ? "Tecnología" : "Technology",
      articles: lang === "es" ? "Artículos" : "Articles",
      aboutUs: lang === "es" ? "Nosotros" : "About Us",
      customerCare: lang === "es" ? "Soporte" : "Support",
      getStarted: lang === "es" ? "Comenzar" : "Get Started",
    };
    return labels[key] || key;
  };

  return (
    <header 
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled 
          ? "py-3" 
          : "py-5"
      )}
    >
      <nav 
        className={clsx(
          "mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-500",
          isScrolled 
            ? "max-w-6xl glass rounded-2xl" 
            : "max-w-7xl"
        )}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            href={`/${lang}`} 
            className="flex items-center gap-3 group"
            aria-label="AIMS - AI Medical Scriber Home"
          >
            <div className={clsx(
              "relative overflow-hidden transition-all duration-500",
              isScrolled ? "w-10 h-10" : "w-12 h-12"
            )}>
              <Image
                src="/logo.png"
                alt="AIMS - AI Medical Scriber"
                className="object-cover"
                fill
                sizes="(max-width: 768px) 40px, 48px"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-primary)]/20 to-[var(--accent-secondary)]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="flex flex-col">
              <span className={clsx(
                "font-extrabold tracking-tight transition-all duration-300",
                isScrolled ? "text-base text-[var(--text-primary)]" : "text-lg text-[var(--text-primary)]"
              )}>
                AIMS
              </span>
              <span className={clsx(
                "font-medium transition-all duration-300",
                isScrolled ? "text-[10px]" : "text-xs",
                "text-[var(--text-muted)]"
              )}>
                {lang === "es" ? "Inteligencia Médica" : "Medical Intelligence"}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={`/${lang}${link.href}`}
                  className="relative px-4 py-2 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-300 group"
                >
                  {getLabel(link.label)}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] group-hover:w-full transition-all duration-300 rounded-full" />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="flex items-center gap-3">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
            >
              <Link
                href={`/${lang}/get-started`}
                className="btn-primary text-sm"
              >
                {getLabel("getStarted")}
              </Link>
            </motion.div>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden relative w-10 h-10 flex items-center justify-center"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              <div className="flex flex-col gap-1.5 w-5">
                <span className={clsx(
                  "h-0.5 bg-[var(--text-primary)] transition-all duration-300",
                  isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
                )} />
                <span className={clsx(
                  "h-0.5 bg-[var(--text-primary)] transition-all duration-300",
                  isMobileMenuOpen ? "opacity-0" : ""
                )} />
                <span className={clsx(
                  "h-0.5 bg-[var(--text-primary)] transition-all duration-300",
                  isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                )} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-6 space-y-2">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={`/${lang}${link.href}`}
                      className="block py-3 px-4 text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--glass-bg)] rounded-xl transition-all duration-300"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {getLabel(link.label)}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.1 }}
                >
                  <Link
                    href={`/${lang}/get-started`}
                    className="block py-3 px-4 mt-4 text-center btn-primary"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {getLabel("getStarted")}
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <UseScrollEffect
        Id="navbar"
        className={styles.scroll_nav_bar}
        threshold={10}
      />
    </header>
  );
}
