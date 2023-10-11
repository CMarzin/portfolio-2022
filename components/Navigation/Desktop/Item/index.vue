<template>
  <ul class="navigation-header__nav-items">
    <li v-for="(item, index) in items" :key="`${item.name}-${index}`" class="navigation-header__nav-item">

      <button
        v-if="item.submenu" type="button" class="navigation-header__nav-submenu-button"
        @mouseover="showSubMenu = true">
          {{ $t(item.name) }}
      </button>

      <ul v-if="item.submenu" class="navigation-header__nav-submenu-content" :style="showSubMenu ? 'display:flex' : ''">
        <li v-for="(subItem, subIndex) in item.sublevel" :key="`${subItem.name}-${subIndex}`" class="navigation-header__nav-item navigation-header__nav-sub-item"  @mouseleave="showSubMenu = false">
          <nuxt-link v-if="subItem.langSwitcher" class="navigation-header__nav-item-link navigation-header__nav-sub-item-link" :to="switchLocalePath(subItem.url)">{{ $t(subItem.name) }}</nuxt-link>
        </li>
      </ul>

      <nuxt-link v-else class="navigation-header__nav-item-link" :to="localePath(item.url)">{{ $t(item.name) }}</nuxt-link>

    </li>
  </ul>
</template>

<script>
  export default {
    props: {
      items: {
        type: Array,
        default: () => []
      }
    },
    data() {
      return {
        showSubMenu: false
      }
    }
  }
</script>

<style src="./_style.scss" lang="scss" scoped></style>