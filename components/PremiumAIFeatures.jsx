"use client";
import React from "react";
import { motion } from "framer-motion";
import {
    FaMicrophone, FaIdCard, FaFileAlt, FaClinicMedical,
    FaStethoscope, FaRobot, FaMicroscope, FaDna,
    FaNotesMedical, FaListUl, FaUserShield, FaVideo,
    FaHeartbeat, FaBrain, FaChartPie
} from "react-icons/fa";

const categories = {
    clinical: {
        title: "Clinical Documentation",
        subtitle: "Automate notes, capture every detail",
        color: "from-cyan-500 to-blue-500",
        features: [
            {
                id: 1,
                title: "AI Medical Scriber",
                description: "Ambient listening during consultations translates to perfect, structured clinical notes.",
                icon: <FaNotesMedical />,
                size: "large"
            },
            {
                id: 2,
                title: "AI Voice Intake",
                description: "Fill medical forms using natural voice. Hands-free.",
                icon: <FaMicrophone />,
                size: "small"
            },
            {
                id: 3,
                title: "Telemedicine Scriber",
                description: "Real-time transcription for virtual visits with SOAP notes.",
                icon: <FaVideo />,
                size: "small"
            },
            {
                id: 4,
                title: "Auto-Documenter",
                description: "Insurance and compliance docs generated instantly.",
                icon: <FaUserShield />,
                size: "small"
            }
        ]
    },
    diagnostic: {
        title: "Diagnostic Intelligence",
        subtitle: "Make better decisions with integrated data",
        color: "from-violet-500 to-purple-500",
        features: [
            {
                id: 5,
                title: "MD Expert Chatbot",
                description: "Clinical reasoning for dosages, treatment plans, and evidence-based medication advice.",
                icon: <FaRobot />,
                size: "large"
            },
            {
                id: 6,
                title: "Biomarker Interpreter",
                description: "Advanced analysis of blood work and medical documents.",
                icon: <FaMicroscope />,
                size: "small"
            },
            {
                id: 7,
                title: "DNA Analysis",
                description: "Make better decisions with integrated genomic data.",
                icon: <FaDna />,
                size: "small"
            },
            {
                id: 8,
                title: "Vital Signs Integration",
                description: "Real-time patient monitoring data at your fingertips.",
                icon: <FaHeartbeat />,
                size: "small"
            }
        ]
    },
    operations: {
        title: "Practice Operations",
        subtitle: "Streamline your entire clinic workflow",
        color: "from-emerald-500 to-teal-500",
        features: [
            {
                id: 9,
                title: "Smart Clinic Kiosk",
                description: "Self-service check-in/out. Interactive portal for patient arrival.",
                icon: <FaClinicMedical />,
                size: "large"
            },
            {
                id: 10,
                title: "DX & CPT Extraction",
                description: "Auto-identify billing codes from clinical documentation.",
                icon: <FaListUl />,
                size: "small"
            },
            {
                id: 11,
                title: "Smart OCR Scanner",
                description: "Instant data extraction from IDs and insurance forms.",
                icon: <FaIdCard />,
                size: "small"
            },
            {
                id: 12,
                title: "Clinical Abstractor",
                description: "Instant summary of intake forms for doctors.",
                icon: <FaFileAlt />,
                size: "small"
            }
        ]
    }
};

const BentoCard = ({ feature, categoryColor, index }) => {
    const isLarge = feature.size === "large";

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className={`bento-card group ${isLarge ? "bento-card-large" : ""} ${isLarge ? "p-6" : "p-5"} flex flex-col`}
        >
            <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${categoryColor} flex items-center justify-center text-white text-lg mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
            </div>
            <h3 className={`${isLarge ? "text-lg" : "text-base"} font-bold mb-2 text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors`}>
                {feature.title}
            </h3>
            <p className="text-[var(--text-secondary)] text-sm leading-relaxed flex-grow">
                {feature.description}
            </p>
            {isLarge && (
                <div className="mt-4 pt-4 border-t border-[var(--glass-border)]">
                    <div className="flex items-center gap-2 text-xs text-[var(--accent-primary)]">
                        <FaBrain className="text-sm" />
                        <span className="font-semibold">AI-Powered</span>
                    </div>
                </div>
            )}
        </motion.div>
    );
};

const PremiumAIFeatures = () => {
    return (
        <section id="solutions" className="compact-section bg-[var(--bg-primary)] relative overflow-hidden">
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="absolute top-10 left-10 w-48 h-48 bg-[var(--accent-primary)] rounded-full blur-[100px]" />
                <div className="absolute bottom-10 right-10 w-48 h-48 bg-[var(--accent-secondary)] rounded-full blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                <div className="text-center mb-12">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-1.5 rounded-full bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] text-xs font-bold uppercase tracking-wider mb-4"
                    >
                        The AIMS Command Center
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-3 tracking-tight text-[var(--text-primary)]"
                    >
                        Everything You Need, <span className="text-gradient">Nothing You Don't</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="max-w-2xl mx-auto text-[var(--text-secondary)] text-base sm:text-lg px-4"
                    >
                        One platform to replace fragmented workflows. Three pillars of clinical intelligence.
                    </motion.p>
                </div>

                {Object.entries(categories).map(([key, category], catIndex) => (
                    <div key={key} className="mb-12 last:mb-0">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-4 mb-6"
                        >
                            <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center text-white`}>
                                {catIndex === 0 ? <FaNotesMedical /> : catIndex === 1 ? <FaBrain /> : <FaChartPie />}
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-[var(--text-primary)]">{category.title}</h3>
                                <p className="text-sm text-[var(--text-muted)]">{category.subtitle}</p>
                            </div>
                        </motion.div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {category.features.map((feature, index) => (
                                <BentoCard
                                    key={feature.id}
                                    feature={feature}
                                    categoryColor={category.color}
                                    index={index}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PremiumAIFeatures;
