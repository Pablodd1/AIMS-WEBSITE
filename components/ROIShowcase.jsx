"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaDollarSign, FaClock, FaChartLine, FaUserMd, FaCheckCircle, FaVideo, FaArrowUp } from "react-icons/fa";

const ROIShowcase = () => {
    const roiData = [
        {
            metric: "$127K",
            label: "Annual Savings",
            description: "Per physician",
            icon: <FaDollarSign />,
            source: "MGMA 2024",
            growth: "+32%"
        },
        {
            metric: "15 min",
            label: "Time Saved",
            description: "Per patient visit",
            icon: <FaClock />,
            source: "Internal Data",
            growth: "+45%"
        },
        {
            metric: "3.2x",
            label: "First Year ROI",
            description: "Average return",
            icon: <FaChartLine />,
            source: "Healthcare IT",
            growth: "+28%"
        },
        {
            metric: "+4",
            label: "More Patients",
            description: "Daily capacity",
            icon: <FaUserMd />,
            source: "AMA 2024",
            growth: "+18%"
        }
    ];

    const useCases = [
        {
            title: "Primary Care",
            savings: "$180K/year",
            details: ["Eliminated 2 FTE scribes", "40% less overtime", "18% more patients"]
        },
        {
            title: "Telemedicine",
            savings: "$95K/year",
            details: ["100+ visits automated daily", "94% fewer errors", "Faster claim processing"]
        },
        {
            title: "Multi-Specialty",
            savings: "$340K/year",
            details: ["Voice-enabled EHR", "Auto DX/CPT extraction", "5-day faster billing"]
        }
    ];

    return (
        <section id="roi-results" className="compact-section bg-[var(--bg-primary)]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="text-center mb-12">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-1.5 rounded-full bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] font-bold text-xs uppercase tracking-wider mb-4"
                    >
                        Proven Results
                    </motion.span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--text-primary)] mb-3 px-4 leading-tight">
                        Measurable <span className="text-gradient">Financial ROI</span>
                    </h2>
                    <p className="text-sm sm:text-base text-[var(--text-secondary)] max-w-xl mx-auto px-4 font-medium">
                        Verified data from practices using AIMS clinical automation.
                    </p>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
                    {roiData.map((data, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.08 }}
                            className="glassmorphism-chart p-6 text-center hover-lift relative overflow-hidden group"
                        >
                            <div className="absolute top-3 right-3 flex items-center gap-1 text-emerald-400 text-xs font-bold">
                                <FaArrowUp className="text-[10px]" />
                                {data.growth}
                            </div>
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--accent-primary)]/10 to-[var(--accent-secondary)]/10 flex items-center justify-center text-[var(--accent-primary)] text-xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                {data.icon}
                            </div>
                            <h3 className="text-2xl sm:text-3xl font-black text-gradient mb-1 leading-none">{data.metric}</h3>
                            <p className="text-xs font-bold text-[var(--text-primary)] uppercase mb-1">{data.label}</p>
                            <p className="text-[10px] text-[var(--text-muted)] font-medium mb-3">{data.description}</p>
                            <span className="text-[8px] px-2 py-0.5 rounded-full bg-[var(--bg-deep-slate)] text-[var(--text-muted)] font-bold uppercase tracking-wider">
                                Source: {data.source}
                            </span>
                        </motion.div>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8">
                    {useCases.slice(0, 2).map((useCase, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.98 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="glassmorphism-chart p-6 relative"
                        >
                            <span className="absolute top-4 right-4 bg-emerald-500/20 text-emerald-400 text-xs font-bold px-3 py-1 rounded-full uppercase border border-emerald-500/20">
                                {useCase.savings} Savings
                            </span>
                            <h4 className="text-base font-bold text-[var(--text-primary)] mb-4">{useCase.title}</h4>
                            <ul className="space-y-2">
                                {useCase.details.map((detail, idx) => (
                                    <li key={idx} className="flex items-center gap-2 text-xs text-[var(--text-secondary)] font-medium">
                                        <FaCheckCircle className="text-emerald-400 flex-shrink-0" />
                                        {detail}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}

                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="glass p-6 relative overflow-hidden group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-primary)]/5 to-[var(--accent-secondary)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative z-10">
                            <div className="flex items-center gap-2 mb-3">
                                <FaVideo className="text-[var(--accent-primary)] text-sm" />
                                <span className="text-xs font-bold uppercase tracking-wider text-[var(--accent-primary)]">Telemedicine Elite</span>
                            </div>
                            <h4 className="text-base font-bold mb-2 text-[var(--text-primary)]">Real-time Virtual Visits</h4>
                            <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-4">
                                Live transcription and automated SOAP notes for Zoom, Teams, & Doxy.me.
                            </p>
                            <div className="grid grid-cols-2 gap-3">
                                <div className="bg-[var(--bg-deep-slate)]/50 p-3 rounded-xl text-center border border-[var(--glass-border)]">
                                    <p className="text-lg font-bold text-[var(--accent-primary)]">98.7%</p>
                                    <p className="text-[9px] text-[var(--text-muted)]">Accuracy</p>
                                </div>
                                <div className="bg-[var(--bg-deep-slate)]/50 p-3 rounded-xl text-center border border-[var(--glass-border)]">
                                    <p className="text-lg font-bold text-[var(--accent-primary)]">Live</p>
                                    <p className="text-[9px] text-[var(--text-muted)]">Documentation</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="glassmorphism-chart p-6 max-w-2xl mx-auto text-center"
                >
                    <p className="text-sm text-[var(--text-secondary)] mb-2">
                        <span className="text-[var(--accent-primary)] font-bold">{useCases[2].title}</span>: {useCases[2].details.join(" • ")}
                    </p>
                    <p className="text-lg font-bold text-gradient">{useCases[2].savings} Savings</p>
                </motion.div>
            </div>
        </section>
    );
};

export default ROIShowcase;
