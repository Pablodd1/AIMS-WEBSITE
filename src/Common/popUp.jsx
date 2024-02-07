import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import bg from "../assets/patterns/pattern7.webp";
import {
    Dialog,
    DialogContent,
    DialogTitle,
    Slide,
    FormControlLabel,
    Checkbox,
    Divider,
    Grid,
} from '@mui/material';
import { TiInfoLarge } from "react-icons/ti";
import { useTranslation } from 'react-i18next';

// import { styles } from '../styles/stylesObj';
import logo from "../assets/icons/aims-logo-black.webp";
import EmailSubscriber from './Slaves/emailSubscriber';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide appear in={true} direction="up" timeout={{ enter: 500, exit: 0 }} ref={ref} {...props} />;
});


const Popup = ({ styles }) => {
    const popup = useSelector((state) => state.popup);
    const showPopup = !localStorage.getItem('dontShowPopup') && popup;
    const dispatch = useDispatch();
    const { t } = useTranslation();

    const handleDontShowAgain = (e) => {
        const { checked } = e.target;
        if (checked) { sessionStorage.setItem('dontShowPopup', 'true'); }
        else { sessionStorage.removeItem('dontShowPopup'); }
    };
    const handleClosePopup = () => { dispatch({ type: 'SET_POPUP', payload: false }); };
    const handleBooking = (x) => { dispatch({ type: 'SET_BOOKING', payload: x, }); }
    const customStyles = { backgroundColor: '#b2f5ea' }

    useEffect(() => {
        const dontShowPopup = localStorage.getItem('dontShowPopup');
        const hasScrolled = window.scrollY >= 500;

        if (!dontShowPopup && hasScrolled) {
            const timeout = setTimeout(() => { dispatch({ type: 'SET_POPUP', payload: true }); }, 5000);
            return () => clearTimeout(timeout);
        }
    }, [dispatch]);


    return (

        <Dialog
            open={showPopup}
            TransitionComponent={Transition}
            onClose={handleClosePopup}
            sx={{
                '& .MuiPaper-root': {
                    backgroundImage: `url("${bg}")`,
                    maxWidth: '600px'
                },
            }}
        >

            <DialogTitle sx={customStyles}>
                <img src={logo} alt="AI Medical Scriber Logo Text" height={'auto'} width={'auto'} style={styles.logoPopUp} />
                <span
                    style={styles.infoButton}
                    onClick={() => window.location.href = '/technology'}
                    role="button"
                >
                    <TiInfoLarge />
                </span>
            </DialogTitle>
            <DialogContent>
                <div className='w-full' >

                    <p className="text-black-500 mt-4 ">
                        {t('firstS')}
                    </p>
                    <EmailSubscriber color={'#000'} />
                    <Divider sx={{ mt: 3 }} >Or</Divider>
                    <Grid item >
                        <div className='flex items-center justify-center'>
                            <button
                                size="larger"
                                aria-label={t('buttons.tryNow')}
                                variant="contained"
                                onClick={() => handleBooking(true)}
                                className="my-6 p-2 rounded-lg shadow-2xl font-semibold uppercase tracking-wide bg-CTA-500 text-CTA-800 w-52 transition-colors duration-300 hover:bg-CTA-600 hover:text-CTA-900"
                            >
                                {t('buttons.bookNow')}
                            </button>
                        </div>

                        <Divider sx={{ mb: 3 }} />
                        <FormControlLabel
                            control={<Checkbox color="primary" size='small' />}
                            label="Don't show again"
                            onChange={handleDontShowAgain}
                            sx={{ color: "#888" }}
                        />
                    </Grid>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default Popup;
