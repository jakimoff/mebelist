<template lang="pug" src="~/templates/global/helpers/header_nav_mobile.pug"></template>
<style lang="stylus" src="~/assets/styl/global/helpers/header_nav.styl"></style>

<script>
export default {
  name: 'HeaderNavMobile',
  computed: {
    header_mobile_menu() {
      return this.$store.state.global.header_mobile_menu
    },
    wishlist() {
      return this.$store.state.user.wishlist || 0
    }
  },
  async mounted() {
    await this.$store.dispatch('global/setHeaderMobileMenu')
  },
  methods: {
    selectItem() {
      this.$store.dispatch('setMobMenu')
    }
  }
}
</script>
