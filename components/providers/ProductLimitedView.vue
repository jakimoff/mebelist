<template src="~/templates/providers/product-limited-view.pug" lang="pug"></template>
<style src="~/assets/styl/providers/product-limited-view.styl" lang="stylus"></style>
<script>
export default {
  name: 'ProductLimitedView',
  props: {
    item: {
      type: Object,
      required: true
    },
    aside: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      selected_image: 0
    }
  },
  methods: {
    selectImg(key) {
      this.selected_image = key
      console.log(this.selected_image)
    }
  }
}
</script>
