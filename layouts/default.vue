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
  position: relative;
  background-color: #000;
  padding: 16px;
  min-height: 100%;

  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-image: url('@/assets/images/Noise-big-720.png');
    mix-blend-mode: hard-light;
    opacity: 0.35;
  }
}

.default-layout__main-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: $column-gap;
  grid-row-gap: 0px;
}

</style>