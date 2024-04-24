// LinkToAIScriber.jsx

import { Link } from "react-router-dom";


const LinkToMBMB = () => {
    return (
        <article className="shine text-center relative w-11/12 mb-20 mt-12 py-6 md:py-0 max-w-3xl mx-auto overflow-hidden bg-gradient-to-br from-rose-400 via-pink-400 to-orange-500 rounded-xl shadow-2xl shadow-gray-800 ">
            <section className="flex flex-col md:flex-row items-center mx-4 my-6" >
                
            <Link to="http://medicalbillingmb.com/" target='_blank'  >
                <img
                    src={`http://medicalbillingmb.com/mbmb-black.png`}
                    alt={'Medical Billing and Coding'}
                    width={120}
                    height={14}
                    className={'inline-block mx-2 my-4 w-26 md:w-32'}
                />
            </Link>
            <footer className="text-gray-50 text-md font-semibold  tracking-wide text-left font-sans  mx-2  ">
                EXPLORE OUR
                <h2 className="mr-2 font-semibold text-xl sm:text-2xl tracking-wide  max-w-xs"><span className=' text-gray-900'>Medical Billing and Coding Services</span> </h2>

                <Link to="http://medicalbillingmb.com/consultation" target='_blank' className='my-2 text-indigo-800 flex items-center font-bold' >
                    Get Free Consultation
                    <img
                        src={`/svg/arrow-white.svg`}
                        alt={'AI Medical Scriber'}
                        width={20}
                        height={14}
                        className={'inline-block mx-1 my-auto w-4 '}
                    />
                </Link>
            </footer>
            </section>
            <div className='absolute right-0 top-0 flex' >
                <div className=" -skew-x-12 w-12 min-h-full h-40 bg-gradient-to-b from-red-500 to-transparent "> </div>
                <div className=" -skew-x-12 w-12 min-h-full h-40 bg-gradient-to-b from-pink-600 to-transparent "> </div>
                <div className=" -skew-x-12 w-12 min-h-full h-40 bg-gradient-to-b from-rose-400 to-transparent "> </div>
            </div>
        </article>
    );
};

export default LinkToMBMB;
