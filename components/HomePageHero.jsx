"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PremiumButton from "@utils/PremiumButton";
import SecondaryButton from "@utils/SecondaryButton";
import Image from "next/image";
import { FaWaveSquare, FaMicrophone, FaBrain, FaPlay, FaStethoscope, FaUserMd } from "react-icons/fa";

const HomePageHero = ({ lang, dict }) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true); // Auto-play video
  
  // High-quality stock video representing Doctor + AI Voice Tech
  // (Using a reliable Pexels stock video of a doctor consultation)
  const heroVideoUrl = "https://videos.pexels.com/video-files/7579896/7579896-hd_1920_1080_25fps.mp4"; 
  const posterImage = "/images/smart_ehr_hero.png";

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden pt-20 pb-16">
      {/* Deep Space / Futuristic Background */}
      <div className="absolute inset-0 pointer-events-none bg-[var(--bg-primary)]">
        <motion.div
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[var(--accent-violet-glow)] rounded-full blur-[150px] opacity-40"
        />
        <motion.div
          animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[var(--accent-glow)] rounded-full blur-[150px] opacity-30"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
        
        {/* Left Column: Text & CTA */}
        <article className="flex flex-col items-start gap-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="glass-solid px-4 py-2 rounded-full flex items-center gap-3 border border-[var(--accent-primary)]/30"
          >
            <div className="flex gap-1 items-center">
              <span className="w-1.5 h-3 bg-[var(--accent-primary)] rounded-full animate-[pulse_1s_ease-in-out_infinite]" />
              <span className="w-1.5 h-4 bg-[var(--accent-tertiary)] rounded-full animate-[pulse_1.2s_ease-in-out_infinite_0.2s]" />
              <span className="w-1.5 h-2 bg-[var(--accent-secondary)] rounded-full animate-[pulse_0.8s_ease-in-out_infinite_0.4s]" />
            </div>
            <span className="text-[var(--text-primary)] font-bold text-xs tracking-wider uppercase">
              {lang === "es" ? "Reconocimiento de Voz con IA" : "AI Voice Recognition"}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.15] tracking-tight text-[var(--text-primary)]"
          >
            {dict.h1?.split("~s").map((x, i) => (
              <span key={i} className={i === 1 ? "text-gradient block my-2" : i === 2 ? "text-[var(--text-muted)]" : ""}>
                {x}
              </span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed max-w-xl"
          >
            {dict.p}
          </motion.p>

          <motion.footer
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap items-center gap-4 mt-2"
          >
            <PremiumButton label={dict.btn1} href={`/${lang}/get-started`} size="large" glow={true} />
            <SecondaryButton
              label={dict.btn2}
              href={`/${lang}/technology`}
              withArrow
              className="text-base sm:text-lg font-semibold text-[var(--text-secondary)] hover:text-[var(--accent-primary)]"
            />
          </motion.footer>

          {/* Social Proof Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-8 pt-8 border-t border-[var(--glass-border)] w-full"
          >
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">99.8%</p>
              <p className="text-xs sm:text-sm text-[var(--text-muted)] mt-1">{lang === "es" ? "Precisión" : "Accuracy"}</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">15min</p>
              <p className="text-xs sm:text-sm text-[var(--text-muted)] mt-1">{lang === "es" ? "Ahorrados/Paciente" : "Saved/Patient"}</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">10k+</p>
              <p className="text-xs sm:text-sm text-[var(--text-muted)] mt-1">{lang === "es" ? "Proveedores" : "Providers"}</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-[var(--success)]">$127K</p>
              <p className="text-xs sm:text-sm text-[var(--text-muted)] mt-1">{lang === "es" ? "Ahorro/Año" : "Savings/Year"}</p>
            </div>
          </motion.div>
        </article>

        {/* Right Column: AI Translation Tech & Video */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
          className="relative perspective-1000 w-full"
        >
          {/* Main Video Container */}
          <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-[0_0_50px_-15px_rgba(0,212,255,0.3)] border border-[var(--glass-border)] bg-[var(--bg-secondary)] group">
            
            <AnimatePresence mode="wait">
              {isVideoPlaying ? (
                <motion.video
                  key="video"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="w-full h-full object-cover opacity-80 mix-blend-screen"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src={heroVideoUrl} type="video/mp4" />
                </motion.video>
              ) : (
                <motion.div
                  key="image"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={posterImage}
                    alt={lang === "es" ? "AIMS IA Documentación" : "AIMS AI Documentation"}
                    className="w-full h-full object-cover opacity-60"
                    width={800}
                    height={600}
                    priority
                  />
                  
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/20 transition-colors cursor-pointer"
                       onClick={() => setIsVideoPlaying(true)}>
                    <div className="w-20 h-20 rounded-full bg-[var(--accent-primary)]/80 backdrop-blur-md flex items-center justify-center shadow-[0_0_30px_var(--accent-primary)] group-hover:scale-110 transition-transform">
                      <FaPlay className="text-2xl text-[#030712] ml-1" />
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* AI Audio Translation Overlay */}
            <div className="absolute bottom-6 left-6 right-6 glass-solid rounded-2xl p-4 border border-[var(--accent-primary)]/30 shadow-lg transform transition-transform group-hover:-translate-y-2">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[var(--accent-primary)]/10 flex items-center justify-center">
                    <FaMicrophone className="text-[var(--accent-primary)] text-xl" />
                  </div>
                  <div>
                    <p className="text-[var(--text-primary)] text-sm font-semibold flex items-center gap-2">
                      {lang === "es" ? "Traduciendo y Transcribiendo..." : "Translating & Transcribing..."}
                    </p>
                    <p className="text-[var(--text-muted)] text-xs mt-0.5">
                      {lang === "es" ? "Inglés → Español (Médico)" : "English → Spanish (Medical)"}
                    </p>
                  </div>
                </div>
                
                {/* Simulated Audio Waveform */}
                <div className="flex items-center gap-1.5 h-8">
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{ height: ["20%", "100%", "20%"] }}
                      transition={{ 
                        duration: 1, 
                        repeat: Infinity, 
                        delay: i * 0.1,
                        ease: "easeInOut" 
                      }}
                      className="w-1.5 bg-[var(--accent-primary)] rounded-full"
                    />
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Floating Trust Badges */}
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-6 top-10 glass-solid px-4 py-3 rounded-2xl border border-[var(--glass-border)] shadow-xl hidden md:flex items-center gap-3"
          >
            <div className="bg-[var(--accent-violet-glow)] p-2 rounded-lg">
              <FaUserMd className="text-[var(--text-primary)] text-lg" />
            </div>
            <div>
              <p className="text-xs font-bold text-[var(--text-primary)]">{lang === "es" ? "IA Médica" : "Medical AI"}</p>
              <p className="text-[10px] text-[var(--text-muted)]">HIPAA Compliant</p>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default HomePageHero;
