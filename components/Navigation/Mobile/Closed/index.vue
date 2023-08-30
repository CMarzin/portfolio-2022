<template>
  <div class="navigation-header__right--closed">
        <div class="navigation-header-middle__background">
          <div class="navigation-header-middle__route-name">{{ $nuxt.$route.name }}</div>
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
    mixins: [NavigationHeaderMixins]
  }
</script>

<style src="./_style.scss" lang="scss" scoped></style>