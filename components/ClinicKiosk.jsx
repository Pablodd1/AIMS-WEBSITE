"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaFingerprint, FaIdCard, FaCheckCircle, FaUserPlus, FaArrowRight } from "react-icons/fa";

const ClinicKiosk = () => {
    const [step, setStep] = useState(1);
    const [isScanning, setIsScanning] = useState(false);

    const handleScan = () => {
        setIsScanning(true);
        setTimeout(() => {
            setIsScanning(false);
            setStep(2);
        }, 3000);
    };

    return (
        <section id="clinic-kiosk" className="compact-section bg-white relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex flex-col lg:flex-row items-center gap-8">
                    <div className="lg:w-5/12">
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-primary font-bold uppercase tracking-widest text-[10px] sm:text-xs"
                        >
                            Front Desk Automation
                        </motion.span>
                        <h2 className="text-2xl sm:text-3xl font-extrabold mt-2 mb-4 text-gray-900 leading-tight">
                            Interactive <span className="text-gradient">Clinic Kiosk</span>
                        </h2>
                        <p className="text-xs sm:text-sm text-clinical-gray mb-6 leading-relaxed font-medium">
                            Eliminate clipboards. Patients check in, scan insurance, and complete voice-guided intakes in under 3 minutes.
                        </p>

                        <ul className="space-y-3">
                            {[
                                "Instant ID & Insurance OCR Extraction",
                                "Voice-guided Patient Intake Forms",
                                "Real-time Front Desk Synchronization",
                                "Auto-generated Patient Summaries"
                            ].map((item, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                    className="flex items-center gap-3 text-[11px] font-bold text-gray-700"
                                >
                                    <FaCheckCircle className="text-emerald-500 text-sm" />
                                    {item}
                                </motion.li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:w-7/12 w-full">
                        <motion.div
                            initial={{ scale: 1, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            className="bg-slate-900 p-4 sm:p-6 rounded-[2rem] shadow-xl relative overflow-hidden aspect-video flex flex-col items-center justify-center text-white border-4 border-slate-800"
                        >
                            {/* Kiosk Interface Simulation */}
                            <AnimatePresence mode="wait">
                                {step === 1 && !isScanning && (
                                    <motion.div
                                        key="step1"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="flex flex-col items-center text-center gap-4"
                                    >
                                        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xl animate-pulse">
                                            <FaUserPlus />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold mb-1">AIMS Clinic Check-In</h3>
                                            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Tap to start</p>
                                        </div>
                                        <button
                                            onClick={handleScan}
                                            className="px-6 py-3 premium-gradient rounded-xl font-bold text-sm flex items-center gap-2 hover:scale-105 transition-transform"
                                        >
                                            Start Arrival <FaArrowRight />
                                        </button>
                                    </motion.div>
                                )}

                                {isScanning && (
                                    <motion.div
                                        key="scanning"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="flex flex-col items-center gap-4"
                                    >
                                        <div className="relative w-48 h-28 bg-slate-800 rounded-xl border-2 border-primary/30 overflow-hidden flex items-center justify-center">
                                            <FaIdCard className="text-4xl text-slate-600" />
                                            <motion.div
                                                animate={{ top: ["0%", "100%", "0%"] }}
                                                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                                                className="absolute left-0 w-full h-0.5 bg-primary/60 shadow-[0_0_10px_rgba(0,98,255,0.8)] z-10"
                                            />
                                        </div>
                                        <div className="text-center">
                                            <h3 className="text-sm font-bold text-primary animate-pulse">AI OCR Extraction...</h3>
                                            <p className="text-[10px] text-slate-400">Processing Insurance ID</p>
                                        </div>
                                    </motion.div>
                                )}

                                {step === 2 && (
                                    <motion.div
                                        key="step2"
                                        initial={{ opacity: 0, scale: 0.98 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="w-full h-full flex flex-col gap-3"
                                    >
                                        <div className="flex items-center justify-between pb-2 border-b border-white/10">
                                            <h3 className="text-sm font-bold">Verification</h3>
                                            <span className="bg-emerald-500/10 text-emerald-500 px-2 py-0.5 rounded-full text-[9px] font-bold">99% MATCH</span>
                                        </div>
                                        <div className="grid grid-cols-2 gap-2">
                                            {[
                                                { label: "Name", value: "Johnathan Doe" },
                                                { label: "DOB", value: "05/12/1985" },
                                                { label: "Provider", value: "BCBS" },
                                                { label: "Policy", value: "TX-99882233" }
                                            ].map((field, i) => (
                                                <div key={i} className="bg-white/5 p-2 rounded-lg border border-white/5">
                                                    <p className="text-[8px] text-slate-400 mb-0.5 uppercase font-bold">{field.label}</p>
                                                    <p className="text-xs font-bold">{field.value}</p>
                                                </div>
                                            ))}
                                        </div>
                                        <button
                                            onClick={() => setStep(1)}
                                            className="mt-auto py-3 bg-emerald-600 rounded-xl font-bold text-sm hover:bg-emerald-500 transition-colors"
                                        >
                                            Confirm Arrival
                                        </button>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* Decorative elements */}
                            <div className="absolute top-4 right-4 flex gap-2">
                                <div className="w-2 h-2 rounded-full bg-red-500" />
                                <div className="w-2 h-2 rounded-full bg-yellow-500" />
                                <div className="w-2 h-2 rounded-full bg-green-500" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ClinicKiosk;
