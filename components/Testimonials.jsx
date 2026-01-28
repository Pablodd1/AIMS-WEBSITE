"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import testimonialsData from "./assets/data/testimonials";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % testimonialsData.length);
  const prev = () => setIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);

  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center mb-16">
          <span className="text-primary font-black uppercase tracking-[0.3em] text-xs">
            Provider Feedback
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 text-gray-900">
            Trusted by Clinicians
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute top-0 left-0 -translate-x-full pr-12 hidden lg:block">
            <FaQuoteLeft className="text-6xl text-blue-50 opacity-100" />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-50 p-10 md:p-16 rounded-[3rem] border border-gray-100 shadow-sm"
            >
              <p className="text-xl md:text-2xl text-gray-700 font-medium leading-relaxed italic mb-10">
                "{testimonialsData[index].quote}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center font-bold text-primary">
                  {testimonialsData[index].name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonialsData[index].name}</h4>
                  <p className="text-sm text-gray-500 font-medium">{testimonialsData[index].position}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center lg:justify-end mt-12 gap-4">
            <button
              onClick={prev}
              className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white hover:border-primary transition-all shadow-sm"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={next}
              className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white hover:border-primary transition-all shadow-sm"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
