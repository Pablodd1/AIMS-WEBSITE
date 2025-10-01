'use client'
import PremiumButton from "@UTILS/premium_button";
import SecondaryButton from "@UTILS/secondary_button";
import React, { useRef } from "react";
// import { motion, useInView } from "framer-motion";
// import { useTranslation } from "react-i18next";
import { FaOpencart } from "react-icons/fa";

const data = {
    label: "Medical Scribe",
    description: 'Step into the future of medical transcription with our cutting-edge AI solution. Our free demo gives you full access to the tools that automate documentation, ensuring speed and precision. Try it now and experience how AI can transform your workflow and improve efficiency at your practice.',
    subtitle: 'AI powered ',
    footerNote: "Don't get left behind - the AI medical scribe revolution has arrived. Request a demo today and discover how this technology can instantly turbocharge your productivity, profitability, and passion for better patient care."

}
const UseCase_Home = () => {
    // const { t } = useTranslation();
    const ref = useRef(null)
    // const isInView = useInView(ref)

    return (
        <section className="text-xs md:text-sm lg:text-md font-sans bg-gradient-to-bl from-[#000080] to-[#00bfff] shadow-xl shadow-gray-400 text-white max-w-screen-full overflow-hidden pt-20 pb-20" >
            <article
                className="max-w-6xl px-6 mt-8 mb-6 sm:mt-14 sm:mb-14 w-full  mx-auto" ref={ref}
            >
                <h2
                    // animate={isInView ?
                    //     { opacity: 1, x: 0 } :
                    //     { opacity: 0, x: 150 }
                    // }
                    // transition={{ duration: 1 }}
                    className="mb-4 w-full text-3xl lg:text-4xl xl:text-5xl font-sans font-bold max-w-md md:max-w-xl lg:max-w-4xl xl:max-w-5xl">
                    <strong className="uppercase text-secondary bg-black rounded-lg px-2.5 py-0.5 my-1 font-bold text-xs lg:text-sm tracking-wider">
                        {data.subtitle}
                    </strong>
                    <br />
                    {data.label}
                </h2>
                <p
                    // animate={isInView ?
                    //     { opacity: 1, x: 0 } :
                    //     { opacity: 0, x: 150 }
                    // }
                    // transition={{ duration: 1, delay: 0.2 }}
                    className="my-2 w-11/12 text-bg/85 text-xl leading-tight ">
                    {data.description}
                </p>
                <SecondaryButton
                    label="Learn More"
                    href={''}
                    withArrow
                    className="border-none font-semibold text-sm "
                />
                <section className="my-12" >
                    <video
                        className={' rounded-lg'}
                        controls={false}
                        controlsList="nodownload notimeline play volume fullscreen"
                        autoPlay playsInline muted loop preload="auto"
                        style={{ height: 'auto', width: "100%" }}
                        disablePictureInPicture
                    >
                        <source src={`/video/Empowering.mp4`} type={"video/mp4"} />
                    </video>
                </section>
                <PremiumButton
                    label="Try Now — It's Free"
                    href="#"
                    className="w-fit"
                />
                <p
                    // transition={{ duration: 1, delay: 0.6 }}
                    className="mb-8 w-full border-t-4 border-text my-10 py-2 pr-10 text-gray-900">
                    {data.footerNote}
                </p>

            </article>
        </section>

    );
};

export default UseCase_Home;
