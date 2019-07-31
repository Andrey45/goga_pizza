import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store/store'
import {i18n} from './plugins/i18n'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false
Vue.filter('currency', function (value) {
  return '₽' + parseFloat(value).toFixed(0)
})

new Vue({
  i18n,
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
