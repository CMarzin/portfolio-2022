<template>
  <header class="navigation-header">

    <nuxt-link :to='`/${$i18n.locale}`' class="navigation-header__logo navigation-header__background">
      <svg-logo />
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
        menuState: 'ui/getMenuState',
        mediaSize: 'ui/getCurrentMediaSize'
      }),
      lol () {
        console.log('this.$i18n', this.$i18n)
        return ''
      },
      availableLocales() {
        console.log('this.$i18n.locales', this.$i18n.locale)
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
    },
      currentMenuComponent () {
        if (process.browser) {
          const display = this.mediaSize('MobileLg') ? 'Mobile' : 'Desktop'
          return this.menuState === 'closed' ? `Navigation${display}Closed` : `Navigation${display}Open`
        } else {
          return this.menuState === 'closed' ? 'NavigationDesktopClosed' : 'NavigationDesktopOpen'
        }
      }
    }
  }
</script>

<style src="./_style.scss" lang="scss"></style>