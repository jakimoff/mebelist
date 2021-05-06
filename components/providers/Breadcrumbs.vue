<template lang="pug">
  .breadcrumbs--wrap
    .container
      ul.breadcrumbs
        li
          nuxt-link(:to="`/`")._link.text_14
            | Главная
        li(v-for="(item, i) in crumbs"
          :class="[{'breadcrumbs__mobile': (i === crumbs.length - 2) }, item.classes]"
        )
          nuxt-link(:to="item.path" v-if="!item.last")._link.text_14
            | {{ item.name }}
          span._page.text_14(v-else)
            | {{ item.name }}
</template>
<style src="~/assets/styl/providers/breadcrumbs.styl" lang="stylus"></style>
<script>
export default {
  name: 'Breadcrumbs',
  computed: {
    crumbs() {
      const crumbs = []
      this.$route.matched.map((item, i, { length }) => {
        const crumb = {}
        crumb.path = item.path
        // crumb.name = this.$i18n.t('route.' + (item.name || item.path))
        crumb.name = 'route.' + (item.name || item.path)
        // is last item?
        if (i === length - 1) {
          // is param route? .../.../:id
          if (item.regex.keys.length > 0) {
            crumbs.push({
              path: item.path.replace(/\/:[^/:]*$/, ''),
              // name: this.$i18n.t('route.' + item.name.replace(/-[^-]*$/, ''))
              name: 'route.' + item.name.replace(/-[^-]*$/, '')
            })
            crumb.path = this.$route.path
            // crumb.name = this.$i18n.t('route.' + this.$route.name, [
            //   crumb.path.match(/[^/]*$/)[0]
            // ])
            crumb.name = 'route.' + this.$route.name
          }
          crumb.classes = 'is-active'
          crumb.last = true
          crumb.name = 'last_path'
        }

        crumbs.push(crumb)
      })
      return crumbs
    }
  }
}
</script>
