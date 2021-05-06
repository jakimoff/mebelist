<template src="~/templates/providers/sort.pug" lang="pug"></template>
<style src="~/assets/styl/providers/sort.styl" lang="stylus"></style>

<script>
export default {
  name: 'Sort',
  props: {
    pc: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      current_sort_mobile: '',
      current_sort: '',
      active: false
    }
  },
  computed: {
    items() {
      return this.$store.state.global.appSort
    }
  },
  async mounted() {
    await this.$store.dispatch('global/setSortType')
    this.current_sort = this.items[0].text
    this.current_sort_mobile = this.items[0].text_mobile
  },
  methods: {
    selectSort(item) {
      this.$emit('select-sort', item.id)
      this.current_sort = item.text
      this.current_sort_mobile = item.text_mobile
      this.toggleTab()
    },
    toggleTab() {
      this.active = !this.active
    }
  }
}
</script>
