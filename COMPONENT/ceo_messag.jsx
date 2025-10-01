import AI_Icon from "@UTILS/AI_icon";
import SecondaryButton from "@UTILS/secondary_button";
import Image from "next/image";
import Link from "next/link";


export default function CEO_msg() {
    return (
        <section className="relative h-fit shadow-md shadow-gray-800 " >
            <div className="bg-gradient-to-tr from-[#22C55E] via-[#40e0d0] via-25% to-65% to-[#3B82F6] min-h-screen w-full absolute right-0 bottom-0 -z-10 " />
            <AI_Icon className={" absolute top-15 left-15 self-start mb-25 mt-auto mx-10 w-auto h-32 my-animi fill-primary/25 group-hover:fill-white "} />
            <article className='max-w-5xl px-2 pt-4 mx-auto flex flex-col md:flex-row  gap-10 items-end justify-center' >
                <figure className='pt-24   flex-shrink max-w-md h-full relative   mx-auto' >
                    <Image
                        src={'/team/ceo.webp'}
                        className=' md:w-full mt-auto mb-0 self-end '
                        height={628} width={520}
                        alt='AI Medical Scriber CEO Jasmel Acosta'
                    />
                </figure>
                <aside className=' py-15 flex-grow  w-full max-w-md md:max-w-xl lg:max-w-2xl mx-auto ' >
                    <h3 className='text-4xl sm:text-5xl text-black font-serif ' >
                        <strong className="mr-3" >
                            {"Jasmel"}
                        </strong>
                        {"Acosta"}
                    </h3>
                    <p className='my-4  text-sm sm:text-lg lg:text-xl ' >
                        {"As the CEO of AI Medical Scriber, I am proud to lead a team that is dedicated to transforming healthcare through artificial intelligence. We are committed to improving the lives of medical practitioners and patients alike by revolutionizing medical documentation and enhancing patient care."}
                    </p>
                    <footer className='flex ' >
                        <SecondaryButton
                            label={"Send Email"}
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