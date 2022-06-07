<template>
  <div class="default-layout">
    <navigation-header />

    <navigation-mobile-item v-show="isTablet" :items="navigationItems" />

    <div class="default-layout__container" :style="`background-image: url(${bgImg})`">

      <img :src="bgImg" alt="" width="0" height="0" style="display: none !important;" />

      <main class="default-layout__main-container">
        <Nuxt />
      </main>

      <aside class="default-layout__aside">
        <div class="default-layout__aside-box default-layout__aside-part-1"></div>
        <div class="default-layout__aside-box default-layout__aside-part-2"></div>
        <div class="default-layout__aside-box default-layout__aside-part-3"></div>
        <div class="default-layout__aside-box default-layout__aside-part-4"></div>
        <div class="default-layout__aside-box default-layout__aside-part-5"></div>
        <footer v-show="isDesktop" class="default-layout__aside-box default-layout__aside-part-6">
          <footer-component />
        </footer>
      </aside>

      <footer v-show="isMobileLg" class="default-layout__footer-mobile">
        <footer-component />
      </footer>
    </div>

  </div>
</template>

<script>
  import LayoutsMixins from '~/mixins/Layouts'
  export default {
    mixins: [LayoutsMixins],
  }
</script>

<style src="@/assets/styles/layouts/_about.scss" scoped lang="scss"></style>