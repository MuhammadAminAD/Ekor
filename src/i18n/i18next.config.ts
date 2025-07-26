import eng from "@/locales/eng";
import ru from "@/locales/ru";
import type { ITranslationTypes } from "@/locales/TranslationsTypes";
import i18n from "i18next";
import { initReactI18next } from 'react-i18next';

const resources: Record<string, { translation: ITranslationTypes}> ={
            eng: { translation: eng },
            ru: { translation: ru },
}

i18n
    .use(initReactI18next)
    .init({
        debug: true,
        fallbackLng : "ru",
        resources 
    });
export default i18n;
