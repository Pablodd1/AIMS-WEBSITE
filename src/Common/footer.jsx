import React from "react";
import { Box, Grid, Link, Typography, } from "@mui/material";
import { useTranslation } from "react-i18next";

import { linksLegal } from "../assets/data/resources";
import EmailSubscriber from "./Slaves/emailSubscriber";
import { NavItems } from "./Slaves/navItems";
import logo from "../assets/icons/aims-logo.webp";
import footerBG from "../assets/slides/footer.webp";

const styles = {
    fContainer: {
        height: 'max-content',
        color: '#fff',
    },
    fWraper: {
        width: 'auto',
        p: 'auto', mt: '100px',
        m: 'auto',
        backgroundImage: `url('${footerBG}')`,
        backgroundSize: {
            xs: 'auto 100%',
            md: '100% 100%',
            lg: '100% auto'
        },
        backgroundRepeat: 'no-repeat',
        backgroundPosition: {
            xs: 'top center',
            lg: 'top'
        },
        p: 'auto', pb: 5,
        pt: {
            xs: '180px',
            md: '50px'
        },
        justifyContent: 'flex-end',
        '& > *:last-child': {
            m: 'auto', mt: 0, mb: 0,
            p: 'auto', pt: 0
        }
    },
    footerLogo: {
        height: '180px',
        width: 'auto',
        paddingBottom: '15px'
    },
    'fL&D': {
        width: 'max-content',
        maxWidth: '320px',
        minWidth: '220px',
        m: 'auto', p: 'auto',
    },
    fDescrip: {
        textAlign: 'justify',
        width: '50px',
        p: 5, m: 'auto', mt: 2
    },
    fLinks: {
        m: 5, mb: 1,
        p: 'auto',
        borderTop: '1px solid #fff',
    },
    flegal: {
        m: 1, mb: 5, mt: 1,
        p: 'auto', pt: 0,
        textDecoration: 'none',
        '& a': {
            textDecoration: 'none',
            color: '#fff',
        },
    }
}

export default function Footer({ links, linkStyles }) {
    const { t } = useTranslation()



    return (
        <React.Fragment>
            <Box sx={styles.fContainer} >
                <Grid
                    container
                    alignItems={'flex-end'}
                    spacing={1}
                    sx={{ ...styles.fWraper, ...{ backgroundImage: `url('${footerBG}')`, } }}
                >
                    <Grid item xs={12} md={6} >
                        <EmailSubscriber />
                    </Grid>
                    <Grid item xs={12} md={6} sx={styles.fDescrip} >
                        <Box sx={styles['fL&D']} >
                            <img src={logo} alt="AI Medical Scriber Logo Text" height={'auto'} width={'auto'} style={styles.footerLogo} />
                            <Typography component={'p'} variant="p" >
                                {t('legals.Summary')}
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid
                        container item
                        justifyContent={'center'}
                        alignItems={'center'}
                        columnGap={5}
                        xs={12} sm={12} md={12} lg={12} xl={12}
                        sx={styles.fLinks}
                    >

                        <NavItems loc={'footer'} isScrolled={true} links={links} styles={linkStyles} />
                    </Grid>
                    <Grid
                        container item
                        justifyContent={'center'}
                        alignItems={'center'}
                        columnGap={2}
                        xs={12} sm={12} md={12} lg={12} xl={12}
                        sx={styles.flegal}
                    >
                        {
                            linksLegal.map((x, i) => {
                                return (
                                    <Grid item key={i}>
                                        <Link component={'a'} href={x.add} aria-label={x.title} rel="follow index" >
                                            <Typography id="t&p" >   {x.title}    </Typography>
                                        </Link>
                                    </Grid>
                                )
                            })}
                    </Grid>
                    <div className='flex justify-start w-full items-start mt-2 ' >
                        <span className='text-sm z-10 rounded-r-3xl hover:text-blue-900 hover:bg-teal-100 py-1 px-6 tracking-wider inline bg-black-500 text-white-200' >
                            Developed By <a target='_blank' href='https://www.myababeel.com' rel='' ><img src='https://myababeel.com/ababeel-logo-transparent.webp' className='inline-block' width={50} height={39} /> <b > MyAbabeel</b></a>
                        </span>
                    </div>
                </Grid>
            </Box>
        </React.Fragment >
    )
}