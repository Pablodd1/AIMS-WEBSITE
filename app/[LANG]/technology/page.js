"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaServer, FaLock, FaBrain, FaMicrophone } from "react-icons/fa";

export default function TechnologyPage({ params }) {
  // Safe extraction without await since params might be passed as standard prop
  const lang = params?.LANG || "en";

  const features = [
    {
      icon: <FaBrain className="text-4xl text-blue-500" />,
      title: lang === "es" ? "Modelos de Lenguaje Médico" : "Medical Language Models",
      desc: lang === "es" ? "Entrenado en miles de textos clínicos para precisión inigualable." : "Trained on thousands of clinical texts for unmatched precision."
    },
    {
      icon: <FaMicrophone className="text-4xl text-blue-500" />,
      title: lang === "es" ? "Escucha Ambiental Avanzada" : "Advanced Ambient Listening",
      desc: lang === "es" ? "Capta matices, acentos y jerga médica en tiempo real." : "Captures nuances, accents, and medical jargon in real time."
    },
    {
      icon: <FaServer className="text-4xl text-blue-500" />,
      title: lang === "es" ? "Infraestructura de Alta Disponibilidad" : "High Availability Infrastructure",
      desc: lang === "es" ? "Arquitectura sin servidor asegurando un 99.9% de tiempo de actividad." : "Serverless architecture ensuring 99.9% uptime."
    },
    {
      icon: <FaLock className="text-4xl text-blue-500" />,
      title: lang === "es" ? "Cifrado Militar" : "Military-Grade Encryption",
      desc: lang === "es" ? "Estándares AES-256 en reposo y en tránsito (SOC2 / HIPAA)." : "AES-256 standards at rest and in transit (SOC2 / HIPAA)."
    }
  ];

  return (
    <main className="relative min-h-screen py-32 bg-slate-50">
      <div className="absolute inset-0 z-0 bg-grid-slate-100/[0.04] bg-[size:40px_40px]" />
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-700 font-bold text-xs uppercase tracking-widest mb-4"
        >
          {lang === "es" ? "Nuestra Tecnología" : "Our Technology"}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6"
        >
          {lang === "es" ? "Construido para Escalar" : "Built for Scale"}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-gray-600 max-w-2xl mx-auto mb-16"
        >
          {lang === "es"
            ? "Descubra el motor de inteligencia artificial que impulsa la próxima generación de documentación clínica y eficiencia operativa."
            : "Discover the artificial intelligence engine powering the next generation of clinical documentation and operational efficiency."}
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + (i * 0.1) }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-sm text-gray-500">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
