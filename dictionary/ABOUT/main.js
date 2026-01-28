import "server-only";

const dictionaries = {
  en: {
    ceo: () => import("./en_ceo.json").then((module) => module.default),
    contact: () => import("./en_contact.json").then((module) => module.default),
    visions: () => import("./en_visions.json").then((module) => module.default),
  },
  es: {
    ceo: () => import("./es_ceo.json").then((module) => module.default),
    contact: () => import("./es_contact.json").then((module) => module.default),
    visions: () => import("./es_visions.json").then((module) => module.default),
  },
};

export const langAbout = async (locale, sec) => dictionaries[locale][sec]();
