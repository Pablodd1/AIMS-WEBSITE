import React from 'react';
import { Box } from "@mui/material";
import authBG from "../assets/patterns/pattern3.webp";
import headBG from "../assets/slides/bgAuth.webp";
import { Helmet } from "react-helmet";
import LoginDialog from './signin';
import { useTranslation } from 'react-i18next';



export default function Auth() {
    const { i18n } = useTranslation();
    const languageCode = i18n.language;


    const styles = {
        loginLogo: {
            height: '120px',
            width: 'auto',
            paddingBottom: '15px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: 'auto',
            marginRight: 'auto',
        },
        authCardH: {
            m: 0, p: 0,
            borderBottom: '3px solid #0009',
        },
        authForm: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            gap: '15px',
        },
        authInputs: {
            color: '#00796b',
            '& input': {
                backgroundColor: 'transparent',

            },
        },
        authHead: {
            textAlign: 'left',
            color: '#000d',
            letterSpacing: 3.5,
            textTransform: 'uppercase',
            fontFamily: 'arial',
            fontWeight: 700,
            width: '100%',
            pt: 2, pb: 2, pl: 2, m: 0,
            backgroundImage: `url(${headBG})`,
            backgroundSize: 'auto 100%',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right',
            backgroundColor: '#fff',
            filter: 'grayscale(50%)',

        },
        authCont: {
            overflow: 'hidden',
            height: 'auto',
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundImage: `url(${authBG})`,
            // background: 'radial-gradient(circle, #fff2 0%,#f00b 70%, #f00c 100%)',
            // backgroundSize: 'cover',
            // backgroundRepeat: 'no-repeat',
            // backgroundPosition: 'bottom',
            width: 'auto',
            maxWidth: '100%',
            m: 'auto',
            p: 'auto',

        },
        authCard: {
            boxShadow: 'outset 10px 10 50px #0004',
            borderRadius: '15px',
            backgroundColor: '#44444433',
            backdropFilter: 'blur(10px)',
            p: 'auto', m: 'auto',
            overflow: 'hidden',
            width: 'auto',
            minWidth: '512px',
            maxWidth: '95%',
            '@media only screen and (max-width: 599.95px)': {
                ml: 2, mr: 2
            },
            '@media only screen and  (min-width: 600px) and (max-width: 739px)': {
                ml: 5, mr: 5
            }, '@media only screen and  (min-width: 740px) and (max-width: 900px)': {
                ml: 10, mr: 10
            },
        },
        authIcons: {
        }
    }
    return (

        <>
            <Helmet
                htmlAttributes={{
                    lang: languageCode
                }}
            >


            </Helmet>
            <Box sx={styles.authCont} >
                <LoginDialog open={true} />
            </Box>
        </>

    )
}