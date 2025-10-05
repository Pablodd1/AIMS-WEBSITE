"use client";
import Link from 'next/link';
import styles from './cta_button.module.css';
import clsx from "clsx";

export default function SubscribeButton({ label = "SUBSCRIBE", className }) {
  return (
    <Link
      href={'/get-started'}
      style={{ '--button-text':  `'${label}'` }} 
      className={clsx(
        styles.Btn,
        className,
      )}
    >
      {/* Overlay (like ::before) */}
      <span>{label}</span>
    </Link>
  );
}
