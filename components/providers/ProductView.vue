<template src="~/templates/providers/product-view.pug" lang="pug"></template>
<style src="~/assets/styl/providers/product-view.styl" lang="stylus"></style>
<script>
export default {
  name: 'ProductView',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      productTransition: false
    }
  },
  methods: {
    triggerTransition(bool) {
      this.productTransition = bool
    }
  }
}
</script>
