<template src="~/templates/modules/banner-sale.pug" lang="pug"></template>
<style src="~/assets/styl/modules/banner-sale.styl" lang="stylus"></style>
<script>
export default {
  name: 'BannerSale',
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      banner_sale: null
    }
  },
  async mounted() {
    if (this.$store.state.modules.BannerSale.banner_sale_id !== this.id) {
      this.banner_sale = await this.$store.dispatch('modules/BannerSale/setBannerSale', { id: this.id })
      return
    }
    this.banner_sale = this.$store.state.modules.BannerSale.banner_sale
  }
}
</script>
