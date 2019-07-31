<template lang="pug">
  v-dialog(dark, max-width="800", v-model="dialog")
    template(v-slot:activator="{ on }")
      v-btn(dark, v-on="on" , @click="dialog=true" outlined, color="orange")
        | {{$t('cards.button_addcart')}}
    v-card(color="grey darken-3")
      v-container
        v-card-text
          .display-3.orange--text {{data.name}}
        v-divider
        v-layout(wrap)
          v-flex(xs6,  v-for="nem in ingredients")
            v-subheader.orange--text.pb-3 {{nem.name}}: {{nem.stn_quantity}}{{$t('gramm')}}
            v-slider.pl-2(v-model="nem.stn_quantity" :min="nem.min_quantity" :max="nem.max_quantity" :thumb-size="20" thumb-label="always" color="orange")
              template(v-slot:prepend)
                v-icon(size="16" color="orange" @click="decrement(nem)") mdi-minus
              template(v-slot:append)
                v-icon(size="16" color="orange" @click="increment(nem)") mdi-plus
        v-text-field(color="orange", :label="$t('quantity')", placeholder="Placeholder", outlined, v-model="quenti")
        v-divider
        v-card-actions
          v-btn(@click="add(total(quenti), data, ingredients, quenti, price())", @click.stop="dialog=false" outlined, color="orange") {{$t('cards.button_order')}}
          v-container.orange--text.text-right {{$t('basket.itog')}} {{$n(total(quenti), 'currency')}}
</template>

<script>
  import { mapMutations } from "vuex"
  export default {
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
