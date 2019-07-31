<template lang="pug">
  div
    div
      v-img(:src="require('../assets/img/home/fon-2.jpg')", max-height="800")
      img.im(:src="require('../assets/img/home/pizz1.png')")
      .title_pred.font-weight-bold.font-italic {{$t('title')}}
    .display-3.font-weight-regular.font-italic.text-center.text {{$t('new')}}
    new-pizza-card

</template>

<script>
  import NewPizzaCard from "../components/card/NewPizzaCard";
  export default {
    components: {NewPizzaCard },
  }
</script>
<style scoped lang="stylus">
  @import "../assets/css/animation.styl"
  @import "../assets/css/color.styl"
  .text
    color color-glob
</style>
