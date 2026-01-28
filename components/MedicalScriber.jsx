"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaMicrophone, FaFileAlt, FaCheckCircle, FaCode, FaUserMd } from "react-icons/fa";

const MedicalScriber = () => {
    const [isListening, setIsListening] = useState(false);
    const [showResults, setShowResults] = useState(false);

    const handleListen = () => {
        setIsListening(true);
        setTimeout(() => {
            setIsListening(false);
            setShowResults(true);
        }, 5000);
    };

    const clinicalNote = {
        soap: {
            subjective: "Patient reports persistent lower back pain for 3 weeks, radiating to left leg. Pain worsens with prolonged sitting. Denies fever, trauma, or bowel/bladder changes.",
            objective: "BP 128/82, HR 76, Temp 98.6°F. Lumbar spine: tenderness at L4-L5, positive straight leg raise on left at 45°. Neurological exam: decreased sensation L5 dermatome, 4/5 strength in left ankle dorsiflexion.",
            assessment: "Lumbar radiculopathy, likely L5 nerve root compression secondary to disc herniation.",
            plan: "Order MRI lumbar spine. Start Meloxicam 15mg daily, physical therapy referral. Follow-up in 2 weeks or sooner if symptoms worsen."
        },
        codes: {
            dx: [
                { code: "M54.16", description: "Radiculopathy, lumbar region", confidence: 98 },
                { code: "M51.26", description: "Other intervertebral disc displacement, lumbar region", confidence: 92 }
            ],
            cpt: [
                { code: "99214", description: "Office visit, established patient, moderate complexity", confidence: 96 },
                { code: "72148", description: "MRI lumbar spine without contrast", confidence: 99 }
            ]
        }
    };

    return (
        <section id="ai-scriber" className="compact-section bg-gradient-to-br from-indigo-50/50 via-white to-purple-50/50 relative overflow-hidden transition-all duration-300">
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-indigo-500 rounded-full blur-[150px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                <div className="text-center mb-10">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-600 font-bold text-[10px] sm:text-xs uppercase tracking-widest"
                    >
                        Clinical Documentation Elite
                    </motion.span>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mt-3 mb-3 text-gray-900 leading-tight">
                        Ambient <span className="text-gradient">Medical Scriber</span> & Code Extraction
                    </h2>
                    <p className="text-xs sm:text-sm md:text-base text-clinical-gray max-w-2xl mx-auto leading-relaxed font-medium">
                        Focus 100% on the patient. Our AI listens and generates perfect SOAP notes with billable DX/CPT codes automatically.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 items-start">
                    {/* Listening Interface */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="glass p-6 md:p-8 rounded-3xl shadow-sm bg-white/70"
                    >
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-base font-bold text-gray-900 flex items-center gap-2">
                                <FaUserMd className="text-primary" />
                                Live Consultation
                            </h3>
                            {isListening && (
                                <span className="px-3 py-1 bg-red-500/10 text-red-600 rounded-full text-[10px] font-bold animate-pulse">
                                    ● Recording
                                </span>
                            )}
                        </div>

                        <div className="bg-slate-50/80 rounded-2xl p-4 md:p-6 mb-4 min-h-[220px] flex flex-col justify-center border border-slate-100">
                            {!isListening && !showResults && (
                                <div className="text-center p-4">
                                    <FaMicrophone className="text-4xl text-slate-300 mx-auto mb-4" />
                                    <p className="text-xs text-clinical-gray mb-6 font-medium">
                                        Test our ambient intelligence
                                    </p>
                                    <button
                                        onClick={handleListen}
                                        className="px-6 py-3 premium-gradient text-white rounded-xl font-bold text-sm hover:scale-105 transition-transform"
                                    >
                                        Simulate Visit
                                    </button>
                                </div>
                            )}

                            {isListening && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="space-y-3"
                                >
                                    <div className="flex items-start gap-2">
                                        <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white text-[8px] font-bold flex-shrink-0">Dr</div>
                                        <div className="flex-1 bg-white p-3 rounded-xl rounded-tl-none shadow-sm text-[11px] font-medium text-gray-700">"Tell me about your back pain..."</div>
                                    </div>
                                    <div className="flex items-start gap-2 flex-row-reverse">
                                        <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center text-white text-[8px] font-bold flex-shrink-0">Pt</div>
                                        <div className="flex-1 bg-emerald-50/50 p-3 rounded-xl rounded-tr-none shadow-sm text-[11px] font-medium text-gray-700">"It's been hurting for about 3 weeks..."</div>
                                    </div>
                                    <div className="flex justify-center py-2 h-4 overflow-hidden">
                                        <div className="flex gap-1.5">
                                            {[...Array(5)].map((_, i) => (
                                                <motion.div key={i} animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }} transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }} className="w-1.5 h-1.5 rounded-full bg-primary" />
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {showResults && !isListening && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-center"
                                >
                                    <FaCheckCircle className="text-4xl text-emerald-500 mx-auto mb-2" />
                                    <h4 className="text-lg font-bold text-gray-900 leading-none mb-1">SOAP Ready!</h4>
                                    <p className="text-[10px] text-clinical-gray font-bold uppercase">Generated in 2.3 seconds</p>
                                </motion.div>
                            )}
                        </div>
                    </motion.div>

                    {/* Generated Documentation */}
                    <div className="h-[280px] overflow-y-auto pr-1">
                        <AnimatePresence>
                            {showResults && (
                                <div className="space-y-4">
                                    <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="glass p-5 rounded-2xl bg-white/90">
                                        <div className="flex items-center gap-2 mb-4">
                                            <FaFileAlt className="text-primary text-sm" />
                                            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-900">Live SOAP Extract</h3>
                                        </div>
                                        <div className="space-y-3">
                                            {Object.entries(clinicalNote.soap).map(([key, value], i) => (
                                                <div key={key} className="relative">
                                                    <h4 className="text-[9px] font-bold text-primary uppercase mb-1 tracking-tighter">{key}</h4>
                                                    <p className="text-[10px] text-gray-700 leading-snug bg-slate-50 p-2 rounded-lg border border-slate-100">{value}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>

                                    <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="glass p-5 rounded-2xl bg-white/90">
                                        <div className="flex items-center justify-between mb-4">
                                            <div className="flex items-center gap-2">
                                                <FaCode className="text-emerald-600 text-sm" />
                                                <h3 className="text-xs font-bold uppercase tracking-widest text-gray-900">Billing Codes</h3>
                                            </div>
                                            <span className="text-[9px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full uppercase">99%+ Confidence</span>
                                        </div>
                                        <div className="grid grid-cols-2 gap-3">
                                            <div>
                                                <h4 className="text-[9px] font-bold text-slate-400 uppercase mb-2">Diagnosis</h4>
                                                {clinicalNote.codes.dx.map((code, i) => (
                                                    <div key={i} className="p-2 mb-1.5 bg-emerald-50/50 rounded-lg border border-emerald-100 flex items-center justify-between">
                                                        <span className="text-[10px] font-bold text-gray-800">{code.code}</span>
                                                        <FaCheckCircle className="text-emerald-500 text-[9px]" />
                                                    </div>
                                                ))}
                                            </div>
                                            <div>
                                                <h4 className="text-[9px] font-bold text-slate-400 uppercase mb-2">Procedures</h4>
                                                {clinicalNote.codes.cpt.map((code, i) => (
                                                    <div key={i} className="p-2 mb-1.5 bg-blue-50/50 rounded-lg border border-blue-100 flex items-center justify-between">
                                                        <span className="text-[10px] font-bold text-gray-800">{code.code}</span>
                                                        <FaCheckCircle className="text-blue-500 text-[9px]" />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>

                {/* Benefits */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16">
                    {[
                        { value: "2.3s", label: "Average Processing Time" },
                        { value: "99.2%", label: "Coding Accuracy" },
                        { value: "15min", label: "Time Saved Per Patient" },
                        { value: "100%", label: "Billing Compliance" }
                    ].map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="text-center p-6 glass rounded-2xl"
                        >
                            <p className="text-3xl font-extrabold text-gradient mb-2">{stat.value}</p>
                            <p className="text-sm text-clinical-gray font-medium">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MedicalScriber;
