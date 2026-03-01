"use client";
import { motion } from "framer-motion";
import PremiumButton from "@utils/PremiumButton";
import SecondaryButton from "@utils/SecondaryButton";
import { FaBrain, FaStethoscope, FaUserMd } from "react-icons/fa";
import Hero3DBackground from "./Hero3DBackground";

const HomePageHero = ({ lang, dict }) => {
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

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center flex flex-col items-center">
        <article className="flex flex-col items-center gap-5">
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
            className="flex flex-wrap items-center justify-center gap-4 w-full mt-4"
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
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-6 border-t border-gray-100/20 w-full"
          >
            <div className="text-center">
              <p className="text-2xl sm:text-3xl font-bold text-gray-900">99.8%</p>
              <p className="text-xs sm:text-sm text-gray-800">{lang === "es" ? "Precisión" : "Accuracy"}</p>
            </div>
            <div className="text-center">
              <p className="text-2xl sm:text-3xl font-bold text-gray-900">15min</p>
              <p className="text-xs sm:text-sm text-gray-800">{lang === "es" ? "Ahorrados/Paciente" : "Saved/Patient"}</p>
            </div>
            <div className="text-center">
              <p className="text-2xl sm:text-3xl font-bold text-gray-900">10k+</p>
              <p className="text-xs sm:text-sm text-gray-800">{lang === "es" ? "Proveedores" : "Providers"}</p>
            </div>
            <div className="text-center">
              <p className="text-2xl sm:text-3xl font-bold text-emerald-600">$127K</p>
              <p className="text-xs sm:text-sm text-gray-800">{lang === "es" ? "Ahorro/Año" : "Savings/Year"}</p>
            </div>
          </motion.div>

          {/* Medical Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="flex flex-wrap items-center justify-center gap-3 mt-4"
          >
            <span className="flex items-center gap-1.5 text-[10px] sm:text-xs text-gray-700 bg-gray-50/50 backdrop-blur-sm px-3 py-1.5 rounded-full">
              <FaStethoscope className="text-primary" />
              {lang === "es" ? "Compatible con HIPAA" : "HIPAA Compliant"}
            </span>
            <span className="flex items-center gap-1.5 text-[10px] sm:text-xs text-gray-700 bg-gray-50/50 backdrop-blur-sm px-3 py-1.5 rounded-full">
              <FaUserMd className="text-emerald-500" />
              {lang === "es" ? "Usado por médicos" : "Trusted by Doctors"}
            </span>
            <span className="flex items-center gap-1.5 text-[10px] sm:text-xs text-gray-700 bg-gray-50/50 backdrop-blur-sm px-3 py-1.5 rounded-full">
              <svg className="w-3 h-3 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              {lang === "es" ? "SOC 2 Tipo II" : "SOC 2 Type II"}
            </span>
          </motion.div>
        </article>
      </div>
    </section>
  );
};

export default HomePageHero;