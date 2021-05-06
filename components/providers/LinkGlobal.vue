<template lang="pug">
  nuxt-link(:to="to" :class="class_name").btn_global
    | {{ text }}
</template>

<script>
export default {
  name: 'LinkGlobal',
  props: {
    to: {
      type: String,
      default: '',
      required: true
    },
    class_name: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      required: true,
      default: ''
    }
  }
}
</script>
