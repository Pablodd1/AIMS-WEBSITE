import "server-only";

const dictionaries = {
  en: {
    hero: () => import("./en_hero.json").then((module) => module.default),
    features: () =>
      import("./en_features.json").then((module) => module.default),
    why_AIMS: () =>
      import("./en_why_AIMS.json").then((module) => module.default),
    ms: () => import("./en_ms.json").then((module) => module.default),
    newsletter: () =>
      import("./en_newsletter.json").then((module) => module.default),
  },
  es: {
    hero: () => import("./es_hero.json").then((module) => module.default),
    features: () =>
      import("./es_features.json").then((module) => module.default),
    why_AIMS: () =>
      import("./es_why_AIMS.json").then((module) => module.default),
    ms: () => import("./es_ms.json").then((module) => module.default),
    newsletter: () =>
      import("./es_newsletter.json").then((module) => module.default),
  },
};

export const langHome = async (locale, sec) => dictionaries[locale][sec]();
