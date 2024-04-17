import React, { useEffect, useRef, useState } from 'react';
import { Accordion, IconButton, AccordionSummary, AccordionDetails, Grid, Typography, TextField, InputAdornment, Fade, Slide, Skeleton, Button, CardHeader } from '@mui/material';
import { ImCancelCircle, ImSearch } from "react-icons/im";
import { FcExpand, } from "react-icons/fc";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
import { useTranslation } from 'react-i18next';
import { createTheme } from '@mui/material/styles';

import searching from "../assets/illusters/searching.gif";
import BlogsList from '../components/Article.slaves/blogslists';
import { motion, useInView } from "framer-motion";

// Total counts of FAQs included in translation file
const faqs = 30;
const APILink = import.meta.env.VITE_APILink

const RenderQuestions = ({ loadedQuestions, setExpanded, expanded }) => {
    const { t } = useTranslation(); 
    return Array.from({ length: loadedQuestions }).map((_, index) => (
        <li key={index} className="flex w-full ">
            <div
                className={`h-fit my-2 `}
            // initial={false}
            // animate={{ height: expanded === index ? 'auto' : 'fit-content' }}
            // transition={{ duration: 0.3 }}
            >
                <button
                    className={`flex items-center justify-between w-full px-4 py-2 bg-secondary  focus:outline-none ${expanded === index ? ' rounded-t-md' : ' rounded-md'}`}
                    onClick={() => setExpanded(expanded === index ? null : index)}
                >
                    <h3 className="text-sm md:text-md font-semibold text-left ">
                        {t(`faqs.question${index + 1}`)}
                    </h3>
                    <span className="ml-2">{expanded === index ? '-' : '+'}</span>
                </button>
                <div
                    className={`bg-secondary bg-opacity-40 overflow-hidden font-serif text-xs md:text-sm transition-all duration-1000 ${expanded === index ? ' h-28 py-4 px-2' : ' h-0'}`}
                >
                    <p className="text-gray-700">{t(`faqs.answer${index + 1}`)}</p>
                </div>
            </div>
        </li>
    ))
};


const CustomerCare = ({ styles }) => {
    const [expanded, setExpanded] = useState(false);
    const [filteredTitles, setFilteredTitles] = useState([]);
    const [filteredFAQs, setFilteredFAQs] = useState(null);
    const [searchArticle, setSearchArticle] = useState('');
    const [titles, setTitles] = React.useState([]);
    const { t } = useTranslation()
    const theme = createTheme();
    const inputRef = useRef(null);
    const lang = useSelector(x => x.language);
    const [loadedQuestions, setLoadedQuestions] = useState(7);
    const [loadedBlogs, setLoadedBlogs] = useState(5);
    const [displayTitles, setDisplayTitles] = useState(titles);
    const { i18n } = useTranslation();
    const languageCode = i18n.language;

    useEffect(() => {
        if (searchArticle) {
            setDisplayTitles(filteredTitles);
        } else {
            setDisplayTitles(titles);
        }
    }, [searchArticle, filteredTitles, titles]);

    const handleLoadMore = (target, x, n) => {
        switch (target) {
            case "blogs":
                const newLoadedBlogs = loadedBlogs + n;
                setLoadedBlogs(newLoadedBlogs);
                if (newLoadedBlogs >= x) {
                    setLoadedBlogs(x);
                }
                break;
            case "faqs":
                const newLoadedQuestions = loadedQuestions + n;
                setLoadedQuestions(newLoadedQuestions);
                if (newLoadedQuestions >= x) {
                    setLoadedQuestions(x);
                }
                break;
            default:
                break;

        }


    };


    const searchArticles = (query) => {
        setSearchArticle(query);

        // Filtering Titles of Blog
        const filteredTitlesArray = query
            ? titles.filter((x) =>
                x.title.toLowerCase().includes(query.toLowerCase())
            )
            : null;
        setFilteredTitles(filteredTitlesArray);

        // Filtering FAQs
        const filteredFAQsArray = query
            ? titles.filter((x) =>
                x.title.toLowerCase().includes(query.toLowerCase())
            )
            : null;
        setFilteredFAQs(filteredFAQsArray);
    };


    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
    React.useEffect(() => {
        inputRef.current.addEventListener('blur', () => {
            setFilteredTitles(null);
            setSearchArticle('');
        });
    }, []);

    React.useEffect(() => {
        function fetchData() {
            fetch(`${APILink}/${lang}/blogs/titles`)
                .then(response => response.json())
                .then(data => {
                    setTitles(shuffleArray(data));
                })
                .catch(err => console.log('Error: ' + err.message));
        }

        fetchData();
    }, [lang]);


    return (
        <>
            <Helmet
                htmlAttributes={{
                    lang: languageCode
                }}
            >
                <meta charSet="utf-8" />
                <title>Learning AI Medical Scriber</title>
                <meta name="description" content="Stay informed with AI Medical Scriber's articles - Explore informative blogs and frequently asked questions. Stay updated on the latest advancements in medical AI." />
                <meta name="keywords" content="best free medical dictation software,billing and coding for physicians,document,medical,new technology" />


            </Helmet>

            <article className='max-w-3xl w-11/12 mx-auto my-24 min-h-96'>
                <h1 className=' my-16 text-primary text-center text-3xl md:text-4xl lg:text-5xl font-bold uppercase '>
                    {t('headings.getHelp')}
                </h1>
                <div className="relative">
                    <input
                        id="searchArticle"
                        type="text"
                        placeholder={t('headings.search')}
                        className="w-full px-4 py-2 border-b border-gray-300 focus:outline-none focus:border-blue-500"
                        value={searchArticle}
                        ref={inputRef}
                        onChange={(e) => searchArticles(e.target.value)}
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                        <ImSearch className="text-gray-500" />
                        {searchArticle && (
                            <button
                                className="ml-2 text-gray-500 focus:outline-none"
                                onClick={() => { setFilteredTitles(null); setSearchArticle('') }}
                            >
                                <ImCancelCircle />
                            </button>
                        )}
                    </div>
                </div>
            </article>
            <section className='max-w-sm md:max-w-2xl lg:max-w-3xl xl:max-w-5xl  mx-auto my-16'  >
                    <BlogsList styles={styles} titles={displayTitles} empty={Boolean(searchArticle && !filteredTitles[0])} searchedCount={searchArticle ? filteredTitles.length : null} limit={loadedBlogs} />
               
                <section className='my-12 px-2 w-fit' >
                    <h2 className='text-primary text-2xl md:text-3xl lg:text-4xl font-bold uppercase '> {t('headings.faqs')}</h2>
                    <ul className='w-full max-w-2xl flex flex-col ' >
                        <RenderQuestions loadedQuestions={loadedQuestions} setExpanded={setExpanded} expanded={expanded} />
                    </ul>
                    {loadedQuestions < faqs && (
                        <button
                            onClick={() => handleLoadMore("faqs", faqs, 3)}
                            disabled={loadedQuestions === faqs}
                            aria-label={t('Load More')}
                            className='mx-auto flex hover:underline'
                        >
                            {t('Load More')}
                        </button>
                    )}
                </section>
            </section>

        </>
    );
};

export default CustomerCare;
