import { Tooltip, Rating, Box, CardActions, CardHeader, Typography, Grid, Button, Card, CardContent, Skeleton, } from "@mui/material";
import React from "react";
import DesignServicesSharpIcon from '@mui/icons-material/DesignServicesSharp';
import { RiCustomerService2Fill } from "react-icons/ri";
import LocalOfferSharpIcon from '@mui/icons-material/LocalOfferSharp';
import FavoriteSharpIcon from '@mui/icons-material/FavoriteSharp';
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

import BlogLayout from "../components/Article.slaves/blogLayout";
import BlogsList from "../components/Article.slaves/blogslists";

const APILink = import.meta.env.VITE_APILink

export default function Article({ styles }) {
    const [titles, setTitles] = React.useState([]);
    const [hover, setHover] = React.useState(-1);
    const [value, setValue] = React.useState(4);
    const [blog, setBlog] = React.useState([]);
    const { t } = useTranslation();
    const lang = useSelector(x => x.language);
    const domain = useSelector(x => x.domain);
    const syncing = useSelector(x => x.syncing)
    const dispatch = useDispatch();
    const { blogId } = useParams();
    const { i18n } = useTranslation();
    const languageCode = i18n.language;

    const handleBooking = (x) => {

        dispatch({
            type: 'SET_BOOKING',
            payload: x,
        });
    }


    const links = [
        {
            "href": () => handleBooking(true),
            "text": t('buttons.joinUs'),
            "icon": <RiCustomerService2Fill />
        },
        {
            "href": "/technology",
            "text": t('buttons.technology'),
            "icon": <DesignServicesSharpIcon />
        },
        {
            "href": "/about-us",
            "text": t('buttons.aboutUs'),
            "icon": <LocalOfferSharpIcon />
        }
    ]
    const labels = {
        1: t('labels.1'),
        2: t('labels.2'),
        3: t('labels.3'),
        4: t('labels.4'),
        5: t('labels.5'),
    };
    function getLabelText(value) {
        return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
    }

    React.useEffect(() => {

        dispatch(
            {
                type: 'SET_SYNCING',
                payload: true
            }
        )
        fetch(`${APILink}/${lang}/blogs/${blogId}`)
            .then(response => response.json())
            .then(data => {
                let temp = data;
                setBlog(temp);
            })

            .then(() => {
                dispatch({
                    type: 'SET_SYNCSTATUS',
                    payload: 'success'
                })

                dispatch({
                    type: 'SET_SYNCING',
                    payload: false
                })
            }).catch(error => {
                dispatch({
                    type: 'SET_SYNCSTATUS',
                    payload: 'error'
                }, {
                    type: 'SET_ERROR',
                    payload: error
                })
            });
    }, [lang, blogId]);

    React.useEffect(() => {

        fetch(`${APILink}/blogRating/${blogId}`)
            .then(response => response.json())
            .then(data => {
                let temp = (data.average !== undefined && data.average !== NaN) ? Math.ceil(data.average) : 4;
                setValue(temp);
            })

            .then(() => {
                dispatch({
                    type: 'SET_SYNCSTATUS',
                    payload: 'success'
                })

                dispatch({
                    type: 'SET_SYNCING',
                    payload: false
                })
            })
            .catch(error => {
                dispatch({
                    type: 'SET_SYNCSTATUS',
                    payload: 'error'
                }, {
                    type: 'SET_ERROR',
                    payload: error
                })
            });
    }, [blogId]);

    const handleUpdateStars = async (id, stars) => {

        dispatch({
            type: 'SET_SYNCSTATUS',
            payload: 'info'
        })
        dispatch(
            {
                type: 'SET_SYNCING',
                payload: true
            }
        )
        try {
            const response = await fetch(`${APILink}/blogRating/${blogId}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ stars: stars }),
            });
            const data = await response.json();
            setValue((data.average != undefined && data.average != NaN) ? Math.ceil(data.average) : 4);

            dispatch({
                type: 'SET_SYNCSTATUS',
                payload: 'success'
            })

            dispatch({
                type: 'SET_SYNCING',
                payload: false
            })
        } catch (error) {
            dispatch({
                type: 'SET_SYNCSTATUS',
                payload: 'error'
            })
            dispatch({
                type: 'SET_SYNCING',
                payload: false
            })
        }
    };


    React.useEffect(() => {
        fetch(`${APILink}/${lang}/blogs/titles`)
            .then(response => response.json())
            .then(data => {
                setTitles(data);
            }).catch(err => console.log('Error: ' + err.message));

    }, [lang]);





    return (

        <>

            <Helmet
                htmlAttributes={{
                    lang: languageCode
                }}
            >
                <meta charSet="utf-8" />
                <title>{blog[0] != undefined ? `${blog[0].title} - AI Medical Scriber` : "AI Medical Scriber"}</title>
                <meta name="description" content={blog[0] != undefined && blog[0].metaDescription} />
                <meta name="keywords" content={blog[0] != undefined && blog[0].keywords} />

            </Helmet>



            <section sx={styles.articlesBox} className={'max-w-5xl lg:max-w-7xl mx-auto my-24 px-6'} >

                {(blog[0] != undefined) ? (
                    <article className="w-full " >
                        <header className="relative h-72 overflow-hidden rounded-3xl shadow-2xl shadow-black">
                            <img
                                src={`/images/blogs/${encodeURI(blog[0].icon)}.avif`}
                                className=' object-cover w-full h-full saturate-200 '
                                height={'auto'} width={1024}
                                alt={blog[0].title}
                            />
                            <h1 className=' lg:font-bold bg-gradient-to-t from-black to-transparent text-white flex flex-wrap items-end justify-center absolute bottom-0 h-full px-2 py-4 text-3xl bg-opacity-25 w-full' >
                                {blog[0].title}
                            </h1>

                        </header>
                        {/* <img
                            component='img'
                            width={'100%'}
                            src={blog[0].image}
                            alt={blog[0].title}
                            style={styles.articlesImage}
                        /> */}
                        <section className="mt-12 mb-8 px-2 md:px-8 mx-auto " >
                            <BlogLayout data={blog[0].blog} />
                        </section>

                        <aside className="flex justify-end mb-1 mt-12"   >
                            <Tooltip placement="bottom" title={value !== null && (<Box sx={{ fontSize: 18 }}>{labels[hover !== -1 ? hover : value]}</Box>)}>
                                <Rating
                                    name="blogs-feedback"
                                    value={value}
                                    getLabelText={getLabelText}
                                    icon={<FavoriteSharpIcon className="text-primary" />}
                                    onChange={(event, newValue) => { handleUpdateStars(blog[0]._id, newValue); }}
                                    onChangeActive={(event, newHover) => { setHover(newHover); }}
                                    emptyIcon={<FavoriteSharpIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                                    sx={{ height: "100%", p: "auto", m: 'auto', ml: 4, mr: 2 }}
                                />
                            </Tooltip>
                        </aside>
                        <hr />
                        <nav className='px-4 mt-4 mb-24 flex flex-col md:flex-row space-y-4 md:space-y-0 min-w-max' >
                            <Link to={'/customer-care'} className='text-center max-h-10 text-lg px-6 py-1 mr-4 border border-secondary shadow-sm shadow-gray-400 bg-opacity-75 bg-secondary rounded-lg' >
                                Our Technology
                            </Link>
                            <button href='#'
                                onClick={() => handleBooking(true)}
                                className='btn-flip font-semibold  affter:shadow-md before:shadow-lg before:shadow-gray-400 after:shadow-gray-400' data-back={t('homePage.heroSection.buttons.bookNow')} data-front={t('buttons.tryNow')} >
                            </button>
                        </nav>
                    </article>) : (
                    <Card  >
                        <Skeleton variant="h1" height={'3rem'} width={'auto'} sx={{ m: 3 }} />
                        <Skeleton variant="h2" width={'60%'} sx={{ m: 5, mb: 1 }} />
                        <Skeleton variant="rounded" height={'10rem'} width={'auto'} sx={{ m: 5, mt: 1 }} />
                        <Skeleton variant="h2" width={'60%'} sx={{ m: 5, mb: 1 }} />
                        <Skeleton variant="rounded" height={'10rem'} width={'auto'} sx={{ m: 5, mt: 1 }} />
                        <Skeleton variant="h2" width={'60%'} sx={{ m: 5, mb: 1 }} />
                        <Skeleton variant="rounded" height={'10rem'} width={'auto'} sx={{ m: 5, mt: 1 }} />
                        <Skeleton variant="rectangular" height="15rem" width='auto' sx={{ m: 5 }} />
                        <Skeleton variant="rectangular" height='3rem' width={'auto'} sx={{ m: 5 }} />
                    </Card>
                )

                }


                <BlogLayout blogId={blogId} />
                <Grid
                    container
                    spacing={2}
                    justifyContent='space-evenly'
                    alignItems='flex-start'
                >

                    <BlogsList styles={styles} titles={titles} limit={3} search={true} />


                </Grid>
            </section>

        </>
    )
}

