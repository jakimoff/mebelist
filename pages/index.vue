<template lang="pug">
  div
    SliderBanner(:id="2")
    Categories(:id="2")
    ProductsPopular(:id="2")
    CoupleBanner(:id="2")
    ProductsCategory(:id="'Кухни'")
    ProductsCategory(:id="'Шкафы'")
    Banner(:id="banner_id")
    RecomendedCategory(:ids="recomended_category_id")
    HomeWhom(:data="whom")
    HomeAbout(:data="about")
</template>

<script>
export default {
  name: 'Index',
  components: {
    SliderBanner: () => import('~/components/modules/SliderBanner'),
    Categories: () => import('~/components/modules/Categories'),
    ProductsPopular: () => import('~/components/modules/ProductsPopular'),
    CoupleBanner: () => import('~/components/modules/CoupleBanner'),
    ProductsCategory: () => import('~/components/modules/ProductsCategory'),
    Banner: () => import('~/components/modules/Banner'),
    RecomendedCategory: () => import('~/components/modules/RecomendedCategory'),
    HomeWhom: () => import('~/components/pages/home/HomeWhom'),
    HomeAbout: () => import('~/components/pages/home/HomeAbout')
  },
  data() {
    return {
      whom: {
        title: 'Mebelist — это маркетплейс, где для покупателя и продавца созданы идеальные условия',
        button_left: {
          text: 'Покупателям',
          to: '/information/customers'
        },
        button_right: {
          text: 'Продавцам',
          to: '/information/buyers'
        }
      },
      about: {
        to: '/catalog',
        button_text: 'Перейти в каталог',
        img: 'general/about-img.png',
        items: [
          {
            title: 'Каждый день скидки',
            text: 'Для экономии не нужен повод, поэтому мы каждый день даём вам скидки на популярные товары самых разных категорий.'
          },
          {
            title: 'Надежные поставщики',
            text: 'Мы заботимся о надёжных поставщиках, качестве товаров и безопасной оплате. А что делать вам? Просто наслаждаться покупками.'
          },
          {
            title: 'Удобный поиск',
            text: 'Мы заботимся о надёжных поставщиках, качестве товаров и безопасной оплате. А что делать вам? Просто наслаждаться покупками.'
          }
        ]
      },
      recomended_category_id: [1, 4, 7, 12, 15],
      banner_id: 1
    }
  }
}
</script>
