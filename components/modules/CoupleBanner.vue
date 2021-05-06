<template src="~/templates/modules/couple-banner.pug" lang="pug"></template>
<style src="~/assets/styl/modules/couple-banner.styl" lang="stylus"></style>
<script>
export default {
  name: 'CoupleBanner',
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      items: null
    }
  },
  async mounted() {
    if (this.$store.state.modules.CoupleBanner.couple_banner_id !== this.id) {
      this.items = await this.$store.dispatch('modules/CoupleBanner/setCoupleBanner', { id: this.id })
    }
    this.items = this.$store.state.modules.CoupleBanner.couple_banner
  }
}
</script>
