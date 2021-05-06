<template src="~/templates/modules/recent-view-products.pug" lang="pug"></template>
<style src="~/assets/styl/modules/recent-view-products.styl" lang="stylus"></style>
<script>
export default {
  name: 'RecentViewProducts',
  components: {
    ProductView: () => import('~/components/providers/ProductView')
  },
  data() {
    return {
      swiperOptions: {
        speed: 900,
        loop: true,
        slidesPerView: 1,
        spaceBetween: 20,
        simulateTouch: true,
        updateOnWindowResize: true,
        navigation: {
          nextEl: '.recommended-category .btn_next',
          prevEl: '.recommended-category .btn_prev'
        },
        breakpoints: {
          576: {
            slidesPerView: 2
          },
          992: {
            slidesPerView: 3
          },
          1200: {
            slidesPerView: 4
          }
        }
      }
    }
  },
  computed: {
    products() {
      return this.$store.state.modules.RecentViewProducts.products
    }
  },
  async mounted() {
    await this.$store.dispatch('modules/RecentViewProducts/setRecentViewProducts')
  }
}
</script>
