"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaLanguage } from "react-icons/fa";

export default function Switch_Lang({ lang }) {
  const pathname = usePathname();
  const switchLang = lang === "en" ? "es" : "en";

  const generateLangLink = () => {
    // If homepage (/en or /es), just return the root of switchLang
    if (pathname === `/${lang}` || pathname === `/${lang}/`) {
      return `/${switchLang}`;
    }

    // Otherwise, replace only the first segment (the lang)
    return pathname.replace(`/${lang}`, `/${switchLang}`);
  };

  return (
    <Link
      href={generateLangLink()}
      className="flex items-center text-xs md:text-sm ml-auto mr-3 hover:underline transition-colors duration-200 ease-in-out"
      aria-label={`Switch to ${switchLang === "en" ? "English" : "Spanish"}`}
    >
      <FaLanguage className="text-2xl mr-2" />
      {lang === "en" ? "Cambiar a Español" : "Switch to English"}
    </Link>
  );
}
