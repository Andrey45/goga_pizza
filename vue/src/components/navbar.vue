<template lang="pug">
    div
      v-app-bar.nav(app, color="grey darken-4")
        v-toolbar-title
          v-img.logo-text(:src="require('../assets/img/navbar/logo-text.svg')")
        .title-but
          v-btn.btn(text, v-for="link in links" :key="link.title" router, :to="link.url") {{$t('button.'+link.title)}}
        v-spacer
        BtnShopCart
        v-tooltip(bottom, v-for="ico in icon" :key="ico.icons")
          template(v-slot:activator="{ on }")
            v-btn.bt-icon(icon, v-on="on")
              img(:src="require('../assets/img/navbar/'+ico.icons+'')")
          span {{$t('button.'+ico.title)}}
        DropMenu
        DropTranslation

</template>

<script>
import BtnShopCart from './nav_components/BtnShopCart'
import DropMenu from './nav_components/DropMenu'
import DropTranslation from './nav_components/DropTranslation'
//import { mapGetters } from 'vuex'
export default {
  components:{DropTranslation, DropMenu, BtnShopCart},
  data () {
    return {
      icon: [
        { icons: 'vk.png', title: 'button_vk' },
        { icons: 'insta.png', title: 'button_insta' },
        { icons: 'user.png', title: 'button_user' }

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
