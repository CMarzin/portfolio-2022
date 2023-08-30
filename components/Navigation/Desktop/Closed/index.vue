<template>
  <div class="navigation-header__right--closed">
      <div class="navigation-header-middle__background">
        <div class="navigation-header-middle__route-name">{{ routeName }}</div>
        <div class="navigation-header-middle__background--opacity"></div>
      </div>

      <div class="navigation-header__burger navigation-header__background" @click="toggleMenu">
        <svg-burger-menu />
      </div>
  </div>
</template>

<script>
  import NavigationHeaderMixins from '~/mixins/NavigationHeader'
  export default {
    mixins: [NavigationHeaderMixins],
    computed: {
      routeName() {
        return this.$nuxt.$route.path === '/' ? this.$t('home') : this.$t('about')
      }
    }
  }
</script>

<style src="./_style.scss" lang="scss" scoped></style>