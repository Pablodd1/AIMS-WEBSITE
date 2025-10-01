"use client";

import Link from "next/link";
import clsx from "clsx";

export default function SecondaryButton2({
    label = "Shop Now",
    href = null,
    onClick,
    className = "",
}) {
    const buttonClasses = clsx(
        "relative flex items-center cursor-pointer border-none bg-transparent  px-2.5 py-2.5",
        "uppercase tracking-[4px] text-sm font-semibold group",
        className
    );

    const content = (
        <>
            {/* Text with underline animation */}
            <span className="relative pr-4 pb-1">
                <span>{label}</span>
                <span
                    className="absolute left-0 bottom-0 h-[2px] w-full origin-bottom-right scale-x-0 bg-black transition-transform duration-300 ease-out group-hover:scale-x-100 group-hover:origin-bottom-left"
                    aria-hidden="true"
                />
            </span>

            {/* Arrow Icon */}
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
