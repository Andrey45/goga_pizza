<template lang="pug">
  div
    div
      v-img(:src="require('../assets/img/home/fon-2.jpg')", max-height="800")
      img.im(:src="require('../assets/img/home/pizz1.png')")
      .title_pred.font-weight-bold.font-italic(v-bind:style="{color: Colors}") {{$t('title')}}
    .titl_e(v-bind:style="{color: Colors}") {{$t('new')}}
    new-pizza-card
</template>

<script>
  import {mapGetters} from 'vuex'
  import NewPizzaCard from "../components/card/NewPizzaCard";
  export default {
    computed: mapGetters(['Colors']),
    components: {NewPizzaCard },
  }
</script>
<style scoped lang="stylus">
  @import "../assets/css/animation.styl"

  .titl_e
    text-align center !important
    font-family "Roboto", sans-serif !important
    font-size 3.75rem !important
    font-style italic !important
</style>
