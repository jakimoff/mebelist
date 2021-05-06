<template lang="pug">
  .wrapper
    BreadcrumbsSimple
    TitlePage(:title="$nuxt.$route.params.id")
    .notification--wrap
      .container
        .row
          .col-xl-2.col-lg-4.col-md-12.col-sm-12.col-xs-12
          .col-xl-8.col-lg-8.col-md-12.col-sm-12.col-xs-12
            .notification
              ._main
                ._box(v-for="item in information")
                  h3._title.title_20
                    | {{ item.title }}
                  div(v-html="item.description")
</template>

<script>
export default {
  name: 'PageInformationId',
  computed: {
    information() {
      return this.$store.state.information.informationById
    }
  },
  async mounted() {
    await this.$store.dispatch('information/setInformationById', { id: this.$route.params.id })
  }
}
</script>
