export default {
  state:{
    color: localStorage.color_site
  },
  mutations:{
    setcolor(state, color) {
      localStorage.color_site = color
      state.color = color
    }
  },
  getters:{
    Colors(state){
      if(localStorage.getItem('color_site') !== null) {
        return state.color
      }
      else {
        localStorage.setItem('color_site', '#FF9800')
        return localStorage.color_site
      }
    }
  }
}
