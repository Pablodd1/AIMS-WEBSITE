import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import React from "react";
import { useDispatch } from "react-redux";


const APILink = import.meta.env.VITE_APILink
const status = {
    Submitting: {
        image: '',
        headerColor: 'bg-my_black',
        title: 'Hang tight!',
        class: 'text-teal_dark',
        message: 'We are excited to bring your ideas to life. System is processing your service request.',
        actions: [],
        cursor: 'cursor-progress'
    },
    Success: {
        image: '/svg/success.svg',
        cursor: ' cursor-auto'
    },
    Error: {
        image: '/svg/error.svg',
        cursor: 'cursor-not-allowed'
    }
};


export default function Query({ startWhatsAppChat, component }) {
    const { t } = useTranslation()
    const [submitting, setSubmitting] = React.useState('');
    const dispatch = useDispatch();
    const handleBooking = (x) => { dispatch({ type: 'SET_BOOKING', payload: x, }); }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const fullNameRegex = /^[A-Za-z\-',.\s]+$/;
    const countryRegex = /^[A-Za-z0-9\-',.\s]+$/;
    const [formData, setFormData] = React.useState({
        fullName: '',
        email: '',
        country: '',
        company: '',
        query: '',
    });
    const [validationErrors, setValidationErrors] = React.useState({
        fullName: false,
        email: false,
        country: false,
        company: false,
        query: false,
    });
    const validateInput = (name, value) => {
        console.log('valdiate change', validationErrors, Object.values(validationErrors).some(x => x))
        switch (name) {
            case 'fullName':
                setValidationErrors((prevErrors) => ({
                    ...prevErrors,
                    fullName: fullNameRegex.test(value) ? false : true,
                }));
                break;
            case 'email':
                setValidationErrors((prevErrors) => ({
                    ...prevErrors,
                    email: emailRegex.test(value) ? false : true,
                }));
                break;
            case 'country':
                setValidationErrors((prevErrors) => ({
                    ...prevErrors,
                    country: countryRegex.test(value) ? false : true,
                }));
                break;
            case 'company':
                setValidationErrors((prevErrors) => ({
                    ...prevErrors,
                    company: countryRegex.test(value) ? false : true,
                }));
                break;
            case 'query':
                setValidationErrors((prevErrors) => ({
                    ...prevErrors,
                    query: value ? false : true,
                }));
                break;
            default:
                break;
        }
    };
    const handleInputChange = (e) => {
        const { name, value } = e.target; console.log('input change')
        setFormData((prevData) => ({ ...prevData, [name]: value }));
        validateInput(name, value);
    };
    const handleSubmit = async (e) => {
        setSubmitting('Submitting');
        e.preventDefault();
        try {
            const response = await fetch(`${APILink}/clientQuery'`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ...formData, filledAt: new Date() }),
            });

            if (response.ok) {
                setSubmitting('Success');
            } else {
                setSubmitting('Error');
            }
        } catch (error) {
            setSubmitting('Error');
        }
        setFormData({
            fullName: '',
            email: '',
            country: '',
            company: '',
            query: '',
        });
        setValidationErrors({
            fullName: false,
            email: false,
            country: false,
            company: false,
            query: false,
        });
        setTimeout(() => {
            setSubmitting('');
        }, 3000);
    };


    return (
        <section className=" flex flex-col text-xs md:text-sm lg:text-md font-sans  max-w-full  px-2 "  >
            {component === 'ceo'
                && <article className='mb-24  max-w-5xl px-2 pt-4 mx-auto flex flex-col md:flex-row  items-end justify-center' >
                    <figure className=' flex-shrink max-w-md  mx-auto' >
                        <img
                            src={'/team/ceo.webp'}
                            className=' md:w-full '
                            height={'auto'} width={520}
                            alt='AI Medical Scriber CEO Jasmel Acosta'
                        />
                    </figure>
                    <aside className=' flex-grow  w-full max-w-md md:max-w-xl lg:max-w-2xl mx-auto ' >
                        <h3 className='text-4xl sm:text-5xl font-serif ' >
                            <strong className="mr-3" >
                                {t('homePage.fourthSection.h2.0')}
                            </strong>
                            {t('homePage.fourthSection.h2.1')}
                        </h3>
                        <p className='my-4  text-sm sm:text-lg lg:text-xl ' >
                            {t('homePage.fourthSection.p1')}
                        </p>
                        <footer className='flex ' >
                            <Link target="_blank" to={'https://www.linkedin.com/in/jasmel-acosta-41b4038a/'} className='mx-1  rounded-xl   ' >
                                <img
                                    src={'/svg/linkedin.svg'}
                                    className=' rounded-lg w-9 sm:w-10 '
                                    height={'auto'} width={41}
                                    alt='Jasmel LinkedIn Profile link'
                                />
                            </Link>
                            <Link to={'mailto:Jasmel@aimedicalscriber.com'} className='mx-1  h-max font-sans font-semibold tracking-wider bg-primary text-white py-2 px-12 border-2 border-primary rounded-lg  hover:bg-white hover:text-primary' >
                                {t('homePage.fourthSection.buttons.sendEmail')}
                            </Link>

                        </footer>
                    </aside>
                </article>
            }
            {component === 'form'
                && <article className=' border-y-8 border-primary max-w-6xl flex flex-col md:gap-x-4 w-full mx-auto my-52 py-8 items-center justify-evenly ' >

                    <h3 className='text-3xl lg:text-4xl font-sans  text-center text-primary' >
                        {t('homePage.fifthSection.h3.0')}
                        <strong className="ml-1" >
                            {t('homePage.fifthSection.h3.1')}
                        </strong>
                    </h3>

                    <p className='my-4 text-sm lg:text-lg w-5/6 lg:w-3/5  mx-auto' >
                        {t('homePage.fifthSection.p1')}
                    </p>
                    <article className="text-sm sm:text-md w-5/6 lg:w-3/5 px-4  mx-auto self-start flex items-center justify-end flex-row  max-w-md md:max-w-xl lg:max-w-4xl xl:max-w-5xl ">
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

                    <form onSubmit={handleSubmit} id="queryForm" className="grid grid-cols-2 gap-6 mt-10 mb-14  w-full  max-w-2xl mx-auto" >
                        <h4 className=" col-span-full px-2 py-1 mb-4  font-semibold text-priamry border-b-4 border-primary text-lg md:text-xl " >
                            {t('homePage.fifthSection.form.label')}
                        </h4>
                        <input onChange={handleInputChange} id="fullName" type="text" value={formData.fullName} name="fullName" maxLength={40} placeholder={t('homePage.fifthSection.form.fullName')} className={`bg-transparent border-b border-teal_dark focus:outline-none  ${validationErrors.fullName ? 'text-red-500 border-b-2  border-red-500' : ''}`} required />
                        <input onChange={handleInputChange} id="email" type="email" value={formData.email} name="email" placeholder={t('homePage.fifthSection.form.email')} className={` bg-transparent border-b border-teal_dark  focus:outline-none ${validationErrors.email && formData.email !== '' ? 'text-red-500 border-b-2  border-red-500' : ''}`} required />
                        <input onChange={handleInputChange} id="country" type="text" value={formData.country} name="country" maxLength={80} placeholder={t('homePage.fifthSection.form.country')} className={`  bg-transparent border-b border-teal_dark  focus:outline-none ${validationErrors.country && formData.country !== '' ? 'text-red-500 border-b-2  border-red-500' : ''}`} required />
                        <input onChange={handleInputChange} id="company" type="text" value={formData.company} name="company" maxLength={80} placeholder={t('homePage.fifthSection.form.company')} className={`  bg-transparent border-b border-teal_dark  focus:outline-none ${validationErrors.company && formData.company !== '' ? 'text-red-500 border-b-2  border-red-500' : ''}`} required />
                        <input onChange={handleInputChange} id="query" value={formData.query} name="query" maxLength={600} placeholder={t('homePage.fifthSection.form.query')} className={`col-span-full h-max bg-transparent border-b border-teal_dark  focus:outline-none ${validationErrors.query && formData.query !== '' ? 'text-red-500 border-b-2  border-red-500' : ''}`} required />
                        <footer className="col-span-full flex flex-col md:flex-row items-center justify-evenly md:space-x-5" >
                            <button
                                type="reset"
                                onClick={() => [
                                    setFormData({
                                        fullName: '',
                                        email: '',
                                        country: '',
                                        company: '',
                                        query: '',
                                    }),
                                    setValidationErrors({
                                        fullName: false,
                                        email: false,
                                        country: false,
                                        company: false,
                                        query: false,
                                    })]}
                                className={`w-full text-rose-500 rounded-full border border-double border-rose-500 py-2 px-2 my-3 min-w-44 font-semibold transition-all duration-150 ease-in-out hover:bg-rose-500 hover:text-white hover:font-bold`}
                            >
                                {t('homePage.fifthSection.buttons.reset')}
                            </button>
                            <button
                                type="submit"
                                disabled={Object.values(validationErrors).some(x => x)}
                                className={`w-full  rounded-full border-2 border-double border-primary shadow-lg py-2 px-2 my-3 min-w-60 font-semibold transition-all duration-150 ease-in-out ${Object.values(validationErrors).some(x => x)
                                    ? ' cursor-not-allowed'
                                    : Object.values(formData).some(value => value.trim() === '')
                                        ? ' cursor-not-allowed'
                                        : 'grayscale-0 hover:bg-primary hover:text-white hover:font-bold'
                                    }`}
                            >
                                {t('homePage.fifthSection.buttons.submit')}
                            </button>
                        </footer>

                        <span className={`flex  items-center justify-center absolute top-0 bottom-0  backdrop-grayscale rounded-2xl h-full w-full  ${submitting !== '' ? `z-10 ${status[submitting].cursor}` : '-z-10 hidden'}`} >
                            {
                                submitting !== ''
                                && (
                                    submitting === 'Submitting'
                                        ? <b className="trianlgeFill mx-3 " ></b>
                                        : <img src={`${status[submitting].image}`} width={60} height={20} alt={`${submitting} icon | New Form MyAbabeel`} className="inline-flex mx-2 " />
                                )

                            }

                        </span>
                    </form>
                </article>
            }
        </section>
    )
}