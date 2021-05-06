<template lang="pug">
  .title-category--wrap
    .container
      .title-category
        h2._this.title_24
          | {{ title }}
</template>

<script>
export default {
  name: 'TitlePage',
  props: {
    title: {
      type: String,
      default: '',
      required: true
    }
  }
}
</script>
