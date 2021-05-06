<template lang="pug">
  nuxt-link(:to="`/`").logotype
    img(:src="`/img/svg/` + logo + `.svg`" :alt="alt")._img
</template>

<script>
export default {
  name: 'Logo',
  props: {
    logo: {
      type: String,
      default: 'logo-full'
    },
    alt: {
      type: String,
      default: process.env.APP_NAME
    }
  }
}
</script>
