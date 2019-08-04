<template lang="pug">
  v-container
    .display-2.mb-3.grey--text {{$t('basket.title')}}
    v-divider(:color="Colors")
    v-layout(row, wrap)
      v-flex.mt-3(xs12, sm6, md4, lg3, v-for="props in appPizzas")
        v-hover(v-slot:default="{ hover }")
          v-card.ma-4(dark, flat)
            v-card-text.text-center.title(:color="Colors") {{props.name}}
            v-divider(:color="Colors")
            v-img(:src="require('../assets/img/pizza/'+props.imeg)", height="200", width="100%" :aspect-ratio="16/9")
              v-expand-transition
                .d-flex.transition-fast-in-fast-out.darken-2.v-card--reveal.display-3.white--text(v-bind:style="{ backgroundColor: Colors, height: height }", v-if='hover')
                  | 35 cm
            v-responsive.pt-4
            v-divider(:color="Colors")
            v-card-text.text-center Колличество
            v-card-actions
              v-btn.title(icon, @click="minus(props)" :color="Colors") -
              | {{props.quantity}}
              v-btn.title(icon, @click="plus(props)" :color="Colors") +
              v-spacer
              v-btn(icon, @click="del(props.id)", :color="Colors")
                v-icon(:color="Colors") delete_forever
            v-divider(:color="Colors")
            v-card-text.text-sm-center(v-bind:style="{color: Colors }") {{$t('basket.itog')}}
              div.total(v-bind:style="{color: colo}") {{$n(props.total, 'currency')}}
    v-divider(:color="Colors")
    v-list(dark)
      v-list-item
        v-btn(outlined, :color="Colors") {{$t('cards.button_order')}}
        v-spacer
        div(v-bind:style="{color: Colors }") {{$t('basket.itog')}}
          div.total(v-bind:style="{color: colo}") {{$n(total(), 'currency')}}

</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  computed: mapGetters(['appPizzas', 'Colors']),
  data () {
    return {
      data: true,
      colo: '#F8FCF8',
      height: '100%'
    }
  },
  mounted(){
    this.data = this.appPizzas
  },
  methods:{
    ...mapMutations(['delet','updatepizz']),
    total(){
      var sum = 0;
      if (this.appPizzas.length > 0) {
        this.appPizzas.forEach(function(pizz){
          sum += parseInt(pizz.total);
        });
        return sum;
      }else {
        this.data = false
      }
    },
    plus(req){
      req.quantity +=1
      req.total = req.price*req.quantity
      this.updatepizz({
        id: req.id,
        price: req.price,
        quantity: req.quantity,
        total: req.total
      })
    },
    minus(req){
      req.quantity -= 1;
      if (req.quantity < 0){
        req.quantity = 0;
      }
      req.total = req.price*req.quantity;
      this.updatepizz({
        id: req.id,
        price: req.price,
        quantity: req.quantity,
        total: req.total
      })
    },
    del(req){
      this.delet(req)
    }
  }
}
</script>

<style scoped lang="stylus">
  .total
    display inline-block
  .v-card--reveal
    align-items center
    bottom 0
    justify-content center
    opacity .5
    position absolute
    width 100%
</style>
