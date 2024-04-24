import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTranslation } from "react-i18next";
import LinkToMBMB from "./leafs/linkToMBMB";


const Feature = () => {
  const { t } = useTranslation();
  const ref = useRef(null)
  const isInView = useInView(ref)

  const features = [
    {
      title: t('homePage.secondSection.h3'),
      icon:'time-saving',
      ul: [
        t('homePage.secondSection.ul.0'),
        t('homePage.secondSection.ul.1')
      ]
    },
    {
      title: t('homePage.secondSection.h3_2'),
      icon:'revenue-optimization',
      ul: [
        t('homePage.secondSection.ul2.0'),
        t('homePage.secondSection.ul2.1')
      ]
    },
    {
      title: t('homePage.secondSection.h3_3'),
      icon:'patient-care',
      ul: [
        t('homePage.secondSection.ul3.0'),
        t('homePage.secondSection.ul3.1')
      ]
    },
    {
      title: t('homePage.secondSection.h3_4'),
      icon:'cost-saving',
      ul: [
        t('homePage.secondSection.ul4.0'),
        t('homePage.secondSection.ul4.1')
      ]
    }
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
        <aside className="my-12" >
        {features.map((x, i) => (
          <article key={i} className="py-1 w-11/12 mx-auto" >
            <motion.h3
              animate={isInView ?
                { opacity: 1, x: 0 } :
                { opacity: 0, x: 150 }
              }
              transition={{ duration: 1, delay: 0.4 }}
              key={i}
              className="mt-4 mb-1 text-md md:text-lg font-semibold border-b-4 bg-white text-black pr-2 border-gray-500 w-max flex ">
              <img
                src={`/svg/${x.icon}.svg`}
                className='mx-1 md:w-6'
                height={'auto'} width={15}
                alt='plant on hand'
              />
              {x.title}
            </motion.h3>
            <div className="w-full pl-4 ">
              {
                x.ul.map((y, j) => {
                  return (
                    <motion.p
                      className="my-2 text-xs md:text-md text-white rounded-full px-2 max-w-max whitespace-normal"
                      key={j}
                      animate={isInView ? { y: 0, opacity: 1 } : { opacity: 0, y: (j + 1) * 25 }}
                      transition={{ type: 'spring', bounce: 0.65, duration: isInView ? (j * 0.1) + 2 : 0 }}
                    >
                      {y}
                    </motion.p>
                  )
                })
              }
            </div>
          </article>
        ))}

        </aside>
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
        <LinkToMBMB />
    </section>

  );
};

export default Feature;
