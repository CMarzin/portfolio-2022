<template>
  <header :class="`navigation-header navigation-header--menu-${menuState}`">

      <nuxt-link to='/' class="navigation-header__logo navigation-header__background">
        <logo-component />
      </nuxt-link>

      <nav :class="`navigation-header__nav--menu-${menuState} navigation-header__background navigation-header__background--menu-${menuState}`">

        <navigation-item :custom-class="`navigation-header__nav-items navigation-header__nav-items--menu-${menuState}`" :items="navigationItems"/>

        <div :class="`navigation-header__nav-close-button navigation-header__nav-close-button--menu-${menuState}`" @click="toggleMenu">
          <span>{{ $t('close') }}</span>
          <burger-menu />
        </div>
      </nav>

      <div :class="`navigation-header__burger navigation-header__burger--menu-${menuState} navigation-header__background`" @click="toggleMenu">
        <burger-menu />
      </div>

  </header>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import navigationItems from '@/static/data/navigationItems'
  export default {
    data() {
      return {
        navigationItems
      }
    },
    computed: {
      ...mapGetters({
        menuState: 'ui/getMenuState'
      })
    },
    beforeMount () {
      console.log(this.menuState)
    },
    methods: {
      ...mapMutations({
        toggleMenuState: 'ui/toggle'
      }),
      toggleMenu() {
        if (this.menuState === 'closed') {
          this.toggleMenuState('open')
        } else {
          this.toggleMenuState('closed')
        }
      }
    },
  }
</script>

<style scoped lang="scss">

  .navigation-header {
    display: grid;
    grid-template-columns: 150px 1fr 58px;
    grid-template-rows: 1fr;
    grid-column-gap: $column-gap;
    grid-row-gap: 0px;

    &--menu-closed {
      grid-template-columns: 150px 1fr 58px;
    }

    &--menu-open {
      grid-template-columns: 150px 1fr;
    }
  }

  .navigation-header__background {
    position: relative;
    background-color: var(--currentGlobalColor);
    border: 2px solid var(--currentGlobalColor);
    border-radius: $base-radius;
    transition: all .2s ease;

    &--menu-open {
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: white;
      background-color: $black;
      border: 2px solid $white;
    }

    &:before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      border-radius: $base-radius;
    }
  }

  .navigation-header__logo {
    padding: $header-padding;

    &:before {
      background-color: hsl(0, 0%, 90%);
    }
  }

  .navigation-header__nav {
    display: flex;
    justify-content: space-between;
    padding: $header-padding;
    transition: opacity .2s ease;

    &--menu-open {
    }

    &--menu-closed {
      &:before {
        background-color: hsl(0, 0%, 100%, 75%);
      }
    }
  }

  .navigation-header__nav-items {
    display: flex;
    transition: opacity .2s ease;

    &--menu-open {
      opacity: 1;
    }

    &--menu-closed {
      opacity: 0;
    }
  }

  .navigation-header__nav-items li {
    list-style: none;
  }

  .navigation-header__nav-close-button {
    display: flex;
    position: absolute;
    top: 0;
    right: 0;
    transition: opacity .2s ease;
    cursor: pointer;
    text-transform: uppercase;
    padding: 20px 20px 20px 0px;

    &--menu-open {
      opacity: 1;
    }

    &--menu-closed {
      opacity: 0;
    }
  }

  .navigation-header__burger {
    cursor: pointer;
    padding: 16px;

    &--menu-open {
      display: none;
    }

    &:before {
      background-color: hsl(0, 0%, 90%);
    }
  }

</style>