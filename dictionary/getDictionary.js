import { langHome } from "./HOME/main";

export const getDictionary = async (locale) => {
    return {
        HOME: await langHome(locale, "hero")
    };
};
