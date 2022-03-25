<template>
  <header class="navigation-header">
     <div class="navigation-header__logo">
        <logo-component />
      </div>
      <nav class="navigation-header__nav">
        <navigation-item></navigation-item>
      </nav>
      <div class="navigation-header__burger">
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

  .navigation-header__logo {
    position: relative;
    padding: $header-padding;
    background-color: var(--currentGlobalColor);
    border-radius: $base-radius;

    &:before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background-color: hsl(0, 0%, 90%);
      border-radius: $base-radius;
    }
  }

  .navigation-header__nav {
    position: relative;
    padding: $header-padding;
    background-color: var(--currentGlobalColor);
    border-radius: $base-radius;

    &:before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background-color: hsl(0, 0%, 75%);
      border-radius: $base-radius;
    }
  }

  .navigation-header__burger {
    position: relative;
    padding: 16px;
    background-color: var(--currentGlobalColor);
    border-radius: $base-radius;

    &:before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background-color: hsl(0, 0%, 90%);
      border-radius: $base-radius;
    }
  }

</style>