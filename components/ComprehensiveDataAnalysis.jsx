"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaDna, FaVial, FaChartLine, FaBrain, FaMicroscope, FaHeartbeat } from "react-icons/fa";

const ComprehensiveDataAnalysis = () => {
    const dataTypes = [
        {
            icon: <FaDna />,
            title: "DNA & Genetic Markers",
            description: "Precision medicine through genomic analysis",
            color: "from-purple-500 to-pink-500",
            metrics: ["SNP Analysis", "Pharmacogenomics", "Disease Risk"]
        },
        {
            icon: <FaVial />,
            title: "Blood Biomarkers",
            description: "Complete metabolic and hematology panels",
            color: "from-red-500 to-rose-500",
            metrics: ["CBC", "CMP", "Lipid Panel", "HbA1c"]
        },
        {
            icon: <FaChartLine />,
            title: "Longitudinal Trends",
            description: "Historical data visualization and predictions",
            color: "from-blue-500 to-cyan-500",
            metrics: ["Trend Analysis", "Predictive Models", "Risk Scoring"]
        },
        {
            icon: <FaHeartbeat />,
            title: "Vital Signs Integration",
            description: "Real-time patient monitoring data",
            color: "from-emerald-500 to-teal-500",
            metrics: ["BP", "HR", "SpO2", "Temperature"]
        },
        {
            icon: <FaMicroscope />,
            title: "Pathology Reports",
            description: "AI-powered interpretation of lab results",
            color: "from-amber-500 to-orange-500",
            metrics: ["Histology", "Cytology", "Microbiology"]
        },
        {
            icon: <FaBrain />,
            title: "AI Clinical Reasoning",
            description: "Comprehensive analysis and recommendations",
            color: "from-indigo-500 to-violet-500",
            metrics: ["Diagnosis Support", "Treatment Plans", "Drug Interactions"]
        }
    ];

    return (
        <section id="data-analysis" className="compact-section bg-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-0 w-full h-full"
                    style={{
                        backgroundImage: 'radial-gradient(circle at 2px 2px, #0062ff 1px, transparent 0)',
                        backgroundSize: '40px 40px'
                    }}
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                <div className="text-center mb-8">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="px-3 py-1 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 text-primary font-bold text-[10px] sm:text-xs uppercase tracking-widest"
                    >
                        World's Most Comprehensive
                    </motion.span>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mt-3 mb-2 text-gray-900 leading-tight">
                        Integrated <span className="text-gradient">Clinical Intelligence</span>
                    </h2>
                    <p className="text-xs sm:text-sm md:text-base text-clinical-gray max-w-2xl mx-auto leading-relaxed font-medium">
                        Unified analysis of DNA, bloodwork, and vital signs. Total clinical visibility.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
                    {dataTypes.map((type, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="group relative"
                        >
                            <div className="glass p-5 rounded-2xl hover-lift h-full flex flex-col relative overflow-hidden">
                                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${type.color} flex items-center justify-center text-white text-xl mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                                    {type.icon}
                                </div>
                                <h3 className="text-base font-bold text-gray-900 mb-1.5 group-hover:text-primary transition-colors">
                                    {type.title}
                                </h3>
                                <p className="text-[11px] text-clinical-gray mb-4 leading-snug flex-grow font-medium">
                                    {type.description}
                                </p>
                                <div className="flex flex-wrap gap-1.5">
                                    {type.metrics.map((metric, i) => (
                                        <span key={i} className="px-2 py-0.5 bg-slate-100 text-slate-700 rounded-md text-[9px] font-bold">
                                            {metric}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Compact Dashboard Preview */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="glass-dark p-6 md:p-8 rounded-[2rem] shadow-2xl text-white relative overflow-hidden"
                >
                    <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs font-bold">JD</div>
                            <div>
                                <h3 className="text-lg font-bold">Patient Analysis: John Doe</h3>
                                <p className="text-[10px] text-white/50 uppercase font-bold tracking-widest">Global Health Profile</p>
                            </div>
                        </div>
                        <div className="flex gap-1.5">
                            <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                            <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                        {[
                            { label: "Risk Score", value: "7.2/10", status: "MODERATE", color: "text-amber-400" },
                            { label: "DNA Markers", value: "48 Analyzed", status: "STABLE", color: "text-emerald-400" },
                            { label: "Blood Work", value: "12 Panels", status: "RECENT", color: "text-blue-400" },
                            { label: "AI Prediction", value: "High Match", status: "LIPID RISK", color: "text-rose-400" }
                        ].map((stat, i) => (
                            <div key={i} className="bg-white/5 p-4 rounded-xl border border-white/5 backdrop-blur-md">
                                <p className="text-white/40 text-[9px] font-bold uppercase mb-1">{stat.label}</p>
                                <p className={`text-xl font-black mb-1 ${stat.color}`}>{stat.value}</p>
                                <div className="flex items-center gap-1">
                                    <div className="w-1 h-1 rounded-full bg-current opacity-50" />
                                    <p className="text-white/30 text-[8px] font-bold">{stat.status}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center">
                    {[
                        { value: "250M+", label: "Data Points Analyzed" },
                        { value: "99.9%", label: "Analysis Accuracy" },
                        { value: "50+", label: "Medical Record Types" },
                        { value: "<2s", label: "Processing Time" }
                    ].map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <p className="text-4xl md:text-5xl font-extrabold text-gradient mb-2">{stat.value}</p>
                            <p className="text-clinical-gray font-medium">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ComprehensiveDataAnalysis;
