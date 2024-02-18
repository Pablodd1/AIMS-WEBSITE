import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

// Tailwind CSS classes
const tooltipClasses = 'hidden text-xs bg-gray-700 text-white rounded p-1 absolute  right-1 mt-2 px-2 py-2';

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
        });
    };

    return (
        <div className="relative ">
            <button
                className={'flex items-center  bg-transparent hover:underline underline-offset-4 text-md  font-sans text-white font-semibold py-1 px-2 mr-4 tracking-widest '}
                onClick={handleLanguageChange}
                aria-label={language === 'en' ? 'Switch to Spanish' : 'Switch to English'}
                onMouseEnter={() => document.getElementById('tooltip').classList.remove('hidden')}
                onMouseLeave={() => document.getElementById('tooltip').classList.add('hidden')}
            >
            <img
                src={'/svg/lang-switch.svg'}
                className='mr-1'
                height={'auto'} width={25}
                alt={'Language switch'}
            />
                {language === 'en' ? 'ES' : 'EN'}
            </button>
            <p id='tooltip' className={`${tooltipClasses}`}>
                {language === 'en' ? 'Switch to Spanish' : 'Switch to English'}
            </p>
        </div>
    );
}
