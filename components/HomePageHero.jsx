"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AIIcon from "@utils/AIIcon";
import PremiumButton from "@utils/PremiumButton";
import SecondaryButton from "@utils/SecondaryButton";
import Image from "next/image";
import { FaWaveSquare, FaMicrophone, FaBrain, FaPlay, FaPause, FaVolumeUp, FaStethoscope, FaUserMd } from "react-icons/fa";
import Hero3DBackground from "./Hero3DBackground";

const HomePageHero = ({ lang, dict }) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  // Video URLs - using medical-focused stock footage or demo video
  const heroVideoUrl = "/video/hero-demo.mp4"; // Placeholder - replace with actual video
  const posterImage = "/images/hero_banner.png";

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden pt-16 pb-12">
      <Hero3DBackground />
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 w-full h-full pointer-events-none overflow-hidden">
        <motion.div
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-sky-500/10 rounded-full blur-[120px]"
        />
        {/* Additional medical-themed gradient */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-gradient-radial from-emerald-500/5 via-transparent to-transparent rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center z-10">
        <article className="flex flex-col items-start gap-5">
          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="glass px-3 py-1.5 rounded-xl flex items-center gap-2 text-primary font-bold text-xs tracking-wider uppercase"
          >
            <FaBrain className="text-base animate-pulse" />
            {lang === "es" ? "Empoderando Clínicas Modernas" : "Empowering Modern Clinics"}
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight text-gray-900"
          >
            {dict.h1?.split("~s").map((x, i) => (
              <span key={i} className={i === 1 ? "text-gradient block" : i === 2 ? "text-gray-400" : ""}>
                {x}
              </span>
            ))}
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl text-clinical-gray leading-relaxed max-w-xl"
          >
            {dict.p}
          </motion.p>

          {/* CTA Buttons */}
          <motion.footer
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap items-center gap-4"
          >
            <PremiumButton label={dict.btn1} href={`/${lang}/get-started`} size="large" />
            <SecondaryButton
              label={dict.btn2}
              href={`/${lang}/technology`}
              withArrow
              className="text-base sm:text-lg font-semibold"
            />
          </motion.footer>

          {/* Enhanced Social Proof / Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-2 pt-6 border-t border-gray-100 w-full"
          >
            <div className="text-center sm:text-left">
              <p className="text-2xl sm:text-3xl font-bold text-gray-900">99.8%</p>
              <p className="text-xs sm:text-sm text-gray-500">{lang === "es" ? "Precisión" : "Accuracy"}</p>
            </div>
            <div className="text-center sm:text-left">
              <p className="text-2xl sm:text-3xl font-bold text-gray-900">15min</p>
              <p className="text-xs sm:text-sm text-gray-500">{lang === "es" ? "Ahorrados/Paciente" : "Saved/Patient"}</p>
            </div>
            <div className="text-center sm:text-left">
              <p className="text-2xl sm:text-3xl font-bold text-gray-900">10k+</p>
              <p className="text-xs sm:text-sm text-gray-500">{lang === "es" ? "Proveedores" : "Providers"}</p>
            </div>
            <div className="text-center sm:text-left">
              <p className="text-2xl sm:text-3xl font-bold text-emerald-600">$127K</p>
              <p className="text-xs sm:text-sm text-gray-500">{lang === "es" ? "Ahorro/Año" : "Savings/Year"}</p>
            </div>
          </motion.div>

          {/* Medical Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="flex flex-wrap items-center gap-3 mt-2"
          >
            <span className="flex items-center gap-1.5 text-[10px] sm:text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded-full">
              <FaStethoscope className="text-primary" />
              {lang === "es" ? "Compatible con HIPAA" : "HIPAA Compliant"}
            </span>
            <span className="flex items-center gap-1.5 text-[10px] sm:text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded-full">
              <FaUserMd className="text-emerald-500" />
              {lang === "es" ? "Usado por médicos" : "Trusted by Doctors"}
            </span>
            <span className="flex items-center gap-1.5 text-[10px] sm:text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded-full">
              <svg className="w-3 h-3 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              {lang === "es" ? "SOC 2 Tipo II" : "SOC 2 Type II"}
            </span>
          </motion.div>
        </article>

        {/* Video/Image Hero Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
          className="relative perspective-1000"
        >
          {/* Main Visual Container */}
          <figure className="relative w-full aspect-square rounded-3xl md:rounded-[4rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] border-8 md:border-[12px] border-white/50 backdrop-blur-3xl">

            {/* Video Player */}
            <AnimatePresence mode="wait">
              {isVideoPlaying ? (
                <motion.video
                  key="video"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                  poster={posterImage}
                >
                  <source src={heroVideoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
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
                    alt={lang === "es" ? "AIMS - Plataforma de Documentación Médica con IA" : "AIMS - AI Medical Documentation Platform"}
                    className="w-full h-full object-cover"
                    width={800}
                    height={800}
                    priority
                  />

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors cursor-pointer group"
                    onClick={() => setIsVideoPlaying(true)}>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-2xl group-hover:bg-white transition-colors"
                    >
                      <FaPlay className="text-2xl sm:text-3xl text-primary ml-1" />
                    </motion.div>

                    {/* Video Label */}
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 glass-dark px-4 py-2 rounded-full flex items-center gap-2 text-white">
                      <FaPlay className="text-xs" />
                      <span className="text-xs font-semibold">
                        {lang === "es" ? "Ver demo de 60 segundos" : "Watch 60s Demo"}
                      </span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-white/10 pointer-events-none" />

            {/* Floating UI Elements - Left */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute top-[15%] -left-4 sm:-left-8 glass-dark p-3 sm:p-4 rounded-xl sm:rounded-2xl flex items-center gap-2 sm:gap-3 text-white z-20 shadow-2xl w-[150px] sm:w-[200px]"
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0">
                <FaMicrophone className="text-sm sm:text-base" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[10px] sm:text-xs opacity-70 truncate">{lang === "es" ? "Dictado por Voz" : "Voice Dictation"}</p>
                <p className="text-xs sm:text-sm font-bold truncate text-emerald-300">{lang === "es" ? "Grabando..." : "Recording..."}</p>
              </div>
            </motion.div>

            {/* Floating UI Elements - Right */}
            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="absolute bottom-[20%] -right-4 sm:-right-8 glass p-3 sm:p-4 rounded-xl sm:rounded-2xl flex items-center gap-2 sm:gap-3 text-gray-900 z-20 shadow-2xl w-[150px] sm:w-[200px]"
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-emerald-500 flex items-center justify-center text-white flex-shrink-0">
                <FaWaveSquare className="text-sm sm:text-base" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[10px] sm:text-xs opacity-70 truncate">{lang === "es" ? "Nota SOAP" : "SOAP Note"}</p>
                <p className="text-xs sm:text-sm font-bold truncate">{lang === "es" ? "Generada ✓" : "Generated ✓"}</p>
              </div>
            </motion.div>

            {/* Additional Floating Element - Top Right */}
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
              className="absolute top-[25%] -right-2 sm:-right-6 glass p-2 sm:p-3 rounded-xl shadow-xl z-20"
            >
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <FaBrain className="text-primary text-xs sm:text-sm" />
                </div>
                <div>
                  <p className="text-[9px] sm:text-[10px] text-gray-500">AI Confidence</p>
                  <p className="text-xs sm:text-sm font-bold text-gray-900">98.7%</p>
                </div>
              </div>
            </motion.div>
          </figure>

          {/* Glow backdrop */}
          <div className="absolute -inset-10 bg-primary/20 rounded-full blur-[100px] -z-10" />
        </motion.div>
      </div>
    </section>
  );
};

export default HomePageHero;