"use client";
import React from "react";
import { motion } from "framer-motion";
import AIIcon from "@utils/AIIcon";
import PremiumButton from "@utils/PremiumButton";
import SecondaryButton from "@utils/SecondaryButton";
import Image from "next/image";
import { FaWaveSquare, FaMicrophone, FaBrain } from "react-icons/fa";

const HomePageHero = ({ lang, dict }) => {
  return (
    <section className="relative min-h-[85vh] flex flex-col items-center justify-center overflow-hidden pt-16 pb-12">
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
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center z-10">
        <article className="flex flex-col items-start gap-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="glass px-3 py-1.5 rounded-xl flex items-center gap-2 text-primary font-bold text-xs tracking-wider uppercase"
          >
            <FaBrain className="text-base animate-pulse" />
            Empowering Modern Clinics
          </motion.div>

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

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl text-clinical-gray leading-relaxed max-w-xl"
          >
            {dict.p}
          </motion.p>

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

          {/* Social Proof / Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="grid grid-cols-3 gap-6 mt-2 pt-6 border-t border-gray-100 w-full"
          >
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-gray-900">99%</p>
              <p className="text-xs sm:text-sm text-gray-500">Accuracy</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-gray-900">10k+</p>
              <p className="text-xs sm:text-sm text-gray-500">Clinics</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-gray-900">24/7</p>
              <p className="text-xs sm:text-sm text-gray-500">Support</p>
            </div>
          </motion.div>
        </article>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
          className="relative perspective-1000"
        >
          {/* Main Visual */}
          <figure className="relative w-full aspect-square rounded-3xl md:rounded-[4rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] border-8 md:border-[12px] border-white/50 backdrop-blur-3xl animate-floating">
            <Image
              src="/images/hero_banner.png"
              alt="AIMS Evolution"
              className="w-full h-full object-cover"
              width={800}
              height={800}
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-white/10" />

            {/* Overlay Glass Cards - Fixed width to prevent text cutoff */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute top-[20%] -left-4 sm:-left-8 glass-dark p-3 sm:p-4 rounded-xl sm:rounded-2xl flex items-center gap-2 sm:gap-3 text-white z-20 shadow-2xl w-[140px] sm:w-[180px]"
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0">
                <FaMicrophone className="text-sm sm:text-base" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[10px] sm:text-xs opacity-70 truncate">Voice Intake</p>
                <p className="text-xs sm:text-sm font-bold truncate">Recording...</p>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="absolute bottom-[20%] -right-4 sm:-right-8 glass p-3 sm:p-4 rounded-xl sm:rounded-2xl flex items-center gap-2 sm:gap-3 text-gray-900 z-20 shadow-2xl w-[140px] sm:w-[180px]"
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-emerald-500 flex items-center justify-center text-white flex-shrink-0">
                <FaWaveSquare className="text-sm sm:text-base" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[10px] sm:text-xs opacity-70 truncate">Health Scan</p>
                <p className="text-xs sm:text-sm font-bold truncate">98.4% Match</p>
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
