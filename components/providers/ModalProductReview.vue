<template src="~/templates/providers/modal-product-review.pug" lang="pug"></template>
<style src="~/assets/styl/providers/modal-product-review.styl" lang="stylus"></style>

<script>
export default {
  name: 'ModalProductReview',
  props: {
    id: {
      type: Number,
      required: true
    },
    show: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  data() {
    return {
      bad_show: false,
      current_sort: '',
      active: false,
      bad_id: 0,
      not_complete: true,
      no_star: true
    }
  },
  computed: {
    merchantInfo() {
      return this.$store.state.product.merchant_info
    },
    reviewsOptions() {
      return this.$store.state.product.review_options
    },
    action() {
      return this.$axios.defaults.baseURL + '/api/product/' + this.$route.params.id + '/order'
    }
  },
  watch: {
    async id() {
      await this.$store.dispatch('product/setMerchantInfo', { id: this.id })
    },
    show() {
      this.show ? document.body.classList.add('overflow') : document.body.classList.remove('overflow')
      this.setStar()
    }
  },
  async mounted() {
    await this.$store.dispatch('product/setMerchantInfo', { id: this.id })
    await this.$store.dispatch('product/setReviewsOptions')
  },
  methods: {
    triggerShow() {
      this.$emit('trigger-show')
    },
    async goodLike() {
      await this.$store.dispatch('product/setGoodLike', { id: this.id })
      this.triggerShow()
      this.not_complete = false
    },
    async badLike() {
      await this.$store.dispatch('product/setBadLike', { id: this.id, reason: this.bad_id })
      this.triggerShow()
      this.not_complete = false
    },
    cancel() {
      this.bad_show = false
      this.triggerShow()
    },
    selectSort(item) {
      this.bad_id = item.id
      this.current_sort = item.title
      this.toggleTab()
    },
    toggleTab() {
      this.active = !this.active
    },
    async setStar() {
      if (process.client) {
        await this.$nextTick()
        const rater = require('rater-js')
        const stars = document.querySelectorAll('.merchant-stars')
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
    }
  }
}
</script>
