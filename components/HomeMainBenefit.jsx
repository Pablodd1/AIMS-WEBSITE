"use client";
import React from "react";
import { motion } from "framer-motion";
import AIIcon from "@utils/AIIcon";
import PremiumButton from "@utils/PremiumButton";
import SecondaryButton from "@utils/SecondaryButton";
import Image from "next/image";

const Benefit_Home = ({ lang, dict }) => {
  return (
    <section className="relative flex flex-col-reverse max-w-7xl mx-auto lg:flex-row lg:h-screen items-center py-20 lg:py-0">
      <motion.article
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-12 md:py-24 lg:py-32 lg:self-end px-5 h-fit lg:w-1/2"
      >
        <AIIcon
          className={
            " self-start mb-12 lg:mb-20 mt-auto mx-10 w-auto h-32 my-animi fill-primary/10 "
          }
        />
        {dict.subtitle.split("~n").map((x, i) => (
          <p
            key={i}
            className={`text-lg font-bold ${i == 0 ? "uppercase tracking-widest text-primary mb-2" : "w-4/5 text-clinical-gray mb-6"} `}
          >
            {x}
          </p>
        ))}
        <h2 className=" text-3xl lg:text-5xl mb-6 mt-1 capitalize w-4/5 lg:w-full font-bold text-gray-900 leading-tight">
          {dict.h2}
        </h2>
        <p className=" w-4/5 text-gray-600 text-lg leading-relaxed mb-10">{dict.p}</p>

        <footer className="flex flex-col sm:flex-row items-start lg:items-center justify-start gap-6 ">
          <PremiumButton label={dict.btn1} href={`/${lang}/get-started`} />
          <SecondaryButton
            label={dict.btn2}
            href={`/${lang}/technology`}
            withArrow
            className="border-none font-bold text-blue-600 hover:text-blue-700 transition-colors"
          />
        </footer>
      </motion.article>

      <motion.figure
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full h-fit lg:w-1/2 p-6 relative"
      >
        <div className="absolute inset-0 bg-blue-50 rounded-[3rem] -z-10 transform rotate-3 scale-95" />
        <Image
          src={`/images/AIMS-Banner.png`}
          height={1920}
          width={1080}
          alt="AIMS benefit"
          className="w-full h-auto mx-auto rounded-[2.5rem] shadow-2xl"
        />
      </motion.figure>
    </section>
  );
};

export default Benefit_Home;
