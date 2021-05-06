<template lang="pug">
  .wrapper
    | {{ error.message }}
</template>

<script>

export default {
// eslint-disable-next-line
  props: ['error'],
  layout: 'body',
  head() {
    return {
      bodyAttrs: {
        class: ''
      }
    }
  }
}
</script>
