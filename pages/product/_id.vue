<template src="~/templates/pages/product.pug" lang="pug"></template>
<style src="~/assets/styl/pages/product/detailed.styl" lang="stylus"></style>
<script>
export default {
  name: 'PageProduct',
  head() {
    return {
      bodyAttrs: {
        class: 'aside-page'
      }
    }
  },
  components: {
    ProductsPopular: () => import('~/components/modules/ProductsPopular'),
    RecentViewProducts: () => import('~/components/modules/RecentViewProducts'),
    ModalProductReview: () => import('~/components/providers/ModalProductReview'),
    Rss: () => import('~/components/modules/Rss')
  },
  data() {
    return {
      swiperOptions: {
        speed: 900,
        loop: false,
        effect: 'fade',
        parallax: true,
        spaceBetween: 20,
        simulateTouch: true,
        updateOnWindowResize: true,
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true
        },
        navigation: {
          nextEl: '.detailed--wrap .btn_next',
          prevEl: '.detailed--wrap .btn_prev'
        }
      },
      modalTriggerShow: false,
      merchant_id: 0,
      banner_id: 1,
      current_slide: 0,
      title: '',
      swiperTop: false,
      specifications: [],
      images: [],
      detailer: []
    }
  },
  computed: {
    swiper() {
      return this.$refs.swiperTop.$swiper
    }
  },
  created() {
    if (process.client) {
      document.addEventListener('scroll', this.fixAside)
      this.$on('hook:beforeDestroy', () => document.removeEventListener('scroll', this.fixAside))
    }
  },
  async mounted() {
    await this.$store.dispatch('modules/RecentViewProducts/setRecentViewProductsId', {
      id: this.$route.params.id
    })
    const { title, specifications, detailer, images } = await this.$store.dispatch('product/setProductInfo', {
      id: this.$route.params.id
    })
    this.title = title
    this.detailer = detailer
    this.specifications = specifications
    await this.$nextTick()
    this.images = images
    if (process.client) {
      await this.$nextTick()
      const rater = require('rater-js')
      const stars = document.querySelectorAll('.stars')
      for (let i = 0; i < stars.length; i++) {
        const star = parseInt(stars[i].getAttribute('data-stars'))
        rater({
          element: stars[i],
          max: 5,
          starSize: 24,
          rating: star,
          readOnly: true
        })
      }
    }
  },
  methods: {
    slideTo(key) {
      this.current_slide = key
      this.swiper.slideTo(key, 900)
    },
    slideChange() {
      this.current_slide = this.swiper.activeIndex
    },
    btnNav(route, e) {
      if (route && this.swiper.isEnd) {
        setTimeout(() => {
          this.slideTo(0)
        }, 100)
      }
      if (!route && this.swiper.isBeginning) {
        setTimeout(() => {
          this.slideTo(this.images.length - 1)
        }, 100)
      }
    },
    ShowModal(id) {
      this.merchant_id = id
      this.modalTriggerShow = true
    },
    fixAside(e) {
      const height = document.querySelector('.header--wrap').offsetHeight + document.querySelector('.breadcrumbs--wrap').offsetHeight + document.querySelector('.title-category--wrap').offsetHeight
      const heightChildren = document.querySelector('.detailed-page').offsetHeight

      if (e.path[1].scrollY > height) {
        document.querySelector('.fix_aside').classList.add('fixed-nav')
      } else {
        document.querySelector('.fix_aside').classList.remove('fixed-nav')
      }

      if (e.path[1].scrollY > heightChildren - height - 55) {
        document.querySelector('.fix_aside').classList.add('fixed-nav-low')
      } else {
        document.querySelector('.fix_aside').classList.remove('fixed-nav-low')
      }
    }
  }
}
</script>
