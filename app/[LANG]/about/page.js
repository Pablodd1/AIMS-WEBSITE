import { langAbout } from '@LG_Bank/ABOUT/main';
import CEO_msg from '@UI/ceo_messag';
import PremiumButton from '@UTILS/premium_button';
import SecondaryButton from '@UTILS/secondary_button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
const startWhatsAppChat = () => {
    const phoneNumber = '+1 (786) 970-8366'; // Replace with the actual WhatsApp number
    const message = encodeURIComponent("Hello Sir, I'm interested in your AI Medical Scriber. Can we talk about this?");
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        if (/WhatsApp/i.test(navigator.userAgent)) {
            window.location.href = url;
        } else { window.open(url, '_blank'); }
    } else {
        window.open(url, '_blank');
    }

};

let team = [
    {
        title: "Mylene Carreres",
        des: "CFO",
        img: 'ai-team-1'
    },
    {
        title: "Ivan Islamaj",
        des: "Medical Consultant",
        img: 'ai-team-2'
    },
    {
        title: "Orlando Diaz",
        des: "CFO Accountant",
        img: 'ai-team-3'
    }
]

export default async function AboutUs({ params }) {
    const lang = (await params).LANG
    const mv = await langAbout(lang, 'visions')

    return (
        <>
            <CEO_msg lang={lang} />
            {/* <Query startWhatsAppChat={startWhatsAppChat} component={'ceo'} /> */}
            <ul className=' mx-12 sm:mx-16 md:mx-20 lg:mx-28 xl:mx-auto lg:max-w-6xl text-center md:text-left my-16 flex-wrap flex items-center justify-start xl:justify-evenly' >
                {team.map((x, i) => {
                    return (
                        <li
                            key={i}
                            className='my-2 mx-auto md:mx-2 w-fit sm:w-60 md:w-72 px-8 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-1 lg:py-2   '
                        >
                            <img
                                src={`/team/${x.img}.png`}
                                alt={x.title}
                                width={512}
                                height={512}
                                className=' w-44 border border-primary border-dashed rounded-full shadow-2xl'
                            />
                            <h2 className=' text-primary  text-xl lg:text-2xl font-bold font-sans mt-2 ' >
                                {x.title}
                            </h2>
                            <p className=' text-sm lg:text-md' >
                                {x.des}
                            </p>
                        </li>
                    )
                })}


            </ul>

            <section className='my-32 px-2 mx-auto max-w-fit sm:max-w-2xl  md:max-w-4xl xl:max-w-6xl' >
                <article className='  my-6 mx-auto w-4/5  ' >
                    <h1 className='text-4xl font-semibold font-sans my-2 ' >
                        {mv.vision_h}
                    </h1>
                    <p className='' >
                        {mv.vision}
                    </p>
                    <br />
                    <h1 className='text-4xl font-semibold font-sans my-2 ' >
                        {mv.mission_h}
                    </h1>
                    <p className='' >
                        {mv.mission}
                    </p>
                    <br />
                    <PremiumButton
                        label={mv.btn}
                        href={`/${lang}/get-started`}
                        className="w-fit"
                    />
                </article>
                <ul className=' my-16  mx-12 sm:mx-16 md:mx-20 lg:mx-28 xl:mx-auto max-w-fit lg:max-w-6xl flex-wrap flex items-center justify-start xl:justify-evenly' >
                    {(await langAbout(lang, 'contact')).map((x, i) => {
                        return (
                            <li
                                key={i}
                                className='my-2 mx-2 w-full sm:w-60 md:w-72 px-8 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-1 lg:py-2 shadow-md shadow-primary border-2 border-primary border-double rounded-tl-3xl rounded-br-3xl '
                            >
                                <h2 className=' flex items-center text-primary text-lg lg:text-xl font-bold font-sans my-2 ' >
                                    <Image
                                        src={`/svg/${x.icon}.svg`}
                                        className='inline-flex mr-1 w-4 lg:w-5'
                                        height={45} width={20}
                                        alt={x.head}
                                    />
                                    {x.head}
                                </h2>
                                <p className=' text-sm lg:text-md' >
                                    {x.msg}
                                </p>
                                <SecondaryButton
                                    label={`${x.contact}`}
                                    href={x.action}
                                    withArrow
                                    className="border-none font-semibold text-sm "
                                />
                            </li>
                        );
                    })}
                </ul>
            </section>
        </>
    )
}
