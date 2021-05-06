<template lang="pug">
  div
    BreadcrumbsSimple
    TitlePage(:title="`Информационная страница`")
    .notification--wrap
      .container
        .row
          .col-xl-3.col-lg-4.col-md-12.col-sm-12.col-xs-12
            .notification
              .select-gl.only_mobile
                ._this
                  button(type="button" name="selected" @click="drop = !drop")._value.text_14
                    span
                      | {{ default_title }}
                    Icon(:svg="`dropdown`" :class_name="`select-gl__drop`")
                  transition(name="fade`")
                    ul._list.text_14(v-show="drop")
                      li._item(
                        v-for="(item, key) in information"
                        @click="drop = !drop, current_info_block = key"
                        :class="{'selected': current_info_block === key}"
                      )
                        | {{ item.title }}
              aside._aside.no_mobile
                ul._list
                  li._item(v-for="(item, key) in information")
                    button(
                      type="button"
                      @click="current_info_block = key"
                      :class="{'notification--active': current_info_block === key}"
                      )._btn.text_14
                      | {{ item.title }}
          .col-xl-6.col-lg-8.col-md-12.col-sm-12.col-xs-12
            .notification
              ._main
                ._box(v-for="(item, key) in information")
                  transition-group(name="fade" tag="div" mode="out-in")
                    div(:key="key" v-show="current_info_block == key")
                      h3._title.title_20
                        | {{ item.title }}
                      div(v-html="item.description")
</template>
<style src="~/assets/styl/modules/custom/notification.styl" lang="stylus"></style>
<script>
export default {
  name: 'PageInformation',
  data() {
    return {
      current_info_block: 0,
      drop: false,
      componentLoaded: false
    }
  },
  computed: {
    information() {
      return this.$store.state.information.information
    },
    default_title() {
      if (!this.componentLoaded) { return null }
      return this.information[this.current_info_block].title ? this.information[this.current_info_block].title : ''
    }
  },
  async mounted() {
    await this.$store.dispatch('information/setInformation')
    this.componentLoaded = true
  }
}
</script>
