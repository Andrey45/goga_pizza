<template lang="pug">
  v-footer(dark, padless)
    v-card.flex(flat, tile)
      v-card-title.pa-2(dark)
        v-container.text-center.px-0.pa-0
          v-tooltip(bottom, v-for="ico in icon" :key="ico.icons")
            template(v-slot:activator="{ on }")
              v-btn.mx-4(icon, v-on="on", outlined, :color="Colors" small)
                v-icon(:color="Colors" size="24") {{ico.icons}}
            span {{$t('button.'+ico.title)}}
      v-divider(:color="Colors")
      v-card-actions.grey.darken-3.justify-center
        | {{ new Date().getFullYear() }} &mdash;
        strong Vuetify


</template>

<script>
  import {mapGetters} from "vuex"
export default {
  computed: mapGetters(['Colors']),
  data: () => ({
    icon: [
      { icons: 'fab fa-vk', title: 'button_vk' },
      { icons: 'fab fa-instagram', title: 'button_insta' },
      { icons: 'fas fa-user-tie', title: 'button_user' }
    ],
    color: '#F8FCF8'
  }),
}
</script>

<style scoped lang="stylus">
  .bek
    background-color #FC8E21
</style>
