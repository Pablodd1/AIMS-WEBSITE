import { langHome } from "@LG_Bank/HOME/main";
import AI_Icon from "@UTILS/AI_icon";
import PremiumButton from "@UTILS/premium_button";
import SecondaryButton from "@UTILS/secondary_button";
import Image from "next/image";


export default async function Benefit_Home({ lang }) {
    const dict = await langHome(lang, 'why_AIMS')

    return (
        // <section className="relative h-fit " >
        //<div className="bg-gradient-to-tr from-[#22C55E] via-[#40e0d0] via-25% to-65% to-[#3B82F6] min-h-screen w-full absolute right-0 bottom-0 -z-10 " /> 
        <section className="relative flex flex-col-reverse max-w-7xl mx-auto lg:flex-row lg:h-screen items-center " >
            <article className="py-12 md:py-24 lg:py-32 lg:self-end px-5  h-fit lg:w-1/2  " >
                <AI_Icon className={" self-start mb-12 lg:mb-25 mt-auto mx-10 w-auto h-32 my-animi fill-primary/25 group-hover:fill-white "} />
                {dict.subtitle.split('~n').map((x, i) =>
                    <p key={i} className={`text-lg font-semibold ${i == 0 ? 'uppercase tracking-wider bg-black rounded-md w-fit px-1 text-green-400 ' : 'w-4/5 text-green-700 '} `}>
                        {x}
                    </p>
                )}
                <h2 className=" text-3xl lg:text-5xl mb-5 mt-1 capitalize w-4/5 lg:w-full font-semibold  " >
                    {dict.h2}
                </h2>
                <p className=" w-4/5 " >
                    {dict.p}
                </p>
                <footer className="my-12 flex flex-col lg:flex-row items-start  lg:items-center justify-start gap-5 " >
                    <PremiumButton
                        label={dict.btn1}
                        href={`/${lang}/get-started`}
                    />
                    <SecondaryButton
                        label={dict.btn2}
                        href={`/${lang}/technology`}
                        withArrow
                        className="border-none font-semibold text-sm "
                    />
                </footer>
            </article>
            <figure className="w-full h-fit lg:w-1/2 p-2 relative">
                <Image
                    src={`/images/AIMS-Banner.png`}
                    height={1920}
                    width={1080}
                    alt="AIMS benefit"
                    className=" w-full h-fit mx-auto"
                />
            </figure>
        </section>
        // </section>
    )
}