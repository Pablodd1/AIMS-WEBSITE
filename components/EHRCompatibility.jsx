"use client";
import React from "react";
import { motion } from "framer-motion";

const EHRCompatibility = () => {
    const ehrs = [
        { name: "Epic", color: "text-[#E62020]" },
        { name: "Cerner", color: "text-[#0054B4]" },
        { name: "Athenahealth", color: "text-[#4B2F89]" },
        { name: "eClinicalWorks", color: "text-[#00829B]" },
        { name: "NextGen", color: "text-[#004C97]" },
        { name: "Allscripts", color: "text-[#007AC3]" },
    ];

    return (
        <section className="py-12 bg-white border-y border-gray-50">
            <div className="max-w-7xl mx-auto px-5 text-center">
                <p className="text-gray-400 text-xs font-bold uppercase tracking-[0.2em] mb-8">
                    Works with your existing EHR
                </p>
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40 hover:opacity-100 transition-opacity duration-500">
                    {ehrs.map((ehr, index) => (
                        <motion.div
                            key={ehr.name}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`text-xl md:text-2xl font-black tracking-tighter ${ehr.color}`}
                        >
                            {ehr.name}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EHRCompatibility;
