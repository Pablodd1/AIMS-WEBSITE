import { Grid, Paper, Typography } from "@mui/material";
import React from 'react';
import { createTheme } from '@mui/material/styles';

import aiImage from "../../assets/icons/ai.webp";
import logo from "../../assets/icons/aims-logo.webp";
import aiBG from "../../assets/slides/aibg2.webp";


export default function TransparentWord({ styles }) {
    const theme = createTheme();
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
        <Grid
            container
            sx={{
                width: '100%',
                minHeight: '100vh',
                height: 'auto',
                maxHeight: 'max-content',
                backgroundImage: `url('${aiBG}')`,
                backgroundColor: '#1b212c',
                backgroundPosition: 'top right'
            }}
        >
            <Grid
                container
                item
                xs={12} md={6}
                sx={{ overflow: 'hidden' }}
            >
                <Grid item xs={12} >
                    <Paper sx={{
                        ...styles.logoMediaAI, ...{
                            [theme.breakpoints.up('xs')]: {
                                height: '190px',
                            },
                            [theme.breakpoints.up('sm')]: {
                                height: '190px',
                            },
                            [theme.breakpoints.up('md')]: {
                                height: '240px',
                            },
                            [theme.breakpoints.up('lg')]: {
                                height: '280px',
                            },
                            [theme.breakpoints.up('xl')]: {
                                height: '280px',
                            }
                        }
                    }} >
                        <img src={logo} height={'100%'} width={'auto'} alt="AI Medical Scriber Logo" />

                    </Paper>
                </Grid>
                <Grid
                    item
                    sx={styles.aiTextCont}
                    xs={12}
                >
                    <Typography variant='h4' component='h1' sx={{ maxWidth: (winWidth > 900 && winWidth < 1000) ? '320px' : '650px', fontFamily: 'Exo' }} >
                        <span style={{ color: '#93c47d' }} > Redefining the future of medical documentation.
                            <br /></span>
                        <br />
                        Updated 2023

                    </Typography>
                </Grid>
            </Grid>

            <Grid item xs={12} md={6} >
                <Paper sx={{
                    ...styles.aiMediaSeg, ...{
                        [theme.breakpoints.up('xs')]: {
                            height: '260px',
                            position: 'static'
                        },
                        [theme.breakpoints.up('sm')]: {
                            height: '280px',
                        },
                        [theme.breakpoints.up('md')]: {
                            height: '370px',
                            position: 'absolute'
                        },
                        [theme.breakpoints.up('lg')]: {
                            height: '480px',
                        },
                        [theme.breakpoints.up('xl')]: {
                            height: '480px',
                        }
                    }
                }} >
                    <img src={aiImage}
                        style={{
                            width: 'auto',
                            height: '100%',

                        }}
                        alt="AI Medical Scriber AI"
                    />
                </Paper>
            </Grid>

        </Grid>
    )
}