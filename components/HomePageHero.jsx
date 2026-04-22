"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import PremiumButton from "@utils/PremiumButton";
import SecondaryButton from "@utils/SecondaryButton";
import Link from "next/link";
import { FaBolt, FaShieldAlt, FaChartLine } from "react-icons/fa";
import SandboxModal from "@components/SandboxModal";

const heroContent = {
  en: {
    badge: "AI Medical Intelligence Platform",
    headline: "Command Your",
    headline2: "Clinical Practice",
    description: "The all-in-one platform where AI handles documentation, billing, and patient intelligence. Focus on medicine — let AIMS handle the rest.",
    cta: "Start Free",
    secondary: "See Features",
    liveDemo: "Live Demo",
    liveConsultation: "Live Consultation",
    simulateVisit: "Simulate Visit",
  },
  es: {
    badge: "Plataforma IA de Inteligencia Medica",
    headline: "Comanda Tu",
    headline2: "Practica Clinica",
    description: "La plataforma todo-en-uno donde la IA maneja documentacion, facturacion e inteligencia del paciente. Concentrate en la medicina — AIMS se encarga del resto.",
    cta: "Comenzar Gratis",
    secondary: "Ver Características",
    liveDemo: "Demo en Vivo",
    liveConsultation: "Consulta en Vivo",
    simulateVisit: "Simular Visita",
  },
};

const WaveformAnimation = () => {
  const [bars, setBars] = useState(Array(40).fill(0.3));

  useEffect(() => {
    const interval = setInterval(() => {
      setBars(prev => prev.map(() => 0.2 + Math.random() * 0.8));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center gap-[2px] h-8" aria-hidden="true">
      {bars.map((height, i) => (
        <motion.div
          key={i}
          className="w-[2px] rounded-full"
          style={{
            height: `${height * 100}%`,
            background: `linear-gradient(to top, var(--accent-primary), var(--accent-secondary))`,
            opacity: 0.6 + height * 0.4,
          }}
          animate={{
            scaleY: height,
            opacity: 0.4 + height * 0.6,
          }}
          transition={{ duration: 0.15, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
};

const HomePageHero = ({ lang, dict }) => {
  const content = heroContent[lang] || heroContent.en;
  const [sandboxOpen, setSandboxOpen] = useState(false);

  return (
    <section className="relative min-h-[95vh] flex flex-col items-center justify-center overflow-hidden pt-20 pb-16 bg-[var(--bg-primary)]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--accent-primary)]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[var(--accent-secondary)]/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 z-10 w-full">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 glass-solid px-4 py-2 rounded-full border border-[var(--glass-border)] mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[var(--accent-primary)] animate-pulse" />
            <span className="text-xs font-semibold tracking-wider uppercase text-[var(--text-primary)]">
              {content.badge}
            </span>
          </motion.div>

          <SandboxModal open={sandboxOpen} onClose={() => setSandboxOpen(false)} />

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-[var(--text-primary)] mb-4"
          >
            {content.headline}
            <span className="text-gradient block mt-1">{content.headline2}</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="my-6 max-w-md mx-auto"
          >
            <WaveformAnimation />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg text-[var(--text-secondary)] max-w-2xl mx-auto mb-8"
          >
            {content.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-10"
          >
            <PremiumButton label={content.cta} href={`/${lang}/get-started`} size="large" />
            <Link href={`/${lang}/virtual-front-desk`} className="px-4 py-2 rounded-md font-semibold text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-md hover:shadow-lg mr-2" aria-label="Live Consultation">
              {content.liveConsultation}
            </Link>
            <button onClick={() => setSandboxOpen(true)} className="px-4 py-2 rounded-md font-semibold text-white bg-gradient-to-r from-cyan-500 to-teal-500 shadow-md hover:shadow-lg" aria-label="Simulate Visit">
              {content.simulateVisit}
            </button>
            <SecondaryButton label={content.secondary} href={`/${lang}/technology`} withArrow />
            <Link href={`/${lang}/get-started`} className="px-4 py-2 rounded-md font-semibold text-white bg-gradient-to-r from-green-500 to-teal-500 shadow-md hover:shadow-lg" aria-label="Live Demo">
              {content.liveDemo}
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-2xl mx-auto mb-8"
          >
            {[
              { value: "99.8%", label: "Accuracy", icon: <FaShieldAlt /> },
              { value: "15min", label: "Saved/Patient", icon: <FaBolt /> },
              { value: "10k+", label: "Providers", icon: <FaChartLine /> },
              { value: "$127K", label: "Savings/Year", icon: <FaBolt /> }
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="text-center"
              >
                <p className="text-2xl sm:text-3xl font-black text-gradient mb-1">{stat.value}</p>
                <p className="text-xs text-[var(--text-muted)] font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomePageHero;
