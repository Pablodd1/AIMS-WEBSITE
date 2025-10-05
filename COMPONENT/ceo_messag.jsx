import { langAbout } from "@LG_Bank/ABOUT/main";
import AI_Icon from "@UTILS/AI_icon";
import SecondaryButton from "@UTILS/secondary_button";
import Image from "next/image";
import Link from "next/link";


export default async function CEO_msg({ lang = 'en' }) {
    const dict = await langAbout(lang, 'ceo')
    return (
        <section className="relative h-fit shadow-md shadow-gray-800 " >
            <div className="bg-gradient-to-tr from-[#22C55E] via-[#40e0d0] via-25% to-65% to-[#3B82F6] min-h-screen w-full absolute right-0 bottom-0 -z-10 " />
            <AI_Icon className={" absolute top-15 left-15 self-start mb-25 mt-auto mx-10 w-auto h-32 my-animi fill-primary/25 group-hover:fill-white "} />
            <article className='max-w-5xl px-2 pt-4 mx-auto flex flex-col lg:flex-row  gap-10 items-end justify-center' >
                <figure className='pt-24   flex-shrink max-w-md h-full relative  border-b  mx-auto' >
                    <Image
                        src={'/team/ceo.webp'}
                        className=' w-4/5 mx-auto md:w-full mt-auto  mb-0 self-end '
                        height={628} width={520}
                        alt='AI Medical Scriber CEO Jasmel Acosta'
                    />
                </figure>
                <aside className=' py-5 lg:py-15 flex-grow w-4/5 lg:w-full max-w-md md:max-w-xl lg:max-w-2xl mx-auto ' >
                    <h3 className='text-4xl sm:text-5xl text-black font-serif ' >
                        <strong className="mr-3" >
                            {"Jasmel"}
                        </strong>
                        {"Acosta"}
                    </h3>
                    <p className='my-4  text-sm sm:text-lg lg:text-xl ' >
                        {dict.p}
                    </p>
                    <footer className='flex ' >
                        <SecondaryButton
                            label={dict.btn}
                            href={'mailto:Jasmel@aimedicalscriber.com'}
                            withArrow
                            className="  h-full tracking-wider "
                        />

                    </footer>
                </aside>
            </article>
        </section>
    )
}