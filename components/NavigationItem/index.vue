<template>
  <ul class="navigation-header__nav-items">
    <li v-for="(item, index) in items" :key="`${item.name}-${index}`">{{ $t(item.name) }}</li>
  </ul>
</template>

<script>
  export default {
    props: {
      items: {
        type: Array,
        default: () => []
      }
    },
  }
</script>

<style src="./_style.scss" lang="scss"></style>