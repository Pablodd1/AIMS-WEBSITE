'use client'
import React, { useState } from 'react';
// import { Grid, Skeleton, } from "@mui/material";
import Link from 'next/link';
import Image from 'next/image';
import SecondaryButton from '@UTILS/secondary_button';
import { useSearchParams } from 'next/navigation';
// import { useTranslation } from "react-i18next";


export default function BlogsList({ limit, titles, empty, }) {
    const searchedCount = useSearchParams().get('q')
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
            <h2
                className=" w-full text-xl lg:text-3xl font-sans font-normal text-primary border-b-2 border-gray-300 py-2.5 mt-15 mb-2 ">
                <strong className="uppercase text-secondary bg-bg rounded-lg px-1.5 font-medium py-0.5 my-2.5 text-xs lg:text-sm tracking-wider">
                    FROM THE BLOG
                </strong>
                <br />
                Learn More About AI in Healthcare
            </h2>
            <span className='mb-15' >
                {searchedCount > 0
                    && ` ${searchedCount} ${'results'} ${searchedCount > 1 ? 's' : ''} ${'found'}.`
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
                                    href={`/customer-care/${x._id.$oid}`}
                                    rel='follow index'
                                >
                                    <Image
                                        src={`/images/blogs/thumbnails/${encodeURI(x.icon)}.avif`}
                                        className='self-center h-auto w-full flex-grow saturate-200 '
                                        height={328} width={512}
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
                                    `  <Grid item key={index} sx={{ width: '100%' }}>
                                        <Skeleton variant="rectangular" height={40} width={'auto'} sx={{ m: 2 }} />
                                        <Skeleton variant="rounded" height={24} width={'auto'} sx={{ m: 2 }} />
                                    </Grid>`
                                )))
                }

            </ul>
            {currentLimit < titles.length && (
                <SecondaryButton
                    label="Load More"
                    onClick={() => handleLoadMore(titles.length, 3)}
                    withArrow
                    className=" col-span-full font-semibold text-sm "
                />

            )}

        </>

    )
}
