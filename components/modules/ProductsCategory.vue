<template src="~/templates/modules/products-category.pug" lang="pug"></template>
<style src="~/assets/styl/modules/products-category.styl" lang="stylus"></style>
<script>
export default {
  name: 'ProductsCategory',
  components: {
    ProductView: () => import('~/components/providers/ProductView'),
    ProductLimitedView: () => import('~/components/providers/ProductLimitedView'),
    ProductRecommendView: () => import('~/components/providers/ProductRecommendView')
  },
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
      title: '',
      products: [],
      recommend: {},
      limited: {},
      more: [],
      limit: 8
    }
  },
  watch: {
    products: function () {
    }
  },
  async mounted() {
    const { title, products, recommend, limited } = await this.$store.dispatch('modules/ProductsCategory/setProducts', { id: this.id })
    this.title = title
    this.products = products
    this.recommend = recommend
    this.limited = limited
  },
  methods: {
    async load_more() {
      const data = await this.$store.dispatch('modules/ProductsCategory/setLoadMore',
        {
          id: this.id,
          start: this.products.length + this.more.length,
          limit: this.limit
        })
      this.more.push.apply(this.more, data)
    }
  }
}
</script>
