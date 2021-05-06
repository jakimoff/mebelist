<template lang="pug">
  svg(:class="`icon icon-` + svg + ` ` + class_name")
    use(:xlink:href="`/img/svg-sprites/symbol/sprite.svg#` + svg")
</template>

<script>
export default {
  name: 'Icon',
  props: {
    svg: {
      type: String,
      default: '',
      required: true
    },
    class_name: {
      type: String,
      default: ''
    }
  }
}
</script>
