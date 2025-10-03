"use client";
import styles from './cta_button.module.css'
import clsx from "clsx";

export default function SubscribeButton({ label = "SUBSCRIBE", className }) {
  return (
    <button
      className={clsx(
        styles.Btn,
        className
      )}
    >
      {/* Overlay (like ::before) */}
      <span
      >
        {label}
      </span>
    </button>
  );
}
