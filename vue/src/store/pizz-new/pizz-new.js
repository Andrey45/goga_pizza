import axios from 'axios'
export default {
  state: { pizzas: [] },
  actions: {
    async addNewPizz (ctx) {
      if (localStorage.getItem('lang') !== null){
        var lang = localStorage.getItem('lang')
        axios.get('https://new-goga-pizza.herokuapp.com/api/'+lang+'/pizza_new').then(res => {
          ctx.commit('updateNewPizza', res)
        })
      } else {
        localStorage.setItem('lang', 'en')
        axios.get('https://new-goga-pizza.herokuapp.com/api/en/pizza_new').then(res => {
          ctx.commit('updateNewPizza', res)
        })
      }
    }
  },
  mutations: {
    updateNewPizza (state, pizz) {
      state.pizzas = pizz
    }
  },
  getters: {
    newPizza (state) {
      return state.pizzas
    }
  }
}
