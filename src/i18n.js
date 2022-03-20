import i18n from "i18next"
import Backend from "i18next-http-backend"
import LanguageDetector from "i18next-browser-languagedetector"
import { initReactI18next } from "react-i18next"

i18n.use(Backend).use(LanguageDetector).use(initReactI18next).init({
    fallbackLng: 'ua',
    debug: false,
    detection: {
        order: ['cookie'],
        caches: ['cookie']
    },
    interpolation: {
        escapeValue: false
    },
    react: {
        // Turn off the use of React Suspense
        useSuspense: false
    }
})

export default i18n
