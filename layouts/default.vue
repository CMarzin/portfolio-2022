<template>
  <div class="default-layout">
    <navigation-header />

    <div class="default-layout__container" :style="`background-image: url(${bgImg})`">

      <main class="default-layout__main-container">
        <Nuxt />
      </main>

      <aside>
        <div class="default-layout__aside">
            <div class="default-layout__aside-box default-layout__aside-part-1"></div>
            <div class="default-layout__aside-box default-layout__aside-part-2"></div>
            <div class="default-layout__aside-box default-layout__aside-part-3"></div>
            <div class="default-layout__aside-box default-layout__aside-part-4"></div>
            <div class="default-layout__aside-box default-layout__aside-part-5"></div>
            <footer class="default-layout__aside-box default-layout__aside-part-6">
              <footer-component />
            </footer>
        </div>
      </aside>
    </div>

  </div>
</template>

<script>
  export default {
    computed: {
      bgImg () {
        return require('@/assets/images/image-bg.jpg')
      }
    },
  }
</script>

<style src="@/layouts/_default.scss" scoped lang="scss"></style>