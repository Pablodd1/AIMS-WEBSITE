import React, { useState } from 'react';
import { Button, Grid, Tooltip, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { FlagIcon } from 'react-flag-kit';

export default function LangSwitcherMenu({ size, color }) {
    const { i18n } = useTranslation();
    const lang = useSelector((state) => state.language);
    const [language, setLanguage] = useState(lang);
    const dispatch = useDispatch();

    const handleLanguageChange = () => {
        const newLanguage = language === 'es' ? 'en' : 'es';
        i18n.changeLanguage(newLanguage).then(() => {
            setLanguage(newLanguage);
            dispatch({ type: 'SET_LANG', payload: newLanguage });
            handleCloseMenu();
        });
    };
    return (
        <Grid item  >
            <Tooltip title={language === 'en' ? 'Switch to Spanish' : 'Switch to English'}>
                <Button
                    fullWidth
                    size={size}
                    startIcon={<FlagIcon code={language === 'en' ? 'ES' : 'GB'} />}
                    aria-label={language === 'en' ? 'Switch to Spanish' : 'Switch to English'}
                    onClick={() => handleLanguageChange('en')}
                >
                    <Typography sx={{ color: color ? color : '#fff' }} >{language}</Typography>
                </Button>
            </Tooltip>
        </Grid>
    );
}