<template lang="pug">
  svg(xmlns="http://www.w3.org/2000/svg")
    text(:fill="Colors" x="0" y="35" font-family="Comic Sans MS")
      tspan(:fill="Colors") G
      tspan(fill="#FF2D0A") o
      tspan(:fill="Colors") G
      tspan(fill="#FF2D0A") a&nbsp;
      tspan(:fill="Colors") P
      tspan(fill="#FF2D0A") i
      tspan(:fill="Colors") zz
      tspan(fill="#FF2D0A") a
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  computed: mapGetters(['Colors'])
}
</script>

<style scoped lang="stylus">
svg
  width auto
  max-width 180px
  height 50px
  text
    font-style italic
    @media (max-width 325px)
        font-size 25px
    @media (min-width 325px)
      font-size 30px
    @media (min-width 381px)
      font-size 35px
</style>
