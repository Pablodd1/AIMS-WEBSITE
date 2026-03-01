import Link from "next/link";
import clsx from "clsx";
import AI_Icon from "./AIIcon";

export default function PremiumButton({
  label = "Get Started",
  href = null,
  onClick,
  className = "",
  glow = true,
  size = "medium",
}) {
  const sizeClasses = {
    small: "px-4 py-2 text-sm",
    medium: "px-6 py-3 text-base",
    large: "px-8 py-4 text-lg",
  };

  const buttonClasses = clsx(
    "relative inline-flex items-center gap-2 font-bold rounded-xl cursor-pointer",
    "text-[#030712] transition-all duration-400 ease-out",
    "bg-gradient-to-r from-[#00d4ff] via-[#06b6d4] to-[#00d4ff] bg-[length:200%] bg-left hover:bg-right",
    glow && "shadow-[0_0_30px_-5px_rgba(0,212,255,0.4)] hover:shadow-[0_0_50px_-15px_rgba(0,212,255,0.5)]",
    sizeClasses[size],
    className,
  );

  const content = (
    <span className="flex items-center gap-2 group">
      <AI_Icon
        className="w-auto h-5 transition-all duration-300"
      />
      {label}
    </span>
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
