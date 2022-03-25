<template>
  <div class="default-layout">
    <navigation-header />
    <main class="default-layout__main-container">
      <Nuxt />
    </main>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped lang="scss">

.default-layout {
  background-color: #000;
  background-image: url('@/assets/images/Noise-big.png');
  padding: 16px;
  min-height: 100%;
}

.default-layout__main-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: $column-gap;
  grid-row-gap: 0px;
}

</style>