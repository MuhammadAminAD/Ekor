import type { ITranslationTypes } from "@/locales/TranslationsTypes";
import uz from "@/locales/uz";
import i18n from "i18next";
import { initReactI18next } from 'react-i18next';

const resources: Record<string, { translation: ITranslationTypes}> ={
      uz: { translation: uz }
}

i18n
    .use(initReactI18next)
    .init({
        debug: true,
        fallbackLng : "uz",
        resources 
    });
export default i18n;
