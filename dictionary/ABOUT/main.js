import 'server-only'

const dictionaries = {
  en: {
    ceo: () => import('./en_ceo.json').then((module) => module.default),
  },
  es: {
    ceo: () => import('./es_ceo.json').then((module) => module.default),
  },
}

export const langAbout = async (locale, sec) => dictionaries[locale][sec]()