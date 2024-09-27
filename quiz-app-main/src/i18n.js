import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "./locales/en/translation.json";
import translationET from "./locales/et/translation.json";
import translationRU from "./locales/ru/translation.json";

// Translations
const resources = {
  en: {
    translation: translationEN,
  },
  et: {
    translation: translationET,
  },
  ru: {
    translation: translationRU,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // Default language
  fallbackLng: "en", // Fallback language if translation is missing
  interpolation: {
    escapeValue: false, // React already escapes values
  },
});

export { i18n };
