<template lang="pug" src="~/templates/global/helpers/header_nav.pug"></template>
<style lang="stylus" src="~/assets/styl/global/helpers/header_nav.styl"></style>

<script>
import { arrayChunk } from '~/service/arrayAction'

export default {
  name: 'HeaderNav',
  data() {
    return {
      current_category: 0
    }
  },
  computed: {
    header_menu() {
      return this.$store.state.global.header_menu
    }
  },
  created() {
    if (process.client) {
      document.addEventListener('click', this.clickOutsideMenu)
      this.$on('hook:beforeDestroy', () => document.removeEventListener('click', this.clickOutsideMenu))
    }
  },
  async mounted() {
    await this.$store.dispatch('global/setHeaderMenu')
  },
  methods: {
    chunk(items) {
      return arrayChunk(items, process.env.CHUNK_CATEGORY_MENU)
    },
    clickOutsideMenu(e) {
      if (!this.$el.contains(e.target) && e.target.className !== 'btn_catalog text_14 menu_target') {
        this.$store.dispatch('setMenu')
      }
      if (this.$el.contains(e.target) && e.target.tagName !== 'a') {
        this.$store.dispatch('setMenu')
      }
    }
  }
}
</script>
