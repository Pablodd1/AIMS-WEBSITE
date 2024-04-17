import { motion, useInView } from 'framer-motion';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';



const AppUI = ({ startWhatsAppChat }) => {
  const { t } = useTranslation();
  const [show, setShow] = React.useState(0)
  const dispatch = useDispatch();
  const handleBooking = (x) => { dispatch({ type: 'SET_BOOKING', payload: x, }); }
  const mobileUI = React.useRef(false)
  const ListUI = React.useRef(false)
  const isInView = useInView(mobileUI)
  const isInViewList = useInView(ListUI)
  const labels = {
    left: [
      t('homePage.thirdSection.ul.left.0'),
      t('homePage.thirdSection.ul.left.1'),
      t('homePage.thirdSection.ul.left.2'),
    ],
    right: [
      t('homePage.thirdSection.ul.right.0'),
      t('homePage.thirdSection.ul.right.1'),
      t('homePage.thirdSection.ul.right.2'),
    ]
  }
  const appsComponents = [
    {
      label: t('homePage.thirdSection.ul.details.0.label'),
      description: t('homePage.thirdSection.ul.details.0.description')
    },
    {
      label: t('homePage.thirdSection.ul.details.1.label'),
      description: t('homePage.thirdSection.ul.details.1.description')
    },
    {
      label: t('homePage.thirdSection.ul.details.2.label'),
      description: t('homePage.thirdSection.ul.details.2.description')
    },
    {
      label: t('homePage.thirdSection.ul.details.3.label'),
      description: t('homePage.thirdSection.ul.details.3.description')
    },
    {
      label: t('homePage.thirdSection.ul.details.4.label'),
      description: t('homePage.thirdSection.ul.details.4.description')
    },
    {
      label: t('homePage.thirdSection.ul.details.5.label'),
      description: t('homePage.thirdSection.ul.details.5.description')
    },
    {
      label: t('homePage.thirdSection.ul.details.6.label'),
      description: t('homePage.thirdSection.ul.details.6.description')
    },
    {
      label: t('homePage.thirdSection.ul.details.7.label'),
      description: t('homePage.thirdSection.ul.details.7.description')
    }
  ]



  return (
    <section
      className=" bg-no-repeat bg-cover text-xs md:text-sm lg:text-md font-sans  max-w-full my-24 lg:my-52 px-2 w-screen overflow-hidden " ref={mobileUI} >
      <motion.h2
        animate={isInView ?
          { opacity: 1, x: 0 } :
          { opacity: 0, x: 150 }
        }
        transition={{ duration: 1 }}
        className=" text-primary mx-auto mb-4 w-full text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-sans font-bold max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl">
        <strong className="uppercase font-semibold text-sm lg:text-lg tracking-wider">
          {t('homePage.thirdSection.h2.0')}
        </strong>
        <br />
        {t('homePage.thirdSection.h2.1')}
      </motion.h2>

      <article className="px-5 py-12 mx-2 md:mx-auto max-w-fit min-h-max  flex  overflow-auto" >

        <ul className=' pr-4 sm:pr-7 md:pr-7 lg:pr-6 xl:pr-8 pb-20 max-w-fit self-end flex flex-col justify-evenly items-center justify-self-end h-full z-10' >
          {labels.left.map((x, i) => {
            return (
              <motion.li
                key={i}
                className='relative w-32 sm:w-44 md:w-max my-5'
                animate={isInView ? { x: 0, opacity: 1 } : { opacity: 0, x: -(i + 1) * 75 }}
                transition={{ delay: isInView ? (i * 0.1) + 0.2 : 0, duration: isInView ? (i * 0.1) + 1 : 0 }}
              >
                <motion.img
                  src={'/svg/connector.svg'}
                  className=' w-12 sm:w-16 xl:w-20 absolute top-3 -right-12 sm:-right-16 xl:-right-20 '
                  height={'auto'} width={560}
                  animate={isInView ? { y: 0, scale: 1 } : { y: 275, scale: 0.5 }}
                  transition={{ duration: 0.5 }}
                  alt='AI Medical Scriber App Label connector'
                />
                <h3
                  className=' text-center text-xxs sm:text-xs md:text-sm bg-secondary rounded-full md:font-semibold tracking-wider px-3 md:px-4 py-1 sm:py-2 shadow-sm shadow-cta'
                >
                  {x}
                </h3>
              </motion.li>
            )
          })}
        </ul>
        <motion.img
          src={'/images/live-transcribe.png'}
          className='mx-auto w-60 max-w-xs  lg:w-72 xl:w-96 z-0 '
          height={'auto'} width={560}
          animate={isInView ? { y: 0, opacity: 1, scale: 1 } : { opacity: 0, y: 275, scale: 0.5 }}
          transition={{ duration: 1, }}
          alt='AI Medical Scriber App'
        />
        <ul className='  pl-6 sm:pl-10 md:pl-10 lg:pl-9 xl:pl-12  pt-20 max-w-fit flex flex-col justify-evenly items-center h-full z-10' >
          {labels.right.map((x, i) => {
            return (
              <motion.li
                key={i}
                className='relative  w-32 sm:w-44 md:w-max my-5'
                animate={isInView ? { x: 0, opacity: 1 } : { opacity: 0, x: (i + 1) * 75 }}
                transition={{ delay: isInView ? (i * 0.1) + 0.2 : 0, duration: isInView ? (i * 0.1) + 1 : 0 }}
              >
                <motion.img
                  src={'/svg/connector.svg'}
                  className=' w-12 sm:w-16 xl:w-20 absolute bottom-3 -left-12 sm:-left-16 xl:-left-20 '
                  height={'auto'} width={560}
                  animate={isInView ? { y: 0, opacity: 1, scale: 1 } : { opacity: 0, y: 275, scale: 0.5 }}
                  transition={{ duration: 1, }}
                  alt='AI Medical Scriber App Label connector'
                />
                <h3
                  className='text-center text-xxs sm:text-xs md:text-sm bg-secondary rounded-full md:font-semibold tracking-wider px-2 sm:px-4 py-1 sm:py-2 shadow-sm shadow-cta '
                >
                  {x}
                </h3>
              </motion.li>
            )
          })}
        </ul>
      </article>
      <ul className=' grid sm:grid-cols-2 xl:grid-cols-4 max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-7xl  mx-auto' ref={ListUI} >
        {appsComponents.map((x, i) => {
          return (
            <motion.li
              animate={isInViewList ? { x: 0, opacity: 1 } : { opacity: 0, x: (i + 1) * 50 }}
              transition={{ type: 'spring', bounce: 0.65, delay: isInViewList ? (i) * 0.1 : 0, duration: isInViewList ? (i * 0.1) + 2 : 0 }}
              key={i} className={` bg-secondary my-2 md:my-6 mx-2 px-4 py-3 md:py-8 rounded-lg shadow-lg shadow-gray-300 ${i % 2 === 0 ? ' bg-opacity-60' : ' bg-opacity-10'}`} >

              <button onClick={() => setShow(i)} className=' w-full h-max text-left' >
                <h2
                  className="w-full text-sm lg:text-lg  xl:text-xl font-sans font-bold uppercase">
                  {x.label}
                </h2>
              </button>
              <p
                className={`md:my-2 w-11/12 overflow-hidden mx-auto sm:h-auto ${show === i ? ' h-auto  ' : 'h-0'}`}>
                {x.description}
              </p>
            </motion.li>
          )
        })}
      </ul>

      <footer
        style={{ backgroundImage: "url('/images/luxury-bg.jpg')" }}
        className=" bg-center bg-cover text-white mt-20  py-44 w-full min-h-max  border-y-4 border-primary shadow-2xl shadow-gray-600"  >
        <img
          src={'/svg/plant-on-hand.svg'}
          className='mx-auto'
          height={'auto'} width={85}
          alt='plant on hand'
        />
        <h3 className='text-3xl lg:text-4xl font-sans  text-center text-white' >
          {t('homePage.thirdSection.footer.h3')}
        </h3>
        <p className='my-4 text-sm lg:text-lg   w-4/5 md:w-3/5 lg:max-w-4xl  mx-auto' >
          {t('homePage.thirdSection.footer.p2')}
        </p>
        <article className="text-sm sm:text-md w-4/5 md:w-3/5 lg:max-w-4xl  mx-auto self-start flex items-center justify-end flex-row  ">
          <button
            aria-label={t('buttons.SWM')}
            className="drop-shadow-lg hover:drop-shadow-cta "
            onClick={startWhatsAppChat}
          >
            <img
              src={'/svg/whatsapp.svg'}
              className="inline "
              height={'auto'} width={35}
              alt='AI Medical Scriber whatsapp contact'
            />
          </button>
          <button
            size="larger"
            aria-label={t('buttons.tryNow')}
            variant="contained"
            onClick={() => handleBooking(true)}
            className="py-2 px-6 sm:px-8 mx-2 rounded-full   hover:shadow-lg hover:shadow-cta font-semibold uppercase tracking-wide bg-black text-white  transition-all duration-700 ease-in-out hover:bg-cta hover:text-black"
          >
            {t('homePage.fifthSection.buttons.bookNow')}
          </button>
        </article>

      </footer>
    </section>
  );
};

export default AppUI;
