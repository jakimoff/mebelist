<template src="~/templates/modules/banner.pug" lang="pug"></template>
<style src="~/assets/styl/modules/banner.styl" lang="stylus"></style>
<script>
export default {
  name: 'Banner',
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      banner: null
    }
  },
  async mounted() {
    if (this.$store.state.modules.Banner.banner_id !== this.id) {
      this.banner = await this.$store.dispatch('modules/Banner/setBanner', { id: this.id })
    }
    this.banner = this.$store.state.modules.Banner.banner
  }
}
</script>
