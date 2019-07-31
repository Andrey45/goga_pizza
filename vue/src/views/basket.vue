<template lang="pug">
  v-container
    .display-2 {{$t('basket.title')}}
    v-list.lis-total.orange(v-if="!data")
      v-list-item
        v-list-item-content {{$t('basket.title_size')}}
    v-list.lis(subheader, v-for="props in appPizzas", dark)
      v-list-item
        .title.font-weight-bold.font-italic {{props.name}}
        v-spacer
        v-list-item-avatar(size="80")
          v-btn(icon, @click="minus(props)") -
          | {{props.quantity}}
          v-btn(icon, @click="plus(props)") +
        v-spacer
        v-list-item-avatar(size="80")
          v-list-item {{$n(props.total, 'currency')}}
        v-spacer
        v-list-item-avatar(size="50")
          v-btn(icon, @click="del(props.id)")
            v-icon(color="orange") delete_forever
    v-divider
    v-list.lis-total.orange
      v-list-item
        v-btn {{$t('cards.button_order')}}
        v-spacer
        v-list-item-avatar.pr-2(max-width="200", min-width="140")
          v-list-item
          .text {{$t('basket.itog')}}
          .text &nbsp{{$n(total(), 'currency')}}
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  computed: mapGetters(['appPizzas']),
  data () {
    return {
      data: true
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
.v-list__tile__sub-title
  height 40
.v-input__slot
  margin-bottom  0
.lis
  margin-top 10px
.lis-total
  margin-top 20px
  .text
    color white

</style>
