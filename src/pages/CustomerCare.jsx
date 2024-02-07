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

// Total counts of FAQs included in translation file
const faqs = 30;
const APILink = import.meta.env.VITE_APILink



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
    const renderQuestions = () => {
        return Array.from({ length: loadedQuestions }).map((_, index) => (
            <Slide
                appear
                in={true}
                direction="right"
                timeout={50 * index}
                key={index}
            >
                <Grid item sx={styles.faqItems}>
                    <Accordion
                        disableGutters
                        sx={styles.accordians}
                        elevation={0}
                        expanded={expanded === index}
                        onChange={() => setExpanded(expanded === index ? null : index)}
                    >
                        <AccordionSummary
                            expandIcon={expanded === index ? <FcExpand /> : <FcExpand />}
                        >
                            <Typography variant='h6' component='h3' style={styles.faqTitle}>
                                {t(`faqs.question${index + 1}`)}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography variant='p' component='p' sx={{ color: '#888' }} >
                                {t(`faqs.answer${index + 1}`)}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Grid>
            </Slide>
        ));
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
            <Grid
                container
                justifyContent='center'
                alignItems='center'
                sx={styles.container}

            >

                <Grid
                    container item
                    spacing={0}
                    justifyContent='center'
                    alignItems='center'
                    xs={12} sm={12} md={12} lg={12} xl={12}
                    sx={{
                        ...styles.headerCC, ...{
                            backgroundImage: `url(${searching}) `,
                            [theme.breakpoints.up('xs')]: {
                                backgroundPosition: '275% -5%',
                                backgroundSize: 'auto 50%',
                            },
                            [theme.breakpoints.up('sm')]: {
                                backgroundPosition: '-25% -10%',
                                backgroundSize: 'auto 60%',
                            },
                            [theme.breakpoints.up('md')]: {
                                backgroundPosition: '-25% -25%',
                                backgroundSize: 'auto 70%',
                            },
                            [theme.breakpoints.up('lg')]: {
                                backgroundPosition: '110% 25%',
                                backgroundSize: 'auto 80%',
                            },
                        }
                    }}
                >

                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Typography variant='h2' component='h1' id="h1" style={styles.headerTitle}>{t('headings.getHelp')}</Typography>

                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={styles.searchCont}>

                        <TextField
                            id="searchArticle"
                            placeholder={t('headings.search')}
                            variant="standard"
                            sx={styles.searchInput}
                            value={searchArticle}
                            ref={inputRef}
                            onChange={(e) => searchArticles(e.target.value)}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <ImSearch />
                                    </InputAdornment>
                                ),
                                endAdornment: (
                                    <InputAdornment position="end">
                                        {filteredTitles &&
                                            (<IconButton aria-label="delete" size="small" onClick={() => { setFilteredTitles(null); setSearchArticle('') }} >
                                                <ImCancelCircle />
                                            </IconButton>)}
                                    </InputAdornment>
                                ),
                            }}
                        />

                       
                    </Grid>
                </Grid>
                <Grid
                    container item
                    justifyContent='center'
                    alignItems='center'
                    xs={12}
                    sx={styles.faqSection}
                >
                    <Grid
                        container
                        item
                        spacing={2}
                        justifyContent='space-evenly'
                        alignItems='flex-start'
                        xs={12}
                        sx={{ ...styles.faqSection, ...{ p: 0.5, mb: 5, overflow: 'hidden' } }}
                    >
                        <BlogsList styles={styles} titles={displayTitles} empty={Boolean(searchArticle && !filteredTitles[0])} searchedCount={searchArticle ? filteredTitles.length : null} limit={loadedBlogs} />


                    </Grid>
                    <Grid item xs={12} >
                        <CardHeader title={
                            <Typography variant='h3' component='h2' style={styles.sectionTitle}> {t('headings.faqs')}</Typography>

                        }
                        />
                    </Grid>
                    {renderQuestions()}
                    {loadedQuestions < faqs && (
                        <Grid item xs={12} sx={{ textAlign: 'center' }}>
                            <Button
                                onClick={() => handleLoadMore("faqs", faqs, 3)}
                                variant='contained'
                                disabled={loadedQuestions === faqs}
                                aria-label={t('Load More')}
                                sx={{
                                    ...styles.secondaryButton,
                                    ...{
                                        backgroundColor: 'transparent',
                                        m: 0,
                                        pl: 2,
                                        pt: 1,
                                        pb: 1,
                                        height: 'max-content',
                                        borderRadius: 0,
                                        color: '#888',
                                    }
                                }}
                            >
                                {t('Load More')}
                            </Button>
                        </Grid>
                    )}
                </Grid>


            </Grid>
        </>
    );
};

export default CustomerCare;
