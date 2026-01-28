"use client";
import React from "react";
import { motion } from "framer-motion";
import {
    FaMicrophone, FaIdCard, FaFileAlt, FaClinicMedical,
    FaStethoscope, FaRobot, FaMicroscope, FaDna,
    FaNotesMedical, FaListUl, FaUserShield, FaVideo
} from "react-icons/fa";

const features = [
    {
        id: 1,
        title: "AI Voice Intake",
        description: "Fill tedious medical forms using natural voice. Fast, accurate, and completely hands-free.",
        icon: <FaMicrophone />,
    },
    {
        id: 2,
        title: "Smart OCR Scanner",
        description: "Instant data extraction from ID cards and insurance forms. Zero manual entry for front desk.",
        icon: <FaIdCard />,
    },
    {
        id: 3,
        title: "Clinical Abstractor",
        description: "Instant summary of intake forms for doctors. Get the critical patient context in seconds.",
        icon: <FaFileAlt />,
    },
    {
        id: 4,
        title: "Smart Clinic Kiosk",
        description: "Self-service check-in/out. Interactive portal for patient arrival and documentation.",
        icon: <FaClinicMedical />,
    },
    {
        id: 5,
        title: "Hands-Free EHR",
        description: "Navigate the electronic health record via voice commands. Keep your focus on the patient.",
        icon: <FaStethoscope />,
    },
    {
        id: 6,
        title: "MD Expert Chatbot",
        description: "Clinical reasoning for dosages, treatment plans, and evidence-based medication advice.",
        icon: <FaRobot />,
    },
    {
        id: 7,
        title: "Biomarker Interpreter",
        description: "Advanced analysis of blood work and medical documents. AI-powered clinical collaboration.",
        icon: <FaMicroscope />,
    },
    {
        id: 8,
        title: "DNA Analysis",
        description: "Integrate genetic markers and DNA results into the EHR for precision medicine.",
        icon: <FaDna />,
    },
    {
        id: 9,
        title: "AI Medical Scriber",
        description: "Ambient listening during consultations translates to perfect, structured clinical notes.",
        icon: <FaNotesMedical />,
    },
    {
        id: 10,
        title: "DX & CPT Extraction",
        description: "Automatically identify Diagnosis and CPT codes from clinical documentation for billing.",
        icon: <FaListUl />,
    },
    {
        id: 11,
        title: "Auto-Documenter",
        description: "Front-desk documentation required for insurance and compliance generated instantly.",
        icon: <FaUserShield />,
    },
    {
        id: 12,
        title: "Telemedicine Scriber",
        description: "Real-time transcription for virtual visits with automatic SOAP note generation.",
        icon: <FaVideo />,
    }
];

const PremiumAIFeatures = () => {
    return (
        <section id="solutions" className="compact-section bg-clinical-bg relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                <div className="absolute top-10 left-10 w-48 h-48 bg-primary rounded-full blur-[100px]" />
                <div className="absolute bottom-10 right-10 w-48 h-48 bg-primary rounded-full blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                <div className="text-center mb-8">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-2"
                    >
                        The AIMS Clinical Suite
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-2 tracking-tight text-gray-900 px-4"
                    >
                        Smarter <span className="text-gradient">Clinical Intelligence</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="max-w-xl mx-auto text-clinical-gray text-xs sm:text-sm md:text-base px-4 font-medium"
                    >
                        One platform to replace fragmented workflows. Designed for high-volume practices.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.03 }}
                            className="glass p-5 rounded-2xl hover-lift group relative overflow-hidden"
                        >
                            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary text-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                                {feature.icon}
                            </div>
                            <h3 className="text-base font-bold mb-2 text-gray-900 group-hover:text-primary transition-colors">
                                {feature.title}
                            </h3>
                            <p className="text-clinical-gray leading-snug text-xs font-medium">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PremiumAIFeatures;
