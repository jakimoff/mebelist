import Vue from 'vue'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import SlideUpDown from 'vue-slide-up-down'
import Logo from '~/components/providers/Logo'
import Icon from '~/components/providers/Icon'
import Img from '~/components/providers/Img'
import Breadcrumbs from '~/components/providers/Breadcrumbs'
import BreadcrumbsSimple from '~/components/providers/BreadcrumbsSimple'
import TitlePage from '~/components/providers/TitlePage'
import LinkGlobal from '~/components/providers/LinkGlobal'

Vue.component('Logo', Logo)
Vue.component('Icon', Icon)
Vue.component('Img', Img)
Vue.component('Breadcrumbs', Breadcrumbs)
Vue.component('BreadcrumbsSimple', BreadcrumbsSimple)
Vue.component('TitlePage', TitlePage)
Vue.component('LinkGlobal', LinkGlobal)




Vue.component('Swiper', Swiper)
Vue.component('SwiperSlide', SwiperSlide)
Vue.component('slide-up-down', SlideUpDown)
