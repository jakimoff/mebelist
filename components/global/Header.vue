<template lang="pug" src="~/templates/global/header.pug"></template>
<style lang="stylus" src="~/assets/styl/global/header.styl"></style>
<script>
export default {
  name: 'Header',
  components: {
    HeaderHighNav: () => import('~/components/global/helpers/HeaderHighNav'),
    HeaderNav: () => import('~/components/global/helpers/HeaderNav'),
    HeaderSearch: () => import('~/components/global/helpers/HeaderSearch')
  },
  computed: {
    showMenu() {
      return this.$store.state.menu
    }
  },
  methods: {
    onMenu() {
      this.$store.dispatch('setMenu')
    },
    onMobMenu() {
      this.$store.dispatch('setMobMenu')
    }
  }
}
</script>
