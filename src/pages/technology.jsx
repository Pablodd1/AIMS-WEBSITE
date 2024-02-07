import React, { lazy } from 'react';
import { Card, CardMedia, Grid,  Typography, Zoom } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';


import whyUs1 from "../assets/illusters/medical-chat.webp";
import whyUs2 from "../assets/illusters/medical-report.webp";
import whyUs3 from "../assets/illusters/reliable.webp";
import AIbg from "../assets/icons/ai.webp";
import video from "../assets/data/ai.mp4";

import TransparentWord from '../components/technology.slaves/transparentWords';
const SellingPoints = lazy(() => import('../components/technology.slaves/sellingPoints'));
const VideoComponent = lazy(() => import('../components/technology.slaves/autoplayVideo'));
const TryLearnButtons = lazy(() => import('../components/common.slaves/try learn button'));


export default function Technology({styles}) {
    const whyUSRef = React.useRef(null);
    const [whyUS, setWhyUS] = React.useState(false);
    const { t } = useTranslation();
    const { i18n } = useTranslation();
    const languageCode = i18n.language;


    React.useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                setWhyUS(false);

                if (entry.isIntersecting) {
                    setTimeout(() => {
                        setWhyUS(true);
                    }, 500);
                }
            });
        });

        if (whyUSRef.current) {
            observer.observe(whyUSRef.current);
        }

        return () => {
            if (whyUSRef.current) {
                observer.unobserve(whyUSRef.current);
            }
        };
    }, []);


    const data = [
        {
            heading: t('features.head1'),
            txt: t('features.txt1'),
        },
        {
            heading: t('features.head2'),
            txt: t('features.txt2'),
        },
        {
            heading: t('features.head3'),
            txt: t('features.txt3'),
        },
        {
            heading: t('features.head4'),
            txt: t('features.txt4'),
        },
        {
            heading: t('features.head5'),
            txt: t('features.txt5'),
        }
    ];

    const whyUs = [
        {
            title: t("headings.customerSupport"),
            des: "24/7",
            img: whyUs1
        },
        {
            title: t("headings.freeDemo"),
            des: `1 ${t("headings.month")}`,
            img: whyUs2
        },
        {
            title: `98% ${t("headings.accuracy")}`,
            des: t("headings.verified"),
            img: whyUs3
        }
    ]




    return (
        <>


            <Helmet htmlAttributes={{ lang: languageCode }}            >
                <meta charSet="utf-8" />
                <title>Technology | AI Medical Scribe</title>
                <meta name="description" content="Discover the cutting-edge technology behind AI Medical Scriber - Harness the power of AI to transcribe and assist in medical coding, billing, and documentation." />
                <meta name="keywords" content="medical coding practice for beginners,ai virtual scribe,virtual, medical transcriptionist,technology" />

 
            </Helmet>

            <Grid
                container
                justifyContent='space-evenly'
                alignItems='center'
                sx={{ maxWidth:'100%',
                    minHeight: '100vh',

                }}
            >
                <Grid item xs={12} >
                    <TransparentWord text={'AI'} font={'Exo'} fontSize={'150px'} img={AIbg} styles={styles} />
                </Grid>
                <Grid
                    item container
                    spacing={5}
                    alignItems={'center'}
                    justifyContent='space-between'
                    direction='row'
                    xs={12}
                    sx={styles.techCont}
                >
                    <Grid item xs={12} >
                        <Typography variant='h3' component='h1' style={styles.techHEad}>
                            {t('headings.features')}
                        </Typography>
                        <Grid item
                            xs={12} md={12} lg={12} xl={12} sx={{ overflowX: 'hidden' }}
                        >
                            <VideoComponent src={video} />
                        </Grid>
                    </Grid>
                    {data.map((x, i) => (
                        <Grid item xs={12} md={6} key={i} sx={styles.techDetail}>

                            <div>
                                <Typography variant='h4' component='h2' >{x.heading}</Typography>
                                <Typography variant='p' component='p' sx={{ color: '#fffb' }} >{x.txt}</Typography>
                            </div>
                        </Grid>
                    ))}
                    <Grid item xs={12} >
                        <SellingPoints styles={styles} />
                    </Grid>
                    <Grid item xs={12} >
                        <TryLearnButtons styles={styles} />
                    </Grid>
                </Grid>
                <Grid
                    container
                    alignItems={'center'}
                    justifyContent='space-evenly'
                    item
                    ref={whyUSRef}
                    sx={styles.whyUS}
                >
                    <Grid item xs={12} >
                        <Typography variant='h2' component='h1' style={{ textAlign: 'center' }}>{t('headings.whyUs')}</Typography>

                    </Grid>
                    {whyUs.map((x, i) => {
                        return (
                            <Zoom
                                appear
                                in={whyUS}
                                {...({ timeout: 2000 * 0.8 * (i) })}
                                key={i}
                            >
                                <Grid item sx={styles.contactItem}>
                                    <Card key={i} elevation={0} sx={styles.teamImgCont} >
                                        <CardMedia
                                            component="img"
                                            alt={x.title}
                                            image={x.img}
                                            sx={styles.teamImg}
                                        />
                                    </Card>
                                    <Typography component={'h4'} variant='h5' ><b>{x.title}</b> </Typography>
                                    <Typography component={'h3'} variant='h6' >{x.des}</Typography>
                                </Grid>
                            </Zoom>
                        )
                    })}
                </Grid>
            </Grid>

        </>
    )
}