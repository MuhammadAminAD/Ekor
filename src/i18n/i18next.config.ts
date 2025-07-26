import { initReactI18next } from "react-i18next";
import uz from "../locales/uz";
import i18n from 'i18next';

i18n
      .use(initReactI18next)
      .init({
            debug: true,
            fallbackLng: "ru",
            resources: {
                  uz: { translation: uz },
            },
      });
export default i18n;
