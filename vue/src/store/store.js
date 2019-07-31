import Vue from 'vue'
import Vuex from 'vuex'
import basket from './basket/basket'
import pizznew from './pizz-new/pizz-new'
import pizz from './pizz/pizz'
import snacks from './snacks/snacks'
import lang from './lang'
Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    basket,
    pizznew,
    pizz,
    lang,
    snacks
  }
})
