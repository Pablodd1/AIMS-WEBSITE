import React from 'react';
import { Box, Grid, IconButton, Tooltip, Typography } from "@mui/material";
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { contactIcons } from "../assets/data/resources";

export default function FancyLinks() {
    const positionRef = React.useRef({
        x: 0,
        y: 0,
    });
    const popperRef = React.useRef(null);
    const areaRef = React.useRef(null);
    const dispatch = useDispatch();
    const { t } = useTranslation()

    const handleBooking = (x) => {

        dispatch({
            type: 'SET_BOOKING',
            payload: x,
        });
    }

    const handleMouseMove = (event) => {
        positionRef.current = { x: event.clientX, y: event.clientY };

        if (popperRef.current != null) {
            popperRef.current.update();
        }
    };


    return (

        <Box
            sx={{
                position: 'fixed',
                right: 0,
                top: '25%',
                zIndex: 20,
                width: '40px',
            }} >

            <Grid
                container
                alignItems={'center'}
                justifyContent={'center'}
                direction={'column'} >
                {contactIcons.map((x, i) => {
                    return (
                        <Grid
                            item
                            key={i}
                            sx={{
                                transform: 'skew(0,-40deg)',
                                backgroundColor: x.fcolor,
                                padding: 0.5,
                                zIndex: 21,
                                overflow: 'hidden',
                                '&:hover': {
                                    backgroundColor: '#fffff0',
                                    '& > .MuiIconButton-root': {
                                        color: x.fcolor,
                                    },
                                }
                            }}
                        >
                            <Tooltip
                                title={x.title}
                                placement="right-end"
                                arrow
                            >
                                <IconButton
                                    ref={areaRef}
                                    onMouseMove={handleMouseMove}
                                    color={x.fcolor}
                                    aria-label={x.title}
                                    size='small'
                                    href={x.link}
                                    target='_blank'
                                    disableFocusRipple
                                    disableRipple
                                    rel='me'
                                    sx={{
                                        ...{
                                            color: '#fffff0',
                                            pt: 1.5, pb: 1.5,
                                            transform: 'skew(0,40deg)',
                                        }
                                    }}
                                >
                                    {x.icon}
                                </IconButton>

                            </Tooltip>
                        </Grid>

                    )
                })}
                <Grid item component={'button'}
                    onClick={() => handleBooking(true)}
                    aria-label={t('buttons.bookNow')}
                    sx={{
                        transform: 'skew(0,-40deg)',
                        backgroundColor: '#000',
                        color: '#fff',
                        padding: 0.25,
                        writingMode: 'vertical-rl',
                        '&:hover': {
                            backgroundColor: '#fff',
                            color: '#000',
                            cursor: 'pointer'
                        }
                    }}>
                    <Box
                        className='py-4 w-2'
                        sx={{
                            transform: 'skew(0,40deg)',
                            width: '100%',
                            minWidth: 30,
                            p: 'auto',
                            m: 0,
                            height: 'fit-content',

                        }}
                    >
                        <Typography variant='p' sx={{ writingMode: 'vertical-lr' }} >
                            {t('buttons.bookNow')}
                        </Typography>
                    </Box>
                </Grid>


            </Grid>
        </Box>
    )
}