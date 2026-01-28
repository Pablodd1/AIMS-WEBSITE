"use client";
import Link from "next/link";
import styles from "./CtaButton.module.css";
import clsx from "clsx";

export default function SubscribeButton({
  lang,
  label = "SUBSCRIBE",
  className,
}) {
  return (
    <Link
      href={`/${lang}/get-started`}
      style={{ "--button-text": `'${label}'` }}
      className={clsx(styles.Btn, className)}
    >
      {/* Overlay (like ::before) */}
      <span>{label}</span>
    </Link>
  );
}
