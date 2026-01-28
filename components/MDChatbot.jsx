"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaUserMd, FaRobot, FaMicrophone, FaCapsules, FaStethoscope } from "react-icons/fa";

const MDChatbot = () => {
    const messages = [
        {
            role: "doctor",
            text: "Is it safe to prescribe Lisinopril for this patient with their latest blood marker results?",
            icon: <FaUserMd className="text-blue-500" />,
            type: "voice"
        },
        {
            role: "ai",
            text: "Based on the elevated Creatinine levels (1.8 mg/dL) and current DNA markers for ACE inhibitor sensitivity, I recommend starting with a lower dose of 5mg and monitoring renal function closely. Consider Losartan as an alternative.",
            icon: <FaRobot className="text-primary" />,
            type: "text"
        }
    ];

    return (
        <section id="clinical-assistant" className="compact-section bg-clinical-bg overflow-hidden transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="text-center mb-10">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="px-3 py-1 rounded-full bg-primary/10 text-primary font-bold text-[10px] sm:text-xs uppercase tracking-widest"
                    >
                        24/7 Physician Support
                    </motion.span>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mt-2 mb-3">
                        MD Clinical <span className="text-gradient">AI Assistant</span>
                    </h2>
                    <p className="text-xs sm:text-sm md:text-base text-clinical-gray max-w-xl mx-auto font-medium">
                        Instant clinical reasoning, medication guidance, and evidence-based recommendations.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row items-stretch gap-6 bg-white p-4 sm:p-8 rounded-[2rem] shadow-sm relative border border-slate-100">
                    {/* Chat Interface */}
                    <div className="flex-1 flex flex-col gap-5 relative z-10 border-r border-slate-50 pr-0 lg:pr-6">
                        {messages.map((ms, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className={`flex items-start gap-3 ${ms.role === "ai" ? "flex-row-reverse" : ""}`}
                            >
                                <div className={`w-8 h-8 rounded-full glass flex items-center justify-center text-sm shadow-sm border ${ms.role === "ai" ? "border-primary/20" : "border-blue-100"} flex-shrink-0`}>
                                    {ms.icon}
                                </div>
                                <div className={`max-w-md p-3.5 rounded-2xl shadow-sm ${ms.role === "doctor" ? "bg-slate-50 text-slate-800 border-l-4 border-blue-500 rounded-tl-none" : "premium-gradient text-white rounded-tr-none"}`}>
                                    {ms.type === "voice" && (
                                        <div className="flex items-center gap-1.5 mb-1.5 text-[9px] font-bold uppercase tracking-widest opacity-60">
                                            <FaMicrophone className="animate-pulse" /> Voice Command
                                        </div>
                                    )}
                                    <p className="text-[11px] sm:text-xs leading-relaxed font-semibold">
                                        {ms.text}
                                    </p>
                                </div>
                            </motion.div>
                        ))}

                        {/* Simulated Input */}
                        <div className="mt-2 glass p-4 rounded-xl flex items-center gap-3 border-slate-50">
                            <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 animate-pulse cursor-pointer">
                                <FaMicrophone className="text-xs" />
                            </div>
                            <div className="flex-1 text-slate-400 font-bold text-[11px] italic">
                                Ask about medication interactions...
                            </div>
                        </div>
                    </div>

                    {/* Visualization Column */}
                    <div className="lg:w-1/3 w-full flex flex-col gap-4">
                        <div className="glass p-5 rounded-2xl border-primary/10 bg-slate-50/50">
                            <h4 className="font-bold text-[11px] text-gray-900 mb-4 flex items-center gap-2 uppercase tracking-wide">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                                Context Analysis
                            </h4>
                            <div className="space-y-4">
                                {[
                                    { label: "Medication Match", value: "85%", score: 85 },
                                    { label: "Renal Concern", value: "High", score: 40, color: "bg-red-500" },
                                    { label: "Clinical Proof", value: "Verified", score: 95, color: "bg-emerald-500" }
                                ].map((stat, i) => (
                                    <div key={i}>
                                        <div className="flex justify-between text-[10px] mb-1 font-bold">
                                            <span className="text-slate-500">{stat.label}</span>
                                            <span className="text-slate-900">{stat.value}</span>
                                        </div>
                                        <div className="w-full h-1 bg-slate-200 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${stat.score}%` }}
                                                className={`h-full ${stat.color || 'bg-primary'}`}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="premium-gradient p-5 rounded-2xl text-white">
                            <h4 className="font-bold text-xs mb-1.5">Evidence Based</h4>
                            <p className="text-[10px] opacity-90 leading-snug font-medium">
                                Trained on 250K+ journals. Up-to-date guidance in real-time.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MDChatbot;
