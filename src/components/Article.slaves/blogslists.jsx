import React, { useState } from 'react';
import {  Grid, Skeleton,} from "@mui/material";
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';


export default function BlogsList({  limit, titles, empty, searchedCount }) {
    const { t } = useTranslation()
    const [currentLimit, setCurrentLimit] = useState(limit);
     const handleLoadMore = (x, n) => {
        const newLoadedBlogs = currentLimit + n;
        setCurrentLimit(newLoadedBlogs);
        if (newLoadedBlogs >= x) {
            setCurrentLimit(x);
        }


    };
    return (
        <>
            <h2 className='max-w-sm md:max-w-2xl md:min-w-full px-2 mx-auto text-primary text-2xl md:text-3xl lg:text-4xl font-bold uppercase '>
                {t('headings.articles')}
                <br />

            </h2>
            <span className='' >
                {searchedCount > 0
                    && ` ${searchedCount} ${t('headings.result')} ${searchedCount > 1 ? 's' : ''} ${t('headings.found')}.`
                }
            </span>
            <ul className='max-w-sm md:max-w-2xl lg:max-w-3xl md:min-w-full my-12 px-2 w-fit mx-auto gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3' >
                {
                    titles[0] != null ?
                        titles.slice(0, currentLimit).map((x, i) => (
                            <li
                                className='rounded-xl overflow-hidden relative '
                                key={i}
                            >
                                <Link
                                    to={`/customer-care/${x._id}`}
                                    rel='follow index'
                                >
                                <img
                                    src={`/images/blogs/thumbnails/${encodeURI(x.icon)}.avif`}
                                    className='self-center h-auto w-full flex-grow saturate-200 '
                                    height={'auto'} width={1024}
                                    alt={x.title}
                                />
                                    <p className=' lg:font-semibold bg-gradient-to-t from-black to-transparent text-white flex items-end absolute bottom-0 h-full px-2 py-4 text-md bg-opacity-25 w-full' >
                                        {x.title.length > 70 ? `${x.title.slice(0, 70)}...` : x.title}
                                    </p>
                                </Link>
                            </li>
                        ))
                        :
                        (
                            empty ? "No Result Found" :
                                Array(5).fill(' ').map((_, index) => (
                                    <Grid item key={index} sx={{ width: '100%' }}>
                                        <Skeleton variant="rectangular" height={40} width={'auto'} sx={{ m: 2 }} />
                                        <Skeleton variant="rounded" height={24} width={'auto'} sx={{ m: 2 }} />
                                    </Grid>
                                )))
                }

            </ul>
            {currentLimit < titles.length && (
                <button
                    disabled={empty}
                    onClick={() => handleLoadMore(titles.length, 3)}
                    aria-label={t('Load More')}
                    className=' col-span-full'
                >
                    {t('Load More')}
                </button>

            )}

        </>

    )
}
