"use client";
import { memo, useEffect } from "react";

const UseScrollEffect = ({ Id, className, threshold = 100 }) => {
  const handleScroll = () => {
    const elem = document.getElementById(Id);
    if (!elem) return;

    const hasClass = elem.classList.contains(className);

    if (window.scrollY > threshold) {
      if (!hasClass) {
        elem.classList.add(className);
      }
    } else {
      if (hasClass) {
        elem.classList.remove(className);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [Id, className, threshold]);

  return null;
};

export default memo(UseScrollEffect);
