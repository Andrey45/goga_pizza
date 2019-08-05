<template lang="pug">
  v-dialog(dark, max-width="800", v-model="dialog")
    template(v-slot:activator="{ on }")
      v-btn(dark, v-on="on" , @click="dialog=true" outlined, :color="Colors")
        | {{$t('cards.button_addcart')}}
    v-card(color="grey darken-3")
      v-container
        v-card-text
          .display-3(v-bind:style="{color: Colors}") {{data.name}}
        v-divider
        v-layout(wrap)
          v-flex(xs6,  v-for="nem in ingredients")
            v-subheader.pb-3(v-bind:style="{color: Colors}") {{nem.name}}: {{nem.stn_quantity}}{{$t('gramm')}}
            v-slider.pl-2(v-model="nem.stn_quantity" :min="nem.min_quantity" :max="nem.max_quantity" :thumb-size="20" thumb-label="always" :color="Colors")
              template(v-slot:prepend)
                v-icon(size="16" :color="Colors" @click="decrement(nem)") mdi-minus
              template(v-slot:append)
                v-icon(size="16" :color="Colors" @click="increment(nem)") mdi-plus
        v-text-field(:color="Colors", :label="$t('quantity')", placeholder="Placeholder", outlined, v-model="quenti")
        v-divider
        v-card-actions
          v-btn(@click="add(total(quenti), data, ingredients, quenti, price())", @click.stop="dialog=false" outlined, :color="Colors") {{$t('cards.button_order')}}
          v-container.text-right(v-bind:style="{color: Colors}") {{$t('basket.itog')}} {{$n(total(quenti), 'currency')}}
</template>

<script>
  import { mapMutations, mapGetters } from "vuex"
  export default {
    computed: mapGetters(['Colors']),
    props:['ingredients','data'],
    data () {
      return {
        quenti: 1,
        dialog: false,
      }
    },
    mounted() {

    },
    methods:{
      ...mapMutations(['createBasket']),
      add (total, date, ingridient, quanti, price) {
        this.createBasket({
          type: 'pizza',
          id: date.id,
          imeg: date.imeges,
          name: date.name,
          price: price,
          ingredient: ingridient,
          quantity: quanti,
          total: price*quanti
        })
        this.dialog = null
      },
      total(quenti){
        var sum = null
        this.ingredients.forEach((price) =>{
          if(localStorage.lang === 'ru') {
            sum += parseInt(price.stn_quantity)
          }
          if (localStorage.lang === 'en') {
            sum += parseInt(price.stn_quantity)/62
          }
          else{
            sum += parseInt(price.stn_quantity)/72
          }
        })
        var arr = this.data.inged.price+sum
        return arr*quenti
      },
      price(){
        var sum = null
        this.ingredients.forEach((price) =>{
          if(localStorage.lang === 'ru') {
            sum += parseInt(price.stn_quantity)
          }
          if (localStorage.lang === 'en') {
            sum += parseInt(price.stn_quantity)/62
          }
          else{
            sum += parseInt(price.stn_quantity)/72
          }
        })
        return this.data.inged.price+sum
      },
      increment(res){
        res.stn_quantity++
      },
      decrement(res){
        res.stn_quantity--
      }
    }
  }
</script>

<style scoped lang="stylus">
  .div
    display inline-block
  .min
    min-width 40px
</style>
