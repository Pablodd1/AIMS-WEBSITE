import 'server-only'

const dictionaries = {
  en: () => import('./en.json').then((module) => module.default),
  es: () => import('./es.json').then((module) => module.default),
}

export const langSideBar = async (locale) => dictionaries[locale]()