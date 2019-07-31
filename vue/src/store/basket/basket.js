export default {
  state: { total: [], bul: true, arr: localStorage.getItem('pizza') },
  actions: {
    del(ctx){
      ctx.commit('delbasket')
    }
  },
  mutations: {
    delet(state, req){
      state.total.forEach((item, i)=>{
        if(item.id === req){
          state.total.splice(i, 1);
        }
      })
      localStorage.removeItem('pizza')
      localStorage.setItem('pizza', JSON.stringify(state.total))
      state.arr = localStorage.getItem('pizza')
    },
    delbasket(state){
      state.total = []
      localStorage.removeItem('pizza')
      localStorage.setItem('pizza', JSON.stringify(state.total))
      state.arr = localStorage.getItem('pizza')
    },
    createBasket(state, newBas){
      var rr = true
      if(localStorage.getItem('pizza')!== null){
        state.total.forEach((item)=>{
          if (item.price === newBas.price) {
            rr = false
          }
        })
        if(rr === true){
          state.total.unshift(newBas)
          localStorage.setItem('pizza', JSON.stringify(state.total))
          state.arr = localStorage.getItem('pizza')
          return rr
        } else {
          return rr
        }
      } else {
        state.total.unshift(newBas)
        localStorage.setItem('pizza', JSON.stringify(state.total))
        state.arr = localStorage.getItem('pizza')
      }
    },
    updatepizz(state, req){
      state.total.forEach((item, i)=>{
        if(item.id === req.id){
          if(item.price === req.price){
            item.quantity = req.quantity
            item.total= req.total
          }
        }
      })
      localStorage.removeItem('pizza')
      localStorage.setItem('pizza', JSON.stringify(state.total))
      state.arr = localStorage.getItem('pizza')
    }
  },
  getters: {
    appStore (state) {
      const arr = JSON.parse(state.arr)
      if(arr.length > 0){
        return arr.length
      }else {
        return 0
      }
    },
    appPizzas (state) {
      if(state.total.length > 0){
        return state.total
      } else {
        if (localStorage.getItem('pizza')!== null){
          const pizz = JSON.parse(localStorage.getItem('pizza'))
          state.total = pizz
          return state.total
        } else {
          localStorage.setItem('pizza', JSON.stringify(state.total))
        }
      }
    }
  }
}
