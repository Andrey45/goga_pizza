<template lang="pug">
  v-menu(bottom, origin="center center", transition="scale-transition")
    template(v-slot:activator='{ on }')
      v-btn(icon, :color="Colors" dark, v-on='on', outlined, max-width="34", max-height="34")
        | {{$t('translations')}}
    v-list
      v-list-item(v-for='(item, index) in lang', :key='index', @click='lan(item.locale)')
        v-list-item-title {{ item.title }}
</template>

<script>
  import {mapMutations, mapActions, mapGetters} from 'vuex'
export default {
  computed: mapGetters(['Colors']),
  data(){
    return{
      lang:[
        {title: 'EN',locale: 'en'},
        {title: 'RU',locale: 'ru'},
        {title: 'DE',locale: 'de'},
        {title: 'IT',locale: 'it'}
      ],
    }
  },
  methods: {
    ...mapActions(['addPizz', 'addNewPizz','del','basketclear']),
    ...mapMutations(['setlang', 'delbasket']),
    lan(locale){
      this.setlang(locale)
      this.$i18n.locale = locale
      this.del()
      this.addPizz()
      this.addNewPizz()
    }
  }
}
</script>

<style scoped>

</style>
