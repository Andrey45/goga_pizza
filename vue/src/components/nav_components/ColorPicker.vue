<template lang="pug">
  v-dialog(dark, max-width="300", v-model="dialog")
    template(v-slot:activator="{ on }")
      v-btn(dark, v-on="on" , @click="dialog=true", :color="Colors", icon)
        v-img(:src="require('../../assets/img/navbar/color.svg')" max-width="34")
    v-card(color="grey darken-3")
      v-container(grid-list-xl='')
        v-layout(wrap='')
          v-flex(d-flex='', justify-center='')
            v-color-picker(v-model='color')
      | {{ this.setcolor(showColor) }}
</template>

<script>
  import { mapGetters, mapMutations } from "vuex"
export default {
  data(){
    return{
      overlay: false,
      types: ['hex', 'hexa', 'rgba', 'hsla', 'hsva'],
      type: 'hex',
      hex: '#FF00FF',
      hexa: '#FF00FFFF',
      rgba: { r: 255, g: 0, b: 255, a: 1 },
      hsla: { h: 300, s: 1, l: 0.5, a: 1 },
      hsva: { h: 300, s: 1, v: 1, a: 1 },
    }
  },
  computed:{
    ...mapGetters(['Colors']),
    color: {
      get () {
        return this[this.type]
      },
      set (v) {
        this[this.type] = v
      },
    },
    showColor () {
      if (typeof this.color === 'string') return this.color

      return JSON.stringify(Object.keys(this.color).reduce((color, key) => {
        color[key] = Number(this.color[key].toFixed(2))
        return color
      }, {}), null, 2)
    },
  },
  methods:{
    ...mapMutations(['setcolor']),
  },
}
</script>

<style scoped>

</style>
