import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import styles from './navigation_bar.module.css'
import SecondaryButton, { bottomLineClass, secBtnClass } from "@UTILS/secondary_button";
import clsx from "clsx";
import { links } from "./assets/data/resources";
import CtaButton from "@UTILS/cta_button";
import { langNav } from "@LG_Bank/NAV/main";
const UseScrollEffect = dynamic(() => import('@MyHook/monitor_scroll'));


export default async function Navigation_Bar({ lang = 'en' }) {
    const dict = await langNav(lang)
    const btnClass = clsx(styles["icon--menu-toggle"], 'flex lg:hidden my-animi-all')
    const navClass = clsx(styles["main-navigation"], 'flex lg:hidden my-animi-all')
    const menuClass = clsx(styles["main-navigation-toggle"], '  ')
    return (
        <section id="navbar" className="z-40 sticky top-0 py-5 my-animi-all" >
            <nav className=" px-5 max-w-7xl mx-auto flex items-center justify-evenly gap-2" >
                <Link href={'/'} className="flex grow gap-2 items-center justify-start" >
                    <Image
                        src={`/logo.png`}
                        alt='AI Medical Scriber Logo'
                        className=' rounded-lg'
                        height={40}
                        width={40}
                    />
                    <figcaption className="" >
                        AI Medical Scribe
                    </figcaption>
                </Link>
                {links.map(x =>
                    <SecondaryButton
                        label={dict[x.label]}
                        href={x.href}
                        key={x.label}
                        className=" hidden lg:inline-flex border-r-2 last:border-0 border-current/45 px-3 h-5 tracking-wide "
                    />
                )}
                <CtaButton
                    label={dict["getStarted"]}
                    className={' mx-1 md:mx-2 text-sm lg:text-md tracking-wider h-8 md:h-9 w-26 md:w-36'}
                />
                <input id="page-nav-toggle" className={menuClass} type="checkbox" />
                <label htmlFor="page-nav-toggle">
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
                    <ul className="flex flex-col gap-1.5 w-4/5 mx-auto">
                        {links.map(x =>
                            <SecondaryButton
                                label={x.label}
                                href={x.href}
                                key={x.label}
                                className=" text-xl border-b-2 last:border-0 border-current/45 py-2 px-3.5  tracking-wide "
                            />
                        )}
                    </ul>
                </nav>
            </nav>


            <UseScrollEffect Id="navbar" className={styles.scroll_nav_bar} threshold={10} />
        </section>
    )
}