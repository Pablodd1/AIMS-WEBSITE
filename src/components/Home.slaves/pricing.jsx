import React, { useMemo } from "react";
// import Testimoni from "./Testimoni";
import Maps from "../../assets/illusters/HugeGlobal.svg";
import monthly from "../../assets/icons/monthly.webp";
import trial from "../../assets/icons/trial.webp";
import yearly from "../../assets/icons/yearly.webp";
import { motion } from "framer-motion";
// import getScrollAnimation from "../utils/getScrollAnimation";
// import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import { Button } from "@mui/material";
import getScrollAnimation from "../../assets/utils/getScrollAnimation";
import ScrollAnimationWrapper from "../../assets/utils/ScrollAnimationWrapper";
import Testimoni from "./leafs/Testimoni";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

const PackageCard = ({ scrollAnimation, background, border, imageSrc, altText, title, features, price }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const handleBooking = (x) => {

    dispatch({
      type: 'SET_BOOKING',
      payload: x,
    });
  }
  return (

    <ScrollAnimationWrapper className=" flex justify-center">
      <motion.div
        variants={scrollAnimation}
        className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20"
        style={{ background, border,filter:'blur(2px)' }}
        whileHover={{
          scale: 1.03,
          transition: {
            duration: 0.2,
          },
        }}
      >
        <div className="p-1 lg:p-0 mt-6 lg:mt-6 w-full">
          <img src={imageSrc} width={'250px'} height={'auto'} alt={altText} />
        </div>
        <p className="text-lg font-medium text-white-300 capitalize my-2 sm:my-7">
          {title}
        </p>
        <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-white-800 flex-grow">
          {features.map((feature, index) => (
            <li key={index} className="relative check custom-list my-2">
              {feature}
            </li>
          ))}
        </ul>
        <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
          <p className="text-2xl text-white-600 text-center mb-4 ">
            {price}
          </p>
          <Button variant="outlined" aria-label={t('buttons.select')} onClick={() => handleBooking(true)}>{t('buttons.select')}</Button>
        </div>
      </motion.div>
    </ScrollAnimationWrapper>
  );
}


