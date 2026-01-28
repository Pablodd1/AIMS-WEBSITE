"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaDollarSign, FaClock, FaChartLine, FaUserMd, FaCheckCircle, FaVideo } from "react-icons/fa";

const ROIShowcase = () => {
    const roiData = [
        {
            metric: "$127K",
            label: "Annual Savings",
            description: "Per physician",
            icon: <FaDollarSign />,
            source: "MGMA 2024"
        },
        {
            metric: "15 min",
            label: "Time Saved",
            description: "Per patient visit",
            icon: <FaClock />,
            source: "Internal Data"
        },
        {
            metric: "3.2x",
            label: "First Year ROI",
            description: "Average return",
            icon: <FaChartLine />,
            source: "Healthcare IT"
        },
        {
            metric: "+4",
            label: "More Patients",
            description: "Daily capacity",
            icon: <FaUserMd />,
            source: "AMA 2024"
        }
    ];

    const useCases = [
        {
            title: "Primary Care",
            savings: "$180K/year",
            details: [
                "Eliminated 2 FTE scribes",
                "40% less overtime",
                "18% more patients"
            ]
        },
        {
            title: "Telemedicine",
            savings: "$95K/year",
            details: [
                "100+ visits automated daily",
                "94% fewer errors",
                "Faster claim processing"
            ]
        },
        {
            title: "Multi-Specialty",
            savings: "$340K/year",
            details: [
                "Voice-enabled EHR",
                "Auto DX/CPT extraction",
                "5-day faster billing"
            ]
        }
    ];

    return (
        <section id="roi-results" className="compact-section bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                {/* Header */}
                <div className="text-center mb-8">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary font-bold text-[10px] sm:text-xs uppercase tracking-widest mb-2"
                    >
                        Proven Results
                    </motion.span>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-2 px-4 leading-tight">
                        Measurable <span className="text-gradient">Financial ROI</span>
                    </h2>
                    <p className="text-xs sm:text-sm md:text-base text-clinical-gray max-w-xl mx-auto px-4 font-medium">
                        Verified data from practices using AIMS clinical automation.
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8">
                    {roiData.map((data, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="glass p-4 rounded-2xl text-center hover-lift"
                        >
                            <div className="w-8 h-8 rounded-xl bg-primary/5 text-primary flex items-center justify-center text-lg mx-auto mb-2">
                                {data.icon}
                            </div>
                            <h3 className="text-xl sm:text-2xl font-black text-gray-900 mb-0.5 leading-none">{data.metric}</h3>
                            <p className="text-[10px] font-bold text-gray-800 uppercase mb-0.5">{data.label}</p>
                            <p className="text-[9px] text-clinical-gray font-medium leading-tight mb-2">{data.description}</p>
                            <span className="text-[8px] px-2 py-0.5 rounded-full bg-slate-100 text-slate-500 font-bold uppercase tracking-widest">
                                Source: {data.source}
                            </span>
                        </motion.div>
                    ))}
                </div>

                {/* Use Cases & Telemedicine Merged Row */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
                    {/* Use Case Cards */}
                    {useCases.slice(0, 2).map((useCase, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.98 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="bg-slate-50 border border-gray-100 p-5 rounded-2xl relative"
                        >
                            <span className="absolute top-4 right-4 bg-emerald-500 text-white text-[9px] font-bold px-2 py-0.5 rounded-full uppercase">
                                {useCase.savings} Savings
                            </span>
                            <h4 className="text-sm font-bold text-gray-900 mb-3">{useCase.title}</h4>
                            <ul className="space-y-1.5">
                                {useCase.details.map((detail, idx) => (
                                    <li key={idx} className="flex items-center gap-2 text-[10px] text-clinical-gray font-bold">
                                        <FaCheckCircle className="text-emerald-500 flex-shrink-0" />
                                        {detail}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}

                    {/* Telemedicine Feature Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="glass-dark p-5 rounded-2xl text-white relative overflow-hidden"
                    >
                        <div className="relative z-10">
                            <div className="flex items-center gap-2 mb-2">
                                <FaVideo className="text-accent text-sm" />
                                <span className="text-[9px] font-bold uppercase tracking-wider text-accent">Telemedicine Elite</span>
                            </div>
                            <h4 className="text-sm font-bold mb-2">Real-time Virtual Visits</h4>
                            <p className="text-[10px] text-white/80 leading-snug mb-3">
                                Live transcription and automated SOAP notes for Zoom, Teams, & Doxy.me.
                            </p>
                            <div className="grid grid-cols-2 gap-2">
                                <div className="bg-white/5 p-2 rounded-xl text-center">
                                    <p className="text-sm font-bold text-accent">98.7%</p>
                                    <p className="text-[8px] text-white/60">Accuracy</p>
                                </div>
                                <div className="bg-white/5 p-2 rounded-xl text-center">
                                    <p className="text-sm font-bold text-accent">Live</p>
                                    <p className="text-[8px] text-white/60">Documentation</p>
                                </div>
                            </div>
                        </div>
                        <div className="absolute top-0 right-0 w-24 h-24 bg-primary/20 blur-2xl -z-0" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ROIShowcase;
