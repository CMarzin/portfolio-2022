<template>
  <a v-if="external" :class="`${customClass} custom-link`" :href="link">
    <svg-custom-link />
    <span class="custom-link__text">{{ $t('Go to project') }}</span>
  </a>
  <nuxt-link v-else :class="`${customClass} custom-link`" :to="localePath(link)">
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
      external: {
        type: Boolean,
        default: false
      }
    },
  }
</script>

<style scoped src="./_style.scss" lang="scss"></style>