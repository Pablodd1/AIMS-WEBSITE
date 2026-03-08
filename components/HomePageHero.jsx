"use client";
import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PremiumButton from "@utils/PremiumButton";
import SecondaryButton from "@utils/SecondaryButton";
import Image from "next/image";
import {
  FaWaveSquare,
  FaMicrophone,
  FaPlay,
  FaStethoscope,
  FaUserMd,
} from "react-icons/fa";

const heroContent = {
  en: {
    badge: "Smart EHR Platform",
    headline: "Your Practice,",
    headline2: "Transformed by Intelligence",
    description: "AIMS is your all-in-one EHR with built-in AI that listens, documents, and streamlines your entire clinic. No more separate scribes, billing software, or third-party tools.",
    cta: "Start Free",
    secondary: "See Features",
    statAccuracy: "99.8%",
    statTime: "15min",
    statProviders: "10k+",
    statSavings: "$127K",
  },
  es: {
    badge: "Plataforma EHR Inteligente",
    headline: "Tu Clinica,",
    headline2: "Transformada por Inteligencia",
    description: "AIMS es tu EHR todo-en-uno con IA integrada que escucha, documenta y optimiza toda tu clinica. No mas escribas separados, software de facturacion o herramientas de terceros.",
    cta: "Comenzar Gratis",
    secondary: "Ver Caracteristicas",
    statAccuracy: "99.8%",
    statTime: "15min",
    statProviders: "10k+",
    statSavings: "$127K",
  },
};

const HomePageHero = ({ lang, dict }) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);

  const content = useMemo(
    () => heroContent[lang] || heroContent.en,
    [lang],
  );

  const heroVideoUrl = "/video/AIMS_Hero.mp4";
  const posterImage = "/images/smart_ehr_hero.png";

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden pt-20 pb-16">
      {/* Subtle Background */}
      <div className="absolute inset-0 pointer-events-none bg-[var(--bg-primary)]">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[var(--bg-secondary)] via-transparent to-[var(--bg-primary)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center z-10">
        
        {/* Left Column: Text & CTA */}
        <article className="flex flex-col items-start gap-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="glass-solid px-4 py-2 rounded-full border border-[var(--glass-border)]"
          >
            <span className="text-[var(--text-primary)] text-xs font-semibold tracking-wider uppercase">
              {content.badge}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.15] tracking-tight text-[var(--text-primary)]"
          >
            {content.headline}
            <span className="text-gradient block mt-1">{content.headline2}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed max-w-lg"
          >
            {content.description}
          </motion.p>

          <motion.footer
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 mt-2"
          >
            <PremiumButton label={content.cta} href={`/${lang}/get-started`} size="large" glow={true} />
            <SecondaryButton
              label={content.secondary}
              href={`/${lang}/technology`}
              withArrow
              className="text-base font-medium"
            />
          </motion.footer>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-8 pt-6 border-t border-[var(--glass-border)] w-full"
          >
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">{content.statAccuracy}</p>
              <p className="text-xs text-[var(--text-muted)] mt-1">{lang === "es" ? "Precision" : "Accuracy"}</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">{content.statTime}</p>
              <p className="text-xs text-[var(--text-muted)] mt-1">{lang === "es" ? "Ahorrados/Paciente" : "Saved/Patient"}</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">{content.statProviders}</p>
              <p className="text-xs text-[var(--text-muted)] mt-1">{lang === "es" ? "Proveedores" : "Providers"}</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-[var(--success)]">{content.statSavings}</p>
              <p className="text-xs text-[var(--text-muted)] mt-1">{lang === "es" ? "Ahorro/Año" : "Savings/Year"}</p>
            </div>
          </motion.div>
        </article>

        {/* Right Column: Clean Video */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full"
        >
          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-[var(--glass-border)] bg-[var(--bg-secondary)]">
            
            {isVideoPlaying ? (
              <video
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                poster={posterImage}
              >
                <source src={heroVideoUrl} type="video/mp4" />
              </video>
            ) : (
              <div className="relative w-full h-full">
                <Image
                  src={posterImage}
                  alt="AIMS EHR Platform"
                  className="w-full h-full object-cover"
                  width={800}
                  height={600}
                  priority
                />
                <button
                  onClick={() => setIsVideoPlaying(true)}
                  className="absolute inset-0 flex items-center justify-center bg-black/30"
                >
                  <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center">
                    <FaPlay className="text-xl text-[var(--bg-primary)] ml-1" />
                  </div>
                </button>
              </div>
            )}

            {/* Simple badge */}
            <div className="absolute bottom-4 left-4 glass-solid px-4 py-2 rounded-lg border border-[var(--glass-border)]">
              <div className="flex items-center gap-2 text-xs font-medium text-[var(--text-primary)]">
                <FaStethoscope className="text-[var(--accent-primary)]" />
                {lang === "es" ? "EHR + IA Integrado" : "Built-in AI EHR"}
              </div>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default HomePageHero;
