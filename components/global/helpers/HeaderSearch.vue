<template lang="pug" src="~/templates/global/helpers/header_search.pug"></template>

<script>
export default {
  name: 'HeaderSearch',
  data() {
    return {
      show: false,
      query: ''
    }
  },
  computed: {
    header_search_history() {
      return this.$store.state.global.header_search_history
    },
    header_search_result() {
      return this.$store.state.global.header_search_result
    }
  },
  created() {
    if (process.client) {
      document.addEventListener('click', this.clickOutside)
      this.$on('hook:beforeDestroy', () => document.removeEventListener('click', this.clickOutside))
    }
  },
  methods: {
    onSearch() {
      this.$router.push({ path: '/search/' + this.query })
    },
    changeShow(bool) {
      this.show = bool
    },
    clickOutside(e) {
      if (!this.$el.contains(e.target)) {
        this.show = false
      }
    }
  }
}
</script>
