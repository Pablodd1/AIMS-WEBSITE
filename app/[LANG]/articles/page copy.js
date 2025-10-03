'use client'
import BlogsList from '@UI/blog_listing';
import PremiumButton from '@UTILS/premium_button';
import SecondaryButton from '@UTILS/secondary_button';
import React, { useEffect, useRef, useState } from 'react';
import { ImCancelCircle, ImSearch } from "react-icons/im";
// import { useSelector } from "react-redux";
// import { useTranslation } from 'react-i18next';
// import { createTheme } from '@mui/material/styles';
// import BlogsList from '../components/Article.slaves/blogslists';

// Total counts of FAQs included in translation file
const faqs = 30;
// const APILink = import.meta.env.VITE_APILink

const RenderQuestions = ({ loadedQuestions, setExpanded, expanded }) => {
    // const { t } = useTranslation();
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
                        {`faqs.question${index + 1}`}
                    </h3>
                    <span className="ml-2">{expanded === index ? '-' : '+'}</span>
                </button>
                <div
                    className={`bg-secondary bg-opacity-40 overflow-hidden font-serif text-xs md:text-sm transition-all duration-1000 ${expanded === index ? ' h-28 py-4 px-2' : ' h-0'}`}
                >
                    <p className="text-gray-700">{`faqs.answer${index + 1}`}</p>
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
    // const { t } = useTranslation()
    // const theme = createTheme();
    const inputRef = useRef(null);
    // const lang = useSelector(x => x.language);
    const [loadedQuestions, setLoadedQuestions] = useState(7);
    const [loadedBlogs, setLoadedBlogs] = useState(5);
    const [displayTitles, setDisplayTitles] = useState(titles);
    // const { i18n } = useTranslation();
    // const languageCode = i18n.language;

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
            fetch(`/server-API/blogs?lang=${'es'}&keys=title,_id,icon`)
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    setTitles(shuffleArray(data));
                })
                .catch(err => console.log('Error: ' + err.message));
        }

        fetchData();
    }, []);


    return (
        <main className='relative'>
            <div className="bg-gradient-to-br from-[#0054b4] via-[#40e0d0] via-17% to-45% to-transparent min-h-screen w-full absolute left-0 -top-50 -z-10 " />

            <article className='max-w-sm md:max-w-2xl lg:max-w-3xl xl:max-w-5xl mx-auto my-18 '>
                <h1
                    className="my-5 w-full text-xl lg:text-3xl font-sans font-bold max-w-44 lg:max-w-65">
                    <strong className="uppercase text-primary rounded-lg my-1 font-bold text-xs lg:text-sm tracking-wider">
                        NEED HELP?
                    </strong>
                    <br />
                    Find Support Articles & FAQs
                </h1>
                <div className="relative max-w-md">
                    <input
                        id="searchArticle"
                        type="text"
                        placeholder={"Search"}
                        className="w-full px-4 py-2 border-b-4 border-black focus:outline-none focus:border-blue-500"
                        value={searchArticle}
                        ref={inputRef}
                        onChange={(e) => searchArticles(e.target.value)}
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                        <ImSearch className="text-primary" />
                        {searchArticle && (
                            <button
                                className="ml-2 text-pink-500 focus:outline-none"
                                onClick={() => { setFilteredTitles(null); setSearchArticle('') }}
                            >
                                <ImCancelCircle />
                            </button>
                        )}
                    </div>
                </div>
                <PremiumButton
                    label="Try AI — Automate Medical Notes"
                    href="#"
                    className='my-5 w-fit'
                />

            </article>
            <section className='max-w-sm md:max-w-2xl lg:max-w-3xl xl:max-w-5xl  mx-auto my-20'  >
                <BlogsList titles={displayTitles} empty={Boolean(searchArticle && !filteredTitles[0])} searchedCount={searchArticle ? filteredTitles.length : null} limit={loadedBlogs} />

                <section className='my-12 px-2 w-fit' >
                    <h2
                        className=" w-full text-xl lg:text-3xl font-sans font-normal text-primary border-b-2 border-gray-300 py-2.5 mt-15 mb-2 ">
                        <strong className="uppercase text-secondary bg-bg rounded-lg px-1.5 font-medium py-0.5 my-2.5 text-xs lg:text-sm tracking-wider">
                            QUICK ANSWERS
                        </strong>
                        <br />
                        Get Help with AI Medical Notes
                    </h2>
                    {/* <h2 className='text-primary text-2xl md:text-3xl lg:text-4xl font-bold uppercase '> {'headings.faqs'}</h2> */}
                    <ul className='w-full max-w-2xl flex flex-col ' >
                        <RenderQuestions loadedQuestions={loadedQuestions} setExpanded={setExpanded} expanded={expanded} />
                    </ul>
                    {loadedQuestions < faqs && (
                        <SecondaryButton
                            label="Load More"
                            onClick={() => handleLoadMore("faqs", faqs, 3)}
                            disabled={loadedQuestions === faqs}
                            ariaLabel={"Load More"}
                            withArrow
                            className=" font-semibold text-sm my-7"
                        />
                    )}
                </section>
            </section>

        </main>
    );
};

export default CustomerCare;
