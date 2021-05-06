<template lang="pug" src="~/templates/global/helpers/header_high_nav.pug"></template>
<style lang="stylus" src="~/assets/styl/global/helpers/header_high_nav.styl"></style>

<script>
export default {
  name: 'HeaderHighNav',
  computed: {
    header_high_menu() {
      return this.$store.state.global.header_high_menu
    }
  },
  async mounted() {
    await this.$store.dispatch('global/setHeaderHighMenu')
  }
}
</script>
