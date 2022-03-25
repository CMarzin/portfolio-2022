<template>
  <header class="navigation-header">
     <div class="navigation-header__logo navigation-header__background">
        <logo-component />
      </div>
      <nav class="navigation-header__nav navigation-header__background">
        <navigation-item></navigation-item>
      </nav>
      <div class="navigation-header__burger navigation-header__background">
        <burger-menu />
      </div>
  </header>
</template>

<script>
  export default {
  }
</script>

<style scoped lang="scss">

  .navigation-header {
    display: grid;
    grid-template-columns: 150px 1fr 58px;
    grid-template-rows: 1fr;
    grid-column-gap: $column-gap;
    grid-row-gap: 0px;
  }

  .navigation-header__background {
    position: relative;
    background-color: var(--currentGlobalColor);
    border-radius: $base-radius;

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
    padding: $header-padding;

    &:before {
      background-color: hsl(0, 0%, 100%, 75%);
    }
  }

  .navigation-header__burger {
    padding: 16px;

    &:before {
      background-color: hsl(0, 0%, 90%);
    }
  }

</style>