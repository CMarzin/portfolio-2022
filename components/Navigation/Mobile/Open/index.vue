<template>
  <nav class="navigation-header__right--open">

    <navigation-item :items="navigationItems"/>

    <div class="navigation-header__nav-close-button" @click="toggleMenu">
      <span class="navigation-header__nav-close-button-text">{{ $t('close') }}</span>
      <close-menu />
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

<style src="./_style.scss" lang="scss"></style>