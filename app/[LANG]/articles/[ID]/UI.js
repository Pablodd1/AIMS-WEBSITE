"use client"
// import { Tooltip, Rating, Box, CardActions, CardHeader, Typography, Grid, Button, Card, CardContent, Skeleton, } from "@mui/material";
import React from "react";
// import DesignServicesSharpIcon from '@mui/icons-material/DesignServicesSharp';
// import { RiCustomerService2Fill } from "react-icons/ri";
// import LocalOfferSharpIcon from '@mui/icons-material/LocalOfferSharp';
// import FavoriteSharpIcon from '@mui/icons-material/FavoriteSharp';
// import { Helmet } from "react-helmet";
// import { useTranslation } from "react-i18next";
// import { useDispatch, useSelector } from "react-redux";

import Link from "next/link";
import BlogsList from "@UI/blog_listing";
import BlogLayout from "@UTILS/blogLayout";
import PremiumButton from "@UTILS/premium_button";
import SecondaryButton from "@UTILS/secondary_button";
import Image from "next/image";

export default function ArticleUI({ ID, }) {
    const [titles, setTitles] = React.useState([]);
    const [hover, setHover] = React.useState(-1);
    const [value, setValue] = React.useState(4);
    const [blog, setBlog] = React.useState([]);
    // const { t } = useTranslation();
    // const lang = useSelector(x => x.language);
    // const domain = useSelector(x => x.domain);
    // const syncing = useSelector(x => x.syncing)
    // const dispatch = useDispatch();
    // const { i18n } = useTranslation();
    // const languageCode = i18n.language;

    const handleBooking = (x) => {

        // dispatch({
        //     type: 'SET_BOOKING',
        //     payload: x,
        // });
    }


    // const links = [
    //     {
    //         "href": () => handleBooking(true),
    //         "text": t('buttons.joinUs'),
    //         "icon": <RiCustomerService2Fill />
    //     },
    //     {
    //         "href": "/technology",
    //         "text": t('buttons.technology'),
    //         "icon": <DesignServicesSharpIcon />
    //     },
    //     {
    //         "href": "/about-us",
    //         "text": t('buttons.aboutUs'),
    //         "icon": <LocalOfferSharpIcon />
    //     }
    // ]
    const labels = {
        1: 'labels.1',
        2: 'labels.2',
        3: 'labels.3',
        4: 'labels.4',
        5: 'labels.5',
    };
    function getLabelText(value) {
        return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
    }

    React.useEffect(() => {

        // dispatch(
        //     {
        //         type: 'SET_SYNCING',
        //         payload: true
        //     }
        // )
        fetch(`/server-API/blogs/${ID}?lang=es`)
            .then(response => response.json())
            .then(data => {
                let temp = data; console.log(data)
                setBlog(temp);
            })

            .then(() => {
                // dispatch({
                //     type: 'SET_SYNCSTATUS',
                //     payload: 'success'
                // })

                // dispatch({
                //     type: 'SET_SYNCING',
                //     payload: false
                // })
            }).catch(error => {
                // dispatch({
                //     type: 'SET_SYNCSTATUS',
                //     payload: 'error'
                // }, {
                //     type: 'SET_ERROR',
                //     payload: error
                // })
            });
    }, [ID]);

    // React.useEffect(() => {

    //     fetch(`/server-API/blogRating/${ID}`)
    //         .then(response => response.json())
    //         .then(data => {
    //             let temp = (data.average !== undefined && data.average !== NaN) ? Math.ceil(data.average) : 4;
    //             setValue(temp);
    //         })

    //         .then(() => {
    //             // dispatch({
    //             //     type: 'SET_SYNCSTATUS',
    //             //     payload: 'success'
    //             // })

    //             // dispatch({
    //             //     type: 'SET_SYNCING',
    //             //     payload: false
    //             // })
    //         })
    //         .catch(error => {
    //             // dispatch({
    //             //     type: 'SET_SYNCSTATUS',
    //             //     payload: 'error'
    //             // }, {
    //             //     type: 'SET_ERROR',
    //             //     payload: error
    //             // })
    //         });
    // }, [ID]);

    const handleUpdateStars = async (id, stars) => {

        // dispatch({
        //     type: 'SET_SYNCSTATUS',
        //     payload: 'info'
        // })
        // dispatch(
        //     {
        //         type: 'SET_SYNCING',
        //         payload: true
        //     }
        // )
        try {
            const response = await fetch(`/server-API/blogRating/${ID}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ stars: stars }),
            });
            const data = await response.json();
            setValue((data.average != undefined && data.average != NaN) ? Math.ceil(data.average) : 4);

            // dispatch({
            //     type: 'SET_SYNCSTATUS',
            //     payload: 'success'
            // })

            // dispatch({
            //     type: 'SET_SYNCING',
            //     payload: false
            // })
        } catch (error) {
            // dispatch({
            //     type: 'SET_SYNCSTATUS',
            //     payload: 'error'
            // })
            // dispatch({
            //     type: 'SET_SYNCING',
            //     payload: false
            // })
        }
    };


    React.useEffect(() => {
        fetch(`/server-API/blogs?lang=${'es'}&keys=title,_id,icon`)
            .then(response => response.json())
            .then(data => {
                setTitles(data);
            }).catch(err => console.log('Error: ' + err.message));

    }, []);





    return (

        <>
            {/* 
            <Helmet
                htmlAttributes={{
                    lang: languageCode
                }}
            >
                <meta charSet="utf-8" />
                <title>{blog[0] != undefined ? `${blog[0].title} - AI Medical Scriber` : "AI Medical Scriber"}</title>
                <meta name="description" content={blog[0] != undefined && blog[0].metaDescription} />
                <meta name="keywords" content={blog[0] != undefined && blog[0].keywords} />
                <link rel="canonical" href={`https://aimedicalscriber.com/customer-care/${ID}`} />

            </Helmet> */}



            <section className={'max-w-5xl lg:max-w-7xl mx-auto my-24 px-6'} >

                {(blog != undefined) ? (
                    <article className="w-full " >
                        <header className="relative h-72 overflow-hidden rounded-3xl shadow-lg max-w-5xl mx-auto shadow-black">
                            <Image
                                src={`/images/blogs/${encodeURI(blog.icon)}.avif`}
                                className=' object-cover w-full h-full saturate-200 '
                                height={260} width={1024}
                                alt={blog.title}
                            />
                            <h1 className='  lg:font-bold bg-gradient-to-t from-black to-transparent text-white flex flex-wrap items-end justify-start absolute bottom-0 h-full px-5 py-10 text-3xl bg-opacity-25 w-full' >
                                <span className="max-w-2/3" >{blog.title}</span>
                            </h1>
                        </header>
                        <section className="mt-14 mb-10 px-2 md:px-8 mx-auto max-w-5xl " >
                            <BlogLayout data={blog.blog} />
                        </section>
                        <hr />
                        <nav className='px-4 mt-4 mb-24 flex flex-col md:flex-row gap-5 items-center min-w-max' >
                            <PremiumButton
                                label="Try AI Medical Notes"
                                href="/Try-AI-Medical-Scribe"
                            />
                            <SecondaryButton
                                label="Features"
                                href={'/features'}
                                withArrow
                                className=" font-semibold text-sm "
                            />
                        </nav>
                    </article>) : (
                    `  <Card  >
                        <Skeleton variant="h1" height={'3rem'} width={'auto'} sx={{ m: 3 }} />
                        <Skeleton variant="h2" width={'60%'} sx={{ m: 5, mb: 1 }} />
                        <Skeleton variant="rounded" height={'10rem'} width={'auto'} sx={{ m: 5, mt: 1 }} />
                        <Skeleton variant="h2" width={'60%'} sx={{ m: 5, mb: 1 }} />
                        <Skeleton variant="rounded" height={'10rem'} width={'auto'} sx={{ m: 5, mt: 1 }} />
                        <Skeleton variant="h2" width={'60%'} sx={{ m: 5, mb: 1 }} />
                        <Skeleton variant="rounded" height={'10rem'} width={'auto'} sx={{ m: 5, mt: 1 }} />
                        <Skeleton variant="rectangular" height="15rem" width='auto' sx={{ m: 5 }} />
                        <Skeleton variant="rectangular" height='3rem' width={'auto'} sx={{ m: 5 }} />
                    </Card>`
                )

                }


                <BlogLayout blogId={ID} />
                {/* <Grid
                    container
                    spacing={2}
                    justifyContent='space-evenly'
                    alignItems='flex-start'
                > */}

                <BlogsList titles={titles} limit={3} search={true} />
                {/* </Grid> */}
            </section>

        </>
    )
}

