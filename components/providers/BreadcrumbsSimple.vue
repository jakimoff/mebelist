<template lang="pug">
  .breadcrumbs--wrap(v-if="crumbs")
    .container
      ul.breadcrumbs
        li(v-for="(item, i) in crumbs"
          :class="[{'breadcrumbs__mobile': (i >= crumbs.length - 2) }]"
        ).breadcrumbs__item
          nuxt-link(:to="item.path" v-if="(i !== crumbs.length - 1)").breadcrumbs__link.text_14
            | {{ item.name }}
          span._page.breadcrumbs__last.text_14(v-else)
            | {{ item.name }}
</template>
<style src="~/assets/styl/providers/breadcrumbs.styl" lang="stylus"></style>
<script>
export default {
  name: 'BreadcrumbsSimple',
  computed: {
    crumbs() {
      return this.$store.state.crumbs
    }
  }
}
</script>
