import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FaOpencart } from "react-icons/fa";


const Feature = () => {
  const { t } = useTranslation();
  const ref = useRef(null)
  const isInView = useInView(ref)

  return (
    <section className="text-xs md:text-sm lg:text-md font-sans bg-primary shadow-xl shadow-gray-400 text-white max-w-screen-full overflow-hidden my-8 md:my-10 lg:my-24 pt-20 pb-20" >
      <article
        className="max-w-6xl px-6 mt-8 mb-6 sm:mt-14 sm:mb-14 w-full  mx-auto" ref={ref}
      >
        <motion.h2
          animate={isInView ?
            { opacity: 1, x: 0 } :
            { opacity: 0, x: 150 }
          }
          transition={{ duration: 1 }}
          className="mb-4 w-full text-3xl lg:text-4xl xl:text-5xl font-sans font-bold max-w-md md:max-w-xl lg:max-w-4xl xl:max-w-5xl">
          <strong className="uppercase font-semibold text-sm lg:text-lg tracking-wider">
            {t('homePage.secondSection.h2.0')}
          </strong>
          <br />
          {t('homePage.secondSection.h2.1')}
        </motion.h2>
        <motion.p
          animate={isInView ?
            { opacity: 1, x: 0 } :
            { opacity: 0, x: 150 }
          }
          transition={{ duration: 1, delay: 0.2 }}
          className="my-2 w-11/12 mx-auto">
          {t('homePage.secondSection.p1')}
        </motion.p>
        <section className="my-12" >
          <video
            className={' rounded-lg'}
            controls={false}
            controlsList="nodownload notimeline play volume fullscreen"
            autoPlay playsInline muted loop preload="auto"
            style={{ height: 'auto', width: "100%" }}
            disablePictureInPicture
          >
            <source src={`/videos/Empowering.mp4`} type={"video/mp4"} />
          </video>
          <motion.a
            size="larger"
            aria-label={t('buttons.tryNow')}
            variant="contained"
            icon={<FaOpencart size={'1.25rem'} />}
            href={'https://www.aiscribers.com/'}
            target="_blank"
            animate={isInView ? { y: 0, opacity: 1 } : { opacity: 0, y: 50 }}
            transition={{ type: 'spring', bounce: 0.65, duration: isInView ? 1 : 0 }}
            className="py-2 px-6 sm:px-8 mx-2 rounded-full   hover:shadow-lg hover:shadow-cta font-semibold uppercase tracking-wide bg-black text-white  transition-all duration-75 ease-in-out hover:bg-cta hover:text-black"
          >
            {t('homePage.fifthSection.buttons.tryNow')}
          </motion.a>
        </section>
        <motion.p
          animate={isInView ?
            { opacity: 1, x: 0 } :
            { opacity: 0, x: 150 }
          }
          transition={{ duration: 1, delay: 0.6 }}
          className="my-2 mb-8 w-11/12 mx-auto">
          {t('homePage.secondSection.p3')}
        </motion.p>

      </article>
    </section>

  );
};

export default Feature;
