import axios from 'axios'
export default {
  state: { pizz: [] },
  actions: {
    async addPizz (ctx) {
      if (localStorage.getItem('lang')!== null){
        var lang = localStorage.getItem('lang')
          axios.get('https://new-goga-pizza.herokuapp.com/api/'+lang+'/pizza').then(res => {
            ctx.commit('updatePizza', res)
        })
      } else {
        localStorage.setItem('lang', 'en')
        axios.get('https://new-goga-pizza.herokuapp.com/api/en/pizza').then(res => {
          ctx.commit('updatePizza', res)
        })
      }
    }
  },
  mutations: {
    updatePizza (state, pizz) {
      state.pizz = pizz
    }
  },
  getters: {
    Pizza (state) {
      return state.pizz
    }
  }
}
