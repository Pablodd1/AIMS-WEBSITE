"use client";

import Link from "next/link";
import clsx from "clsx";

// Base button classes (no arrow, no underline)
export const secBtnClass = clsx(
    "relative flex items-center cursor-pointer bg-transparent",
    "px-2.5 py-2.5 gap-5 group"
);

// Reusable underline text class
export const bottomLineClass = clsx(
    "relative pb-1 ",
    "after:content-[''] after:absolute after:left-0 after:bottom-0",
    "after:h-[2px] after:w-full after:bg-current after:origin-bottom-right",
    "after:scale-x-0 after:transition-transform after:duration-300 after:ease-out",
    "group-hover:after:scale-x-100 group-hover:after:origin-bottom-left"
);

export default function SecondaryButton({
    label = "Shop Now",
    href = null,
    onClick,
    className = "",
    withArrow = false, // toggle arrow optional
}) {
    const buttonClasses = clsx(secBtnClass, className, withArrow?'uppercase tracking-[4px] ':'');

    const content = (
        <>
            {/* Text with underline animation */}
            <span className={bottomLineClass}>{label}</span>

            {/* Optional Arrow Icon */}
            {withArrow && (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="10"
                    viewBox="0 0 46 16"
                    className="transform -translate-x-2 transition-transform duration-300 ease-out group-hover:translate-x-0 active:scale-90"
                >
                    <path
                        d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                        transform="translate(30)"
                        fill="currentColor"
                    />
                </svg>
            )}
        </>
    );

    if (href) {
        return (
            <Link href={href} className={buttonClasses}>
                {content}
            </Link>
        );
    }

    return (
        <button onClick={onClick} className={buttonClasses}>
            {content}
        </button>
    );
}
