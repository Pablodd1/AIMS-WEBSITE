import React from 'react';
import { Box, Button, Dialog, DialogTitle, Divider, Fab, Grid, IconButton, Slide, } from '@mui/material';
import { FaMicrophone } from 'react-icons/fa';
import { BsChatRightTextFill } from 'react-icons/bs';
import { SiHelpscout } from 'react-icons/si';
import { useTranslation } from 'react-i18next';

import { contactIcons } from '../assets/data/resources';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide
        ref={ref}
        {...props}
        timeout={{ enter: 700, exit: 400 }}
    />;
});

const styles = {
    box: {
        width: 'auto',
        overflow: 'hidden',
        pl: 3, pr: 3
    },
    grid: {
        justifyContent: 'center',
        overflow: 'auto',
        mt: 'auto', mb: 'auto',
        m: 2,
        p: 0
    },
    gridItem: {
        width: 'auto'
    },
    dialogTitle: {
        backgroundColor: '#0b1d51',
        color: '#fff',
        width: 'auto',
        textTransform: 'uppercase',
        letterSpacing: 1,
        textAlign: 'center',
        fontWeight: '400'
    },
    footer: {
        width: '60%',
        maxWidth: '740px',
        height: 'auto',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginTop: 1,
        mr: 'auto', ml: 'auto',
    },
    dialogCont: {
        width: 'fit-content',
        m: 0, p: 0,
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    askQButtonCont: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',

    },
    askQButton: {
        borderRadius: '50px',
        border: '1px double #27ae60',
        transition: 'all 0.1s ease-in',
        '&:hover': {
            border: '1px double #000',
            backgroundColor: '#000',
            color: '#fff'
        }
    },
    fab: {
        position: "fixed",
        bottom: "20px",
        right: "30px",
        backgroundColor: "#00B0FF",
        borderRadius: "50px",
        width: 'auto',
        height: 'fit-content',
        color: "#212121",
        fontSize: "20px",
        textAlign: "center",
        padding: 1,
        pr: 2, pl: 2,
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
        cursor: "pointer",
        // backgroundImage: "radial-gradient(#ffffff, #8B0000)",
        border: "none",
        transition: 'all 0.3s ease-in-out',
        animation: "glowFAB 1.5s infinite",
        '&:hover': {
            backgroundColor: '#000',
            color: '#fff'
        },
        // '@media only screen and (max-width: 599.95px)': {
        //     fontSize: "22px",
        // },
        // '@media only screen and  (min-width: 600px) and (max-width: 739px)': {
        //     fontSize: "26px",
        // }, '@media only screen and  (min-width: 740px) and (max-width: 900px)': {
        //     fontSize: "26px",
        // },
        "@keyframes glowFAB": {
            "0%": {
                boxShadow: "0 0 5px #304FFE, 0 0 2px #F44336, 0 0 2px #304FFE, 0 0 5px #F44336",

            },
            "50%": {
                boxShadow: "0 0 10px #00E676, 0 0 2px #0f0, 0 0 2px #00E676, 0 0 10px #0f0",
            },
            "100%": {
                boxShadow: "0 0 5px #304FFE, 0 0 2px #F44336, 0 0 2px #304FFE, 0 0 5px #F44336",
            },
        },

    },
}




export default function ChatButton() {
    const [hireMe, setHireMe] = React.useState(false);
    const { t } = useTranslation()

    return (
        <>
            <button
                variant="circular"
                // color="primary"
                // sx={styles.fab}
                className='z-40 fixed bottom-5 right-5 bg-primary text-white px-3 py-3 rounded-full  shadow-md shadow-secondary'
                onClick={() => setHireMe(true)}

            >
                
                <img
                        src={'/svg/support.svg'}
                        className=' '
                        height={'auto'} width={40}
                        alt='AI Medical Scriber'
                    />
            </button>
            <Dialog
                onClose={() => setHireMe(!hireMe)}
                open={hireMe}
                TransitionComponent={Transition}
                keepMounted
            >
                <DialogTitle sx={styles.dialogTitle} >Ask Your Questions.</DialogTitle>
                <Box sx={styles.dialogCont}  >
                    <Divider />
                    <Grid
                        container
                        rowGap={2}
                        alignItems={'center'}
                        justifyContent={'center'}
                        sx={styles.grid} >
                        <Grid item xs={12} sx={styles.gridItem} >
                            <a href="https://www.videoask.com/f9k42wt1x?autoplay=true" rel='noindex nofollow'>
                                <img
                                    height='auto'
                                    style={{ borderRadius: '16px', width: '100%' }}
                                    src="https://media.videoask.com/transcoded/c166fe01-fc95-433e-9c8a-bd24fa43c934/thumbnails/videoask_play.gif"
                                    alt="Lactate Threshold test / Sweat Test"
                                />
                            </a>
                        </Grid>
                        <Grid item xs={12}
                            sx={styles.askQButtonCont}
                        >
                            <Button
                                variant='outlined'
                                size='small'
                                aria-label={t('buttons.askByVoice')}
                                startIcon={<FaMicrophone />}
                                sx={styles.askQButton}
                            >
                                {t('buttons.askByVoice')}
                            </Button>
                            <Button
                                variant='outlined'
                                size='small'
                                aria-label={t('buttons.askByText')}
                                startIcon={<BsChatRightTextFill />}
                                sx={styles.askQButton}
                            >
                                {t('buttons.askByText')}
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
                <Divider > Follow US</Divider>
                <Grid container sx={styles.footer}>
                    {contactIcons.map((x) => {
                        return (
                            <Grid item sx={{
                                transition: 'all 0.3s ease-in-out',
                                '&:hover': {
                                    transform: 'translateY(-10px)',
                                    cursor: 'pointer'
                                }
                            }}
                                key={x.title}>
                                <IconButton variant="text" color={x.color}
                                    onClick={() => window.open(process.env.PUBLIC_URL + x.link, '_blank')}
                                    target='_blank'
                                    aria-label={x.icon}
                                    disableFocusRipple
                                    disableRipple 
                                    rel='noopener noreferrer me'
                                    >
                                    {x.icon}
                                </IconButton>
                                <div style={{
                                    height: '6px',
                                    borderRadius: '25px',
                                    backgroundColor: x.fcolor,
                                    marginTop: 1,
                                    marginBottom: 5
                                }} ></div>
                            </Grid>
                        )
                    })}
                </Grid>
            </Dialog >
        </>
    )
}