<template>
  <button :class="`${customClass} custom-button`" type="button">
    <svg-custom-link />
    <span class="custom-button__text">{{ $t('Go to project') }}</span>
  </button>
</template>

<script>
  export default {
    props: {
      customClass: {
        type: String,
        default: () => ''
      },
    },
  }
</script>

<style scoped src="./_style.scss" lang="scss"></style>