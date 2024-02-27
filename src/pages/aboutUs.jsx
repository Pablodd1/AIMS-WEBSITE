import React from 'react';
import { Helmet } from "react-helmet";
import { useTranslation } from 'react-i18next';
import Query from '../components/Home.slaves/query';
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
    const { i18n } = useTranslation();
    const { t } = useTranslation()
    const languageCode = i18n.language;
    let contact = [
        {
            head: t('headings.support'),
            msg: 'We are always here to help.',
            action: 'mailto:Jasmel@aimedicalscriber.com',
            icon: "support-blue",
            contact: 'Email Us'
        },
        {
            head: t('headings.faqs'),
            msg: 'Explore predefined queries.',
            action: 'https://aimedicalscriber.com/customercare',
            icon: "article",
            contact: 'Explore FAQs'
        },
        {
            head: t('headings.phoneContact'),
            msg: `24/7 ${t('headings.service')}`,
            action: 'tel:1-(786)743-2499',
            icon: "phone",
            contact: 'Call Us'
        },
    ]

    return (
        <>
            <Helmet
                htmlAttributes={{
                    lang: languageCode
                }}
            >
                <meta charSet="utf-8" />
                <title>About Us | AI Medical Scriber</title>
                <meta name="description" content="Learn about AI Medical Scriber - Our mission is to revolutionize medical documentation. Discover how our AI software empowers healthcare professionals." />
                <meta name="keywords" content="ai services,virtual administrative assistant,document management,document controller,technical documentation,ai scribe medical,ai medical scribing" />
            </Helmet>
            <Query startWhatsAppChat={startWhatsAppChat} component={'ceo'} />
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
                        {t('headings.vision')}
                    </h1>
                    <p className='' >
                        {t('legals.Vision')}
                    </p>
                    <br />
                    <h1 className='text-4xl font-semibold font-sans my-2 ' >
                        {t('headings.mission')}
                    </h1>
                    <p className='' >
                        {t('legals.CompanyMission')}
                    </p>
                    <br />
                    <button aria-label={t('buttons.joinUs')} className='  mx-auto font-semibold uppercase tracking-wider px-12 py-1 border-2 border-primary bg-primary text-white rounded-lg shadow-md shadow-gray-400 hover:bg-white hover:text-primary ' >
                        {t('buttons.joinUs')}
                    </button>
                </article>
                <ul className=' my-16  mx-12 sm:mx-16 md:mx-20 lg:mx-28 xl:mx-auto max-w-fit lg:max-w-6xl flex-wrap flex items-center justify-start xl:justify-evenly' >
                    {contact.map((x, i) => {
                        return (
                            <li
                                key={i}
                                className='my-2 mx-2 w-full sm:w-60 md:w-72 px-8 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-1 lg:py-2 shadow-md shadow-primary border-2 border-primary border-double rounded-tl-3xl rounded-br-3xl '
                            >
                                <h2 className=' flex items-center text-primary text-lg lg:text-xl font-bold font-sans my-2 ' >
                                    <img
                                        src={`/svg/${x.icon}.svg`}
                                        className='inline-flex mr-1 w-4 lg:w-5'
                                        height={'auto'} width={20}
                                        alt={x.head}
                                    />
                                    {x.head}
                                </h2>
                                <p className=' text-sm lg:text-md' >
                                    {x.msg}
                                </p>
                                <button
                                    className=' flex items-center px-3 lg:px-4 py-1 mx-2 my-2 bg-primary text-xs lg:text-sm text-white hover:scale-x-110  border border-primary rounded-full shadow-md shadow-gray-400 '
                                    aria-label={x.head}
                                    onClick={() => window.location.href = x.action}>
                                    {x.contact}
                                    <img
                                        src={'/svg/arrow.svg'}
                                        className='ml-2 inline-flex w-3 lg:w-4'
                                        height={'auto'} width={15}
                                        alt='ai-robo svg'
                                    />
                                </button>
                            </li>
                        );
                    })}
                </ul>
            </section>
            <Query startWhatsAppChat={startWhatsAppChat} component={'form'} />
        </>
    )
}
