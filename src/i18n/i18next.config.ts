import eng from "@/locales/eng";
import ru from "@/locales/ru";
import i18n from "i18next";
import { initReactI18next } from 'react-i18next';


i18n
    .use(initReactI18next)
    .init({
        debug: true,
        fallbackLng : "ru",
        resources: {
            en: { translation: eng },
            ru: { translation: ru },
        },
    });
export default i18n;
