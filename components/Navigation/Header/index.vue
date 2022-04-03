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
        if (process.browser) {
          const display = this.$helpers.isMobile() ? 'Mobile' : 'Desktop'
          return this.menuState === 'closed' ? `Navigation${display}Closed` : `Navigation${display}Open`
        } else {
          return this.menuState === 'closed' ? 'NavigationDesktopClosed' : 'NavigationDesktopOpen'
        }
      }
    }
  }
</script>

<style src="./_style.scss" lang="scss"></style>