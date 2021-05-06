<template src="~/templates/modules/rss.pug" lang="pug"></template>
<style src="~/assets/styl/modules/rss.styl" lang="stylus"></style>
<script>
export default {
  name: 'Rss',
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      rss: null,
      thanks: '',
      email: null
    }
  },
  async mounted() {
    if (this.$store.state.modules.Rss.rss_complete) {
      this.thanks = 'Спасибо, Вы уже подписались на наши обновления'
      this.rss = this.$store.state.modules.Rss.rss
      return
    }
    if (this.$store.state.modules.Rss.rss_id !== this.id) {
      this.rss = await this.$store.dispatch('modules/Rss/setRss', { id: this.id })
      return
    }
    this.rss = this.$store.state.modules.Rss.rss
  },
  methods: {
    async subscribe() {
      if (this.email) {
        await this.$store.dispatch('modules/Rss/setSubscribe', { id: this.id })
      }
      this.thanks = 'Спасибо, За подписку'
    }
  }
}
</script>
