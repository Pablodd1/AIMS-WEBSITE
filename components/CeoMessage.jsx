"use client";
import React from "react";
import { motion } from "framer-motion";
import AIIcon from "@utils/AIIcon";
import SecondaryButton from "@utils/SecondaryButton";
import Image from "next/image";

const CeoMessage = ({ lang, dict }) => {
  return (
    <section className="relative overflow-hidden py-24 bg-[#0a1128] text-white">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 transform translate-x-1/4" />

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="absolute top-1/2 left-10 -translate-y-1/2 opacity-5"
      >
        <AIIcon className="w-auto h-96 fill-white" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-5 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.figure
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/3 relative"
          >
            <div className="relative z-10 rounded-[2rem] overflow-hidden border-4 border-white/10">
              <Image
                src={"/team/ceo.webp"}
                className="w-full h-auto object-cover"
                height={628}
                width={520}
                alt="Jasmel Acosta - CEO"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary rounded-full blur-3xl opacity-30 -z-10" />
          </motion.figure>

          <motion.aside
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-2/3"
          >
            <span className="inline-block uppercase text-primary font-black tracking-[0.3em] text-xs mb-6">
              Leadership Message
            </span>
            <h3 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">
              <span className="block italic text-primary/80">Jasmel</span>
              <span className="font-bold tracking-tighter">Acosta</span>
            </h3>

            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light italic mb-10">
              "{dict.p}"
            </p>

            <footer className="flex pt-6 border-t border-white/10">
              <SecondaryButton
                label={dict.btn}
                href={"mailto:Jasmel@aimedicalscriber.com"}
                withArrow
                className="text-white hover:text-primary transition-colors tracking-[0.2em] font-black uppercase text-sm"
              />
            </footer>
          </motion.aside>
        </div>
      </div>
    </section>
  );
};

export default CeoMessage;
