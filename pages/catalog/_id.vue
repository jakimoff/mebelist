<template lang="pug">
  div
    BreadcrumbsSimple
    TitlePage(:title="title")
    .container
      .row
        .col-xl-3.d-none.d-xl-block
          aside.aside-page__aside
            .catalog-sub--wrap
              .catalog-sub(v-if="categories")
                h2._title.text_16
                  | Каталог товаров
                span._sub.text_14
                  | {{ categories.title }}
                ul._list
                  li._item(v-for="item in categories.items")
                    nuxt-link(:to="item.to")._link.text_14
                      | {{ item.title }} ({{ item.count }})
                Filters(:filters="filters" :filter="filter" @select-filter="setFilter" @reset-filter="resetFilter")
        .col-xl-9.col-lg-12
          .aside-page__content
            SubCategories(:id="this.$route.params.id")
            .sort--wrap
              .sort
                ._desktop
                  Sort(@select-sort="sort")
                  p._result.text_14
                    | Показано {{ show }} товара
                ._mobile
                  ._result
                    h2._result--this.title_24
                      | {{ total }} товаров
                  Sort(@select-sort="sort" :pc="false")
                  button(type="button" name="filter" @click="hide_filter = !hide_filter").btn_filter.text_16
                    | Фильтры
                    Icon(:svg="`filter`")
            .popular--wrap
              .popular
                .row(v-if="products")
                  .col-xl-4.col-lg-4.col-md-6.col-sm-6.col-xs-12(v-for="item in products")
                    ProductView(:item="item")
                .banner-inner(v-if="banner_id")
                  Banner(:id="banner_id")
                .row(v-if="more")
                  .col-xl-4.col-lg-4.col-md-6.col-sm-6.col-xs-12(v-for="item in more")
                    ProductView(:item="item")
                ._more(v-if="getShowing")
                  button(@click="load_more").btn_more.text_14
                    | Показать еще
                    Icon(:svg='`arrow-left`')
                .more(v-else)
                  button(disabled="disabled").btn_more.text_14
                    | Больше нет результатов
        FiltersMobile(
          :filters="filters"
          :filter="filter"
          :show="hide_filter"
          @reset-filter="resetFilter"
          @change-filter="changeFilter"
          @select-filter="sortRun"
          @toggle-show="hide_filter = false")
    RecentViewProducts
    Rss(:id="3")
</template>
<style src="~/assets/styl/modules/categories-list.styl" lang="stylus"></style>
<style src="~/assets/styl/resources/catalog-global.styl" lang="stylus"></style>
<style src="~/assets/styl/resources/popular.styl" lang="stylus"></style>
<script>
export default {
  name: 'PageCatalogCategory',
  head() {
    return {
      bodyAttrs: {
        class: 'aside-page'
      }
    }
  },
  components: {
    ProductView: () => import('~/components/providers/ProductView'),
    Sort: () => import('~/components/providers/Sort'),
    Filters: () => import('~/components/providers/Filters'),
    FiltersMobile: () => import('~/components/providers/FiltersMobile'),
    SubCategories: () => import('~/components/modules/SubCategories'),
    Banner: () => import('~/components/modules/Banner'),
    RecentViewProducts: () => import('~/components/modules/RecentViewProducts'),
    Rss: () => import('~/components/modules/Rss')
  },
  data() {
    return {
      banner_id: 1,
      title: '',
      total: 0,
      show: 0,
      hide_filter: false,
      sortId: 0,
      products: 0,
      filters: [],
      filter: [],
      categories: [],
      more: [],
      limit: 9
    }
  },
  computed: {
    getShowing() {
      return this.total > this.show
    }
  },
  async mounted() {
    const { title, total, products, categories, filters } = await this.$store.dispatch('catalog/setCategory', { id: this.$route.params.id })
    this.title = title
    this.total = total
    this.filters = filters
    this.products = products
    this.categories = categories
    this.show = products.length
  },
  methods: {
    async load_more() {
      const { products } = await this.$store.dispatch('catalog/setCategory',
        {
          id: this.$route.params.id,
          start: this.products.length + this.more.length,
          limit: this.limit
        })
      this.show += this.limit
      this.more.push.apply(this.more, products)
    },
    async sortRun() {
      const { products } = await this.$store.dispatch('catalog/setCategory',
        {
          id: this.$route.params.id,
          start: 0,
          limit: this.limit,
          sort: this.sortId,
          filter: this.filter
        })
      this.show = products.length
      this.products = products
      this.more = []
    },
    sort(sortId) {
      this.sortId = sortId
      this.sortRun()
    },
    changeFilter(id) {
      if (this.filter.indexOf(id) !== -1) {
        this.filter.splice(this.filter.indexOf(id), 1)
      } else {
        this.$set(this.filter, this.filter.length, id)
      }
    },
    resetFilter() {
      this.filter.splice(0, this.filter.length)
    },
    async setFilter(id) {
      this.changeFilter(id)
      await this.$nextTick()
      this.sortRun()
    }
  }
}
</script>
