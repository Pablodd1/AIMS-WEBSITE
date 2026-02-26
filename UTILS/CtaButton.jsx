"use client";
import Link from "next/link";
import styles from "./CtaButton.module.css";
import clsx from "clsx";

export default function SubscribeButton({
  lang,
  label = "Get Started",
  href,
  className,
  glow = true,
  size = "medium",
}) {
  const sizeClasses = {
    small: "px-4 py-2 text-sm",
    medium: "px-6 py-3 text-base",
    large: "px-8 py-4 text-lg",
  };

  return (
    <Link
      href={href || `/${lang}/get-started`}
      className={clsx(
        styles.Btn,
        glow && styles.glow,
        sizeClasses[size],
        className
      )}
    >
      <span>{label}</span>
    </Link>
  );
}
