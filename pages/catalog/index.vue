<template lang="pug">
  div
    .container
      .row
        .col-xl-3.d-none.d-xl-block
          aside.aside-page__aside
            CategoriesList
        .col-xl-9.col-lg-12
          .aside-page__content
            BannerSale(:id="2")
            Categories(:id="2" :aside="true")
            ProductsCategory(:id="'Кухни'" :aside="true")
            ProductsCategory(:id="'Шкафы'" :aside="true")
    RecentViewProducts
    Rss(:id="3")
</template>
<style src="~/assets/styl/resources/catalog-global.styl" lang="stylus"></style>
<script>
export default {
  name: 'PageCatalog',
  head() {
    return {
      bodyAttrs: {
        class: 'aside-page'
      }
    }
  },
  components: {
    ProductView: () => import('~/components/providers/ProductView'),
    CategoriesList: () => import('~/components/modules/CategoriesList'),
    Categories: () => import('~/components/modules/Categories'),
    ProductsCategory: () => import('~/components/modules/ProductsCategory'),
    BannerSale: () => import('~/components/modules/BannerSale'),
    Banner: () => import('~/components/modules/Banner'),
    RecentViewProducts: () => import('~/components/modules/RecentViewProducts'),
    Rss: () => import('~/components/modules/Rss')
  }
}
</script>
