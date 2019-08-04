<template lang="pug">
  div.page
    new-pizza-card
    .display-3.font-weight-regular.font-italic.text-center(v-bind:style="{ color: Colors }") {{$t('pizz')}}
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

</style>
