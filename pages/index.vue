<template>
  <div class="projects__container">
    <div class="projects__grid-part projects__grid-part-1"> </div>
    <div class="projects__grid-part projects__grid-part-2"> </div>
    <div class="projects__grid-part projects__grid-part-3"> </div>
    <div class="projects__grid-part projects__grid-part-4"> </div>
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
  grid-template-columns: 20% 1fr 20%;
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: $column-gap;
  grid-row-gap: $column-gap;

  .projects__grid-part {
    background-color: $black;
    outline-style: solid;
    outline-color: $black;
    outline-width: $column-gap;
    border-radius: $base-radius;
  }
}

.projects__container .projects__grid-part-1,
.projects__container .projects__grid-part-2,
.projects__container .projects__grid-part-3,
.projects__container .projects__grid-part-4 {
  background-color: rgba(64,67,78,0.4);
}

.projects__grid-part-1 { grid-area: 2 / 1 / 3 / 4; }
.projects__grid-part-2 { grid-area: 1 / 1 / 2 / 2; }
.projects__grid-part-3 { grid-area: 1 / 2 / 2 / 3; }
.projects__grid-part-4 { grid-area: 1 / 3 / 2 / 4; }

</style>
