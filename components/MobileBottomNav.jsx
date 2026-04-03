"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { FaHome, FaCogs, FaRobot, FaPhoneAlt, FaRocket } from "react-icons/fa";

export default function MobileBottomNav({ lang }) {
  const pathname = usePathname();

  const navItems = [
    { href: `/${lang}`, icon: <FaHome />, label: "Home" },
    { href: `/${lang}/technology`, icon: <FaCogs />, label: "Features" },
    { href: `/${lang}/ai-consulting`, icon: <FaRobot />, label: "AI Consulting" },
    { href: `/${lang}/virtual-front-desk`, icon: <FaPhoneAlt />, label: "Front Desk" },
  ];

  return (
    <nav className="md:hidden mobile-bottom-nav" aria-label="Mobile navigation">
      <div className="flex items-center justify-around">
        {navItems.map((item) => {
          const isActive = pathname === item.href || pathname === `${item.href}/`;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center gap-1 py-2 px-3 rounded-xl transition-colors duration-200 ${
                isActive
                  ? "text-[var(--accent-primary)]"
                  : "text-[var(--text-muted)]"
              }`}
            >
              <motion.div
                whileTap={{ scale: 0.9 }}
                className="text-lg"
              >
                {item.icon}
              </motion.div>
              <span className="text-[9px] font-medium">{item.label}</span>
              {isActive && (
                <motion.div
                  layoutId="mobileNavIndicator"
                  className="w-1 h-1 rounded-full bg-[var(--accent-primary)] mt-0.5"
                />
              )}
            </Link>
          );
        })}
        <Link
          href={`/${lang}/get-started`}
          className="flex flex-col items-center gap-1 py-2 px-3"
        >
          <motion.div
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] flex items-center justify-center text-white shadow-lg shadow-[var(--accent-primary)]/20"
          >
            <FaRocket className="text-sm" />
          </motion.div>
          <span className="text-[9px] font-medium text-[var(--accent-primary)]">Book Now</span>
        </Link>
      </div>
    </nav>
  );
}
