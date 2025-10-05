import SecondaryButton from "@UTILS/secondary_button";
import { links, linksLegal } from "./assets/data/resources";

export default function Footer() {

    return (
        <section className="pt-14 pb-5 h-[326px] bg-black text-bg flex flex-col" >
            <nav className="flex items-center flex-wrap max-w-2/3 mx-auto justify-center gap-y-3 " >
                {links.map(x =>
                    <SecondaryButton
                        label={x.label}
                        href={x.href}
                        key={x.label}
                        className=" border-r-2 last:border-0 border-current/45 px-3 h-5 tracking-wide "
                    />
                )}
            </nav>
            <footer className="mt-auto  mb-5 justify-self-end py-5 " >

                <p className=" text-sm text-center py-3.5" >
                    © 2025 Aimedical Scriber. All rights reserved.
                </p>
                <nav className="flex items-center justify-center " >
                    {linksLegal.map(x =>
                        <SecondaryButton
                            label={x.label}
                            href={x.href}
                            key={x.label}
                            className=" text-white/50 h-2 tracking-wide text-sm "
                        />
                    )}
                </nav>
            </footer>

        </section>
    )
}