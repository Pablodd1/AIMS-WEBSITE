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

    const chartData = [
        { label: "Risk Score", value: 72, display: "7.2/10", status: "MODERATE", color: "text-amber-400", barColor: "bg-amber-400" },
        { label: "DNA Markers", value: 85, display: "48 Analyzed", status: "STABLE", color: "text-emerald-400", barColor: "bg-emerald-400" },
        { label: "Blood Work", value: 92, display: "12 Panels", status: "RECENT", color: "text-blue-400", barColor: "bg-blue-400" },
        { label: "AI Prediction", value: 68, display: "High Match", status: "LIPID RISK", color: "text-rose-400", barColor: "bg-rose-400" }
    ];

    return (
        <section id="data-analysis" className="compact-section bg-[var(--bg-primary)] relative overflow-hidden">
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-0 w-full h-full"
                    style={{
                        backgroundImage: 'radial-gradient(circle at 2px 2px, var(--accent-primary) 1px, transparent 0)',
                        backgroundSize: '40px 40px'
                    }}
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                <div className="text-center mb-12">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="px-4 py-1.5 rounded-full bg-gradient-to-r from-[var(--accent-primary)]/10 to-[var(--accent-secondary)]/10 text-[var(--accent-primary)] font-bold text-xs uppercase tracking-wider"
                    >
                        World's Most Comprehensive
                    </motion.span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mt-4 mb-3 text-[var(--text-primary)] leading-tight">
                        Integrated <span className="text-gradient">Clinical Intelligence</span>
                    </h2>
                    <p className="text-sm sm:text-base text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed font-medium">
                        Unified analysis of DNA, bloodwork, and vital signs. Total clinical visibility.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
                    {dataTypes.map((type, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="group relative"
                        >
                            <div className="glass p-6 rounded-2xl hover-lift h-full flex flex-col relative overflow-hidden">
                                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${type.color} flex items-center justify-center text-white text-xl mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                                    {type.icon}
                                </div>
                                <h3 className="text-base font-bold text-[var(--text-primary)] mb-1.5 group-hover:text-[var(--accent-primary)] transition-colors">
                                    {type.title}
                                </h3>
                                <p className="text-xs text-[var(--text-secondary)] mb-4 leading-relaxed flex-grow font-medium">
                                    {type.description}
                                </p>
                                <div className="flex flex-wrap gap-1.5">
                                    {type.metrics.map((metric, i) => (
                                        <span key={i} className="px-2 py-0.5 bg-[var(--bg-deep-slate)] text-[var(--text-muted)] rounded-md text-[9px] font-bold border border-[var(--glass-border)]">
                                            {metric}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="glass p-6 md:p-8 rounded-[2rem] shadow-2xl text-[var(--text-primary)] relative overflow-hidden mb-12"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-primary)]/5 via-transparent to-[var(--accent-secondary)]/5" />
                    <div className="relative z-10">
                        <div className="flex items-center justify-between mb-6 pb-4 border-b border-[var(--glass-border)]">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] flex items-center justify-center text-white text-xs font-bold">JD</div>
                                <div>
                                    <h3 className="text-lg font-bold">Patient Analysis: John Doe</h3>
                                    <p className="text-[10px] text-[var(--text-muted)] uppercase font-bold tracking-widest">Global Health Profile</p>
                                </div>
                            </div>
                            <div className="flex gap-1.5">
                                <div className="w-2 h-2 rounded-full bg-red-500" />
                                <div className="w-2 h-2 rounded-full bg-amber-500" />
                                <div className="w-2 h-2 rounded-full bg-emerald-500" />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {chartData.map((stat, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="glassmorphism-chart p-5 border border-[var(--glass-border)]"
                                >
                                    <p className="text-[var(--text-muted)] text-[10px] font-bold uppercase mb-2">{stat.label}</p>
                                    <p className={`text-2xl font-black mb-2 ${stat.color}`}>{stat.display}</p>
                                    <div className="w-full h-1.5 bg-[var(--bg-deep-slate)] rounded-full overflow-hidden mb-2">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${stat.value}%` }}
                                            transition={{ duration: 1.2, delay: i * 0.15, ease: "easeOut" }}
                                            className={`h-full ${stat.barColor} rounded-full`}
                                        />
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <div className={`w-1.5 h-1.5 rounded-full ${stat.barColor}`} />
                                        <p className="text-[var(--text-muted)] text-[9px] font-bold">{stat.status}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
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
                            <p className="text-3xl md:text-4xl font-extrabold text-gradient mb-2">{stat.value}</p>
                            <p className="text-sm text-[var(--text-secondary)] font-medium">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ComprehensiveDataAnalysis;
