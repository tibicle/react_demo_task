import { initReactI18next } from 'react-i18next'
import i18n from 'i18next'
import enUs from 'locale/en-Us.json'

const resources = {
  en: {
    translation: enUs, // english
  },
}

void i18n.use(initReactI18next).init({
  debug: false,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
  resources,
  // lng: localStorage.getItem('i18nextLng') ?? 'en',
})

export default i18n
