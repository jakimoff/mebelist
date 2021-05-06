<template lang="pug">
  picture(:class="parent + `__image`")
    source(:srcset="fileName", type="image/webp" :class="parent + `__img`")
    img(:src="imgLink", :alt="alt" :class="parent + `__img`")
</template>

<script>
export default {
  name: 'Img',
  props: {
    link: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      default: ''
    },
    parent: {
      type: String,
      default: ''
    }
  },
  computed: {
    imgLink: function () {
      let imgLink = this.link
      if (!imgLink.includes('http')) {
        imgLink = '/img/' + imgLink
      }
      return imgLink
    },
    fileName: function () {
      let imgLink = this.link
      if (!imgLink.includes('http')) {
        imgLink = '/img/' + imgLink
      }
      let fileName = imgLink
      if (!imgLink.includes('http')) {
        fileName = fileName.split('.').slice(0, -1).join('.') + '.webp'
      }
      return fileName
    }
  }
}
</script>
