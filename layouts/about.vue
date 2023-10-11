<template>
  <div class="about-layout">

    <backdrop :class="`backdrop backdrop--${menuState}`"/>

    <navigation-header />

    <navigation-mobile-item v-show="isTablet" :items="navigationItems" />

    <div class="about-layout__container">

      <main class="about-layout__main-container">
        <Nuxt />
      </main>

      <aside v-show="isDesktop" class="about-layout__aside">

        <img class="about-layout__image" src="@/assets/images/myself.jpg" />

			  <footer v-show="isDesktop" class="about-layout__aside-box about-layout__aside-part-6">
          <footer-component />
        </footer>
      </aside>

			<footer v-show="isMobileLg" class="about-layout__footer-mobile">
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