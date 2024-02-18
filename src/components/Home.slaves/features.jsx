import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTranslation } from "react-i18next";



const Feature = () => {
  const { t } = useTranslation();
  const ref = useRef(null)
  const isInView = useInView(ref)

  const features = [
    t('homePage.secondSection.ul.0'),
    t('homePage.secondSection.ul.1'),
    t('homePage.secondSection.ul.2'),
    t('homePage.secondSection.ul.3'),
    t('homePage.secondSection.ul.4')
  ];

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
        <motion.p
          animate={isInView ?
            { opacity: 1, x: 0 } :
            { opacity: 0, x: 150 }
          }
          transition={{ duration: 1, delay: 0.4 }}
          className="my-2 w-11/12 mx-auto">
          {t('homePage.secondSection.p2')}
        </motion.p>

        <motion.p
          animate={isInView ?
            { opacity: 1, x: 0 } :
            { opacity: 0, x: 150 }
          }
          transition={{ duration: 1, delay: 0.6 }}
          className="my-2 mb-8 w-11/12 mx-auto">
          {t('homePage.secondSection.p3')}
        </motion.p>
        <div className="w-full pl-4 py-1 sm:pl-14 md:pl-20 lg:pl-28">
          {features.map((feature, i) => (
            <motion.p
              className="flex items-center text-xs md:text-md text-white font-semibold rounded-full px-2 py-1 max-w-max whitespace-normal"
              key={feature}
              animate={isInView ? { y: 0, opacity: 1 } : { opacity: 0, y: (i + 1) * 25 }}
              transition={{ type: 'spring', bounce: 0.65, duration: isInView ? (i * 0.1) + 2 : 0 }}
            >
              <img
                src={'/svg/point.svg'}
                className='mx-1 rotate-90 md:w-8'
                height={'auto'} width={25}
                alt='plant on hand'
              />
              {feature}
            </motion.p>
          ))}
        </div>

      </article>
    </section>

  );
};

export default Feature;
