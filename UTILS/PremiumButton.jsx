import Link from "next/link";
import clsx from "clsx";
import AI_Icon from "./AIIcon";

export default function PremiumButton({
  label = "Unlock Pro",
  href = null,
  onClick,
  className = "",
}) {
  const buttonClasses = clsx(
    "flex items-center gap-2 px-2.5 py-1 font-bold rounded-full cursor-pointer",
    "text-white shadow-md shadow-gray-400 transition-all ease-in-out duration-700",
    "bg-gradient-to-r from-[#880088] via-[#aa2068] via-[#cc3f47] via-[#de6f3d] via-[#f09f33] via-[#de6f3d] via-[#cc3f47] via-[#aa2068] to-[#880088]  ",
    "bg-[length:300%] bg-left hover:bg-[length:320%] hover:bg-right",
    "text-shadow-[2px_2px_3px_rgba(136,0,136,0.5)] text-shadow-gray-800 tracking-wide ",
    className,
  );

  const content = (
    <span className="flex items-center gap-2 group">
      <AI_Icon
        className={
          "w-auto h-7 transition-all  duration-300 fill-black group-hover:fill-white"
        }
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
