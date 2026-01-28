"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaMicrophone, FaStop, FaCheckCircle, FaSpinner } from "react-icons/fa";

const VoiceIntakeDemo = () => {
    const [isRecording, setIsRecording] = useState(false);
    const [isProcessing, setIsProcessing] = useState(false);
    const [formData, setFormData] = useState({});
    const [transcript, setTranscript] = useState("");

    const handleRecord = () => {
        if (!isRecording) {
            setIsRecording(true);
            setTranscript("");
            setTimeout(() => {
                setTranscript("Persistent lower back pain for 3 weeks, radiating to left leg. History of hypertension.");
                setIsRecording(false);
                setIsProcessing(true);
                setTimeout(() => {
                    setFormData({
                        chiefComplaint: "Lower back pain",
                        duration: "3 weeks",
                        medicalHistory: "Hypertension",
                        severity: "High"
                    });
                    setIsProcessing(false);
                }, 1500);
            }, 3000);
        } else {
            setIsRecording(false);
        }
    };

    return (
        <section id="voice-intake" className="compact-section bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary rounded-full blur-[100px]" />
                <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary rounded-full blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                <div className="text-center mb-8">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="px-3 py-1 rounded-full bg-primary/10 text-primary font-bold text-[10px] sm:text-xs uppercase tracking-widest"
                    >
                        Patient Experience Elite
                    </motion.span>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mt-3 mb-2 text-gray-900">
                        AI <span className="text-gradient">Voice Intake</span>
                    </h2>
                    <p className="text-xs sm:text-sm md:text-base text-clinical-gray max-w-2xl mx-auto leading-relaxed font-medium">
                        Patients speak naturally. Our AI extracts clinical context and populates forms with 99.8% accuracy.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
                    {/* Voice Recording Interface */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="glass p-6 md:p-8 rounded-3xl shadow-sm h-full"
                    >
                        <h3 className="text-sm font-bold mb-6 text-gray-900 flex items-center gap-2 uppercase tracking-wider">
                            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                            Voice Simulator
                        </h3>

                        <div className="flex flex-col items-center gap-6 py-4">
                            <button
                                onClick={handleRecord}
                                className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl transition-all duration-300 ${isRecording
                                    ? 'bg-red-500 animate-pulse shadow-lg'
                                    : 'premium-gradient hover:scale-110 shadow-md'
                                    } text-white`}
                            >
                                {isRecording ? <FaStop /> : <FaMicrophone />}
                            </button>

                            <div className="text-center">
                                <p className="text-xs font-bold text-gray-900">
                                    {isRecording ? "Listening..." : isProcessing ? "Processing..." : "Tap to Speak symptoms"}
                                </p>
                            </div>

                            {/* Waveform visualization */}
                            {isRecording && (
                                <div className="flex items-center gap-1 h-6">
                                    {[...Array(12)].map((_, i) => (
                                        <motion.div key={i} animate={{ height: ["20%", "100%", "20%"] }} transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.05 }} className="w-0.5 bg-primary rounded-full" />
                                    ))}
                                </div>
                            )}

                            {/* Transcript Display */}
                            <AnimatePresence>
                                {transcript && (
                                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="w-full p-3 bg-slate-50/80 rounded-xl border-l-4 border-primary">
                                        <p className="text-[8px] font-bold text-primary mb-1 uppercase tracking-widest">Transcript</p>
                                        <p className="text-[10px] text-gray-700 leading-snug italic font-medium">"{transcript}"</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>

                    {/* Auto-populated Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="glass p-6 md:p-8 rounded-3xl shadow-sm h-full"
                    >
                        <h3 className="text-sm font-bold mb-6 text-gray-900 flex items-center gap-2 uppercase tracking-wider">
                            <FaCheckCircle className="text-emerald-500" />
                            Clinical Output
                        </h3>

                        <div className="space-y-3">
                            {isProcessing ? (
                                <div className="flex flex-col items-center justify-center py-10 gap-3">
                                    <FaSpinner className="text-2xl text-primary animate-spin" />
                                    <p className="text-[9px] text-clinical-gray font-bold uppercase tracking-widest">Inference engine active...</p>
                                </div>
                            ) : Object.keys(formData).length > 0 ? (
                                <div className="grid gap-2">
                                    {Object.entries(formData).map(([key, value], i) => (
                                        <div key={key} className="relative">
                                            <label className="block text-[8px] font-bold text-clinical-gray uppercase tracking-widest mb-1">
                                                {key.replace(/([A-Z])/g, ' $1').trim()}
                                            </label>
                                            <div className="bg-emerald-50/30 p-2 rounded-lg border border-emerald-500/10 text-[10px] font-bold text-gray-900 flex justify-between items-center">
                                                <span>{value}</span>
                                                <FaCheckCircle className="text-emerald-500" />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="flex flex-col items-center justify-center py-10 gap-2 text-clinical-gray opacity-30">
                                    <FaMicrophone className="text-3xl" />
                                    <p className="text-[9px] font-bold">READY FOR VOICE INPUT</p>
                                </div>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default VoiceIntakeDemo;
