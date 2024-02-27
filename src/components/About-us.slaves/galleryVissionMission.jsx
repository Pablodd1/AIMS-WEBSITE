
import React from 'react';
import { Button,  Grid, Slide, Typography } from "@mui/material";
import { createTheme, } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';


import image1x from "../../assets/slides/aboutUS-1.webp";
import image2x from "../../assets/slides/aboutUS-3.webp";
import image1y from "../../assets/slides/aboutUS-2.webp";
import image2y from "../../assets/slides/aboutUS-4.webp";





// export function VisionMission({styles}) {
//     const { t } = useTranslation()

//     return (
//     )
// }

export function AboutUSGallery({styles}) {
    const [showImg, setShowImg] = React.useState(false);
    const theme = createTheme();
    const imgRef = React.useRef(null);



    React.useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                setShowImg(false);

                if (entry.isIntersecting) {
                    setTimeout(() => {
                        setShowImg(true);
                    }, 500);
                }
            });
        });

        if (imgRef.current) {
            observer.observe(imgRef.current);
        }

        return () => {
            if (imgRef.current) {
                observer.unobserve(imgRef.current);
            }
        };
    }, []);


    return (
        <Grid
            container item
            justifyContent='space-evenly'
            alignItems='flex-end'
            ref={imgRef} id='AboutUs-Img'
            xs={12} sm={12} md={8} lg={7} xl={5}
            sx={styles['aboutus-imgCont']}
        >
            {[[image1x, image2x], [image1y, image2y]].map((x, i) => {
                return (
                    <Grid
                        container item
                        spacing={5}
                        direction={'column'}
                        justifyContent='space-around'
                        alignItems='flex-end'
                        xs={6}
                        key={i}
                    >

                        {
                            x.map((y, j) => {
                                return (
                                    <Slide
                                        appear
                                        in={showImg}
                                        direction="up"
                                        {...({ timeout: 2000 * 0.8 * (i + j) })}
                                        key={j}
                                    >
                                        <Grid item sx={{
                                            ...styles['aboutUS-img'], ...{

                                                [theme.breakpoints.up('xs')]: {
                                                    height: (i + j) % 2 == 0 ? '300px' : '260px',

                                                },
                                                [theme.breakpoints.up('sm')]: {
                                                    height: (i + j) % 2 == 0 ? '430px' : '370px',

                                                },
                                                [theme.breakpoints.up('md')]: {
                                                    height: (i + j) % 2 == 0 ? '430px' : '370px',


                                                },
                                                [theme.breakpoints.up('lg')]: {
                                                    height: (i + j) % 2 == 0 ? '540px' : '480px',

                                                },
                                                [theme.breakpoints.up('xl')]: {
                                                    height: (i + j) % 2 == 0 ? '580px' : '520px',

                                                },

                                                "&:hover": {
                                                    '& img': {

                                                        transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                                                        transform: (i + j) % 2 == 0 ? 'translateY(-10%)' : 'translateY(-20%)',


                                                    }
                                                },
                                            }
                                        }} >
                                            <img
                                                src={y}
                                                height='auto'
                                                width={'100%'}
                                                alt={`about-us-${i},${j}`}
                                            />
                                        </Grid>
                                    </Slide>
                                )
                            })
                        }
                    </Grid>
                )
            })}
        </Grid>
    )
}