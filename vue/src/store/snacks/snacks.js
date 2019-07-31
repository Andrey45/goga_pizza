import axios from 'axios'
export default {
  state: {snacks: []},
  actions: {
    addSnacks(ctx){
      axios.get('http://localhost:8700/api/v1/ING').then(res=>{
        ctx.commit('appSnacks', res)
      })
    }
  },
  mutations: {
    appSnacks(state, res){
      state.snacks = res
    }
  },
  getters: {
    appSnack(state) {
      return state.snacks
    }
  }
}
