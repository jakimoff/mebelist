<template lang="pug">
  component(:is="errorPage" :error="error")
</template>

<script>
import error404 from '~/components/pages/errors/404.vue'
import error500 from '~/components/pages/errors/500.vue'

export default {
  name: 'NuxtError',
  props: {
    error: {
      type: Object,
      default: () => {
      }
    }
  },
  computed: {
    errorPage() {
      if (this.error.statusCode === 404) {
        return error404
      }
      // catch everything else
      return error500
    }
  }
}
</script>
