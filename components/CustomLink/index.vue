<template>
  <nuxt-link :class="`${customClass} custom-link`" :to="link">
    <svg-custom-link />
    <span class="custom-link__text">{{ $t('Go to project') }}</span>
  </nuxt-link>
</template>

<script>
  export default {
    props: {
      customClass: {
        type: String,
        default: () => ''
      },
      link: {
        type: String,
        default: () => ''
      },
    },
  }
</script>

<style scoped src="./_style.scss" lang="scss"></style>