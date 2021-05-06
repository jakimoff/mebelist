<template src="~/templates/providers/filters_mobile.pug" lang="pug"></template>
<style src="~/assets/styl/providers/filters.styl" lang="stylus"></style>

<script>
export default {
  name: 'FiltersMobile',
  props: {
    filters: {
      type: Array,
      required: true
    },
    show: {
      type: Boolean,
      default: false,
      required: true
    },
    filter: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      models: {
        min: [],
        max: []
      },
      box: -1
    }
  },
  computed: {
    countFilter() {
      return this.filter.length
    }
  },
  watch: {
    show() {
      this.show ? document.body.classList.add('overflow') : document.body.classList.remove('overflow')
    }
  },
  methods: {
    toggleOption(id) {
      this.$emit('change-filter', id)
    },
    async toggleShow() {
      this.$emit('toggle-show')
      await this.$nextTick()
      this.box = -1
    },
    reset() {
      this.$emit('reset-filter')
    },
    setFilter() {
      this.$emit('select-filter', this.filter)
    }
  }
}
</script>
