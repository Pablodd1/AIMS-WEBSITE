"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaMicrophone, FaFileAlt, FaCheckCircle } from "react-icons/fa";

const SoapNotePreview = () => {
    const [activeTab, setActiveTab] = useState("after");

    const rawTranscription = `P: Good morning, Dr. Smith. I've been feeling really tired lately, and I have this nagging cough that won't go away. It's been about two weeks now.
D: I'm sorry to hear that. Any fever or chills?
P: No fever, but I feel short of breath when I walk up stairs.
D: Okay, let's take a look. Your lungs sound clear, but I see some redness in your throat. We'll start you on some fluids and rest, and I'll order a chest X-ray just to be safe...`;

    const soapNote = {
        subjective: "Patient reports 2-week history of fatigue and persistent non-productive cough. Denies fever/chills. Reports dyspnea on exertion (climbing stairs).",
        objective: "Lungs clear to auscultation bilaterally. Pharynx shows mild erythema. Vital signs stable.",
        assessment: "Persistent cough with exertional dyspnea. Rule out bronchitis vs mild pneumonia.",
        plan: "1. Chest X-ray today. 2. Increased fluid intake and rest. 3. Follow-up in 3 days or as needed."
    };

    return (
        <section className="py-24 bg-gray-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-5">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="lg:w-1/2">
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-primary font-bold uppercase tracking-widest text-sm"
                        >
                            Technology in Action
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-3xl md:text-5xl font-bold mt-4 text-gray-900 leading-tight"
                        >
                            From Patient Voice <br />
                            <span className="text-blue-600 underline decoration-blue-200">To Structured Notes</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-gray-600 mt-6 text-lg"
                        >
                            Experience how our AI transforms natural clinical conversations into
                            perfectly formatted medical records in seconds.
                        </motion.p>

                        <div className="mt-10 flex gap-4">
                            <button
                                onClick={() => setActiveTab("before")}
                                className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all ${activeTab === "before"
                                        ? "bg-gray-900 text-white shadow-lg"
                                        : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                                    }`}
                            >
                                <FaMicrophone /> Raw Audio
                            </button>
                            <button
                                onClick={() => setActiveTab("after")}
                                className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all ${activeTab === "after"
                                        ? "bg-blue-600 text-white shadow-lg shadow-blue-200"
                                        : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                                    }`}
                            >
                                <FaFileAlt /> SOAP Note
                            </button>
                        </div>
                    </div>

                    <div className="lg:w-1/2 w-full relative">
                        <div className="absolute -inset-4 bg-gradient-to-tr from-blue-100 to-primary/10 rounded-[2rem] blur-2xl opacity-50 -z-10" />

                        <AnimatePresence mode="wait">
                            {activeTab === "before" ? (
                                <motion.div
                                    key="before"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    className="bg-white p-8 rounded-[2rem] shadow-2xl border border-gray-100 min-h-[450px]"
                                >
                                    <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-50">
                                        <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
                                        <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                                            Real-time Transcription
                                        </span>
                                    </div>
                                    <p className="text-gray-700 font-mono text-sm leading-relaxed whitespace-pre-wrap">
                                        {rawTranscription}
                                    </p>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="after"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    className="bg-white p-8 rounded-[2rem] shadow-2xl border border-blue-100 min-h-[450px]"
                                >
                                    <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-50">
                                        <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">
                                            AI Generated Output
                                        </span>
                                        <FaCheckCircle className="text-green-500 text-xl" />
                                    </div>

                                    <div className="space-y-6">
                                        <div>
                                            <h4 className="text-xs font-black text-gray-400 uppercase mb-2 tracking-tighter">Subjective</h4>
                                            <p className="text-gray-800 text-sm font-medium leading-relaxed">{soapNote.subjective}</p>
                                        </div>
                                        <div>
                                            <h4 className="text-xs font-black text-gray-400 uppercase mb-2 tracking-tighter">Objective</h4>
                                            <p className="text-gray-800 text-sm font-medium leading-relaxed">{soapNote.objective}</p>
                                        </div>
                                        <div>
                                            <h4 className="text-xs font-black text-gray-400 uppercase mb-2 tracking-tighter">Assessment</h4>
                                            <p className="text-gray-800 text-sm font-medium leading-relaxed">{soapNote.assessment}</p>
                                        </div>
                                        <div>
                                            <h4 className="text-xs font-black text-gray-400 uppercase mb-2 tracking-tighter">Plan</h4>
                                            <p className="text-gray-800 text-sm font-medium leading-relaxed">{soapNote.plan}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SoapNotePreview;
