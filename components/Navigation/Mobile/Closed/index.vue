<template>
  <div class="navigation-header__right--closed">
      <nav class="navigation-header__background"></nav>

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

<style src="./_style.scss" lang="scss"></style>