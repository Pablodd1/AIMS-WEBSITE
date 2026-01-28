"use client";
import React from "react";
import { motion } from "framer-motion";
import { AiOutlineAim } from "react-icons/ai";
import { LuTimerReset } from "react-icons/lu";
import { GiPadlock } from "react-icons/gi";

const featuresData = [
  {
    number: "≈ 95–98%",
    icon: <AiOutlineAim />,
    key: "accuracy",
  },
  {
    number: "≈ 98%",
    icon: <LuTimerReset />,
    key: "time",
  },
  {
    number: "≈ 99.99%",
    icon: <GiPadlock />,
    key: "security",
  },
];

const Features_Home = ({ lang, dict }) => {
  // Since we passed dict as a prop, we use it directly. 
  // If not passed, we'd need to fetch it, but here we'll assume it's passed or handled.
  // Actually, the original was an async server component. I'll pass the dict down from the parent or fetch it here.
  // To keep it simple and interactive, I'll make a wrapper if needed, but let's just make this one Client and handle data.

  const data = featuresData.map((x, i) => ({
    ...x,
    label: dict[i].label,
    description: dict[i].description,
  }));

  return (
    <section className="bg-gray-900 text-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {data.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="relative p-10 rounded-[2rem] bg-black border border-gray-800 hover:border-primary/50 transition-colors duration-500 overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <div className="text-9xl transform rotate-12">{item.icon}</div>
              </div>

              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary text-4xl mb-6 transform group-hover:scale-110 transition-transform duration-500">
                  {item.icon}
                </div>

                <p className="text-3xl font-black text-primary mb-2">
                  {item.number}
                </p>

                <h3 className="text-xl font-bold mb-4">
                  {item.label}
                </h3>

                <div className="space-y-2">
                  {item.description.split("~n").map((desc, i) => (
                    <p key={i} className="text-gray-400 text-sm leading-relaxed">
                      {desc}
                    </p>
                  ))}
                </div>
              </div>

              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features_Home;
