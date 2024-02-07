import React, { lazy, Suspense, useMemo } from 'react';
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import getScrollAnimation from '../assets/utils/getScrollAnimation';
import { useDispatch } from 'react-redux';
import { AiOutlineAim, } from 'react-icons/ai'
import { LuTimerReset, } from 'react-icons/lu'
import { FaOpencart } from "react-icons/fa";
import { GiThreeLeaves } from "react-icons/gi";
import { RiWhatsappLine } from "react-icons/ri";
import Typewriter from '../components/Home.slaves/leafs/TypeWriter';
import ScrollAnimationWrapper from '../assets/utils/ScrollAnimationWrapper';
import LoadingIndicator from '../Common/loading';


const Feature = lazy(() => import('../components/Home.slaves/features'));
const Pricing = lazy(() => import('../components/Home.slaves/pricing'));
const CustomRadioButtons = lazy(() => import('../components/Home.slaves/custonRadioButtons'));

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
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  const languageCode = i18n.language;
  const listUser = [
    {
      name: t('ana.accuracy'),
      number: "95-98%",
      icon: <AiOutlineAim size={'1.5rem'} />,
      color: 'text-teal-500',
      shade: "bg-teal-100"
    },
    {
      name: t('ana.timeSaving'),
      number: "98%",
      icon: <LuTimerReset size={'1.5rem'} />,
      color: 'text-teal-500',
      shade: "bg-teal-100"
    },
    {
      name: t('ana.paperWork'),
      number: <span>&#8776;0</span>,
      icon: <GiThreeLeaves size={'1.5rem'} />,
      color: 'text-teal-500',
      shade: "bg-teal-100"
    },
  ]
  const handleBooking = (x) => { dispatch({ type: 'SET_BOOKING', payload: x, }); }

  return (
    <div>
      <Helmet
        htmlAttributes={{
          lang: languageCode
        }}
      >
        <title>{t('AIMS')}</title>
        <meta name="description" content="Transforming medical documentation with AI Medical Scriber - Streamline coding, billing, and documentation. Enhance your medical practice with our advanced AI technology." />
        <meta name="keywords" content="AI, Artificial Intelligence, Medical Coding, Medical Billing, AI Medical Scribe, Virtual Assistent, medical practice " />
        <link rel="preload" href="/aims-logo-black.webp" as="image" />
        <link rel="preload" href="/images/ai-cover.webp" as="image" />
      </Helmet>

      <div
        style={{
          pt: 0,
          position: 'fixed',
          top: 0,
          height: '100vh',
          width: '100%',
          zIndex: -1,
          backgroundImage: `url(/images/cover-AIMS.webp)`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: '20% center',

        }}
      >{' '}
      </div>


      <div
        className="py-4"
      >
        <div className="max-w-screen-xl bg-blue-300 mt-15 px-8 xl:px-16 mx-auto overflow-y-visible rounded-3xl"
          id="about"
          style={{ boxShadow: '15px 15px 15px teal' }}
        >
          <div
            className="grid grid-flow-row sm:grid-flow-col grid-rows-2  md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16"
          >
            <div className=" flex flex-col justify-center items-start row-start-2 sm:row-start-1 overflow-hidden">
              <h1
                className="text-3xl lg:text-4xl xl:text-5xl font-medium text-black-100 leading-normal"
              >
                {t('AIMedical')} <strong>{t('Scriber')}</strong>.
              </h1>
              <p className="text-white-900 my-4 ">
                {t('firstS')}
              </p>
              {/* <p className="text-teal-600 mb-6">
                <b>{t('CTAS')}</b>
              </p> */}
              <Typewriter
                classNames="text-md lg:text-xl xl:text-2xl font-medium text-teal-50 antialiased"
                classNamesBox=""
                classNamesUL="list-disc list-inside"
              />
              <div className="flex flex-col items-start sm:items-center sm:flex-row  ">
                <button
                  size="larger"
                  aria-label={t('buttons.tryNow')}
                  variant="contained"
                  icon={<FaOpencart size={'1.25rem'} />}
                  onClick={() => handleBooking(true)}
                  className="m-2 mt-10 p-2  rounded-lg shadow-2xl font-semibold uppercase tracking-wide bg-CTA-500 text-CTA-800 w-52 transition-colors duration-300 hover:bg-CTA-600 hover:text-CTA-900"
                >

                  {t('buttons.bookNow')}
                </button>
                <div className="group inline-block ml-2 sm:ml-0">
                  <button aria-label={t('buttons.SWM')} className="bg-gray-300 rounded-3xl pr-4 shadow-lg mt-8 group-hover:shadow-xl group-hover:bg-blue-200 group-hover:text-black-100">
                    <RiWhatsappLine size={'2.5rem'} onClick={startWhatsAppChat} className="p-1 mr-2 shadow-2xl sm:text-xxl inline text-green-100 bg-teal-700 rounded-xl group-hover:bg-teal-100 group-hover:text-green-600" />
                    Text or Call
                  </button>

                </div>
              </div>


            </div>
            <div className="flex w-full sm:col-start-2 ">
              <div className="h-full w-full overflow-hidden" variants={scrollAnimation}>
                <figure className=" relative">
                  <img
                    src={'/aims-logo-black.webp'}
                    alt="AI Medical Scriber Live Transcribe"
                    quality={100}
                    width={612}
                    height={383}
                    layout="responsive"
                  />
                  <figcaption className="w-full text-center p-2">
                    {t('liveTranscript')}
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>

          <div className="relative w-full flex translate-y-8 shadow-xl ring-teal-500 ">
            <ScrollAnimationWrapper
              className="rounded-3xl w-full grid bg-blue-400 grid-flow-row sm:grid-flow-row grid-cols-1 sm:grid-cols-3 py-9 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-gray-100 z-10">
              {listUser.map((listUsers, index) => (
                <motion.div
                  className="flex items-center justify-start sm:justify-center py-4 sm:py-6 w-8/12 px-4 sm:w-auto mx-auto sm:mx-0"
                  key={index}
                  custom={{ duration: 2 + index }}
                  variants={scrollAnimation}
                >
                  <div className="flex mx-auto w-40 sm:w-auto">
                    <div className={`flex items-center justify-center ${listUsers.shade} ${listUsers.color} w-12 h-12 mr-6 rounded-full`}>
                      {listUsers.icon}
                    </div>
                    <div className="flex flex-col">
                      <p className="text-xl text-black-600 font-bold">
                        {listUsers.number}
                      </p>
                      <p className="text-lg text-black-500">{listUsers.name}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </ScrollAnimationWrapper>
            <div
              className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-64 sm:h-48 top-0 mt-8 mx-auto left-0 right-0"
              style={{ filter: "blur(114px)" }}
            >

            </div>
          </div>
        </div>
      </div>
      <Suspense fallback={<LoadingIndicator />}>
        <Feature />
        <CustomRadioButtons head={t('headings.howItWorks')} data={t('howItWorks')} />
        <Pricing />
      </Suspense>
    </div>
  );
}
