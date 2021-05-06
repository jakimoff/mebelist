<template src="~/templates/modules/categories.pug" lang="pug"></template>
<style src="~/assets/styl/modules/categories.styl" lang="stylus"></style>
<script>
export default {
  name: 'Categories',
  props: {
    id: {
      type: Number,
      required: true
    },
    aside: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      items: null
    }
  },
  async mounted() {
    if (this.$store.state.modules.Categories.categories_id !== this.id) {
      this.items = await this.$store.dispatch('modules/Categories/setCategories', { id: this.id })
    }
    this.items = this.$store.state.modules.Categories.categories
  }
}
</script>
