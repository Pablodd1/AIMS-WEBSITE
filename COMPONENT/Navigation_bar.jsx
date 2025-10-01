import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import styles from './navigation_bar.module.css'
import SecondaryButton, { bottomLineClass, secBtnClass } from "@UTILS/secondary_button";
import clsx from "clsx";
const UseScrollEffect = dynamic(() => import('@MyHook/monitor_scroll'));

const links = [
    { label: 'Features', href: '' },
    { label: 'About', href: '' },
    { label: 'Download', href: '' },
    { label: 'Blogs', href: '' },
    { label: 'Support', href: '' },
]

export default function Navigation_Bar() {
    const buttonClasses = clsx(secBtnClass, " border-r-2 last:border-0 border-text/25 px-5 ");
    return (
        <section id="navbar" className=" sticky top-0 py-5 my-animi-all" >
            <nav className=" max-w-7xl mx-auto flex items-center justify-evenly gap-2" >
                <figure className="flex grow gap-2 items-center justify-start" >
                    <Image
                        src={`/svg/image.svg`}
                        alt='AI Medical Scriber Logo'
                        className=''
                        height={40}
                        width={40}
                    />
                    <figcaption className="" >
                        AI Medical Scribe
                    </figcaption>
                </figure>
                {links.map(x =>
                    <SecondaryButton
                        label={x.label}
                        href={x.href}
                        key={x.label}
                        className=" border-r-2 last:border-0 border-current/45 px-3 h-5 tracking-wide "
                    />
                )}
            </nav>
            <UseScrollEffect Id="navbar" className={styles.scroll_nav_bar} threshold={10} />
        </section>
    )
}