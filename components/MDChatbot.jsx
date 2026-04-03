"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaUserMd, FaRobot, FaMicrophone, FaBrain, FaTimes, FaExpand, FaPaperPlane } from "react-icons/fa";

const demoMessages = [
    {
        role: "doctor",
        text: "Patient presents with chest pain radiating to left arm, BP 160/95, HR 98. ECG shows ST elevation. Recommendations?",
        icon: <FaUserMd className="text-blue-400" />,
        type: "voice"
    },
    {
        role: "ai",
        text: "STEMI protocol activated. I've prepared aspirin 325mg, clopidogrel 600mg loading dose, and atorvastatin 80mg. Cardiology team notified. Door-to-balloon time tracking initiated.",
        icon: <FaRobot className="text-[var(--accent-primary)]" />,
        type: "text"
    },
    {
        role: "doctor",
        text: "Check for drug interactions with metformin and lisinopril.",
        icon: <FaUserMd className="text-blue-400" />,
        type: "voice"
    },
    {
        role: "ai",
        text: "No contraindications with metformin or lisinopril. Cath lab Team B available in 8 minutes. Auto-generated STEMI activation documentation. Prior imaging shows 30% LAD stenosis.",
        icon: <FaRobot className="text-[var(--accent-primary)]" />,
        type: "text"
    }
];

const MDChatbot = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
    const [isTyping, setIsTyping] = useState(false);

    useEffect(() => {
        if (currentMessageIndex < demoMessages.length) {
            setIsTyping(true);
            const typingTimer = setTimeout(() => {
                setIsTyping(false);
                const nextTimer = setTimeout(() => {
                    setCurrentMessageIndex(prev => prev + 1);
                }, 800);
                return () => clearTimeout(nextTimer);
            }, 1500);
            return () => clearTimeout(typingTimer);
        }
    }, [currentMessageIndex]);

    const visibleMessages = demoMessages.slice(0, currentMessageIndex);

    return (
        <section id="clinical-assistant" className="compact-section bg-[var(--bg-primary)] overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="text-center mb-10">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="px-4 py-1.5 rounded-full bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] font-bold text-xs uppercase tracking-wider flex items-center gap-2 justify-center"
                    >
                        <FaMicrophone className="text-emerald-400" />
                        Voice & Text Enabled
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    </motion.span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--text-primary)] mt-4 mb-3">
                        MD Clinical <span className="text-gradient">AI Assistant</span>
                    </h2>
                    <p className="text-sm sm:text-base text-[var(--text-secondary)] max-w-xl mx-auto font-medium">
                        Your intelligent clinical companion. Ask via voice or text for instant differential diagnoses,
                        medication protocols, and evidence-based treatment recommendations.
                    </p>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    <motion.div
                        layout
                        className={`glass rounded-2xl border border-[var(--glass-border)] overflow-hidden ${
                            isExpanded ? "fixed inset-4 z-50" : "relative"
                        }`}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                    >
                        <div className="flex items-center justify-between p-4 border-b border-[var(--glass-border)] bg-[var(--bg-deep-slate)]/50">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] flex items-center justify-center">
                                    <FaBrain className="text-white text-sm" />
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-[var(--text-primary)]">AIMS Clinical AI</h4>
                                    <p className="text-[10px] text-[var(--text-muted)] flex items-center gap-1">
                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                        Online • HIPAA Compliant
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={() => setIsExpanded(!isExpanded)}
                                    className="p-2 hover:bg-[var(--glass-bg)] rounded-lg transition-colors text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                                    aria-label={isExpanded ? "Minimize chat" : "Expand chat"}
                                >
                                    {isExpanded ? <FaTimes /> : <FaExpand />}
                                </button>
                            </div>
                        </div>

                        <div className={`p-4 space-y-4 ${isExpanded ? "h-[calc(100vh-200px)] overflow-y-auto" : "max-h-[400px] overflow-y-auto"}`}>
                            <AnimatePresence>
                                {visibleMessages.map((msg, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        transition={{ duration: 0.3 }}
                                        className={`flex items-start gap-3 ${msg.role === "ai" ? "flex-row-reverse" : ""}`}
                                    >
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm flex-shrink-0 border ${
                                            msg.role === "ai"
                                                ? "bg-[var(--accent-primary)]/10 border-[var(--accent-primary)]/20"
                                                : "bg-blue-500/10 border-blue-500/20"
                                        }`}>
                                            {msg.icon}
                                        </div>
                                        <div className={`max-w-md p-4 rounded-2xl ${
                                            msg.role === "doctor"
                                                ? "bg-[var(--bg-deep-slate)] text-[var(--text-secondary)] border-l-2 border-blue-500 rounded-tl-none"
                                                : "bg-gradient-to-br from-[var(--accent-primary)]/10 to-[var(--accent-secondary)]/10 text-[var(--text-primary)] border border-[var(--glass-border)] rounded-tr-none"
                                        }`}>
                                            {msg.type === "voice" && (
                                                <div className="flex items-center gap-1.5 mb-2 text-[9px] font-bold uppercase tracking-widest text-[var(--accent-primary)]/60">
                                                    <FaMicrophone className="animate-pulse" /> Voice Command
                                                </div>
                                            )}
                                            <p className="text-xs sm:text-sm leading-relaxed font-medium">
                                                {msg.text}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>

                            {isTyping && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="flex items-center gap-3"
                                >
                                    <div className="w-8 h-8 rounded-full bg-[var(--accent-primary)]/10 border border-[var(--accent-primary)]/20 flex items-center justify-center">
                                        <FaRobot className="text-[var(--accent-primary)] text-sm" />
                                    </div>
                                    <div className="bg-[var(--bg-deep-slate)] px-4 py-3 rounded-2xl rounded-tl-none border border-[var(--glass-border)]">
                                        <div className="flex gap-1.5">
                                            <span className="w-2 h-2 rounded-full bg-[var(--accent-primary)] animate-bounce" style={{ animationDelay: "0ms" }} />
                                            <span className="w-2 h-2 rounded-full bg-[var(--accent-primary)] animate-bounce" style={{ animationDelay: "150ms" }} />
                                            <span className="w-2 h-2 rounded-full bg-[var(--accent-primary)] animate-bounce" style={{ animationDelay: "300ms" }} />
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </div>

                        <div className="p-4 border-t border-[var(--glass-border)] bg-[var(--bg-deep-slate)]/30">
                            <div className="flex items-center gap-3">
                                <button className="p-3 rounded-xl bg-red-500/10 text-red-400 hover:bg-red-500/20 transition-colors flex-shrink-0" aria-label="Voice input">
                                    <FaMicrophone className="text-sm" />
                                </button>
                                <div className="flex-1 glass px-4 py-3 rounded-xl text-[var(--text-muted)] text-sm">
                                    Ask about diagnoses, medications, protocols...
                                </div>
                                <button className="p-3 rounded-xl bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] hover:bg-[var(--accent-primary)]/20 transition-colors flex-shrink-0" aria-label="Send message">
                                    <FaPaperPlane className="text-sm" />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-8"
                >
                    {[
                        { label: "Protocol Accuracy", value: "99.2%" },
                        { label: "Response Time", value: "0.3s" },
                        { label: "Medical Journals", value: "500K+" },
                        { label: "Specialties", value: "40+" }
                    ].map((stat, i) => (
                        <div key={stat.label} className="text-center glass p-4 rounded-xl">
                            <p className="text-xl font-black text-gradient">{stat.value}</p>
                            <p className="text-[10px] text-[var(--text-muted)] font-medium mt-1">{stat.label}</p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default MDChatbot;