const Pricing = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const packages = [
    {
      background: 'linear-gradient(135deg, #4A90E2ee, #16DB93ee)',
      imageSrc: trial,
      altText: t('1 Month Trial'),
      title: t('1 Month Trial'),
      features: [
        t('Encrypted Connection'),
        t('Works on All Devices'),
        t('10 Meetings Daily'),
        t('No Backup'),
        t('Limited Customer Service')
      ],
      price: t('Free'),
    },
    {
      background: 'linear-gradient(135deg, #FD749Bee, #FFC62Eee)',
      imageSrc: monthly,
      altText: t('Standard Plan'),
      title: t('Standard Plan'),
      features: [
        t('Encrypted Connection'),
        t('Unlimited Meetings Daily'),
        t('Works on All Devices'),
        t('Cloud Backup'),
        t('Connect To Pharmacy'),
        t('Coding and Billing Services'),
        t('24/7 Customer Service'),
      ],
      price: t('$$ / mo'),
    },
    {
      background: 'linear-gradient(135deg, #5533FFee, #F600FFee)',
      border: `1px solid ${t('linear-gradient(135deg, #5533FFee, #F600FFee)')}`,
      imageSrc: yearly,
      altText: t('Premium Plan'),
      title: t('Premium Plan'),
      features: [
        t('Encrypted Connection'),
        t('Unlimited Meetings Daily'),
        t('Works on All Devices'),
        t('Cloud Backup'),
        t('Connect To Pharmacy'),
        t('Coding and Billing Services'),
        t('24/7 Customer Service'),
        t('Save 10%')
      ],
      price: t('$$$ / yr'),
    },
  ];
  const handleBooking = (x) => {

    dispatch({
      type: 'SET_BOOKING',
      payload: x,
    });
  }



  return (
    <div
      className="bg-gradient-to-b  w-full py-14"
      id="pricing"
    >
      <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <div className="flex flex-col w-full">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-white-600 leading-relaxed"
            >
              {t('headings.choosePlan')} 
              <span className="bg-red-100 rounded-xl text-xs m-4 absolute px-2" >Coming soon</span>
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className="leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-white-600  text-center"
            >
              {t('planDetail')}
            </motion.p>
          </ScrollAnimationWrapper>
          <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-12 py-8 lg:py-12 px-6 sm:px-0 lg:px-6">
            {packages.map((pkg, index) => (
              <PackageCard key={index} scrollAnimation={scrollAnimation} {...pkg} />
            ))}
          </div>
        </div>
      </div>

      <div className=" mt-52 mb-52 sm:p-4 lg:p-8 sm:px-8 lg:px-52 bg-blue-300 w-max-full" >
        <div className="flex flex-col w-full my-16">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl text-center sm:text-3xl lg:text-4xl  font-medium text-white-600 leading-relaxed w-10/12 sm:w-8/12 lg:w-10/12 mx-auto">
              {t('headings.Services')} <br /> <b>{t('headings.MBnC')}</b>  {" "}
            </motion.h3>
            <motion.p className="leading-normal  mx-auto my-2 mt-4 w-10/12  text-white-600 sm:w-10/12 lg:w-12/12" variants={scrollAnimation}>
              {t('ServiceDetail')}
            </motion.p>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper>
            <motion.div className="py-12 w-full lg:w-auto lg:py-auto lg:px-auto m-auto px-8 mt-16" variants={scrollAnimation}>
              <div className="w-full h-auto flex justify-center items-center">
                <img src={Maps} alt="Map  AI Medical Scriber" className="block mx-auto" />
              </div>
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
      </div>

      <div className=" mt-52 mb-52 sm:p-4 lg:p-8 sm:px-8 lg:px-52 bg-green-300 w-max-full" >

        <div className="max-w-screen-xl  py-6 sm:py-8 lg:py-16 mx-auto flex flex-col w-full text-center justify-center">

          <div className="flex flex-col w-full my-16" id="testimoni">
            <ScrollAnimationWrapper>
              <motion.h3
                variants={scrollAnimation}
                className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-normal w-9/12 sm: lg:w-7/12 mx-auto">
                {t('headings.HappyCustomer')}{" "}
                <span className="bg-red-100 rounded-xl text-xs m-4 absolute px-2" >Coming soon</span>
              </motion.h3>
              <motion.p
                variants={scrollAnimation}
                className="leading-normal mx-auto mb-2 mt-4 w-10/12 sm:w-7/12 lg:w-8/12"
              >
                {t('HappyC')}
              </motion.p>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper className="w-full flex flex-col py-12" >
              <motion.div variants={scrollAnimation}>              
                <Testimoni />
              </motion.div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper className="relative w-full mt-16">
              <motion.div variants={scrollAnimation} custom={{ duration: 3 }}>
                <div className="absolute rounded-xl  py-8 sm:py-14 px-6 sm:px-12 lg:px-16 w-full flex flex-col sm:flex-row justify-between items-center z-10 bg-white-500">
                  <div className="flex flex-col text-left w-10/12 sm:w-7/12 lg:w-5/12 mb-6 sm:mb-0">
                    <h4 className="text-black-600 text-xl sm:text-2xl lg:text-3xl leading-relaxed font-medium">
                      {t('SforNow')} <br /> {t('GSF')}
                    </h4>
                    <p>{t('GFSP')}</p>
                  </div>
                  <Button aria-label={t('buttons.bookNow')} onClick={() => handleBooking(true)} >{t('headings.subscribe')}</Button>
                </div>
                <div
                  className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-60 sm:h-56 top-0 mt-8 mx-auto left-0 right-0"
                ></div>
              </motion.div>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
