"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaShieldAlt, FaLock, FaUserShield, FaHospital } from "react-icons/fa";

const TrustSection = () => {
    const securityItems = [
        {
            icon: <FaShieldAlt className="text-4xl text-blue-600" />,
            title: "HIPAA Compliant",
            description: "Full adherence to healthcare privacy standards.",
        },
        {
            icon: <FaLock className="text-4xl text-blue-600" />,
            title: "AES-256 Encryption",
            description: "Your data is encrypted at rest and in transit.",
        },
        {
            icon: <FaUserShield className="text-4xl text-blue-600" />,
            title: "Privacy Focused",
            description: "We never store audio once the note is generated.",
        },
        {
            icon: <FaHospital className="text-4xl text-blue-600" />,
            title: "EHR Ready",
            description: "Seamlessly integrates with your existing workflow.",
        },
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-5">
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-primary font-bold uppercase tracking-widest text-sm"
                    >
                        Security & Trust
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-4xl font-bold mt-3 text-gray-900"
                    >
                        Built for Clinical Excellence
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-600 mt-4 max-w-2xl mx-auto"
                    >
                        We understand the weight of medical documentation. AI Medical Scribe is
                        architected with enterprise-grade security at every layer.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {securityItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-xl transition-shadow duration-300 group text-center"
                        >
                            <div className="mb-6 flex justify-center transform group-hover:scale-110 transition-transform duration-300">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                                {item.title}
                            </h3>
                            <p className="text-gray-600 text-sm">{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustSection;
