<template lang="pug">
  v-menu(bottom, origin="center center", transition="scale-transition")
    template(v-slot:activator='{ on }')
      v-btn.im(v-on="on", icon)
        img.imeg(:src="require('../../assets/img/navbar/menu.svg')")
    v-list
      v-list-item(v-for='(link, index) in links', :key='index', rouret, :to="link.url")
        v-list-item-title {{ $t('button.'+link.title)}}
</template>

<script>
export default {
  data(){
    return{
      links: [
        { title: 'button_pizz', url: '/Pizza' },
        { title: 'button_snacks', url: '/' },
        { title: 'button_drinks', url: '/' },
        { title: 'button_dessert', url: '/' }
      ]
    }
  }
}
</script>

<style scoped lang="stylus">
  .im
    @media (max-width 1023px)
      width 35px
      height 35px
    @media (min-width 1024px)
      display none
  .imeg
    position absolute
    width 35px
    height 35px
</style>
