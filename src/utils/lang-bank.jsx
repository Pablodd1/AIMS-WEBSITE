import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enLang from '../assets/locales/en.json';
import esLang from '../assets/locales/es.json';
import homepageEN from '../assets/locales/homepage.en.json';
import homepageES from '../assets/locales/homepage.es.json';
import faqsEN from '../assets/locales/faqsEN.json';
import faqsES from '../assets/locales/faqsES.json';
import store from './store';
 
// Language resources
const resources = {
  en: {
    translation: {
      ...enLang,
      homePage:homepageEN,
      faqs: faqsEN,
    },
  },
  es: {
    translation: {
      ...esLang,
      homePage:homepageES,
      faqs: faqsES,
    },
  }
};
i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: store.getState().language, // Use the language from the Redux store
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
