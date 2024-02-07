import React, { lazy,  } from 'react';
import { Grid } from "@mui/material";
import { Helmet } from "react-helmet";
import { useTranslation } from 'react-i18next';

const AboutUSGallery = lazy(() => import('../components/About-us.slaves/galleryVissionMission').then(module => ({ default: module.AboutUSGallery })));
const VisionMission = lazy(() => import('../components/About-us.slaves/galleryVissionMission').then(module => ({ default: module.VisionMission })));
const CEOCont = lazy(() => import('../components/About-us.slaves/CEOandTeam').then(module => ({ default: module.CEOCont })));
const TeamDetail = lazy(() => import('../components/About-us.slaves/CEOandTeam').then(module => ({ default: module.TeamDetail })));
const ContactUSAboutUs = lazy(() => import('../components/About-us.slaves/ContactandWorld').then(module => ({ default: module.ContactUSAboutUs })));
const WorldMapCont = lazy(() => import('../components/About-us.slaves/ContactandWorld').then(module => ({ default: module.WorldMapCont })));

export default function AboutUs({styles}) {
    const { i18n } = useTranslation();
    const languageCode = i18n.language;
    const [winWidth, setWinWidth] = React.useState(window.innerWidth);
   
    React.useEffect(() => {
        const handleResize = () => {
            setWinWidth(window.innerWidth);
        };


        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <>
            <Helmet
                htmlAttributes={{
                    lang: languageCode
                }}
            >
                <meta charSet="utf-8" />
                <title>About Us | AI Medical Scriber</title>
                <meta name="description" content="Learn about AI Medical Scriber - Our mission is to revolutionize medical documentation. Discover how our AI software empowers healthcare professionals." />
                <meta name="keywords" content="ai services,virtual administrative assistant,document management,document controller,technical documentation,ai scribe medical,ai medical scribing" />
            </Helmet>

            <Grid
                container
                spacing={2}
                rowSpacing={20}
                justifyContent='space-evenly'
                alignItems='center'
                sx={{...styles.aboutUS,...{maxWidth:'100%'}}}
            >
                <VisionMission styles={styles} />
              {winWidth >= '500' && <AboutUSGallery styles={styles}  /> }  
            </Grid>
            <WorldMapCont styles={styles} />
            <ContactUSAboutUs styles={styles} />
            <CEOCont styles={styles} />
            <TeamDetail styles={styles} />
        </>
    )
}
