<template>
  <ul :class="customClass">
    <li v-for="(item, index) in items" :key="`${item.name}-${index}`">{{ $t(item.name) }}</li>
  </ul>
</template>

<script>
  export default {
    props: {
      items: {
        type: Array,
        default: () => []
      },
      customClass: {
        type: String,
        default: () => ''
      }
    },
  }
</script>

<style scoped>

</style>