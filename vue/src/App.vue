<template lang="pug">
  v-app.app
    navbar
    v-content
      transition( name="slide")
        router-view
    foote
</template>

<script>
import Navbar from "./components/navbar";
import foote from "./components/footer"
import { mapGetters } from "vuex"
export default {
  computed: mapGetters(['appPizzas','Colors']),
  components: {Navbar, foote},
  data(){
    return{
      sag:[],
      color: ''
    }
  },
  mounted() {
    //localStorage.removeItem('color_site')
    this.sag = this.appPizzas
    console.log(this.Colors)
  }
}
</script>
<style scoped lang="stylus">
  @import "~animate.css"
  // transition
  .slide-enter-active

  .slide-leave-active
    transition opacity .5s
  .slide-enter

  .slide-leave-to
    opacity 0

    // app
  .app
    background-color #212121
</style>
