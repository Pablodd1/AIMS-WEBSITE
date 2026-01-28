import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import styles from "./NavigationBar.module.css";
import SecondaryButton, {
  bottomLineClass,
  secBtnClass,
} from "@utils/SecondaryButton";
import clsx from "clsx";
import { links } from "./assets/data/resources";
import CtaButton from "@utils/CtaButton";
import { langNav } from "@dictionary/NAV/main";
const UseScrollEffect = dynamic(() => import("@hooks/useMonitorScroll"));

export default async function Navigation_Bar({ lang = "en" }) {
  const dict = await langNav(lang);
  const btnClass = clsx(
    styles["icon--menu-toggle"],
    "flex lg:hidden my-animi-all",
  );
  const navClass = clsx(
    styles["main-navigation"],
    "flex lg:hidden my-animi-all premium-gradient",
  );
  const menuClass = clsx(styles["main-navigation-toggle"], "  ");
  return (
    <section id="navbar" className="z-50 sticky top-0 py-4 my-animi-all">
      <nav className="px-5 max-w-7xl mx-auto flex items-center justify-between gap-4 glass rounded-3xl py-3 px-6 shadow-lg">
        <Link
          href={`/${lang}`}
          className="flex gap-3 items-center justify-start group"
        >
          <div className="relative w-12 h-12 rounded-xl overflow-hidden shadow-md group-hover:scale-110 transition-transform">
            <Image
              src={`/logo.png`}
              alt="AIMS Logo"
              className="object-cover"
              fill
            />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-lg text-gray-900 tracking-tight">AIMS</span>
            <span className="text-xs text-clinical-gray font-medium">Medical Intelligence</span>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-1">
          {links.map((x) => (
            <SecondaryButton
              label={dict[x.label]}
              href={`/${lang}${x.href}`}
              key={x.label}
              className="px-4 py-2 rounded-xl hover:bg-primary/5 transition-colors font-medium text-gray-700 hover:text-primary"
            />
          ))}
        </div>

        <CtaButton
          label={dict["getStarted"]}
          lang={lang}
          className="px-6 py-2.5 rounded-xl font-bold text-sm shadow-lg hover:shadow-xl transition-all"
        />

        <input
          id="page-nav-toggle"
          aria-labelledby="page-nav-label"
          className={menuClass}
          aria-label="Toggle navigation menu"
          type="checkbox"
        />
        <label id="page-nav-label" htmlFor="page-nav-toggle">
          <svg className={btnClass} viewBox="0 0 60 30">
            <g className={styles["icon-group"]}>
              <g className={styles["icon--menu"]}>
                <path d="M 6 0 L 54 0" />
                <path d="M 6 15 L 54 15" />
                <path d="M 6 30 L 54 30" />
              </g>
              <g className={styles["icon--close"]}>
                <path d="M 15 0 L 45 30" />
                <path d="M 15 30 L 45 0" />
              </g>
            </g>
          </svg>
        </label>
        <nav className={navClass}>
          <section className="flex flex-col gap-4 w-4/5 text-white mx-auto mt-24">
            {links.map((x) => (
              <SecondaryButton
                label={dict[x.label]}
                href={`/${lang}${x.href}`}
                key={x.label}
                className="text-xl border-b border-white/20 last:border-0 py-4 px-4 tracking-wide hover:bg-white/10 rounded-xl transition-colors"
              />
            ))}
          </section>
        </nav>
      </nav>

      <UseScrollEffect
        Id="navbar"
        className={styles.scroll_nav_bar}
        threshold={10}
      />
    </section>
  );
}
