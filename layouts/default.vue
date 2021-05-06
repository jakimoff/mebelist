<template lang="pug">
  .wrapper
    #loading-bg
      Logo
    Header
    .content
      nuxt
    Footer
    HeaderNavMobile
    .overlay
    .overlay-global(v-if="getOverflow" @click="$store.dispatch('clearAll')")
</template>
<script>
export default {
  name: 'Default',
  components: {
    Header: () => import('~/components/global/Header'),
    HeaderNavMobile: () => import('~/components/global/helpers/HeaderNavMobile'),
    Footer: () => import('~/components/global/Footer')
  },
  head() {
    return {
      bodyAttrs: {
        class: this.getOverflow ? 'overflow' : ''
      }
    }
  },
  computed: {
    getOverflow() {
      return this.$store.state.overflow
    }
  },
  created() {
    if (process.client) {
      window.addEventListener('resize', this.handleWindowResize)
      this.handleWindowResize()
    }
  },
  methods: {
    handleWindowResize() {
      this.$store.commit('UPDATE_WINDOW_WIDTH', window.innerWidth)
    }
  }
}
</script>
<style>
  .overflow {
    overflow: hidden;
  }
  #loading-bg {
    width: 100vw;
    height: 100vh;
    position: fixed;
    z-index: 9999;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
  }
</style>
