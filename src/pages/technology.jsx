import React, { lazy } from 'react';
import { Card, CardMedia, Grid, Typography, Zoom } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';


import whyUs1 from "../assets/illusters/medical-chat.webp";
import whyUs2 from "../assets/illusters/medical-report.webp";
import whyUs3 from "../assets/illusters/reliable.webp";
import { motion, useInView } from "framer-motion";
import video from "../assets/data/ai.mp4";

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
import TransparentWord from '../components/technology.slaves/transparentWords';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Query from '../components/Home.slaves/query';
import { GiThreeLeaves } from 'react-icons/gi';
import { LuTimerReset } from 'react-icons/lu';
import { AiOutlineAim } from 'react-icons/ai';
const SellingPoints = lazy(() => import('../components/technology.slaves/sellingPoints'));
const VideoComponent = lazy(() => import('../components/technology.slaves/autoplayVideo'));
const TryLearnButtons = lazy(() => import('../components/common.slaves/try learn button'));

export default function Technology({ styles }) {
    const whyUSRef = React.useRef(null);
    const dispatch = useDispatch();
    const [whyUS, setWhyUS] = React.useState(false);
    const [showVideo, setShowVideo] = React.useState(false);
    const { t } = useTranslation();
    const { i18n } = useTranslation();
    const languageCode = i18n.language;
    const handleBooking = (x) => { dispatch({ type: 'SET_BOOKING', payload: x, }); }


    React.useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                setWhyUS(false);

                if (entry.isIntersecting) {
                    setTimeout(() => {
                        setWhyUS(true);
                    }, 500);
                }
            });
        });

        if (whyUSRef.current) {
            observer.observe(whyUSRef.current);
        }

        return () => {
            if (whyUSRef.current) {
                observer.unobserve(whyUSRef.current);
            }
        };
    }, []);


    const data = [
        {
            heading: t('features.head1'),
            txt: t('features.txt1'),
            src: "seamless-revolution"
        },
        {
            heading: t('features.head2'),
            txt: t('features.txt2'),
            src: "patient-care"
        },
        {
            heading: t('features.head3'),
            txt: t('features.txt3'),
            src: "hassle-free-ai"
        },
        {
            heading: t('features.head4'),
            txt: t('features.txt4'),
            src: "ai-powered-care"
        },
        {
            heading: t('features.head5'),
            txt: t('features.txt5'),
            src: "innovative-future"
        }
    ];
    const listUser = [
        {
            name: t('homePage.heroSection.facts.accuracy'),
            number: "95-98%",
            icon: <AiOutlineAim size={'3rem'} />,
            color: 'text-teal-500',
            shade: "bg-teal-100"
        },
        {
            name: t('homePage.heroSection.facts.timeSaving'),
            number: "98%",
            icon: <LuTimerReset size={'3rem'} />,
            color: 'text-teal-500',
            shade: "bg-teal-100"
        },
        {
            name: t('homePage.heroSection.facts.paperWork'),
            number: <span>&#8776;0</span>,
            icon: <GiThreeLeaves size={'3rem'} />,
            color: 'text-teal-500',
            shade: "bg-teal-100"
        },
    ]
    const whyUs = [
        {
            title: t("headings.customerSupport"),
            des: "24/7",
            img: "support"
        },
        {
            title: t("headings.freeDemo"),
            des: `1 ${t("headings.month")}`,
            img: "demo"
        },
        {
            title: `98% ${t("headings.accuracy")}`,
            des: t("headings.verified"),
            img: "accuracy"
        }
    ]




    return (
        <>


            <Helmet htmlAttributes={{ lang: languageCode }}            >
                <meta charSet="utf-8" />
                <title>Technology | AI Medical Scribe</title>
                <meta name="description" content="Discover the cutting-edge technology behind AI Medical Scriber - Harness the power of AI to transcribe and assist in medical coding, billing, and documentation." />
                <meta name="keywords" content="medical coding practice for beginners,ai virtual scribe,virtual, medical transcriptionist,technology" />


            </Helmet>

            <section className=' '>
                <article className='py-16  flex flex-col items-center justify-evenly space-y-10 min-h-screen' >
                    <img
                        src={'/logo.png'}
                        className=' mx-auto md:w-max w-5/6 sm:max-w-xl md:max-w-2xl lg:max-w-5xl rounded-xl '
                        height={'auto'} width={512}
                        alt='ai-robo svg'
                    />
                    <button onClick={() => setShowVideo(true)} class="svg-wrapper w-80 cursor-pointer">
                        <svg height="60" width="320" xmlns="http://www.w3.org/2000/svg">
                            <rect className="shape w-80 " height="60" />
                        </svg>
                        <div className="text text-xl lg:text-2xl font-semibold uppercase text-center text-white">Learn More</div>
                    </button>
                    <motion.div
                        key={video}
                        animate={showVideo ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className={`z-50 fixed top-20 max-w-7xl w-screen mx-auto `} >
                        <VideoComponent buy={t('homePage.heroSection.buttons.bookNow')} isVisible={showVideo} src={video} onClose={() => setShowVideo(false)} onBuy={() => handleBooking(true)} />
                    </motion.div>
                </article>
                
          <video
            className={' rounded-lg bg-gray-100'}
            controls={false}
            controlsList="nodownload notimeline play volume fullscreen"
            autoPlay playsInline muted loop preload="auto"
            style={{ height: 'auto', width: "100%" }}
            disablePictureInPicture
          >
            <source src={`/videos/AIMS-intro.mp4`} type={"video/mp4"} />
          </video>
                <ul className='max-w-7xl mx-auto px-4 md:px-0' >
                    {data.map((x, i) => (
                        <li key={i} className=' bg-cover px-2 md:px-8 my-44 mx-auto min-h-max lg:h-96 flex flex-col md:flex-row rounded-2xl'
                        >
                            <div className=' flex-grow max-w-4xl min-h-max md:h-96 md:py-4 px-1 md:px-6 rounded-xl contrast-125 backdrop-blur-sm ' >
                                <h3 className='border-b-4 border-primary text-primary text-2xl md:text-3xl lg:text-4xl font-semibold uppercase w-max my-2' >{x.heading}</h3>
                                <p className='text-md md:text-xl lg:text-2xl px-4' >{x.txt}</p>
                                <nav className='px-4 my-4 flex min-w-max' >
                                    <Link to={'/customer-care'} className=' text-lg px-6 py-1 md:py-2 mr-4 border border-secondary shadow-sm shadow-gray-400 bg-opacity-75 bg-secondary rounded-lg' >
                                        Learn More
                                    </Link>
                                    <button href='#'
                                        onClick={() => handleBooking(true)}
                                        className='btn-flip font-semibold  affter:shadow-md before:shadow-lg before:shadow-gray-400 after:shadow-gray-400' data-back={t('homePage.heroSection.buttons.bookNow')} data-front={t('buttons.tryNow')} >
                                    </button>
                                </nav>
                            </div>
                            <img
                                src={`/images/tech/${x.src}.png`}
                                className=' self-center w-2/3 md:w-52 lg:w-auto h-fit lg:h-96 my-2'
                                height={'auto'} width={1024}
                                alt='ai-robo svg'
                            />
                        </li>
                    ))}
                </ul>
                {/* <Grid
                    item container
                    spacing={5}
                    alignItems={'center'}
                    justifyContent='space-between'
                    direction='row'
                    xs={12}
                    sx={styles.techCont}
                >

                    <Grid item xs={12} >
                        <SellingPoints styles={styles} />
                    </Grid>
                    <Grid item xs={12} >
                    </Grid>
                </Grid> */}
                <section
                    ref={whyUSRef}
                    className='mt-20 py-24 bg-primary text-white'
                >

                    <ul className="my-4 w-full lg:w-5/6 mx-auto rounded-3xl  overflow-hidden  max-w-md md:max-w-xl lg:max-w-4xl xl:max-w-5xl grid grid-flow-row grid-cols-3 divide-x-2 divide-primary ">
                        {listUser.map((listUsers, i) => (
                            <li
                                className="  flex items-center justify-start sm:justify-center py-2 sm:py-4 sm:px-2 w-auto mx-0"
                                key={i}
                            >
                                <div className="flex mx-auto ">
                                    <div className={`flex items-center justify-center text-white px-1 sm:px-2 sm:mr-2 `}>
                                        {listUsers.icon}
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-sm sm:text-lg font-semibold">
                                            {listUsers.number}
                                        </p>
                                        <p className=" text-xs sm:text-md ">
                                            {listUsers.name}
                                        </p>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </section>
                <Query startWhatsAppChat={startWhatsAppChat} component={'form'} />

            </section>

        </>
    )
}