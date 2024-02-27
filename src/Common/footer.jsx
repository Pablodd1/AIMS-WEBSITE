import React from "react";
import { useTranslation } from "react-i18next";
import { linksLegal } from "../assets/data/resources";
import EmailSubscriber from "./Slaves/emailSubscriber";
import { Link } from "react-router-dom";


export default function Footer({ links, linkStyles }) {
    const { t } = useTranslation()



    return (
        <React.Fragment>
            <footer className="flex flex-col py-8 md:pt-1 md:flex-row justify-between w-full  border-t border-black bg-primary text-white" >
                <article className=" max-w-sm  xl:max-w-xl w-2/3 xl:w-4/5 mx-auto md:ml-0 py-4 md:py-12 px-4 md:pr-12 my-8 shadow-lg shadow-black bg-white text-primary col-span-1 row-span-2 rounded-full md:rounded-l-none overflow-hidden" >
                    <img src={'/logo.png'} alt="AI Medical Scriber Logo Text" height={'auto'} width={'auto'} />
                </article>
                <ul className="hidden lg:flex flex-col items-start justify-center space-y-1 px-20  min-h-full bg-transparent mx-auto" >
                    <li className="text-xl uppercase font-sans font-semibold tracking-wider " >
                        {t('footer.navigate')}
                    </li>
                    {
                        links.map((x, i) =>
                            <li key={i} className=' pl-4 ' >
                                <Link
                                    to={x.add}
                                    id={x.title + 'nav'}
                                    rel='follow index'
                                    className='fonst-sans text-gray-100'
                                >
                                    {x.title}
                                </Link>
                            </li>
                        )
                    }
                </ul>
                <ul className=" flex items-center justify-evenly flex-col mx-auto" >
                    <li className=" " >
                        <EmailSubscriber />
                    </li>
                    <li className=" flex items-center justify-start w-full space-x-4 font-light text-gray-200 text-xs md:text-sm  mt-4">
                        {
                            linksLegal.map((x, i) => {
                                return (
                                    <Link key={i} to={x.add} aria-label={x.title} rel="follow index" >
                                        {x.title}
                                    </Link>
                                )
                            })}
                    </li>

                </ul>
            </footer>
            <div className='flex justify-center w-full items-start bg-black text-white' >
                <span className=' font-sans tracking-wider text-xs sm:text-sm z-10 rounded-3xl hover:text-black hover:bg-secondary py-1 px-6 inline bg-black-500 text-white-200' >
                    Designed & Developed By <a target='_blank' href='https://www.myababeel.com' className="tracking-widest font-sans font-bold" ><img src='https://myababeel.com/logo.svg' className='inline-block  ' width={50} height={39} /> MyAbabeel</a>
                </span>
            </div>
        </React.Fragment >
    )
}