import { Button, Grid } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";






export default function TryLearnButtons({ smallSize, buttonColor }) {
    const { t } = useTranslation();
    const dispatch = useDispatch()

    const styles = {

        'try-button': {
            fontWeight: 700,
            fontFamily: 'sans-serif',
            textTransform: 'uppercase',
            letterSpacing: '0.1rem',
            fontSize: smallSize && {
                xs: '12px',
                sm: '14px',
                md: '16px'
            },
            // height: smallSize ? {
            //     xs:'1.5rem',
            //     sm:'2rem',
            //     md:'2.2rem',
            //     lg:'2.5rem'
            // } : '3.5rem',
            backgroundColor: buttonColor ? buttonColor : '#47B758',
            transition: 'all 2.5s ease',
            color: '#fff',
            width: smallSize ? {
                xs: '140px',
                sm: '150px',
                md: '170px'
            } : '280px',
            "&:hover": {
                backgroundColor: '#1B8BC2',
                color: '#fff'
            }
        },
        'learn-button': {
            fontWeight: 700,
            fontFamily: 'sans-serif',
            fontSize: smallSize && {
                xs: '12px',
                sm: '14px',
                md: '16px'
            },
            textTransform: 'uppercase',
            letterSpacing: '0.1rem',
            border: !smallSize && '1px solid #000',
            backgroundColor: smallSize ? '#fff8' : '#fff',
            // height: smallSize ? {
            //     xs:'1.5rem',
            //     sm:'2rem',
            //     md:'2.2rem',
            //     lg:'2.5rem'
            // } : '3.5rem',
            color: '#000',
            width: smallSize ? {
                xs: '140px',
                sm: '150px',
                md: '170px'
            } : '280px',
            "&:hover": {
                backgroundColor: '#E0D7C3',
                border: !smallSize && '1px solid #E0D7C3',
                color: '#696969',
            }
        },
    }

    const handleBooking = (x) => {

        dispatch({
            type: 'SET_BOOKING',
            payload: x,
        });
    }


    return (

        <Grid
            container item
            gap={2}
            direction='row'
            justifyContent='center'
            alignItems='center'
            xs={12}
            sx={styles.techActions}
        >

            <Button
                size="larger"
                variant="contained"
                aria-label={t('buttons.startTrial')}
                onClick={() => handleBooking(true)}
                sx={styles['try-button']}
            >
                {t('buttons.startTrial')}
            </Button>
            <Button
                size="larger"
                variant="contained"
                aria-label={t('buttons.learnMore')}
                href={'/customer-care'}
                sx={styles['learn-button']}
            >
                {t('buttons.learnMore')}
            </Button>
        </Grid>
    )
}