<template>
  <header class="navigation-header">

    <nuxt-link to='/' class="navigation-header__logo navigation-header__background">
      <logo-component />
    </nuxt-link>

    <keep-alive>
      <component :is="currentMenuComponent"></component>
    </keep-alive>

  </header>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    computed: {
      ...mapGetters({
        menuState: 'ui/getMenuState'
      }),
      currentMenuComponent () {
        return this.menuState === 'closed' ? 'NavigationClosed' : 'NavigationOpen'
      }
    }
  }
</script>

<style src="./_style.scss" lang="scss"></style>