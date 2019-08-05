<template lang="pug">
  div.pag
    new-pizza-card
    .titl_e(v-bind:style="{ color: Colors }") {{$t('pizz')}}
    PizzaCard
</template>

<script>
import NewPizzaCard from "../components/card/NewPizzaCard";
import PizzaCard from "../components/card/PizzaCard";
import { mapGetters } from "vuex"
export default {
  computed: mapGetters(['appStore', 'appPizzas', 'Colors']),
  components: {PizzaCard, NewPizzaCard },
}
</script>

<style scoped lang="stylus">
  .pag
    margin-top 20px
  .titl_e
    text-align center !important
    font-family "Roboto", sans-serif !important
    font-size 3.75rem !important
    font-style italic !important
</style>
