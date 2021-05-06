<template src="~/templates/providers/product-recommend-view.pug" lang="pug"></template>
<style src="~/assets/styl/providers/product-recommend-view.styl" lang="stylus"></style>
<script>
export default {
  name: 'ProductRecommendView',
  props: {
    item: {
      type: Object,
      required: true
    },
    aside: {
      type: Boolean,
      default: false
    }
  }
}
</script>
