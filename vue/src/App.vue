<template lang="pug">
  v-app.app
    navbar
    v-content
      router-view
</template>

<script>
import Navbar from "./components/navbar";
import { mapGetters } from "vuex"
export default {
  computed: mapGetters(['appPizzas']),
  components: {Navbar},
  data(){
    return{
      sag:[]
    }
  },
  mounted() {
    //localStorage.removeItem('lang')
    this.sag = this.appPizzas
  }
}
</script>
<style scoped lang="stylus">
  .app
    background-color #212121
</style>
