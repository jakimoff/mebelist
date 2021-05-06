<template src="~/templates/modules/slider-banner.pug" lang="pug"></template>
<style src="~/assets/styl/modules/slider-banner.styl" lang="stylus"></style>
<script>
export default {
  name: 'SliderBanner',
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      slider_banner: null,
      swiperOptions: {
        speed: 900,
        loop: true,
        effect: 'fade',
        parallax: true,
        spaceBetween: 20,
        simulateTouch: true,
        updateOnWindowResize: true,
        autoplay: {
          delay: 3500
        },
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true
        },
        navigation: {
          nextEl: '.welcome--wrap .btn_next',
          prevEl: '.welcome--wrap .btn_prev'
        }
      }
    }
  },
  async mounted() {
    if (this.$store.state.modules.SliderBanner.slider_banner_id !== this.id) {
      this.slider_banner = await this.$store.dispatch('modules/SliderBanner/setSliderBanner', { id: this.id })
    }
    this.slider_banner = this.$store.state.modules.SliderBanner.slider_banner
  }
}
</script>
