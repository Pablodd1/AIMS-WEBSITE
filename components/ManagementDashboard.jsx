"use client";
import React from "react";
import { motion } from "framer-motion";
import {
    FaChartLine, FaUsers, FaFileInvoiceDollar, FaRegClock,
    FaCheckCircle, FaExclamationTriangle, FaArrowUp
} from "react-icons/fa";

const ManagementDashboard = () => {
    const stats = [
        { label: "Efficiency Gain", value: "+42%", icon: <FaChartLine />, trend: "up" },
        { label: "Providers Active", value: "12", icon: <FaUsers />, trend: "neutral" },
        { label: "Revenue Recovery", value: "$12.4k", icon: <FaFileInvoiceDollar />, trend: "up" },
        { label: "Avg Doc Time", value: "3.2m", icon: <FaRegClock />, trend: "down" },
    ];

    const operationalInsights = [
        { title: "Billing Optimization", desc: "AI detected 14 missing CPT codes in yesterday's notes, potential $1,200 recovery.", status: "alert" },
        { title: "Patient Throughput", desc: "Average intake time reduced by 65% since implementing Voice-Kiosk mode.", status: "success" },
        { title: "Compliance Score", desc: "99.8% documentation completion rate. All HIPAA audits passed for this quarter.", status: "success" },
    ];

    return (
        <section id="management-insights" className="compact-section bg-white border-y border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex flex-col lg:flex-row gap-8 items-start">

                    {/* Left Column: Strategy */}
                    <div className="lg:w-1/3">
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-primary font-bold uppercase tracking-widest text-[10px] sm:text-xs"
                        >
                            For Office Managers
                        </motion.span>
                        <h2 className="text-2xl sm:text-3xl font-extrabold mt-2 mb-4 text-gray-900 leading-tight">
                            Administrative <span className="text-gradient">Intelligence</span>
                        </h2>
                        <p className="text-sm text-clinical-gray mb-6 leading-relaxed font-medium">
                            AIMS provides managers with real-time visibility into clinic operations.
                            Monitor provider productivity, automate billing extraction, and identify revenue leaks automatically.
                        </p>

                        <ul className="space-y-3">
                            {[
                                "Real-time Provider Performance Tracking",
                                "Automated Billing & CPT Cross-referencing",
                                "Patient Volume & Throughput Analytics",
                                "Enterprise HIPAA Compliance Logs"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-2 text-xs font-bold text-gray-700">
                                    <FaCheckCircle className="text-accent" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right Column: Dashboard Simulation */}
                    <div className="lg:w-2/3 w-full">
                        <div className="glass p-4 rounded-3xl border-gray-200/50 shadow-sm bg-slate-50/50">
                            <div className="flex items-center justify-between mb-4 px-2">
                                <h3 className="text-sm font-bold text-gray-800">Clinic Overview - <span className="text-primary">Admin Portal</span></h3>
                                <div className="flex gap-2">
                                    <div className="w-2 h-2 rounded-full bg-red-400" />
                                    <div className="w-2 h-2 rounded-full bg-amber-400" />
                                    <div className="w-2 h-2 rounded-full bg-emerald-400" />
                                </div>
                            </div>

                            {/* Stats Grid */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                                {stats.map((stat, i) => (
                                    <div key={i} className="bg-white p-3 rounded-2xl border border-gray-100 shadow-sm">
                                        <div className="flex items-center justify-between mb-1">
                                            <div className="text-primary bg-primary/5 p-1.5 rounded-lg text-xs">
                                                {stat.icon}
                                            </div>
                                            {stat.trend === "up" && <FaArrowUp className="text-emerald-500 text-[10px] transform rotate-45" />}
                                        </div>
                                        <p className="text-[10px] text-clinical-gray font-bold uppercase">{stat.label}</p>
                                        <p className="text-lg font-extrabold text-gray-900">{stat.value}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Insights List */}
                            <div className="space-y-2">
                                {operationalInsights.map((insight, i) => (
                                    <div key={i} className="bg-white p-3 rounded-xl border border-gray-100 flex gap-3 items-start">
                                        <div className={`mt-1 flex-shrink-0 ${insight.status === 'alert' ? 'text-amber-500' : 'text-emerald-500'}`}>
                                            {insight.status === 'alert' ? <FaExclamationTriangle /> : <FaCheckCircle />}
                                        </div>
                                        <div>
                                            <h4 className="text-xs font-bold text-gray-900">{insight.title}</h4>
                                            <p className="text-[11px] text-clinical-gray font-medium mt-0.5">{insight.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ManagementDashboard;
