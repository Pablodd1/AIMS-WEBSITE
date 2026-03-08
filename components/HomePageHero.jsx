"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import PremiumButton from "@utils/PremiumButton";
import SecondaryButton from "@utils/SecondaryButton";
import Image from "next/image";
import { FaMicrophone, FaPlay, FaWaveSquare } from "react-icons/fa";

const heroContent = {
  en: {
    badge: "Smart EHR with Built-in AI",
    headline: "Your Practice,",
    headline2: "Transformed by Intelligence",
    description: "AIMS is your all-in-one EHR with native AI. Voice documentation, smart notes, automated billing, and seamless records — all in one platform.",
    cta: "Start Free",
    secondary: "See Features",
  },
  es: {
    badge: "EHR Inteligente con IA Nativa",
    headline: "Tu Clinica,",
    headline2: "Transformada por Inteligencia",
    description: "AIMS es tu EHR todo-en-uno con IA nativa. Documentacion por voz, notas inteligentes, facturacion automatizada y registros fluidos — todo en una plataforma.",
    cta: "Comenzar Gratis",
    secondary: "Ver Caracteristicas",
  },
};

const HomePageHero = ({ lang, dict }) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);

  const content = heroContent[lang] || heroContent.en;

  const heroVideoUrl = "/video/AIMS_Hero.mp4";
  const posterImage = "/images/smart_ehr_hero.png";

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden pt-20 pb-16 bg-[var(--bg-primary)]">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center z-10">
        
        {/* Left Column: Text & CTA */}
        <article className="flex flex-col items-start gap-5">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="glass-solid px-4 py-2 rounded-full border border-[var(--glass-border)]"
          >
            <span className="text-xs font-semibold tracking-wider uppercase text-[var(--text-primary)]">
              {content.badge}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.15] text-[var(--text-primary)]"
          >
            {content.headline}
            <span className="text-gradient block mt-1">{content.headline2}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base sm:text-lg text-[var(--text-secondary)] max-w-lg"
          >
            {content.description}
          </motion.p>

          <motion.footer
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap items-center gap-4 mt-2"
          >
            <PremiumButton label={content.cta} href={`/${lang}/get-started`} size="large" />
            <SecondaryButton label={content.secondary} href={`/${lang}/technology`} withArrow />
          </motion.footer>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-8 pt-6 border-t border-[var(--glass-border)] w-full"
          >
            <div>
              <p className="text-2xl font-bold text-[var(--text-primary)]">99.8%</p>
              <p className="text-xs text-[var(--text-muted)] mt-1">Accuracy</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-[var(--text-primary)]">15min</p>
              <p className="text-xs text-[var(--text-muted)] mt-1">Saved/Patient</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-[var(--text-primary)]">10k+</p>
              <p className="text-xs text-[var(--text-muted)] mt-1">Providers</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-[var(--success)]">$127K</p>
              <p className="text-xs text-[var(--text-muted)] mt-1">Savings/Year</p>
            </div>
          </motion.div>
        </article>

        {/* Right Column: Video + Mic Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
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
                <Image src={posterImage} alt="AIMS EHR" className="w-full h-full object-cover" width={800} height={600} priority />
                <button onClick={() => setIsVideoPlaying(true)} className="absolute inset-0 flex items-center justify-center bg-black/30">
                  <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center">
                    <FaPlay className="text-xl text-[var(--bg-primary)] ml-1" />
                  </div>
                </button>
              </div>
            )}

            {/* Microphone Badge */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
              <div className="glass-solid px-4 py-2 rounded-full border border-[var(--glass-border)] flex items-center gap-2">
                <FaMicrophone className="text-[var(--accent-primary)]" />
                <span className="text-xs font-medium text-[var(--text-primary)]">Voice Active</span>
              </div>
              <div className="glass-solid px-3 py-2 rounded-full border border-[var(--glass-border)]">
                <FaWaveSquare className="text-[var(--accent-primary)] text-sm" />
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default HomePageHero;
