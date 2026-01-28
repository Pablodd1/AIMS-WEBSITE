"use client";
import React from "react";
import { motion } from "framer-motion";
import PremiumButton from "@utils/PremiumButton";
import SecondaryButton from "@utils/SecondaryButton";

const UseCase_Home = ({ lang, dict }) => {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-5">
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 leading-tight mb-8">
                <span className="inline-block uppercase text-primary bg-primary/5 rounded-full px-4 py-1 text-xs font-black tracking-[0.2em] mb-4">
                  {dict.subtitle}
                </span>
                <br />
                {dict.label}
              </h2>

              <div className="space-y-4 mb-10">
                {dict.p.split("~n").map((x, i) => (
                  <p key={i} className="text-gray-600 text-lg leading-relaxed">
                    {x}
                  </p>
                ))}
              </div>

              <div className="flex flex-wrap gap-6">
                <PremiumButton
                  label={dict.btn1}
                  href={`/${lang}/get-started`}
                />
                <SecondaryButton
                  label={dict.btn2}
                  href={`/${lang}/technology`}
                  withArrow
                  className="font-bold text-blue-600"
                />
              </div>
            </div>

            <div className="lg:w-1/2 w-full">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative rounded-[2rem] overflow-hidden shadow-2xl bg-gray-900 border-8 border-gray-50"
              >
                <video
                  className="w-full aspect-video object-cover"
                  controls={true}
                  autoPlay={false}
                  playsInline
                  muted={true}
                  loop
                  preload="auto"
                >
                  <source src={`/video/Empowering.mp4`} type={"video/mp4"} />
                </video>
              </motion.div>
              <p className="mt-8 pt-6 border-t border-gray-100 text-sm text-gray-400 italic">
                {dict.footerNote}
              </p>
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
};

export default UseCase_Home;
