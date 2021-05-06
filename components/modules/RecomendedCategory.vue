<template src="~/templates/modules/recommended-category.pug" lang="pug"></template>
<style src="~/assets/styl/modules/recommended-category.styl" lang="stylus"></style>
<script>
export default {
  name: 'RecomendedCategory',
  components: {
    ProductView: () => import('~/components/providers/ProductView')
  },
  props: {
    ids: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      opacity_nav: false,
      opacity_products: true
    }
  },
  computed: {
    categories() {
      return this.$store.state.modules.RecomendedCategories.categories
    },
    products() {
      return this.$store.state.modules.RecomendedCategories.products
    },
    current_category() {
      return this.$store.state.modules.RecomendedCategories.current_category
    }
  },
  watch: {
    products: function () {
      this.opacity_products = true
    }
  },
  async mounted() {
    await this.$store.dispatch('modules/RecomendedCategories/setCategories', { ids: this.ids })
    this.opacity_nav = true
  },
  methods: {
    async set_products(id) {
      if (this.$store.state.modules.RecomendedCategories.current_category !== id) {
        this.opacity_products = false
        this.$store.commit('modules/RecomendedCategories/SET_CURRENT_CATEGORY', id)
        await this.$store.dispatch('modules/RecomendedCategories/setProductForCategory', { id: id })
      }
    }
  }
}
</script>
