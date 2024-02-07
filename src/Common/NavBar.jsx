import * as React from 'react';
import { Box, Grid, Zoom } from "@mui/material";

import { NavItems } from './Slaves/navItems';
import CustomDrawer from './Slaves/drawer';
import LangSwitcherMenu from './Slaves/langSwitcherMenu';
import { Link } from 'react-router-dom';
import logo from "../assets/icons/aims-logo.webp"



export default function NavBar({ links, styles }) {
    const [winWidth, setWinWidth] = React.useState(window.innerWidth);
    const [isScrolled, setIsScrolled] = React.useState(false);

    React.useEffect(() => {
        const handleResize = () => {
            setWinWidth(window.innerWidth);
        };
        window.addEventListener("resize", handleResize);
        return () => { window.removeEventListener("resize", handleResize); };
    }, []);


    React.useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 10) {
                setIsScrolled(true);
            } else {
                window.scrollTo(0, 0)
                setIsScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => { window.removeEventListener('scroll', handleScroll); };
    }, []);

    const myStyles = {
        logoMin: {
            height: '60px',
            transition: 'all 1.5s ease-in-out',
            overflow: 'hidden',
            backgroundColor: 'transparent',
            position: 'absolute',
            padding: 0, margin: 0,
            maxWidth: '80%',
            justifySelf: 'flex-start',
            top: 2, left: 30,
            transition: 'all 1.5s ease-in-out',

        },

        logoDesk: {
            position: 'absolute',
            height: 'auto',
            maxHeight: '80px',
            width: 'auto',
            maxWidth: '20%',
            justifySelf: 'flex-start',
            margin: 'auto',
            transition: 'all 1.5s ease-in-out',
            left: 5,
            top: 0,
            bottom: 0

        },
        logoMob: {
            height: 'auto',
            maxHeight: '75px',
            width: 'auto',
            position: 'absolute',
            maxWidth: '200px',
            left: 0,
            right: 0,
            marginLeft: 'auto',
            marginRight: 'auto',
            transition: 'all 1.5s ease-in-out',
            top: 1,

        }
    };
    const isDesktopWidth = winWidth >= 1120;

    const logoSource = isScrolled ? '/apple-touch-icon-180x180.png' : logo;
    const logoStyles = isScrolled ? (isDesktopWidth ? { ...myStyles.logoMin } : { ...myStyles.logoMin, ...{ left: 'auto', } }) : (isDesktopWidth ? myStyles.logoDesk : myStyles.logoMob);


    return (
        <Grid
            container
            id="nav"
            component={'nav'}
            justifyContent={'space-between'}
            direction={'row'}
            sx={!isScrolled ? styles.nav : styles.nav2}
        >
            <Box    >
                <Zoom
                    appear
                    in={true}
                    timeout={{ enter: 1000, exit: 1000 }}
                    key={isScrolled}
                >
                    <Link to={'/'} >
                        <img
                            src={logoSource}
                            style={{ ...logoStyles, }}
                            height={'auto'} width={'auto'}
                            alt='AI Medical Scriber'
                        />
                    </Link>
                </Zoom>
            </Box>


            {
                winWidth > 1120 ? (
                    <>
                        <Grid item container xs={8} justifyContent={'flex-end'} alignItems={'center'} className="absolute top-1 right-1 p-auto min-h-full " >
                            <NavItems loc={'Nav'} styles={styles} links={links} />
                            <Box className="pl-4">
                                <LangSwitcherMenu size="large" />
                            </Box>
                        </Grid>


                    </>
                )
                    : (
                        <>
                            <Grid item className="fixed top-1 right-1 p-auto text-white-300" >
                                <CustomDrawer styles={styles} links={links} />
                            </Grid>
                            <Box className="fixed top-1 left-1 p-auto text-white-300">
                                <LangSwitcherMenu size="large" />
                            </Box>
                        </>
                    )
            }


        </Grid>

    )
}
