import Vue from 'vue'
import VueI18n from 'vue-i18n'
import EN from '../assets/lang/en'
import RU from '../assets/lang/ru'
import DE from '../assets/lang/de'
import IT from '../assets/lang/it'
Vue.use(VueI18n)

const numberFormats = {
  'en': {
    currency: {
      style: 'currency', currency: 'USD'
    }
  },
  'ru': {
    currency: {
      style: 'currency', currency: 'RUB'
    }
  },
  'de':{
    currency: {
      style: 'currency', currency: 'EUR'
    }
  },
  'it':{
    currency: {
      style: 'currency', currency: 'EUR'
    }
  }
}

export const i18n = new VueI18n({
  locale: localStorage.lang,
  fallbackLocale: 'en',
  messages:{
    en: EN,
    ru: RU,
    de: DE,
    it: IT
},
  numberFormats
})
