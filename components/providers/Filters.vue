<template src="~/templates/providers/filters.pug" lang="pug"></template>
<style src="~/assets/styl/providers/filters.styl" lang="stylus"></style>

<script>
export default {
  name: 'Filters',
  props: {
    filters: {
      type: Array,
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
      localFilters: [],
      localRange: []
    }
  },
  computed: {
    selectedFilters() {
      return []
    }
  },
  methods: {
    toggleOption(id) {
      this.$emit('select-filter', id)
    },
    reset() {
      this.$emit('reset-filter')
    },
    getOptionText(id) {
      const inArray = (arr, val) => arr.some(n => Array.isArray(n) ? inArray(n, val) : Object.is(n, val))
    },
    getOptionTitle(id) {
      const result = (([].concat(...this.filters.map(item => item.options))).filter(function (item, values) {
        return item.id === id
      }))
      if (result !== null && result !== undefined && result.length > 0) {
        return result[0].title
      } else {
        return id.replace('min_2=', 'Цена от ').replace('max_2=', 'Цена до ')
      }
    }
  }
}
</script>
