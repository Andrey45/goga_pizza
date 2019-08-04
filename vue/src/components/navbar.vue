<template lang="pug">
    div
      v-app-bar.nav(app, color="grey darken-4")
        v-toolbar-title
          v-img.logo-text(:src="require('../assets/img/navbar/logo-text.svg')")
        .title-but
          transition-group(name="fadeInLeft" appear enter-to-class="animated fadeInLeft", leave-to-class="animated fadeOutLeft", :duration="{ enter: 4000, leave: 4400 }")
            v-btn(:color="Colors" text, v-for="link in links" :key="link.title" router, :to="link.url") {{$t('button.'+link.title)}}
        v-spacer
        BtnShopCart
        DropMenu
        DropTranslation
        ColorPicker
</template>

<script>
  import ColorPicker from './nav_components/ColorPicker'
import BtnShopCart from './nav_components/BtnShopCart'
import DropMenu from './nav_components/DropMenu'
import DropTranslation from './nav_components/DropTranslation'
import { mapGetters } from 'vuex'
export default {
  computed: mapGetters(['Colors']),
  components:{DropTranslation, DropMenu, BtnShopCart, ColorPicker},
  data () {
    return {
      icon: [
        { icons: 'fab fa-vk', title: 'button_vk' },
        { icons: 'fab fa-instagram', title: 'button_insta' },
        { icons: 'fas fa-user-tie', title: 'button_user' }
      ],
      links: [
        { title: 'button_pizz', url: '/Pizza' },
        { title: 'button_snacks', url: '/snacks' },
        { title: 'button_drinks', url: '/' },
        { title: 'button_dessert', url: '/' }
      ]
    }
  }
}
</script>

<style scoped lang="stylus">
  @import "~animate.css"
  @import "../assets/css/color.styl"
  @import "../assets/css/animation.styl"

  .logo-text
    width 200px
    height 50px
  .nav
    animation ani 0.5s
    .btn
      color color-glob
      animation an 2s
    .title-but
      display none
      @media (min-width 1024px)
        display block
    .bt-icon
      display none
      @media (min-width 770px)
        display block
</style>
