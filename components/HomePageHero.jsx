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
  FaLanguage,
  FaNotesMedical,
} from "react-icons/fa";

const heroTranscriptMoments = {
  en: [
    {
      stage: "Live Intake",
      speaker: "Patient audio",
      source: '"I have had chest tightness and shortness of breath for two days."',
      targetLabel: "Clinical translation",
      target: "Chest tightness and dyspnea x48 hours. Prioritize cardiopulmonary review.",
    },
    {
      stage: "Bilingual Translation",
      speaker: "Spanish output",
      source: '"Dolor de garganta, fiebre y tos desde ayer por la noche."',
      targetLabel: "Doctor-ready summary",
      target: "Sore throat, fever, and cough since last night. Viral URI workflow suggested.",
    },
    {
      stage: "SOAP Draft",
      speaker: "Ambient capture",
      source: '"Medication refill requested. Blood pressure has been stable at home."',
      targetLabel: "Chart note",
      target: "Medication refill visit. Home BP stable. Continue current regimen and monitor.",
    },
  ],
  es: [
    {
      stage: "Captura en Vivo",
      speaker: "Audio del paciente",
      source: '"Tengo opresion en el pecho y falta de aire desde hace dos dias."',
      targetLabel: "Traduccion clinica",
      target: "Opresion toracica y disnea por 48 horas. Priorizar evaluacion cardiopulmonar.",
    },
    {
      stage: "Traduccion Bilingue",
      speaker: "Salida en ingles",
      source: '"Sore throat, fever, and cough since last night."',
      targetLabel: "Resumen para el medico",
      target: "Dolor de garganta, fiebre y tos desde anoche. Flujo de URI viral sugerido.",
    },
    {
      stage: "Borrador SOAP",
      speaker: "Captura ambiental",
      source: '"Solicita resurtido de medicamento. Presion arterial estable en casa."',
      targetLabel: "Nota para expediente",
      target: "Consulta para resurtido. PA estable en casa. Continuar regimen actual y vigilar.",
    },
  ],
};

