<template>
  <div class="projects__container">
    <div class="projects__grid-part projects__grid-part-1 projects__grid-project-box">
      <project-box />
    </div>
    <div class="projects__grid-part projects__grid-part-2"></div>
    <div class="projects__grid-part projects__grid-part-3"></div>
    <div class="projects__grid-part projects__grid-part-4"></div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>

<style lang="scss" scoped>

.projects__container {
  display: grid;
  grid-template-columns: 150px 1fr 20%;
  grid-template-rows: 1fr 90%;
  grid-column-gap: $column-gap;
  grid-row-gap: $column-gap;

  @include mq($from: 'wide') {
    grid-template-rows: 1fr 80%;
  }

  .projects__grid-part {
    background-color: $black;
    outline-style: solid;
    outline-color: $black;
    outline-width: $column-gap;
    border-radius: $base-radius;
  }
}

.projects__grid-project-box {
  padding-top: var(--space-xs);
  padding-bottom: var(--space-xs);

  @include mq($from: 'mobile', $until: 'wide') {
    padding-top: var(--space-mdx);
    padding-bottom: var(--space-mdx);
  }

  @include mq($from: 'wide') {
    padding-top: var(--space-xl);
    padding-bottom: var(--space-xl);
  }
}

.projects__container .projects__grid-part-1 { background-color: $white-90; }

.projects__container .projects__grid-part-2,
.projects__container .projects__grid-part-3,
.projects__container .projects__grid-part-4 {
  background-color: $background-grid;
}

.projects__grid-part-1 { grid-area: 2 / 1 / 3 / 4; } // Project Box
.projects__grid-part-2 { grid-area: 1 / 1 / 2 / 2; } // Background
.projects__grid-part-3 { grid-area: 1 / 2 / 2 / 3; } // Background
.projects__grid-part-4 { grid-area: 1 / 3 / 2 / 4; } // Background

</style>
