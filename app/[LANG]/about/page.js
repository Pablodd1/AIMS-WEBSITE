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

export default function AboutUs({ styles }) {
    let contact = [
        {
            head: "support",
            msg: 'We are always here to help.',
            action: 'mailto:Jasmel@aimedicalscriber.com',
            icon: "support-blue",
            contact: 'Email Us'
        },
        {
            head: "FAQ",
            msg: 'Explore predefined queries.',
            action: 'https://aimedicalscriber.com/customercare',
            icon: "article",
            contact: 'Explore FAQs'
        },
        {
            head: "Contact",
            msg: `24/7 services`,
            action: 'tel:1-(786)743-2499',
            icon: "phone",
            contact: 'Call Us'
        },
    ]

    return (
        <>
        <CEO_msg />
            {/* <Query startWhatsAppChat={startWhatsAppChat} component={'ceo'} /> */}
            <ul className=' mx-12 sm:mx-16 md:mx-20 lg:mx-28 xl:mx-auto lg:max-w-6xl my-16 flex-wrap flex items-center justify-start xl:justify-evenly' >
                {team.map((x, i) => {
                    return (
                        <li
                            key={i}
                            className='my-2 mx-2 w-full sm:w-60 md:w-72 px-8 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-1 lg:py-2   '
                        >
                            <img
                                src={`/team/${x.img}.png`}
                                alt={x.title}
                                width={512}
                                height={512}
                                className=' w-44 border border-primary border-dashed rounded-full shadow-2xl'
                            />
                            <h2 className=' text-primary text-xl lg:text-2xl font-bold font-sans mt-2 ' >
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
                        {"Vision"}
                    </h1>
                    <p className='' >
                        Our vision is to be the leading provider of AI-powered solutions in the healthcare industry. We strive to continuously innovate and improve our products, delivering seamless and efficient medical documentation solutions that positively impact medical practices and patient outcomes.
                    </p>
                    <br />
                    <h1 className='text-4xl font-semibold font-sans my-2 ' >
                        {"Mission"}
                    </h1>
                    <p className='' >
                        At AI Medical Scriber, our mission is to simplify medical documentation and enhance patient care through our virtual AI medical scribe assistant. We aim to revolutionize the healthcare industry with cutting-edge technology.
                    </p>
                    <br />
                    <PremiumButton
                        label="Try AI Now — It's Free"
                        href="#"
                        className="w-fit"
                    />
                </article>
                <ul className=' my-16  mx-12 sm:mx-16 md:mx-20 lg:mx-28 xl:mx-auto max-w-fit lg:max-w-6xl flex-wrap flex items-center justify-start xl:justify-evenly' >
                    {contact.map((x, i) => {
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
                                    label={x.contact}
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