const HomePageHero = ({ lang, dict }) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [activeMoment, setActiveMoment] = useState(0);

  const transcriptMoments = useMemo(
    () => heroTranscriptMoments[lang] || heroTranscriptMoments.en,
    [lang],
  );

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveMoment((current) => (current + 1) % transcriptMoments.length);
    }, 3200);

    return () => window.clearInterval(timer);
  }, [transcriptMoments.length]);

  const heroVideoUrl = "/video/AIMS_Hero.mp4";
  const posterImage = "/images/smart_ehr_hero.png";
  const currentMoment = transcriptMoments[activeMoment];
  const waveformBars = [28, 52, 70, 44, 82, 62, 36, 76, 48];

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
              {lang === "es" ? "Voz Medica + Traduccion IA" : "Medical Voice + AI Translation"}
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
          <div className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden shadow-[0_0_50px_-15px_rgba(0,212,255,0.3)] border border-[var(--glass-border)] bg-[var(--bg-secondary)] group">
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
                  poster={posterImage}
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

            <div className="absolute inset-0 bg-gradient-to-b from-[rgba(3,7,18,0.18)] via-transparent to-[rgba(3,7,18,0.92)]" />

            <div className="absolute left-5 top-5 right-5 flex flex-wrap items-start justify-between gap-3">
              <div className="glass-solid rounded-full px-4 py-2 border border-[var(--glass-border-hover)] flex items-center gap-2 text-xs font-semibold text-[var(--text-primary)]">
                <FaWaveSquare className="text-[var(--accent-primary)]" />
                {lang === "es" ? "Captura de audio en tiempo real" : "Real-time audio capture"}
              </div>
              <div className="glass-solid rounded-full px-4 py-2 border border-[var(--glass-border)] flex items-center gap-2 text-xs font-semibold text-[var(--text-primary)]">
                <FaStethoscope className="text-[var(--accent-secondary)]" />
                {lang === "es" ? "Flujo para medicos" : "Doctor workflow"}
              </div>
            </div>

            <div className="absolute inset-x-5 bottom-5 grid gap-4 lg:grid-cols-[1.1fr_0.95fr]">
              <div className="glass-solid rounded-[1.4rem] border border-[var(--glass-border-hover)] p-4 shadow-lg transition-transform duration-300 group-hover:-translate-y-1">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[rgba(0,212,255,0.12)]">
                      <FaMicrophone className="text-lg text-[var(--accent-primary)]" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--text-muted)]">
                        {currentMoment.stage}
                      </p>
                      <p className="mt-1 text-sm font-semibold text-[var(--text-primary)]">
                        {lang === "es" ? "Audio del paciente detectado" : "Patient audio detected"}
                      </p>
                    </div>
                  </div>
                  <div className="rounded-full border border-[var(--glass-border)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--accent-primary)]">
                    {currentMoment.speaker}
                  </div>
                </div>

                <div className="mt-4 flex h-12 items-end gap-1.5">
                  {waveformBars.map((bar, index) => (
                    <motion.span
                      key={bar + index}
                      animate={{ height: [`${Math.max(18, bar - 18)}%`, `${bar}%`, `${Math.max(22, bar - 10)}%`] }}
                      transition={{
                        duration: 1.2,
                        repeat: Infinity,
                        delay: index * 0.08,
                        ease: "easeInOut",
                      }}
                      className="block w-1.5 rounded-full bg-gradient-to-t from-[var(--accent-secondary)] to-[var(--accent-primary)]"
                    />
                  ))}
                </div>

                <AnimatePresence mode="wait">
                  <motion.p
                    key={currentMoment.source}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.28 }}
                    className="mt-4 text-sm leading-relaxed text-[var(--text-secondary)]"
                  >
                    {currentMoment.source}
                  </motion.p>
                </AnimatePresence>
              </div>

              <div className="glass-solid rounded-[1.4rem] border border-[var(--glass-border)] p-4 shadow-lg transition-transform duration-300 group-hover:-translate-y-1">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[rgba(124,58,237,0.14)]">
                      <FaLanguage className="text-lg text-[var(--accent-secondary)]" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--text-muted)]">
                        {currentMoment.targetLabel}
                      </p>
                      <p className="mt-1 text-sm font-semibold text-[var(--text-primary)]">
                        {lang === "es" ? "Salida medica lista para revisar" : "Doctor-ready translated output"}
                      </p>
                    </div>
                  </div>
                  <FaNotesMedical className="mt-1 text-base text-[var(--accent-primary)]" />
                </div>

                <AnimatePresence mode="wait">
                  <motion.p
                    key={currentMoment.target}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.28 }}
                    className="mt-4 text-sm leading-relaxed text-[var(--text-primary)]"
                  >
                    {currentMoment.target}
                  </motion.p>
                </AnimatePresence>

                <div className="mt-4 flex flex-wrap gap-2">
                  {[lang === "es" ? "SOAP listo" : "SOAP-ready", lang === "es" ? "Bilingue" : "Bilingual", lang === "es" ? "Revision del medico" : "Doctor review"].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[var(--glass-border)] bg-[rgba(255,255,255,0.03)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--text-secondary)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-6 top-10 glass-solid px-4 py-3 rounded-2xl border border-[var(--glass-border)] shadow-xl hidden md:flex items-center gap-3"
          >
            <div className="bg-[var(--accent-violet-glow)] p-2 rounded-lg">
              <FaUserMd className="text-[var(--text-primary)] text-lg" />
            </div>
            <div>
              <p className="text-xs font-bold text-[var(--text-primary)]">{lang === "es" ? "IA medica" : "Medical AI"}</p>
              <p className="text-[10px] text-[var(--text-muted)]">HIPAA Compliant</p>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default HomePageHero;
