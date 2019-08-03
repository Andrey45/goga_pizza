<template lang="pug">
  v-btn(icon, router, :to="url")
    v-badge(left, color=" red accent-4")
      template(v-slot:badge)
        span {{appStore}}
      v-icon(large, :color="Colors")
        | shopping_cart
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: mapGetters(['appStore', 'Colors']),
  data(){
    return{
      url: '/basket'
    }
  }
}
</script>
