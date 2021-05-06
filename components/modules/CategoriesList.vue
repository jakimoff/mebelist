<template src="~/templates/modules/categories-list.pug" lang="pug"></template>
<style src="~/assets/styl/modules/categories-list.styl" lang="stylus"></style>
<script>
import { arrayChunk } from '~/service/arrayAction'

export default {
  name: 'CategoriesList',
  data() {
    return {
      tab: false
    }
  },
  computed: {
    categories() {
      return this.$store.state.modules.CategoriesList.categories_list
    }
  },
  async mounted() {
    await this.$store.dispatch('modules/CategoriesList/setCategoriesList')
  },
  methods: {
    chunk(items) {
      return arrayChunk(items, 5)
    }
  }
}
</script>
