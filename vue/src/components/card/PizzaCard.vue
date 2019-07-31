<template lang="pug">
  div
    v-layout(row, wrap)
      v-flex.mt-3(xs12, sm6, md4, lg3, v-for="pizz in Pizza.data", :key="pizz.id")
        v-hover
          v-card.ma-4(dark, flat, slot-scope="{ hover }", :class="`elevation-${hover ? 12 : 2}`")
            v-img(:src="require('../../assets/img/pizza/'+pizz.imeges)", height="350", width="100%")
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
import Shopdialog from "../ShopDialog";
import { mapMutations, mapGetters, mapActions } from 'vuex'
export default {
  components:{Shopdialog},
  computed: mapGetters(['Pizza', 'appStore']),
  mounted () {
    this.addPizz()
  },
  data () {
    return {
      piz: [],
      lot: true
    }
  },
  methods: {
    ...mapActions(['addPizz']),
    ...mapMutations(['updatePizz', 'filte', 'createBasket']),
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
</style>
