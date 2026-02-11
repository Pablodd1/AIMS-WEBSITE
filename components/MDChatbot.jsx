"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaUserMd, FaRobot, FaMicrophone, FaCapsules, FaStethoscope, FaBrain, FaHeartbeat, FaNotesMedical } from "react-icons/fa";

const MDChatbot = () => {
    const messages = [
        {
            role: "doctor",
            text: "Patient presents with chest pain radiating to left arm, BP 160/95, HR 98. ECG shows ST elevation. Recommendations?",
            icon: <FaUserMd className="text-blue-500" />,
            type: "voice"
        },
        {
            role: "ai",
            text: "STEMI protocol activated. I've prepared aspirin 325mg, clopidogrel 600mg loading dose, and atorvastatin 80mg. Cardiology team notified. Door-to-balloon time tracking initiated. Would you like me to pull the cath lab availability?",
            icon: <FaRobot className="text-primary" />,
            type: "text"
        },
        {
            role: "doctor",
            text: "Yes, and check for any drug interactions with his current metformin and lisinopril.",
            icon: <FaUserMd className="text-blue-500" />,
            type: "voice"
        },
        {
            role: "ai",
            text: "No contraindications with metformin or lisinopril. Cath lab Team B available in 8 minutes. I've auto-generated the STEMI activation documentation and pre-populated the procedure consent forms. Patient's prior imaging from 2023 shows 30% LAD stenosis.",
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
                        className="px-3 py-1 rounded-full bg-primary/10 text-primary font-bold text-[10px] sm:text-xs uppercase tracking-widest flex items-center gap-2 justify-center"
                    >
                        <FaMicrophone className="text-emerald-500" />
                        Voice & Text Enabled
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    </motion.span>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mt-2 mb-3">
                        MD Clinical <span className="text-gradient">AI Assistant</span>
                    </h2>
                    <p className="text-xs sm:text-sm md:text-base text-clinical-gray max-w-xl mx-auto font-medium">
                        Your intelligent clinical companion. Ask via voice or text for instant differential diagnoses, 
                        medication protocols, drug interactions, and evidence-based treatment recommendations.
                        <span className="block mt-2 text-primary font-semibold">
                            Trained on 500K+ medical journals • HIPAA Compliant • Real-time
                        </span>
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
                            <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 animate-pulse cursor-pointer hover:bg-red-500/20 transition-colors">
                                <FaMicrophone className="text-xs" />
                            </div>
                            <div className="flex-1 text-slate-400 font-bold text-[11px]">
                                <span className="italic">Press and hold to speak...</span>
                                <span className="block text-[9px] text-slate-300 mt-0.5">Try: "What are the contraindications for this patient?"</span>
                            </div>
                            <div className="flex items-center gap-1 text-[9px] text-emerald-600">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                                Live
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
                                    { label: "Protocol Accuracy", value: "99.2%", score: 99, color: "bg-emerald-500" },
                                    { label: "Response Time", value: "0.3s", score: 98, color: "bg-emerald-500" },
                                    { label: "Clinical Context", value: "Full History", score: 100, color: "bg-blue-500" },
                                    { label: "Drug Interactions", value: "Cleared", score: 95, color: "bg-emerald-500" }
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
                                                transition={{ duration: 1, delay: i * 0.2 }}
                                                className={`h-full ${stat.color || 'bg-primary'}`}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="premium-gradient p-5 rounded-2xl text-white">
                            <h4 className="font-bold text-xs mb-2 flex items-center gap-2">
                                <FaBrain className="text-emerald-300" />
                                AI Training & Knowledge
                            </h4>
                            <ul className="text-[10px] opacity-90 leading-relaxed font-medium space-y-1.5">
                                <li className="flex items-start gap-2">
                                    <span className="text-emerald-300">•</span>
                                    <span>Trained on 500K+ peer-reviewed medical journals</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-emerald-300">•</span>
                                    <span>Updated weekly with latest clinical guidelines</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-emerald-300">•</span>
                                    <span>Integrated with UpToDate, PubMed, Cochrane</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-emerald-300">•</span>
                                    <span>Specialty-specific protocols: Cardiology, Emergency, Primary Care</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-emerald-300">•</span>
                                    <span>Real-time drug database with interaction checking</span>
                                </li>
                            </ul>
                            <div className="mt-3 pt-3 border-t border-white/20">
                                <p className="text-[9px] opacity-75">
                                    Certified for HIPAA compliance • SOC 2 Type II • FDA Guidance Aware
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MDChatbot;
