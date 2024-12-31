import React, { lazy, Suspense, useRef } from 'react';
import { Helmet } from "react-helmet";
import { motion, useInView } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useDispatch, } from 'react-redux';
import { AiOutlineAim, } from 'react-icons/ai'
import { LuTimerReset, } from 'react-icons/lu'
import { FaOpencart } from "react-icons/fa";
import { GiThreeLeaves } from "react-icons/gi";
import LoadingIndicator from '../Common/loading';
import LinkToMBMB from '../components/Home.slaves/leafs/linkToMBMB';
import AudioPlayer from '../components/Home.slaves/audio';


const Feature = lazy(() => import('../components/Home.slaves/features'));
const AppUI = lazy(() => import('../components/Home.slaves/appUI'));
const Query = lazy(() => import('../components/Home.slaves/query'));
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

export default function Home() {
  const { i18n } = useTranslation();
  const dispatch = useDispatch();
  const { t } = useTranslation()
  const ref = useRef(null)
  const isInView = useInView(ref)
  const languageCode = i18n.language;
  const handleBooking = (x) => { dispatch({ type: 'SET_BOOKING', payload: x, }); }
  const listUser = [
    {
      name: t('homePage.heroSection.facts.accuracy'),
      number: "95-98%",
      icon: <AiOutlineAim size={'1.5rem'} />,
      color: 'text-teal-500',
      shade: "bg-teal-100"
    },
    {
      name: t('homePage.heroSection.facts.timeSaving'),
      number: "98%",
      icon: <LuTimerReset size={'1.5rem'} />,
      color: 'text-teal-500',
      shade: "bg-teal-100"
    },
    {
      name: t('homePage.heroSection.facts.paperWork'),
      number: <span>&#8776;0</span>,
      icon: <GiThreeLeaves size={'1.5rem'} />,
      color: 'text-teal-500',
      shade: "bg-teal-100"
    },
  ]
  return (
    <div className='' >
      <Helmet
        htmlAttributes={{
          lang: languageCode
        }}
      >
        <title>{t('homePage.pageTitle')}</title>
        <meta name="description" content="Streamline healthcare documentation with AI Medical Scriber. Automate Medical billing, coding, transcription & more. Book AI Medical Scriber App and Enhance patient care today!" />
        <meta name="keywords" content="
        Artificial intelligence Medical billing, 
        medical coding artificial intelligence, 
        certified medical billing and coding, 
        medical insurance billing, 
        medical transcription services, 
        transcription AI, 
        healthcare billing and coding, 
        healthcare documentation, 
        AI transcribe, 
        AI transcribe audio to text, 
        AI transcription service, 
        healthcare billing services, 
        live transcribe app, 
         in one app
         "/>
        <link rel="canonical" href="https://aimedicalscriber.com/" />
      </Helmet>

      <section
        className="min-h-screen w-screen overflow-hidden  mt-4 px-8 xl:px-16 mx-auto flex flex-col justify-center items-center"
      >
        <div className=' min-h-full w-screen -z-10 overflow-hidden ' >
          <img
            src={'/svg/ai-3.svg'}
            className='absolute top-6 right-0 opacity-25 p-6 w-28 sm:w-44 md:w-52 lg:w-1/4 xl:w-1/6 backdrop-blur-lg drop-shadow-cta shadow-lg shadow-cta border-8 border-double border-cta rounded-full'
            height={'auto'} width={260}
            alt='ai-3 svg'
          />
          <img
            src={'/svg/ai-robo.svg'}
            className='absolute bottom-0 -left-20  w-44 md:w-1/3 lg:w-1/4 xl:w-1/6  opacity-20 '
            height={'auto'} width={260}
            alt='ai-robo svg'
          />
        </div>
        <img
          src={'/logo-short.png'}
          className='my-4 w-64 sm:w-72 lg:w-96 mx-auto'
          height={'auto'} width={320}
          alt='AI Medical Scriber short logo'
        />
        <h1
          className=" mb-4 w-full text-primary text-3xl lg:text-4xl xl:text-5xl font-sans font-bold max-w-md md:max-w-xl lg:max-w-4xl xl:max-w-5xl"
        >
          <strong className='text-black  uppercase font-semibold text-sm lg:text-lg tracking-wider ' >
            {t('homePage.heroSection.h1.0')}
          </strong>
          <br />
          {t('homePage.heroSection.h1.1')}
        </h1>
        <p className=" max-w-md md:max-w-xl lg:max-w-4xl xl:max-w-5xl lg:text-lg px-2 my-1">{t('homePage.heroSection.p1')}</p>
        <p className="max-w-md md:max-w-xl lg:max-w-4xl xl:max-w-5xl lg:text-lg px-2 mb-2 lg:mb-4">{t('homePage.heroSection.p2')}</p>
        <article ref={ref} className="text-sm sm:text-md w-full  mx-auto self-start flex items-center flex-row  max-w-md md:max-w-xl lg:max-w-4xl xl:max-w-5xl ">
          <motion.button
            aria-label={t('buttons.SWM')}
            className="drop-shadow-lg hover:drop-shadow-cta "
            animate={isInView ? { y: 0, opacity: 1 } : { opacity: 0, y: 50 }}
            transition={{ type: 'spring', bounce: 0.65, duration: isInView ? 1 : 0 }}
            onClick={startWhatsAppChat}
          >
            <img
              src={'/svg/whatsapp.svg'}
              className="inline "
              height={'auto'} width={35}
              alt='AI Medical Scriber whatsapp contact'
            />
          </motion.button>
          <motion.button
            size="larger"
            aria-label={t('buttons.tryNow')}
            variant="contained"
            icon={<FaOpencart size={'1.25rem'} />}
            onClick={() => handleBooking(true)}
            animate={isInView ? { y: 0, opacity: 1 } : { opacity: 0, y: 50 }}
            transition={{ type: 'spring', bounce: 0.65, duration: isInView ? 1 : 0 }}
            className="py-2 px-6 sm:px-8 mx-2 rounded-full   hover:shadow-lg hover:shadow-cta font-semibold uppercase tracking-wide bg-black text-white  transition-all duration-75 ease-in-out hover:bg-cta hover:text-black"
          >
            {t('homePage.heroSection.buttons.bookNow')}
          </motion.button>
        </article>
        <ul className="my-4 w-full lg:w-5/6 mx-auto rounded-3xl  overflow-hidden  max-w-md md:max-w-xl lg:max-w-4xl xl:max-w-5xl grid grid-flow-row grid-cols-3 divide-x-2 divide-primary ">
          {listUser.map((listUsers, i) => (
            <motion.li
              className="  flex items-center justify-start sm:justify-center py-2 sm:py-4 sm:px-2 w-auto mx-0"
              key={i}
              animate={isInView ? { y: 0, opacity: 1 } : { opacity: 0, y: (i + 1) * 25 }}
              transition={{ type: 'spring', bounce: 0.65, duration: isInView ? (i * 0.1) + 2 : 0 }}
            >
              <div className="flex mx-auto ">
                <div className={`flex items-center justify-center text-primary px-1 sm:px-2 sm:mr-2 `}>
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
            </motion.li>
          ))}
        </ul>
      </section>
      <Suspense fallback={<LoadingIndicator />}>
        <Feature />
        <AppUI startWhatsAppChat={startWhatsAppChat} />
        <Query startWhatsAppChat={startWhatsAppChat} component={'ceo'} />
        <Query startWhatsAppChat={startWhatsAppChat} component={'form'} />
      </Suspense>
      <LinkToMBMB />
    </div>
  );
}
