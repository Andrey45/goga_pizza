<template lang="pug">
  div
    v-layout(row, wrap)
      v-flex.mt-3(xs12, sm6, md4, lg3, v-for="pizz in newPizza.data", :key="pizz.id")
        v-hover(v-slot:default="{ hover }")
          v-card.ma-4(dark, flat)
            v-img(:src="require('../../assets/img/pizza/'+pizz.imeges)", height="350", width="100%")
              v-expand-transition
                .d-flex.transition-fast-in-fast-out.darken-2.v-card--reveal.display-3.white--text(v-bind:style="{ backgroundColor: Colors, height: height }", v-if='hover')
                  | 35 cm
            v-responsive.pt-4
            v-divider
            v-card-title.title-card
              div
                .headline {{pizz.name}}
                v-rating(v-model="pizz.stars" background-color="yellow accent-2" color="yellow accent-2" small)
                .body-2
                  .div-text(v-for="nam in pizz.inged.ingredients")
                    .div-text &nbsp{{nam.name}},
                .title {{ $n(total(pizz.inged), 'currency')}}
            v-card-actions
              Shopdialog(:data="pizz", :ingredients="pizz.inged.ingredients")
</template>

<script>

  import { mapMutations, mapGetters, mapActions } from 'vuex'
  import Shopdialog from "../ShopDialog";
  export default {
    components: {Shopdialog },
    computed: mapGetters(['appStore', 'newPizza', 'Colors']),
    mounted () {
      this.addNewPizz()
    },
    data () {
      return {
        piz: [],
        height: '100%'
      }
    },
    methods: {
      ...mapActions(['addNewPizz']),
      total(ingred){
        var sum = null
        ingred.ingredients.forEach((pric) =>{
          if(localStorage.lang === 'ru') {
            sum += parseInt(pric.stn_quantity)
          }
          if (localStorage.lang === 'en') {
            sum += parseInt(pric.stn_quantity)/62
          }
          else{
            sum += parseInt(pric.stn_quantity)/72
          }
        })
        var arr = ingred.price+sum
        return arr
      }
    }
  }
</script>

<style scoped lang="stylus">
  .div-text
    display inline-block
  .v-card--reveal
    align-items center
    bottom 0
    justify-content center
    opacity .5
    position absolute
    width 100%
</style>
