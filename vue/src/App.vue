<template lang="pug">
  v-app.app
    navbar
    v-content
      transition( name="router-anim", enter-to-class="animated fadeInLeft", leave-to-class="animated fadeOutLeft")
        router-view
</template>

<script>
import Navbar from "./components/navbar";
import { mapGetters } from "vuex"
export default {
  computed: mapGetters(['appPizzas','Colors']),
  components: {Navbar},
  data(){
    return{
      transitionName: 'slide-left',
      sag:[],
      color: ''
    }
  },
  mounted() {
    //localStorage.removeItem('color_site')
    this.sag = this.appPizzas
    console.log(this.Colors)
  },
  methods:{
    beforeRouteUpdate (to, from, next) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/Pizza').length
      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
      next()
    }
  }
}
</script>
<style scoped lang="stylus">
  @import "~animate.css"

  .app
    background-color #212121
</style>
