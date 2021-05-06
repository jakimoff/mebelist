<template src="~/templates/modules/sub-categories.pug" lang="pug"></template>
<style src="~/assets/styl/modules/categories.styl" lang="stylus"></style>
<style src="~/assets/styl/modules/sub-categories.styl" lang="stylus"></style>
<script>
export default {
  name: 'SubCategories',
  props: {
    id: {
      type: String,
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
    if (this.$store.state.modules.SubCategories.sub_categories_id !== this.id) {
      this.items = await this.$store.dispatch('modules/SubCategories/setSubCategories', { id: this.$route.params.id })
      return
    }
    this.items = this.$store.state.modules.SubCategories.sub_categories
  }
}
</script>
