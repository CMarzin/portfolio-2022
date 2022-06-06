<template>
  <nav class="navigation-header__right--open">

      <nav class="navigation-header__nav-text">
        Menu
      </nav>

    <div class="navigation-header__nav-close-button" @click="toggleMenu">
      <svg-close-menu />
    </div>

  </nav>
</template>

<script>
  import navigationItems from '~/static/data/navigationItems'
  import NavigationHeaderMixins from '~/mixins/NavigationHeader'
  export default {
    mixins: [NavigationHeaderMixins],
    data() {
      return {
        navigationItems
      }
    },
  }
</script>

<style src="./_style.scss" lang="scss" scoped></style>