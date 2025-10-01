import SecondaryButton from "@UTILS/secondary_button";
import { links, linksLegal } from "./assets/data/resources";

export default function Footer() {

    return (
        <section className="pt-14 pb-20 bg-text text-bg" >
            <nav className="flex items-center justify-center" >
                {links.map(x =>
                    <SecondaryButton
                        label={x.label}
                        href={x.href}
                        key={x.label}
                        className=" border-r-2 last:border-0 border-current/45 px-3 h-5 tracking-wide "
                    />
                )}
            </nav>
            <p className=" text-sm text-center mt-15" >
                © 2025 Aimedical Scriber. All rights reserved.
            </p>
            <nav className="flex items-center justify-center mt-5 mb-10 " >
                {linksLegal.map(x =>
                    <SecondaryButton
                        label={x.label}
                        href={x.href}
                        key={x.label}
                        className=" text-white/50 h-2 tracking-wide text-sm "
                    />
                )}
            </nav>

        </section>
    )
}