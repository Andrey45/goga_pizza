export default {
  state:{
    lang: localStorage.lang
  },
  mutations:{
    setlang(state, lan) {
      localStorage.lang = lan
      state.lang = lan
    }
  }
}
